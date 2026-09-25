import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          <div className="max-w-3xl">

            <p className="text-blue-100 font-semibold uppercase tracking-wider text-sm">
              kanha enterprises
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Expert Home Appliance Repair Services
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Reliable repair and maintenance services for your home
              appliances. Get professional service for AC, refrigerator,
              washing machine, geyser, TV, RO and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              

              <a
                href="tel:+916262466035"
                className="border border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Call Now
              </a>

              <a
                href="/contact"
                className="bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Book a Service
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SERVICES PREVIEW ================= */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-700 font-bold uppercase tracking-wider text-sm">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Home Appliance Repair Services
            </h2>

            <p className="mt-4 text-gray-600">
              Professional repair and maintenance services for your
              everyday home appliances.
            </p>

          </div>


          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <img
  src="/images/services/ac-repair.jpg"
  alt="AC Repair"
  className="w-full h-48 object-cover rounded-xl"
/>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                AC Repair
              </h3>
              <p className="mt-2 text-gray-600">
                AC inspection, repair and maintenance services.
              </p>
            </div>


            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <img
  src="/images/services/refrigerator-repair.png"
  alt="Refrigerator Repair"
  className="w-full h-48 object-cover rounded-xl"
/>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Refrigerator
              </h3>
              <p className="mt-2 text-gray-600">
                Refrigerator cooling and operational repair services.
              </p>
            </div>


            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <img
  src="/images/services/washing-repair.png"
  alt="Washing Machine Repair"
  className="w-full h-48 object-cover rounded-xl"
/>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Washing Machine
              </h3>
              <p className="mt-2 text-gray-600">
                Washing machine repair and maintenance services.
              </p>
            </div>


            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <img
  src="/images/services/Geyser-repair.png"
  alt="Geyser Repair"
  className="w-full h-48 object-cover rounded-xl"
/>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Geyser Repair
              </h3>
              <p className="mt-2 text-gray-600">
                Professional geyser inspection and repair services.
              </p>
            </div>

          </div>


          <div className="mt-10 text-center">

            <a
              href="/services"
              className="inline-block bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              View All Services
            </a>

          </div>

        </div>

      </section>


      {/* ================= ABOUT PREVIEW ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-blue-700 font-bold uppercase tracking-wider text-sm">
                About kanha enterprises
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Your Trusted Home Appliance Service Partner
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                kanha enterprises provides home appliance repair and
                maintenance services for customers looking for reliable
                and convenient solutions.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                From air conditioners and refrigerators to washing
                machines, geysers, TVs and water purifiers, our services
                cover a wide range of household appliances.
              </p>

              <a
                href="/about"
                className="inline-block mt-7 bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                About Us
              </a>

            </div>


            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-10">

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl">🔧</div>
                  <h3 className="mt-3 font-bold text-gray-900">
                    Professional
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Service
                  </p>
                </div>


                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl">🏠</div>
                  <h3 className="mt-3 font-bold text-gray-900">
                    Home
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Service
                  </p>
                </div>


                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl">⚡</div>
                  <h3 className="mt-3 font-bold text-gray-900">
                    Quick
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Response
                  </p>
                </div>


                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl">🛠️</div>
                  <h3 className="mt-3 font-bold text-gray-900">
                    Repair
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Solutions
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto">

      <p className="text-blue-700 font-bold uppercase tracking-wider text-sm">
        Why Choose Us
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
        Why Choose Kahana Enterprises?
      </h2>

      <p className="mt-4 text-gray-600">
        Reliable appliance repair services backed by experience,
        professional support and customer-focused service.
      </p>

    </div>


    {/* Features */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">


      {/* Experience */}
      <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

        <div className="text-4xl">
          🏆
        </div>

        <h3 className="mt-4 font-bold text-gray-900">
          10+ Years of Experience
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Experienced in appliance repair, servicing and maintenance.
        </p>

      </div>


      {/* Technical Support */}
      <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

        <div className="text-4xl">
          🛠️
        </div>

        <h3 className="mt-4 font-bold text-gray-900">
          Best Technical Support
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Helpful technical support for your appliance service needs.
        </p>

      </div>


      {/* Professional Service */}
      <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

        <div className="text-4xl">
          👨‍🔧
        </div>

        <h3 className="mt-4 font-bold text-gray-900">
          Professional Service
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Service handled by trained and professional technicians.
        </p>

      </div>


      {/* Easy Contact */}
      <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

        <div className="text-4xl">
          📞
        </div>

        <h3 className="mt-4 font-bold text-gray-900">
          Easy Contact
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Quickly connect with us through WhatsApp or phone call.
        </p>

      </div>


      {/* Multiple Appliances */}
      <div className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-lg transition">

        <div className="text-4xl">
          🔧
        </div>

        <h3 className="mt-4 font-bold text-gray-900">
          Multiple Appliance Services
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Repair and maintenance services for multiple household appliances.
        </p>

      </div>


    </div>

  </div>

</section>  





 {/* ================= TESTIMONIALS ================= */}
<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto">

      <p className="text-blue-700 font-semibold uppercase tracking-wider">
        Customer Reviews
      </p>

     

      <p className="mt-4 text-gray-600">
        We focus on reliable service, professional work and a better
        customer experience.
      </p>

    </div>


    {/* Testimonials */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">


      {/* Testimonial 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

        <div className="text-yellow-500 text-xl">
          ★★★★★
        </div>

        <p className="mt-5 text-gray-600 leading-7">
          "The AC service was quick and professional. The technician
          explained the issue clearly and completed the work properly."
        </p>

        <div className="mt-6 flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            RK
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Rahul Kumar
            </h4>

            <p className="text-sm text-gray-500">
              Customer
            </p>
          </div>

        </div>

      </div>


      {/* Testimonial 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

        <div className="text-yellow-500 text-xl">
          ★★★★★
        </div>

        <p className="mt-5 text-gray-600 leading-7">
          "I contacted Kanha Enterprises for refrigerator repair.
          The service was convenient and the technician was helpful."
        </p>

        <div className="mt-6 flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            PS
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Priya Sharma
            </h4>

            <p className="text-sm text-gray-500">
              Customer
            </p>
          </div>

        </div>

      </div>


      {/* Testimonial 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">

        <div className="text-yellow-500 text-xl">
          ★★★★★
        </div>

        <p className="mt-5 text-gray-600 leading-7">
          "Good response and professional service. My washing machine
          problem was checked and resolved efficiently."
        </p>

        <div className="mt-6 flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            AM
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Amit Mishra
            </h4>

            <p className="text-sm text-gray-500">
              Customer
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= Disclaimer ================= */}
<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto">

      <p className="text-blue-700 font-semibold uppercase tracking-wider">
        Disclaimer
      </p>

     

      <p className="mt-4 text-gray-600">
        
This website is owned and operated by an independent third-party service provider. Home Electronic Repair is an independent home appliance repair and maintenance service provider. We are not affiliated with, authorized by, or officially connected to any appliance brand or manufacturer. Any brand names, logos, or trademarks displayed on this website are used strictly for identification and informational purposes only. We provide doorstep repair and maintenance services through experienced technicians using quality spare parts. For manufacturer-authorized support or warranty-related services, customers are advised to contact the respective official service centers directly.
      </p>

    </div>
    </div>
    </section>




      {/* ================= FLOATING CONTACT BUTTONS ================= */}

      <a
        href="https://wa.me/916262466035"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-green-600 hover:scale-110 transition duration-300"
        aria-label="Chat on WhatsApp"
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
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-blue-800 hover:scale-110 transition duration-300"
        aria-label="Call kanha enterprises"
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
      <Footer />

    </>
  )
}

export default Home