import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import { getPostById } from "../data/blogPosts";
import { assetUrl } from "../lib/utils";

function renderInlineMarkdown(text) {
  // Light support for **bold** in paragraphs and list items
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-secondary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostById(id);

  // Inject Article structured data
  useEffect(() => {
    if (!post) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: "Fresh People",
      },
      publisher: {
        "@type": "Organization",
        name: "Fresh People",
        logo: {
          "@type": "ImageObject",
          url: "https://fresh-people.co.za/images/logo.svg",
        },
      },
      image: `https://fresh-people.co.za${post.image}`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://fresh-people.co.za/blog/${post.id}`,
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] flex items-center justify-center">
        <SEO title="Post Not Found | Fresh People Blog" />
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-display font-bold text-[#0a0a0a]">
            Post Not Found
          </h1>
          <Link
            to="/blog"
            className="text-[#A4C71D] hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Split content into sections
  const contentSections = post.content.split("\n\n");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-32 pb-20 bg-[#FBFBF9]"
    >
      <SEO
        title={`${post.title} | Fresh People Blog`}
        description={post.excerpt}
      />
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#A4C71D] hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4 text-sm text-on-surface/50">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag size={14} />
              {post.category}
            </span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0a0a0a] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-on-surface/60 mb-8 max-w-3xl">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="aspect-[2/1] overflow-hidden bg-gray-100 rounded-none mb-12"
        >
          <img
            src={assetUrl(post.image)}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Gallery */}
        {post.gallery && post.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12"
          >
            {post.gallery.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-none"
              >
                <img
                  src={assetUrl(img.src)}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {contentSections.map((section, index) => {
            const trimmed = section.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-display font-bold text-[#0a0a0a] mt-12 mb-6"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }

            if (trimmed.startsWith("- ")) {
              const items = trimmed
                .split("\n")
                .filter((line) => line.trim().startsWith("- "));
              return (
                <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-on-surface/80">
                      {renderInlineMarkdown(item.replace(/^-\s+/, ""))}
                    </li>
                  ))}
                </ul>
              );
            }

            if (/^\d+\.\s/.test(trimmed)) {
              const items = trimmed
                .split("\n")
                .filter((line) => /^\d+\.\s/.test(line.trim()));
              return (
                <ol key={index} className="list-decimal pl-6 mb-6 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-on-surface/80">
                      {renderInlineMarkdown(item.replace(/^\d+\.\s+/, ""))}
                    </li>
                  ))}
                </ol>
              );
            }

            return (
              <p
                key={index}
                className="text-on-surface/80 leading-relaxed mb-6"
              >
                {renderInlineMarkdown(trimmed)}
              </p>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-200 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-[#0a0a0a] mb-4">
            Ready to Work With Us?
          </h3>
          <p className="text-on-surface/60 mb-8">
            Join our team or book staff for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-m3-filled">
              Contact Us
            </Link>
            <Link to="/blog" className="btn-m3-tonal">
              Back to Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
