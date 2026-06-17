export function Footer() {
  return (
    <footer className="bg-[var(--surface-hover)] border-t border-[var(--surface-border)] mt-auto">
      <div className="w-full px-4 md:px-10 py-12 flex flex-col md:flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
        <div className="max-w-md">
          <a className="text-3xl font-extrabold text-[var(--primary)] block mb-4 tracking-tight" href="#">
            Juvion
          </a>
          <p className="text-base text-[var(--foreground)] opacity-80 leading-relaxed font-serif">
            Juvion is an independent portal with honest reviews about online colleges and tech courses. We may receive a commission when you enroll through our links, at no additional cost to you.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-6">
            <a className="text-sm font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)] transition-colors" href="#">
              Terms of Use
            </a>
            <a className="text-sm font-semibold text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)] transition-colors" href="#">
              Business Contact
            </a>
          </div>
          <p className="text-sm text-[var(--foreground)] opacity-50">
            © {new Date().getFullYear()} Juvion Career Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
