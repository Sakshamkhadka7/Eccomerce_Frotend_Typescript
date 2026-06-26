import Card from "./components/Card";

const Product = () => {
  return (
    <div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <Card />
      </section>
    </div>
  );
};

export default Product;
