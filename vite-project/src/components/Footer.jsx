// const Footer = () => {
//   return (
//     <div className="bg-white border-t mt-10 p-4 text-center text-gray-500">
//       <p>© 2026 Crowdfunding Platform</p>
//       <p>Email: support@crowdfund.com</p>
//     </div>
//   );
// };

// export default Footer;
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold mb-2">CrowdFund</h2>
          <p className="text-blue-200 text-sm">
            Empowering creators to bring ideas to life and connecting them with supporters worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-blue-200 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>

          <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
            <Mail size={16} />
            <span>support@crowdfund.com</span>
          </div>

          <div className="flex items-center gap-2 text-blue-200 text-sm">
            <Phone size={16} />
            <span>+91 9876543210</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-blue-200">
        © 2026 CrowdFund. All rights reserved.
      </div>
    </footer>
  );
}