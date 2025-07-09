import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServiceFeatures from "../../components/ServiceFeatures";
import ShopBanner from "../../components/ShopBanner";
import { toast } from "react-toastify";
import { type RootState } from "../../store";
import React from "react";
import { useCheckoutForms } from "../../hooks/useForms";
import { type CheckoutSchema } from "../../schemas/checkoutSchema";
import { useSelector } from "react-redux";
import { formatPriceUSD } from "../../utils/formattedPrice";

const Checkout: React.FC = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { register, handleSubmit, errors, setValue, watch } = useCheckoutForms();


  const onSubmit = (data: CheckoutSchema) => {
    console.log(data);
    toast.success("Pedido realizado com sucesso!");
  };

  const onError = (errors: any) => {
    console.log("Form errors:", errors); 
  };

  async function handleZipCode(zip: string) {
  const onlyNumbers = zip.replace(/\D/g, '');

  const formattedZip = onlyNumbers.length > 5
    ? `${onlyNumbers.slice(0, 5)}-${onlyNumbers.slice(5, 8)}`
    : onlyNumbers;
  setValue('zipCode', formattedZip);
  if (formattedZip.length === 9) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${onlyNumbers}/json/`);
      const data = await response.json();
      setValue('country', data.regiao || '');
      setValue('streetAddress', data.bairro || '');
      setValue('city', data.localidade || '');
      setValue('state', data.uf || '');
      setValue('region', data.logradouro || '');
    } catch (error) {
      console.error(error);
    }
  }
}


  return (
    <div>
      <Header />
      <ShopBanner name={"Checkout"} exibe={true} />
      <div className="w-full h-[150rem] md:h-[130.32rem] grid place-items-center">
         <form
            className="w-11/12 md:h-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
            onSubmit={(e) => {
            e.preventDefault();
            console.log("Raw form submit triggered!");
            handleSubmit(onSubmit, onError)(e);
            }}>
          <div className="flex flex-wrap w-full gap-6">
            <p className="text-black text-2xl md:text-4xl font-semibold font-['Poppins']">
              Billing details
            </p>
            <br />
            <div className=" w-full gap-4 flex flex-col">
              <div className="w-full flex justify-between gap-5">
                <div className="w-1/2 flex gap-4 flex-col">
                  <label
                    htmlFor="fname"
                    className="text-black  text-sm md:text-base font-medium font-['Poppins']"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="w-1/2 gap-4 flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-black  text-sm md:text-base text font-medium font-['Poppins']"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="cname"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="cname"
                className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("company")}
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="zcode"
                className="text-black text-sm md:text-base font-medium font-['Poppins']"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zcode"
                className="w-full h-20 bg-white rounded-[10px] border border-neutral-400 pl-6"
                {...register("zipCode", {
                  onChange: (e) => handleZipCode(e.target.value),
                })}
              />
              {errors.zipCode && (
                <span className="text-red-500 text-sm">{errors.zipCode.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="contry"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Country/Region
              </label>
              <input
                type="text"
                id="contry"
                className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("country")}
              />
              {errors.country && (
                <span className="text-red-500 text-sm">{errors.country.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="saddress"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Street address
              </label>
             
              <input
                type="text"
                id="saddress"
                className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("streetAddress")}
              />
               {errors.streetAddress && (
                <span className="text-red-500 text-sm">{errors.streetAddress.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="city"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Town / City
              </label>
              <input
                type="text"
                id="city"
                className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("city")}
              />
              {errors.city && (
                <span className="text-red-500 text-sm">{errors.city.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="state"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Province
              </label>
              <input
                type="text"
                id="state"
                className="w-full h-20 bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("state")}
              />
              {errors.state && (
                <span className="text-red-500 text-sm">{errors.state.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="aod"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Add-on address
              </label>
              <input
                type="text"
                id="aod"
                className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("addOnAddress")}
              />
              {errors.addOnAddress && (
                <span className="text-red-500 text-sm">{errors.addOnAddress.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="eaddress"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Email address
              </label>
              <input
                type="email"
                id="eaddress"
                className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="phone"
                className="text-black  text-sm md:text-base font-medium font-['Poppins']"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone.message}</span>
              )}
            </div>
            <input
              type="text"
              id="ainformation"
              className="w-full h-20  bg-white rounded-[10px] border border-neutral-400 my-auto pl-6"
              placeholder="Additional information" {...register('additionalInformation')}
            />
          </div>

          <div className="w-full h-full">
            <div className="w-full grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-5 text-start">
                <p className="text-black text-2xl font-medium font-['Poppins']">
                  Product
                </p>
                <ul className="text-neutral-400 text-sm md:text-base font-normal font-['Poppins']">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      {item.name} x {item.quantity}
                    </li>
                  ))}
                </ul>
                <p className="text-black text-sm md:text-base font-normal font-['Poppins']">
                  Subtotal
                </p>
                <p className="text-black text-sm md:text-base font-normal font-['Poppins']">
                  Total
                </p>
              </div>
              <div className="flex flex-col gap-5 text-end">
                <p className="text-black text-2xl font-medium font-['Poppins']">
                  Subtotal
                </p>
                <ul className="text-black text-sm md:text-base font-light font-['Poppins']">
                  {cartItems.map((item) => (
                    <li key={item.id}>Rs. {formatPriceUSD(item.price)}</li>
                  ))}
                </ul>
                <p className="text-black text-sm md:text-base font-light font-['Poppins']">
                  Rs. {formatPriceUSD(total)}
                </p>
                <p className="text-yellow-600 text-md md:text-2xl font-bold font-['Poppins']">
                  Rs. {formatPriceUSD(total)}
                </p>
              </div>
            </div>
            <div className="h-px bg-zinc-300 w-full my-4"></div>
            <div className="flex w-full flex-col gap-4">
            {['dtransfer', 'cdelivery', 'other'].map((method) => (
                <div key={method} className="flex w-full items-start gap-2">
                <input
                    type="radio"
                    id={method}
                    value={method}
                    {...register('paymentMethod')}
                    className="w-4 h-4 rounded-full border-2 border-black appearance-none checked:bg-black checked:border-black transition-colors cursor-pointer"
                />
                <div className="flex w-full flex-col">
                    <label htmlFor={method} className="text-neutral-400 peer-checked:text-black">
                    {method === 'dtransfer' && 'Direct bank transfer'}
                    {method === 'cdelivery' && 'Cash on delivery'}
                    {method === 'other' && 'Other'}
                    </label>
                    {watch('paymentMethod') === method && (
                    <p className="w-full text-neutral-400 text-sm md:text-base font-light font-['Poppins']">
                        {method === 'dtransfer' && 'Use your bank app to transfer to our account. Order will be processed after confirmation.'}
                        {method === 'cdelivery' && 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'}
                        {method === 'other' && 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'}
                    </p>
                    )}
                </div>
                </div>
            ))}
            </div>


            <div className="w-full text-justify flex flex-col gap-4 py-4">
              <p className="text-black text-sm md:text-base font-light font-['Poppins']">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our{" "}
                <strong>privacy policy</strong>.
              </p>
              <button
                type="submit"
                className="h-14 rounded-2xl border border-black"
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>

      <ServiceFeatures />
      <Footer />
    </div>
  );
};

export default Checkout;
