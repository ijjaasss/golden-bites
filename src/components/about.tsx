
import { MapPin, Phone, Clock, Instagram } from "lucide-react"

export default function About() {
  return (
    <section id="contact" className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-12 text-center text-balance">Visit Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address */}
          <div className="bg-black p-6 rounded-lg border-2 border-yellow-400">
            <div className="flex items-start gap-4">
              <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Address</h3>
                <p className="text-gray-300">#2955/3, Gokulam Main Road, Gokulam 2nd Stage, Mysore, 570002</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-black p-6 rounded-lg border-2 border-yellow-400">
            <div className="flex items-start gap-4">
              <Phone className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Phone / WhatsApp</h3>
                <a href="tel:+918147657774" className="text-gray-300 hover:text-yellow-400 transition">
                  +91 81476 57774
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-black p-6 rounded-lg border-2 border-yellow-400">
            <div className="flex items-start gap-4">
              <Clock className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Opening Hours</h3>
                <p className="text-gray-300">11 AM to 11 PM</p>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-black p-6 rounded-lg border-2 border-yellow-400">
            <div className="flex items-start gap-4">
              <Instagram className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Follow Us</h3>
                <a
                  href="https://instagram.com/_golden__bites_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  @_golden__bites_
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
