export default function Footer() {
  return (
    <footer className="bg-deep-green text-paper mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-fraunces text-lg mb-2">Apanka Ayebadek David</p>
          <p className="text-sm text-paper/70 max-w-xs">
            Connecting agriculture, data, and technology to build practical
            digital solutions.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-cream mb-4">Navigate</h3>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><a href="/about" className="hover:text-cream">About</a></li>
            <li><a href="/projects" className="hover:text-cream">Projects</a></li>
            <li><a href="/services" className="hover:text-cream">Services</a></li>
            <li><a href="/experience" className="hover:text-cream">Experience</a></li>
            <li><a href="/contact" className="hover:text-cream">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-cream mb-4">Get in Touch</h3>
          <p className="text-sm text-paper/80">apankadavid123@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-paper/60 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Apanka Ayebadek David. Built with Next.js.</p>
          <div className="flex gap-4 justify-center">
            <a href="/privacy" className="hover:text-cream">Privacy Policy</a>
            <a href="/terms" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}