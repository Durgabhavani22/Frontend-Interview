export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white font-bold text-lg mb-2">CA MONK</h2>
          <p className="text-gray-400 text-sm">
            Empowering the next generation of financial leaders with tools, community, and knowledge.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Blog</li>
            <li>Webinars</li>
            <li>Case Studies</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Platform</h4>
          <ul className="space-y-1 text-gray-400">
            <li>Job Board</li>
            <li>Practice Tests</li>
            <li>Mentorship</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <ul className="space-y-1 text-gray-400">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; 2024 CA Monk. All rights reserved. &nbsp;
        <span className="underline cursor-pointer">Privacy Policy</span> |{' '}
        <span className="underline cursor-pointer">Terms of Service</span>
      </div>
    </footer>
  );
}
