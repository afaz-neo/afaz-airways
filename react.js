export default function AfazAirwaysWebsite() { const destinations = [ { city: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', price: '$420' }, { city: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop', price: '$690' }, { city: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop', price: '$530' }, { city: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop', price: '$490' }, { city: 'Venice', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1200&auto=format&fit=crop', price: '$560' }, { city: 'Sydney', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8d77b?q=80&w=1200&auto=format&fit=crop', price: '$870' } ];

const fleet = [ { name: 'Airbus A350', seats: '320 Seats', range: '15,000 km', speed: '945 km/h' }, { name: 'Boeing 787', seats: '290 Seats', range: '13,500 km', speed: '913 km/h' }, { name: 'Airbus A380', seats: '555 Seats', range: '15,200 km', speed: '1020 km/h' } ];

const stats = [ { number: '120+', label: 'Destinations' }, { number: '45M+', label: 'Passengers' }, { number: '98%', label: 'Satisfaction' }, { number: '25+', label: 'Years Experience' } ];

return ( <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden"> {/* Navigation */} <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10"> <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"> <div> <h1 className="text-2xl font-bold tracking-[0.25em] text-yellow-400">AFAZ AIRWAYS</h1> </div>

<nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
        <a href="#home" className="hover:text-yellow-400 transition">Home</a>
        <a href="#destinations" className="hover:text-yellow-400 transition">Destinations</a>
        <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
        <a href="#fleet" className="hover:text-yellow-400 transition">Fleet</a>
        <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
      </nav>

      <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
        Book Flight
      </button>
    </div>
  </header>

  {/* Hero Section */}
  <section
    id="home"
    className="relative h-screen flex items-center justify-center text-center px-6"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-sky-500/30 via-black to-black" />

    <img
      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop"
      alt="airplane"
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />

    <div className="relative z-10 max-w-4xl">
      <p className="uppercase tracking-[0.4em] text-yellow-400 mb-4">Above All</p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
        Fly Beyond
        <br />
        Expectations
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-10">
        Experience world-class luxury, comfort, and seamless travel with Afaz Airways.
      </p>

      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 grid md:grid-cols-4 gap-4 border border-white/10">
        <input
          className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none"
          placeholder="From"
        />
        <input
          className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none"
          placeholder="To"
        />
        <input
          type="date"
          className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none"
        />
        <button className="bg-yellow-400 text-black rounded-xl font-bold hover:scale-105 transition">
          Search Flights
        </button>
      </div>
    </div>
  </section>

  {/* Destinations */}
  <section id="destinations" className="max-w-7xl mx-auto px-6 py-24">
    <div className="mb-14 text-center">
      <p className="text-yellow-400 uppercase tracking-[0.3em] mb-3">Top Routes</p>
      <h2 className="text-4xl md:text-5xl font-bold">Popular Destinations</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {destinations.map((item) => (
        <div
          key={item.city}
          className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-yellow-400/40 transition"
        >
          <img
            src={item.image}
            alt={item.city}
            className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-3xl font-bold mb-2">{item.city}</h3>
            <p className="text-gray-300 mb-3">Luxury flight packages available</p>
            <div className="flex items-center justify-between gap-6">
              <span className="text-yellow-400 font-bold text-xl">From {item.price}</span>
              <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Experience */}
  <section id="experience" className="bg-white/5 py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <div>
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Luxury Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Designed For Premium Comfort
        </h2>

        <div className="space-y-5">
          {[
            'Lie-Flat Business Class Seats',
            'Five-Star Gourmet Dining',
            'Unlimited High-Speed WiFi',
            '24/7 Concierge Support'
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4 bg-black/30 border border-white/10 rounded-2xl p-5"
            >
              <div className="h-12 w-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                ✓
              </div>
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1200&auto=format&fit=crop"
          alt="Luxury cabin"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  </section>

  {/* Fleet */}
  <section id="fleet" className="max-w-7xl mx-auto px-6 py-24">
    <div className="text-center mb-14">
      <p className="text-yellow-400 uppercase tracking-[0.3em] mb-3">Our Aircraft</p>
      <h2 className="text-4xl md:text-5xl font-bold">Modern Fleet</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {fleet.map((plane) => (
        <div
          key={plane.name}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition"
        >
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">{plane.name}</h3>
            <p className="text-gray-400">Long-haul luxury aircraft</p>
          </div>

          <div className="space-y-4 text-lg">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Capacity</span>
              <span>{plane.seats}</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Range</span>
              <span>{plane.range}</span>
            </div>

            <div className="flex justify-between">
              <span>Speed</span>
              <span>{plane.speed}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Stats */}
  <section className="bg-yellow-400 text-black py-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-5xl font-black mb-2">{item.number}</h3>
          <p className="text-lg font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Testimonials */}
  <section className="max-w-4xl mx-auto px-6 py-24 text-center">
    <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">Testimonials</p>
    <h2 className="text-4xl font-bold mb-10">What Our Passengers Say</h2>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
      <div className="text-yellow-400 text-3xl mb-4">★★★★★</div>
      <p className="text-xl leading-relaxed text-gray-300 mb-6">
        “Afaz Airways delivered one of the smoothest and most luxurious flight experiences I have ever had. Exceptional service from takeoff to landing.”
      </p>

      <div>
        <h4 className="font-bold text-lg">Aisha Bello</h4>
        <p className="text-gray-500">Business Traveler</p>
      </div>
    </div>
  </section>

  {/* Newsletter */}
  <section className="px-6 pb-24">
    <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-400 to-yellow-200 text-black rounded-[2rem] p-10 md:p-16 text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-5">
        Get Exclusive Flight Deals
      </h2>

      <p className="text-lg mb-8">
        Subscribe to receive premium offers, destination updates, and luxury travel insights.
      </p>

      <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-2xl px-5 py-4 outline-none border border-black/10"
        />

        <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
          Subscribe
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer id="contact" className="border-t border-white/10 py-14 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
      <div>
        <h2 className="text-2xl font-bold tracking-[0.25em] text-yellow-400 mb-4">
          AFAZ AIRWAYS
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Delivering premium Nigerian and international aviation experiences with comfort, elegance, and reliability.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-4">Company</h3>
        <ul className="space-y-3 text-gray-400">
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>News</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4">Support</h3>
        <ul className="space-y-3 text-gray-400">
          <li>Help Center</li>
          <li>Flight Status</li>
          <li>Travel Policies</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4">Contact</h3>
        <ul className="space-y-3 text-gray-400">
          <li>support@afazairways.com</li>
          <li>+234 800 000 0000</li>
          <li>Abuja, Nigeria</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
      © 2026 Afaz Airways. All rights reserved.
    </div>
  </footer>
</div>

); }