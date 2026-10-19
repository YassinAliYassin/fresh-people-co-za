import { cn } from '../lib/utils';

/**
 * Fresh People brand lockup — the rounded FP square plus the two-tone
 * wordmark, lifted straight from the approved company profile.
 *
 * tone="dark"  → for light backgrounds (dark wordmark, green "People")
 * tone="light" → for dark backgrounds (white wordmark, green "People")
 */
export default function Logo({ tone = 'dark', size = 'md', withTagline = false, className }) {
  const mark =
    size === 'lg'
      ? 'w-12 h-12 text-2xl'
      : size === 'sm'
        ? 'w-8 h-8 text-sm'
        : 'w-10 h-10 text-lg';

  const word =
    size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl';

  return (
    <span className={cn('inline-flex flex-col', className)}>
      <span className="inline-flex items-center gap-3">
        <span
          className={cn(
            'logo-mark inline-flex items-center justify-center bg-primary text-on-primary flex-none',
            mark,
          )}
          aria-hidden="true"
        >
          FP
        </span>
        <span
          className={cn(
            'logo-wordmark',
            word,
            tone === 'light' ? 'text-white' : 'text-secondary',
          )}
        >
          Fresh<span className="text-primary">People</span>
        </span>
      </span>
      {withTagline && (
        <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
          Premier Talent &amp; Events Staffing
        </span>
      )}
    </span>
  );
}
