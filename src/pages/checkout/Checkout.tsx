import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { PaymentMethod, type IData } from "./type";
import { orderItem } from "../../store/checkoutSlice";

const Checkout = () => {
  const { items } = useAppSelector((store) => store.carts);
  const [payment, setPayment] = useState<PaymentMethod>(PaymentMethod.Cod);
  console.log(payment);
  const subTotal = items.reduce(
    (sub, item) => item.Product.productPrice * item.quantity + sub,
    0,
  );
  const shipping = 100;
  const total = shipping + subTotal;
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IData>({
    firstName: "",
    lastName: "",
    addressLine: "",
    email: "",
    phoneNumber: 0,
    products: [],
    state: "",
    paymentMethod: PaymentMethod.Cod,
    totalAmount: 0,
    zipcode: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value as PaymentMethod);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productData =
      items.length > 0
        ? items.map((item) => {
            return {
              productId: item.Product.productId,
              quantity: item.quantity,
            };
          })
        : [];

    const finalData = {
      ...data,
      products: productData,
      totalAmount: total,
    };

    dispatch(orderItem(finalData));
  };

  return (
    <main>
      <h1 className="sr-only">Checkout</h1>
      <div className="flex flex-col h-full md:flex-row">
        {/* sidebar */}
        <section className="bg-gray-100 md:h-screen md:sticky md:top-0 md:min-w-[370px] lg:min-w-[420px]">
          <div className="relative h-full">
            <div className="px-6 py-8 md:overflow-auto md:h-screen">
              {/* Product List */}
              <ul className="space-y-6">
                {items.length > 0 ? (
                  items.map((item) => {
                    return (
                      <li className="flex items-start gap-4" key={item.cartId}>
                        <div className="w-24 h-24 flex p-3 shrink-0 bg-white rounded-md">
                          <img
                            src={`http://localhost:3000/${item.Product?.productImage}`}
                            className="w-full object-contain"
                            alt="black sweater"
                          />
                        </div>
                        <div className="w-full">
                          <h3 className="text-sm text-slate-900 font-semibold">
                            {item.Product.productName}
                          </h3>
                          <ul className="text-sm text-slate-500 font-medium space-y-2 mt-2">
                            <li className="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span className="ml-auto">{item.quantity}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Price{" "}
                              <span className="ml-auto text-slate-900 font-semibold">
                                {item.Product.productPrice}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <div>No Item in a Cart</div>
                )}
              </ul>
              <hr className="border-slate-300 my-6" />
              {/* Promo Code Form */}
              <form className="max-w-sm mb-8">
                <label
                  htmlFor="promocode"
                  className="mb-2 block text-sm font-medium text-slate-900"
                >
                  Do you have a promo code?
                </label>
                <div className="flex flex-col gap-4 sm:items-center sm:flex-row">
                  <input
                    type="text"
                    id="promocode"
                    name="promocode"
                    required
                    placeholder="Enter promo code"
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                  <button
                    type="submit"
                    className="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Apply
                  </button>
                </div>
              </form>
              <div>
                <ul className="text-slate-500 font-medium space-y-4">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Subtotal{" "}
                    <span className="ml-auto text-slate-900 font-semibold">
                      {subTotal}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Shipping{" "}
                    <span className="ml-auto text-slate-900 font-semibold">
                      $100.00
                    </span>
                  </li>

                  <hr className="border-slate-300" />
                  <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
                    Total <span className="ml-auto">{total}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Delivery Details form */}
        <section className="w-full h-max rounded-md py-8 px-8 xl:px-12">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-xl text-slate-900 font-semibold mb-6">
                Delivery Details
              </legend>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fname"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="john@readymadeui.com"
                    required
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="phoneNumber"
                    onChange={handleChange}
                    placeholder="123-456-7890"
                    required
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Address Line
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="addressLine"
                    onChange={handleChange}
                    placeholder="123 Main Street"
                    required
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handleChange}
                    placeholder="NY"
                    required
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postal-code"
                    className="mb-2 text-slate-900 font-medium text-sm inline-block"
                  >
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="postal-code"
                    name="zipcode"
                    onChange={handleChange}
                    placeholder={"10001"}
                    required
                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
            </fieldset>
            {/* Payment methods */}
            <fieldset className="mt-12">
              <legend className="text-xl text-slate-900 font-semibold mb-6">
                Payment method
              </legend>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="bg-gray-100 p-4 rounded-md border border-slate-300 max-w-sm">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="khalti"
                        id="card"
                        onChange={handlePaymentMethod}
                        className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-400 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600"
                  
                      />
                      <label
                        htmlFor="card"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TZC-ULIYpCKjc8ZydyyTnlzUdC5Ua2uOKA&s"
                          className="w-22"
                          alt="master"
                        />
                      </label>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 font-medium">
                    Pay with your debit or credit card
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md border border-slate-300 max-w-sm">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="esewa"
                        onChange={handlePaymentMethod}
                        id="paypal"
                        className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-400 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600"
                      />
                      <label
                        htmlFor="paypal"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <img
                          src="https://www.drupal.org/files/project-images/esewa.png"
                          className="w-29"
                          alt="paypalCard"
                        />
                      </label>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 font-medium">
                    Pay with your paypal account
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-md border border-slate-300 max-w-sm">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        onChange={handlePaymentMethod}
                        id="paypal"
                        className="w-[18px] h-[18px] appearance-none rounded-full border border-slate-400 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600"
                        defaultChecked
                      />
                      <label
                        htmlFor="paypal"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 font-medium">
                    Pay with Cash
                  </p>
                </div>
              </div>
            </fieldset>
            {/* billing address checkbox */}
            <label className="inline-flex items-center group has-[input:checked]:text-slate-900 mt-6">
              <input
                id="billing-address"
                name="billing-address"
                type="checkbox"
                className="sr-only"
                defaultChecked
              />
              {/* Custom box */}
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                aria-hidden="true"
              >
                {/* Checkmark */}
                <svg
                  className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                  viewBox="0 0 12 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M1 5l3 3 7-7" />
                </svg>
              </span>
              <span className="ml-3 text-sm text-slate-700">
                Billing address is the same as shipping address
              </span>
            </label>
            <div className="mt-8">
            {payment===PaymentMethod.Khalti ? (
                <button
                type="submit"
                className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-purple-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Pay With Khalti
                {subTotal + shipping}
              </button>
            ):(
                <button
                type="submit"
                className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-green-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Pay With esewa
                {subTotal + shipping}
              </button>
            )}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Checkout;
