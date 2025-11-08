export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 py-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-sm">Questions? Contact us.</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3 md:grid-cols-4">
          {[
            'FAQ', 'Help Center', 'Account', 'Media Center',
            'Investor Relations', 'Jobs', 'Redeem Gift Cards', 'Buy Gift Cards',
            'Ways to Watch', 'Terms of Use', 'Privacy', 'Cookie Preferences',
            'Corporate Information', 'Contact Us', 'Speed Test', 'Legal Notices',
          ].map((item) => (
            <a key={item} href="#" className="hover:text-gray-200">{item}</a>
          ))}
        </div>
        <p className="mt-6 text-xs">Netflix Clone UI for demonstration purposes.</p>
      </div>
    </footer>
  );
}
