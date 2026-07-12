// import { Link } from "react-router-dom"
import Navbar from "../../globals/components/Navbar";
import girl1 from "../../assets/girl1.avif"
import girl2 from "../../assets/girl2.jfif"
import girl3 from "../../assets/girl3.avif"
import girl4 from "../../assets/girl4.jfif"
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <main className="text-gray-900">
        <section className="pt-20 md:pt-40">
          <div className="container mx-auto px-8 lg:flex items-center justify-between gap-16">
  {/* Left Content */}
  <div className="lg:w-1/2 text-center lg:text-left">

    <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm tracking-wide">
      ✨ New Arrival Collection
    </span>

    <h1 className="mt-6 text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight">
      Discover Your
      <span className="block text-pink-600">
        Perfect Style
      </span>
    </h1>

    <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-9 max-w-xl">
      Welcome to <span className="font-semibold text-gray-900">Glow Girl</span>,
      your destination for elegant and fashionable accessories. Explore our
      premium collection of earrings, necklaces, bracelets, handbags, rings,
      and more—carefully selected to help you express your unique personality
      and complete every outfit with confidence and style.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
      <Link to="/products" className="px-8 py-4 rounded-xl bg-pink-600 text-white font-semibold shadow-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105">
        Shop Now
      </Link>

      <Link to="/products" className="px-8 py-4 rounded-xl border-2 border-pink-600 text-pink-600 font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300">
        Explore Collection
      </Link> 
    </div>

    <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-10">

      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          10K+
        </h2>
        <p className="text-gray-500 mt-1">
          Happy Customers
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          500+
        </h2>
        <p className="text-gray-500 mt-1">
          Accessories
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          4.9★
        </h2>
        <p className="text-gray-500 mt-1">
          Customer Rating
        </p>
      </div>

    </div>

  </div>

  {/* Right Image */}
  <div className="lg:w-1/2 flex justify-center mt-14 lg:mt-0 relative">

    <div className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-40"></div>

    <img
      src={girl1}
      alt="Glow Girl Accessories"
      className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
    />

  </div>
</div>
        </section>
        <section id="features" className="py-24 bg-pink-50">
  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm">
        Why Choose Us
      </span>

      <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
        Designed for Every Girl's Style
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        We bring together premium quality, modern fashion, and affordable prices
        so you can shop with confidence and express your unique personality
        through elegant accessories.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl">
          💎
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Premium Quality
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Every accessory is carefully selected to ensure exceptional quality,
          durability, and elegance for everyday wear.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl">
          🚚
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Fast Delivery
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Enjoy quick and secure delivery so your favorite accessories arrive
          safely and on time.
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl">
          ❤️
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Customer Satisfaction
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          Our priority is providing an enjoyable shopping experience with
          reliable service and products you'll love.
        </p>

      </div>

    </div>

  </div>
</section>
        <section
  id="services"
  className="py-24 bg-gradient-to-b from-white to-pink-50"
>
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="relative flex justify-center">

        {/* Background Decoration */}
        <div className="absolute w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

        <img
          src={girl2}
          alt="Glow Girl Collection"
          className="relative z-10 w-full max-w-lg rounded-3xl drop-shadow-2xl"
        />

      </div>

      {/* Content */}
      <div>

        <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm">
          Premium Collection
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Crafted to Make
          <span className="block text-pink-600">
            Every Look Shine
          </span>
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-8">
          At <span className="font-semibold text-gray-900">Glow Girl</span>,
          we believe every accessory should reflect your personality and
          confidence. From elegant earrings and stylish necklaces to trendy
          handbags and bracelets, every piece is carefully selected to help you
          express your unique style effortlessly.
        </p>

        <div className="mt-10 space-y-6">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl">
              ✨
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">
                Trendy Designs
              </h3>

              <p className="text-gray-600 mt-2">
                Stay ahead of fashion with accessories inspired by the latest
                trends.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl">
              💖
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">
                Premium Quality
              </h3>

              <p className="text-gray-600 mt-2">
                Every product is crafted with care using quality materials for
                long-lasting beauty.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl">
              🚚
            </div>

            <div>
              <h3 className="font-semibold text-xl text-gray-900">
                Fast Delivery
              </h3>

              <p className="text-gray-600 mt-2">
                Enjoy secure and reliable shipping with exceptional customer
                service every time.
              </p>
            </div>

          </div>

        </div>


      </div>

    </div>
  </div>
</section>
      <section className="py-24 bg-white">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="relative order-last lg:order-first flex justify-center">

        <div className="absolute w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

        <img
          src={girl3}
          alt="Glow Girl Accessories"
          className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl"
        />

      </div>

      {/* Content */}
      <div>

        <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm">
          Fashion & Elegance
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Accessories That
          <span className="block text-pink-600">
            Complete Every Look
          </span>
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-8">
          The perfect accessory has the power to transform any outfit. Our
          carefully curated collection combines modern trends with timeless
          elegance, helping you express your personality and confidence through
          beautiful jewelry, handbags, and fashion accessories.
        </p>

        {/* Features */}
        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
              ✨
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Modern Fashion Trends
              </h4>

              <p className="text-gray-600">
                Stay stylish with our latest collection of trendy accessories.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
              💎
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Premium Craftsmanship
              </h4>

              <p className="text-gray-600">
                Designed with attention to detail and exceptional quality.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
              🌸
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Unique Collection
              </h4>

              <p className="text-gray-600">
                Find accessories that perfectly match your personality and style.
              </p>
            </div>
          </div>

        </div>
{/* 
        <button className="mt-10 px-8 py-4 bg-pink-600 text-white rounded-xl font-semibold shadow-lg hover:bg-pink-700 transition">
          Shop New Arrivals
        </button> */}

      </div>

    </div>
  </div>
</section>
       <section className="py-24 bg-gradient-to-br from-rose-50 via-white to-pink-50">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Content */}
      <div>

        <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          ✨ Why Shop With Us
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Every Detail
          <span className="block text-pink-600">
            Crafted With Love
          </span>
        </h2>

        <p className="mt-8 text-lg leading-8 text-gray-600">
          At Glow Girl, every accessory is thoughtfully selected to help you
          express your unique personality with confidence. Whether you're
          dressing for everyday elegance or a special celebration, our
          collection combines premium quality, timeless beauty, and modern
          fashion to complete every look effortlessly.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6">

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-pink-600">
              500+
            </h3>

            <p className="mt-2 text-gray-600">
              Stylish Accessories
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-pink-600">
              10K+
            </h3>

            <p className="mt-2 text-gray-600">
              Happy Customers
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-pink-600">
              4.9★
            </h3>

            <p className="mt-2 text-gray-600">
              Customer Rating
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-pink-600">
              24/7
            </h3>

            <p className="mt-2 text-gray-600">
              Customer Support
            </p>
          </div>

        </div>

        {/* <button className="mt-10 rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-pink-700">
          Discover More
        </button> */}

      </div>

      {/* Image */}
      <div className="relative flex justify-center">

        <div className="absolute h-96 w-96 rounded-full bg-pink-200 blur-3xl opacity-30"></div>

        <img
          src={girl4}
          alt="Glow Girl Accessories"
          className="relative z-10 w-full max-w-lg rounded-3xl object-cover shadow-2xl"
        />

      </div>

    </div>
  </div>
</section>
       <section
  id="stats"
  className="py-24 bg-pink-300 text-white"
>
  <div className="container mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block px-5 py-2 rounded-full bg-white/20 text-sm font-semibold tracking-wide">
        Trusted By Thousands
      </span>

      <h2 className="mt-6 text-4xl lg:text-5xl font-bold">
        Our Journey in Numbers
      </h2>

      <p className="mt-6 text-lg text-pink-100 leading-8">
        Every order reflects the trust our customers place in us. We are proud
        to deliver premium-quality accessories with exceptional service,
        beautiful designs, and unforgettable shopping experiences.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
        <div className="text-5xl mb-4">👩</div>

        <h3 className="text-5xl font-bold">
          10K+
        </h3>

        <p className="mt-3 text-pink-100 font-medium">
          Happy Customers
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
        <div className="text-5xl mb-4">💎</div>

        <h3 className="text-5xl font-bold">
          500+
        </h3>

        <p className="mt-3 text-pink-100 font-medium">
          Premium Accessories
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
        <div className="text-5xl mb-4">⭐</div>

        <h3 className="text-5xl font-bold">
          4.9
        </h3>

        <p className="mt-3 text-pink-100 font-medium">
          Average Rating
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
        <div className="text-5xl mb-4">🚚</div>

        <h3 className="text-5xl font-bold">
          24/7
        </h3>

        <p className="mt-3 text-pink-100 font-medium">
          Customer Support
        </p>
      </div>

    </div>

  </div>
</section>
        <section id="testimonials" className="py-24 bg-pink-50">
  <div className="container mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center">
      <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold">
        Customer Reviews
      </span>

      <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
        Loved by Thousands of Customers
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        We believe every accessory should make you feel confident and beautiful.
        Here's what our happy customers have to say about their shopping
        experience with Glow Girl.
      </p>
    </div>

    {/* Testimonial Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">

        <div className="text-yellow-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-6 text-gray-600 leading-8">
          I absolutely love the quality of the earrings and necklaces. They
          look even more beautiful in person and perfectly match every outfit.
          The delivery was quick and the packaging was amazing.
        </p>

        <div className="flex items-center mt-8">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Sophia"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">
              Sophia Williams
            </h4>

            <p className="text-sm text-gray-500">
              Fashion Enthusiast
            </p>
          </div>

        </div>

      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">

        <div className="text-yellow-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-6 text-gray-600 leading-8">
          Glow Girl has become my favorite online store. Every accessory feels
          premium, stylish, and affordable. I've received so many compliments
          whenever I wear them.
        </p>

        <div className="flex items-center mt-8">

          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Emily"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">
              Emily Johnson
            </h4>

            <p className="text-sm text-gray-500">
              Regular Customer
            </p>
          </div>

        </div>

      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">

        <div className="text-yellow-400 text-xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-6 text-gray-600 leading-8">
          Beautiful products, excellent customer service, and fast delivery.
          Everything arrived exactly as shown on the website. I highly recommend
          Glow Girl to anyone looking for stylish accessories.
        </p>

        <div className="flex items-center mt-8">

          <img
            src="https://i.pravatar.cc/150?img=56"
            alt="Olivia"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">
              Olivia Brown
            </h4>

            <p className="text-sm text-gray-500">
              Verified Buyer
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Bottom Stats */}
    <div className="mt-20 bg-white rounded-3xl shadow-xl p-10 border border-pink-100">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            10K+
          </h3>
          <p className="mt-2 text-gray-600">
            Happy Customers
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            4.9★
          </h3>
          <p className="mt-2 text-gray-600">
            Average Rating
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            500+
          </h3>
          <p className="mt-2 text-gray-600">
            Fashion Accessories
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            98%
          </h3>
          <p className="mt-2 text-gray-600">
            Repeat Customers
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
<section className="my-24">

  <div className="relative w-full overflow-hidden bg-pink-400 py-20">

    {/* Background Decoration */}
    <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-pink-300 opacity-20 blur-3xl"></div>

    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white opacity-10 blur-3xl"></div>

    {/* Content */}
    <div className="container mx-auto px-6 lg:px-12">

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
          ✨ Exclusive Fashion Collection
        </span>

        <h2 className="mt-6 text-4xl lg:text-6xl font-bold leading-tight text-white">
          Discover Accessories
          <span className="block">
            That Define Your Style
          </span>
        </h2>

        <p className="mt-8 text-lg lg:text-xl leading-8 text-pink-100">
          Explore our carefully curated collection of elegant earrings,
          necklaces, bracelets, handbags, rings, and more. Whether you're
          shopping for everyday fashion or a special occasion, Glow Girl
          offers premium accessories that help you express your unique
          personality with confidence and style.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          {/* <button className="rounded-xl bg-white px-10 py-4 text-lg font-semibold text-pink-600 shadow-xl hover:bg-gray-100 transition">
            Shop Now
          </button>

          <button className="rounded-xl border-2 border-white px-10 py-4 text-lg font-semibold text-white hover:bg-white hover:text-pink-600 transition">
            Explore Collection
          </button> */}

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-3xl font-bold text-white">
              500+
            </h3>
            <p className="mt-2 text-pink-100">
              Accessories
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              10K+
            </h3>
            <p className="mt-2 text-pink-100">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              4.9★
            </h3>
            <p className="mt-2 text-pink-100">
              Customer Rating
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              24/7
            </h3>
            <p className="mt-2 text-pink-100">
              Support
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      </main>
  
    </div>
  );
}

export default Home;
