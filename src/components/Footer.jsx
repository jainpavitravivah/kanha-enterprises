import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>

            <h2 className="text-2xl font-bold text-blue-400">
              KANHA ENTERPRISES
            </h2>

           

            <p className="text-gray-400 mt-5 leading-7">
              Professional home appliance repair and service solutions
              for your everyday needs.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="https://wa.me/916262466035"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-7 h-7"
>
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.875 11.875 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.892-11.89a11.821 11.821 0 00-3.477-8.416" />
</svg>
              </a>

              <a
                href="tel:+916262466035"
                className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-7 h-7"
>
  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
</svg>
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/our-work"
                  className="text-gray-400 hover:text-white transition"
                >
                  Our Work
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* Services */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>AC Repair & Service</li>
              <li>Refrigerator Repair</li>
              <li>Washing Machine Repair</li>
              <li>Geyser Repair</li>
              <li>TV Repair</li>
              <li>RO & Water Purifier</li>

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <p className="flex items-start gap-3">
                <span>📍</span>
                <span>
                  Minal Business Park-3<br />
                  Minal Residency Gate-2 , Bhopal M.P.
                </span>
              </p>

              <p className="flex items-center gap-3">
                <span>📞</span>
                <a
                  href="tel:+916262466035"
                  className="hover:text-white transition"
                >
                  +91 6262466035
                </a>
              </p>

              <p className="flex items-center gap-3">
                <span>✉️</span>
                <a
                  href="mailto:kanhaenterprises6262@gmail.com"
                  className="hover:text-white transition"
                >
                  kanhaenterprises6262@gmail.com
                </a>
              </p>

              <p className="flex items-start gap-3">
                <span>🕐</span>
                <span>
                  Monday - Sunday<br />
                  8:00 AM - 8:00 PM
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} kanha enterprises.
              All Rights Reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Home Appliance Repair & Service
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;