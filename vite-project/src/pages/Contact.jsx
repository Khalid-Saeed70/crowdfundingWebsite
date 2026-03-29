// const Contact = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Contact Us</h1>
//       <p>Email: support@crowdfund.com</p>
//       <p>Phone: +91 9876543210</p>
//     </div>
//   );
// };

// export default Contact;
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-200 mt-2">
            We’d love to hear from you. Get in touch with us anytime!
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>support@crowdfund.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>Lucknow, India</span>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              Our team is available Monday to Saturday, 9 AM – 6 PM.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-gray-100 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl bg-gray-100 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-xl bg-gray-100 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-12 bg-white/90 text-black rounded-3xl p-8 shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
          <p className="text-gray-600">
            Visit our Help Center or reach out to our support team for quick assistance.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;