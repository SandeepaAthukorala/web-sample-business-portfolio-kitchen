import { Facebook, Youtube, Linkedin, MessageSquare, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Let's Chat About Your Vision!</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form, and our team will connect with you within{' '}
                <span className="text-amber-500">24 HOURS</span>{' '}
              </p>
              
              <div className="flex items-center gap-2 text-gray-300 mb-8">
                <MessageSquare className="w-5 h-5" />
                <span>contact@kitchen.com</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300 mb-8">
                <Zap className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-gray-300" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-gray-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Hey, what's your name?"
                    className="w-full bg-gray-700 border-0 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email?"
                    className="w-full bg-gray-700 border-0 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us what's on your mind, we're all ears!"
                    className="w-full bg-gray-700 border-0 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Book My Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
