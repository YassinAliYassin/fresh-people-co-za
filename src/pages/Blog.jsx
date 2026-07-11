import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { motion } from "motion/react";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import { assetUrl } from "../lib/utils";

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-20"
    >
      <SEO
        title="Blog | Fresh People | Event Staffing Tips & News"
        description="Event tips, staff updates, company news, and industry insights from the Fresh People team. Learn about event staffing, hospitality, and talent management."
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-secondary mb-4">
            Fresh <span className="text-primary">Blog</span>
          </h1>
          <p className="text-on-surface/60 max-w-2xl mx-auto">
            Event tips, staff updates, company news, and industry insights from
            the Fresh People team.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={assetUrl(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-on-surface/50">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={14} />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-display font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-on-surface/60 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-on-surface/60 mb-6">
            Want to work with us or join our team?
          </p>
          <Link
            to="/contact"
            className="btn-m3-filled inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
