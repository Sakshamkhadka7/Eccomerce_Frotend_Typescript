import {
  Heart,
  ShieldCheck,
  Truck,
  Users,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const team = [
  {
    name: "Prashamsha Baral",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Ranjita Bhattarai",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Rubina Maharjan",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=49",
  },
];

const About = () => {
 
    const navigate=useNavigate();

  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-5">
          <h1 className="text-5xl font-bold mb-5">
            About Our Store
          </h1>

          <p className="max-w-2xl mx-auto text-lg">
            Discover trendy accessories crafted to elevate your
            everyday style with elegance, affordability, and
            quality.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
          className="rounded-xl shadow-xl"
        />

        <div>

          <h2 className="text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-8">
            Our store was created with a simple goal—to make
            fashionable accessories accessible to everyone.
            From elegant earrings and beautiful jhumkas to
            stylish handbags and bracelets, every product is
            carefully selected to help women express their
            unique style with confidence.
          </p>

        </div>

      </section>

      {/* Features */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-pink-50 rounded-xl p-8 text-center">
              <Truck className="mx-auto text-pink-600" size={40} />
              <h3 className="font-bold mt-5">
                Fast Delivery
              </h3>
            </div>

            <div className="bg-pink-50 rounded-xl p-8 text-center">
              <ShieldCheck className="mx-auto text-pink-600" size={40} />
              <h3 className="font-bold mt-5">
                Secure Shopping
              </h3>
            </div>

            <div className="bg-pink-50 rounded-xl p-8 text-center">
              <Heart className="mx-auto text-pink-600" size={40} />
              <h3 className="font-bold mt-5">
                Premium Quality
              </h3>
            </div>

            <div className="bg-pink-50 rounded-xl p-8 text-center">
              <Users className="mx-auto text-pink-600" size={40} />
              <h3 className="font-bold mt-5">
                Happy Customers
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* Mission */}

 <section className="w-full bg-pink-300 py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}
    <div className="text-center text-white max-w-4xl mx-auto">
      <span className="uppercase tracking-[6px] text-pink-100 font-semibold">
        Our Purpose
      </span>

      <h2 className="text-5xl font-bold mt-4">
        Our Mission
      </h2>

      <div className="w-24 h-1 bg-white rounded-full mx-auto mt-5 mb-8"></div>

      <p className="text-lg leading-9 text-pink-50">
        Our mission is to empower every woman to embrace her individuality
        through elegant, fashionable, and affordable accessories. We believe
        that every accessory tells a story and every woman deserves to feel
        confident, beautiful, and celebrated in her everyday life.
      </p>
    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
        <Heart
          className="text-pink-600 mb-6"
          size={45}
        />

        <h3 className="text-xl font-bold mb-3">
          Quality First
        </h3>

        <p className="text-gray-600 leading-7">
          Every product is carefully selected to meet the highest quality
          standards while staying fashionable and affordable.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
        <Sparkles
          className="text-pink-600 mb-6"
          size={45}
        />

        <h3 className="text-xl font-bold mb-3">
          Trend Driven
        </h3>

        <p className="text-gray-600 leading-7">
          We continuously update our collections with modern styles inspired
          by the latest fashion trends around the world.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
        <ShieldCheck
          className="text-pink-600 mb-6"
          size={45}
        />

        <h3 className="text-xl font-bold mb-3">
          Customer Trust
        </h3>

        <p className="text-gray-600 leading-7">
          Secure shopping, transparent service, and customer satisfaction are
          the foundation of everything we do.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
        <Truck
          className="text-pink-600 mb-6"
          size={45}
        />

        <h3 className="text-xl font-bold mb-3">
          Fast Delivery
        </h3>

        <p className="text-gray-600 leading-7">
          We ensure your favorite accessories reach your doorstep safely and
          on time with reliable delivery services.
        </p>
      </div>

    </div>

    {/* Bottom Paragraph */}

    <div className="max-w-5xl mx-auto mt-20 text-center">
      <p className="text-lg leading-9 text-pink-50">
        As we continue to grow, our vision remains unchanged—to create a
        shopping experience built on trust, quality, and innovation. We are
        passionate about helping women discover accessories that complement
        their personality while making fashion accessible to everyone.
        Through exceptional customer service, carefully curated collections,
        and a commitment to excellence, we strive to become a destination
        where every purchase brings confidence, elegance, and lasting
        satisfaction.
      </p>
    </div>

  </div>
</section>

      {/* Team */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {team.map((member) => (

              <div
                key={member.name}
                className="rounded-xl shadow-lg bg-white overflow-hidden"
              >

                <img
                  src={member.image}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">

                  <h3 className="font-bold text-xl">
                    {member.name}
                  </h3>

                  <p className="text-pink-600">
                    {member.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 bg-pink-600 text-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 text-center gap-8">

          <div>
            <h1 className="text-5xl font-bold">500+</h1>
            <p>Products</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">1200+</h1>
            <p>Customers</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">99%</h1>
            <p>Positive Reviews</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">24/7</h1>
            <p>Support</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your Style?
        </h2>

        <button onClick={()=> navigate("/products")}  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg">
          Shop Now
        </button>

      </section>

    </div>
  );
};

export default About;