import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      {/* ================= PAGE HERO ================= */}

      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="max-w-3xl">

            <p className="text-blue-100 font-semibold uppercase tracking-wider text-sm">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
              Contact kanha enterprises
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Need appliance repair or service? Get in touch with our team
              and tell us about your requirement.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT + MAP SECTION ================= */}

<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-10">

      {/* ================= GET IN TOUCH ================= */}

      <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-sm">

        <p className="text-blue-700 font-bold uppercase tracking-wider text-sm">
          Get In Touch
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          We're Here To Help
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Contact kanha enterprises for appliance repair,
          maintenance and service enquiries.
        </p>


        {/* Phone */}

        <div className="mt-8 flex items-start gap-4">

          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-700"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Phone
            </p>

            <a
              href="tel:+916262466035"
              className="text-gray-600 hover:text-blue-700"
            >
              +91 6262466035
            </a>
          </div>

        </div>


        {/* WhatsApp */}

        <div className="mt-6 flex items-start gap-4">

          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-green-600"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.875 11.875 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.892-11.89a11.821 11.821 0 00-3.477-8.416" />
            </svg>

          </div>

          <div>

            <p className="font-semibold text-gray-900">
              WhatsApp
            </p>

            <a
              href="https://wa.me/916262466035"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              Chat with us on WhatsApp
            </a>

          </div>

        </div>


        {/* Email */}

        <div className="mt-6 flex items-start gap-4">

          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">

            <span className="text-2xl">
              📧
            </span>

          </div>

          <div>

            <p className="font-semibold text-gray-900">
              Email
            </p>

            <a
              href="mailto:kanhaenterprises6262@gmail.com"
              className="text-gray-600 hover:text-blue-700"
            >
              kanhaenterprises6262@gmail.com
            </a>

          </div>

        </div>


        {/* Address */}

        <div className="mt-6 flex items-start gap-4">

          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">

            <span className="text-2xl">
              📍
            </span>

          </div>

          <div>

            <p className="font-semibold text-gray-900">
              Address
            </p>

            <p className="text-gray-600">
              Minal Business Park-3
              <br />
              Minal Residency Gate-2, Bhopal M.P.
            </p>

          </div>

        </div>

      </div>


      {/* ================= FIND US / MAP ================= */}

      <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-sm">

        <p className="text-blue-700 font-bold uppercase tracking-wider text-sm">
          Find Us
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Our Location
        </h2>

        <p className="mt-4 text-gray-600">
          Visit us at our business location in Bhopal.
        </p>


        {/* Map */}

        <div className="mt-8 h-80 bg-gray-100 rounded-2xl overflow-hidden">

          <iframe
            title="Kanha Enterprises Location"
            src="https://www.google.com/maps?q=Minal+Business+Park-3,+Minal+Residency,+Bhopal,+Madhya+Pradesh&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= CTA ================= */}

      <section className="py-20 bg-blue-700 text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Immediate Assistance?
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            Call or WhatsApp us directly for your appliance service requirement.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+916262466035"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
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

            <a
              href="https://wa.me/916262466035"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
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
  );
}

export default Contact;