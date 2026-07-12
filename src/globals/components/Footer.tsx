import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-gray-900 text-gray-300 mt-24">

  <div className="container mx-auto px-6 lg:px-12 py-20">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div>

        <h2 className="text-3xl font-bold text-white">
          Glow Girl
        </h2>

        <p className="mt-6 leading-8 text-gray-400">
          Glow Girl is your trusted destination for elegant and trendy girls'
          accessories. We offer premium-quality earrings, necklaces,
          bracelets, handbags, rings, and fashion essentials designed to
          elevate your style with confidence.
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-500"
          >
            📘
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-500"
          >
            📸
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-500"
          >
            🐦
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-500"
          >
            ▶️
          </a>

        </div>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="text-xl font-semibold text-white">
          Quick Links
        </h3>

        <ul className="mt-6 space-y-4">

          <li>
            <a href="/" className="hover:text-pink-400">
              Home
            </a>
          </li>

          <li>
            <a href="/products" className="hover:text-pink-400">
              Products
            </a>
          </li>

          <li>
            <a href="/my-orders" className="hover:text-pink-400">
              My Orders
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400">
              New Arrivals
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400">
              Best Sellers
            </a>
          </li>

        </ul>

      </div>

      {/* Customer Support */}
      <div>

        <h3 className="text-xl font-semibold text-white">
          Customer Support
        </h3>

        <ul className="mt-6 space-y-4">

          <li>
            <a href="#" className="hover:text-pink-400">
              Contact Us
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400">
              FAQ
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400">
              Shipping Policy
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400">
              Return Policy
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-400">
              Privacy Policy
            </a>
          </li>

        </ul>

      </div>

      {/* Contact */}
      <div>

        <h3 className="text-xl font-semibold text-white">
          Contact Us
        </h3>

        <div className="mt-6 space-y-5">

          <div>
            <p className="text-pink-400 font-semibold">
              📍 Address
            </p>

            <p className="mt-2 text-gray-400">
              Kathmandu, Nepal
            </p>
          </div>

          <div>
            <p className="text-pink-400 font-semibold">
              📞 Phone
            </p>

            <p className="mt-2 text-gray-400">
              +977 98XXXXXXXX
            </p>
          </div>

          <div>
            <p className="text-pink-400 font-semibold">
              📧 Email
            </p>

            <p className="mt-2 text-gray-400">
              support@glowgirl.com
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Bottom Footer */}

    <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

      <p className="text-gray-400 text-center md:text-left">
        © 2026 Glow Girl. All Rights Reserved.
      </p>

      <div className="flex gap-8 mt-6 md:mt-0">

        <a href="#" className="hover:text-pink-400">
          Terms & Conditions
        </a>

        <a href="#" className="hover:text-pink-400">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-pink-400">
          Cookies
        </a>

      </div>

    </div>

  </div>

</footer>
  )
}

export default Footer