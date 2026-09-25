import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const services = [
    {
  image: "/images/services/ac-repair.jpg",

  title: "AC Repair & Service",

  description:
    "Air conditioner inspection, repair, servicing and maintenance for common AC problems.",
},
    {
      image: "/images/services/refrigerator-repair.png",
      title: "Refrigerator Repair",
      description:
        "Repair and maintenance services for refrigerator cooling and operational problems.",
    },
    {
      image: "/images/services/washing-repair.png",
      title: "Washing Machine Repair",
      description:
        "Repair and maintenance services for different types of washing machines.",
    },
    {
      image: "/images/services/Geyser-repair.png",
      title: "Geyser Repair",
      description:
        "Inspection and repair services for common geyser and water heating problems.",
    },
    {
      image: "/images/services/tv-repair.png",
      title: "TV Repair",
      description:
        "Diagnosis and repair for common television display, sound and power issues.",
    },
    {
      image: "/images/services/RO-repair.png",
      title: "RO & Water Purifier",
      description:
        "RO repair, filter replacement and regular water purifier maintenance services.",
    },
    {
      image: "/images/services/microwave-repair.png",
      title: "Microwave Repair",
      description:
        "Repair and troubleshooting services for common microwave oven problems.",
    },
    {
      image: "/images/services/Chimney-repair.png",
      title: "chimney Service",
      description:
        "Repair and troubleshooting services for common Chimney and other problems",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ================= PAGE HERO ================= */}

      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="max-w-3xl">

            <p className="text-blue-100 font-semibold uppercase tracking-wider text-sm">
              Our Services
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
              Home Appliance Repair Services
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Get professional repair and maintenance assistance for a
              wide range of household appliances.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-700 font-bold uppercase tracking-wider text-sm">
              What We Service
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Our Appliance Services
            </h2>

            <p className="mt-4 text-gray-600">
              Choose your appliance and contact Kanha Enterprises for
              repair and service assistance.
            </p>

          </div>


          {/* Service Cards */}

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <img
  src={service.image}
  alt={service.title}
  className="w-full h-56 object-cover rounded-xl"
/>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="flex gap-3">

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/916262466035?text=Hello%20Kahana%20Enterprises,%20I%20want%20to%20book%20AC%20Repair%20%26%20Service."
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
  >
    WhatsApp
  </a>

  {/* Call Button */}
  <a
    href="tel:+916262466035"
    className="flex-1 bg-blue-700 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
  >
    Call Now
  </a>

</div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SERVICE PROCESS ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-700 font-bold uppercase tracking-wider text-sm">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Simple Service Process
            </h2>

          </div>


          <div className="mt-12 grid md:grid-cols-4 gap-6">

            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Contact Us
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Call or WhatsApp us with your appliance problem.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Share Details
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Tell us about your appliance and the issue.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Service Visit
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Service arrangements can be made according to your requirement.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                4
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Appliance Service
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Get assistance for your appliance repair or maintenance needs.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-20 bg-blue-700 text-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Appliance Repair?
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            Contact Kanha Enterprises and request a service today.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Book a Service
            </a>

            <a
              href="tel:+916262466035"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Call Now
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
        aria-label="Call Kanha Enterprises"
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

export default Services;