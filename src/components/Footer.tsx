import React, { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [newsletterMessage, setNewsletterMessage] = useState<string>("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterMessage("");
    setEmailError("");

    if (!email) {
      setEmailError("Email address cannot be empty.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    console.log("Subscribing with email:", email);
    setNewsletterMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-white pt-16 pb-8 font-poppins">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap justify-between border-b border-gray-300 pb-10 mb-10">
          <div className="w-full md:w-[20%] mb-10 md:mb-0 pr-4 mr-6">
            <h2 className="font-bold text-3xl mb-8">Furniro.</h2>
            <p className="text-gray-500 leading-relaxed">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
            <div className="flex space-x-5 mt-8">
              <button className="flex justify-center items-center shadow-xl rounded-full w-9 h-9">
                <a
                  href="https://www.facebook.com/Compass.UOL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className=""
                >
                  <img
                    src="https://furniro-web.s3.us-east-2.amazonaws.com/assets/facebook-icon.svg"
                    alt="Facebook"
                    className="w-3"
                  />
                </a>
              </button>
              <button className="flex justify-center items-center shadow-xl rounded-full w-9 h-9">
                <a
                  href="https://www.instagram.com/compass.uol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img
                    src="https://furniro-web.s3.us-east-2.amazonaws.com/assets/instagram-icon.svg"
                    alt="Instagram"
                    className="w-3"
                  />
                </a>
              </button>
              <button className="flex justify-center items-center shadow-xl rounded-full w-9 h-9">
                <a
                  href="https://twitter.com/compass_uol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img
                    src="https://furniro-web.s3.us-east-2.amazonaws.com/assets/twitter-icon.svg"
                    alt="Twitter"
                    className="w-3"
                  />
                </a>
              </button>
              <button className="flex justify-center items-center shadow-xl rounded-full w-9 h-9">
                <a
                  href="https://www.linkedin.com/company/compass-uol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img
                    src="https://furniro-web.s3.us-east-2.amazonaws.com/assets/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="w-3"
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="w-1/2 md:w-[15%] mb-10 md:mb-0">
            <h3 className="text-gray-400 font-medium mb-10 text-x">Links</h3>
            <ul>
              <li className="mb-10">
                <a
                  href="/"
                  className="text-black hover:text-slate-500 transition-colors duration-200 font-medium"
                >
                  Home
                </a>
              </li>
              <li className="mb-10">
                <a
                  href="/shop"
                  className="text-black hover:text-slate-500 transition-colors duration-200 font-medium"
                >
                  Shop
                </a>
              </li>
              <li className="mb-10">
                <a
                  href="#"
                  className="text-black hover:text-slate-500 transition-colors duration-200 font-medium"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-black  hover:text-slate-500 transition-colors duration-200 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-[15%] mb-10 md:mb-0">
            <h3 className="text-gray-400 font-medium mb-10">Help</h3>
            <ul>
              <li className="mb-10">
                <a
                  href="#"
                  className="text-black hover:text-slate-500 transition-colors duration-200 font-medium"
                >
                  Payment Options
                </a>
              </li>
              <li className="mb-10">
                <a
                  href="#"
                  className="text-black hover:text-slate-500 transition-colors duration-200 font-medium"
                >
                  Returns
                </a>
              </li>
              <li className="mb-10">
                <a
                  href="#"
                  className="text-black hover:text-slate-500 transition-colors duration-200 font-medium"
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[35%] mb-10 md:mb-0">
            <h3 className="text-gray-400 font-medium mb-10">Newsletter</h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-start sm:items-center mb-4"
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={`border-b ${
                  emailError ? "border-red-500" : "border-black"
                } focus:outline-none focus:border-slate-500 pb-1 flex-grow mb-4 sm:mb-0 mr-0`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() =>
                  setEmailError(
                    email && !validateEmail(email)
                      ? "Please enter a valid email address."
                      : ""
                  )
                }
              />
              <button
                type="submit"
                className="border-b border-black text-black font-semibold pb-1 sm:ml-4 hover:text-slate-500 hover:border-slate-500 transition-colors duration-200"
              >
                SUBSCRIBE
              </button>
            </form>
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
            {newsletterMessage && !emailError && (
              <p className="text-green-600 text-sm mt-1">{newsletterMessage}</p>
            )}
          </div>
        </div>
        <div className="text-black text-base">
          <p>2023 Furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
