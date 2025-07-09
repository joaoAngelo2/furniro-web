import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServiceFeatures from "../../components/ServiceFeatures";
import ShopBanner from "../../components/ShopBanner";
import { useContactForm } from "../../hooks/useForms";
import {type ContactSchema } from "../../schemas/contactSchema";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, errors } = useContactForm();

  const onSubmit = (data: ContactSchema) => {
    console.log(data);
    toast.success('Your message has been sent successfully!');
  };

  return (
    <div>
      <Header />
      <ShopBanner name={"contact"} exibe={true} />
      <div className="w-full min-h-screen py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-black text-3xl lg:text-4xl font-semibold font-['Poppins']">
            Get In Touch With Us
          </h1>
          <p className="max-w-xl mx-auto text-base font-normal font-['Poppins'] mt-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          <div className="grid place-items-center">
            <div className="w-full lg:w-4/5">
              <table className="w-full" style={{ borderSpacing: "12px" }}>
                <tbody>
                  <tr>
                    <td className="align-top p-2">
                      <img
                        src="https://furniro-web.s3.us-east-2.amazonaws.com/assets/local.svg"
                        alt="location"
                      />
                    </td>
                    <td className="p-2">
                      <p className="text-black text-xl font-medium font-['Poppins']">
                        Address
                      </p>
                      <p className="text-base font-normal font-['Poppins']">
                        236 5th SE Avenue, New <br />
                        York NY10000, United States
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top p-2">
                      <img
                        src="https://furniro-web.s3.us-east-2.amazonaws.com/assets/bxs-phone.svg"
                        alt="phone"
                      />
                    </td>
                    <td className="p-2">
                      <p className="text-black text-xl font-medium font-['Poppins']">
                        Phone
                      </p>
                      <p className="text-base font-normal font-['Poppins']">
                        Mobile: +(84) 546-6789 <br />
                        Hotline: +(84) 456-6789
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top p-2">
                      <img
                        src="https://furniro-web.s3.us-east-2.amazonaws.com/assets/bi-clock-fill.svg"
                        alt="clock"
                      />
                    </td>
                    <td className="p-2">
                      <p className="text-black text-xl font-medium font-['Poppins']">
                        Working Time
                      </p>
                      <p className="text-base font-normal font-['Poppins']">
                        Monday-Friday: 9:00 - 22:00 <br />
                        Saturday-Sunday: 9:00 - 21:00
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid place-items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full lg:w-4/5 flex flex-col gap-6"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-black font-medium">
                  Your Name:
                </label>
                <input
                  id="name"
                  className="w-full h-14 bg-white rounded border border-neutral-400 px-4"
                  placeholder="Abc"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-black font-medium">
                  Email Address:
                </label>
                <input
                  id="email"
                  className="w-full h-14 bg-white rounded border border-neutral-400 px-4"
                  placeholder="abc@def.com"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-black font-medium">
                  Subject:
                </label>
                <input
                  id="subject"
                  className="w-full h-14 bg-white rounded border border-neutral-400 px-4"
                  placeholder="This is optional"
                  {...register("subject")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-black font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="w-full h-32 bg-white rounded border border-neutral-400 px-4 py-3"
                  placeholder="Hi! I'd like to ask about..."
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                className="w-full lg:w-60 h-14 bg-yellow-600 rounded text-white font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ServiceFeatures />
      <Footer />
    </div>
  );
};

export default Contact;
