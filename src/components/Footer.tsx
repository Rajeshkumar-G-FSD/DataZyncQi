export default function Footer() {
  return (
    <footer className="bg-[#fcf8f8] w-full py-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="font-sans text-2xl font-bold tracking-tight text-on-surface">
            DATAZYNC
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-on-surface-variant font-medium">
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Patient Rights</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Careers</a>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-black/5 text-on-surface-variant/60 text-sm">
          © 2026 DataZYnc. Precision in Care.
        </div>
      </div>
    </footer>
  );
}
