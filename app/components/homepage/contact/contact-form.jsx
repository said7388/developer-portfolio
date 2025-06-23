"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    // Create mailto link
    const subject = `Contact from ${userInput.name}`;
    const body = `Name: ${userInput.name}\nEmail: ${userInput.email}\n\nMessage:\n${userInput.message}`;
    const mailtoLink = `mailto:mudpirate3@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.open(mailtoLink);

    // Reset form
    setUserInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <p className="font-medium mb-5 text-gray-300 text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-gray-600 p-3 lg:p-5 bg-gray-800">
        <p className="text-sm text-gray-300">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-200">Your Name: </label>
            <input
              className="bg-gray-700 w-full border rounded-md border-gray-500 focus:border-gray-400 ring-0 outline-0 transition-all duration-300 px-3 py-2 text-gray-200"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-200">Your Email: </label>
            <input
              className="bg-gray-700 w-full border rounded-md border-gray-500 focus:border-gray-400 ring-0 outline-0 transition-all duration-300 px-3 py-2 text-gray-200"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && (
              <p className="text-sm text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-gray-200">Your Message: </label>
            <textarea
              className="bg-gray-700 w-full border rounded-md border-gray-500 focus:border-gray-400 ring-0 outline-0 transition-all duration-300 px-3 py-2 text-gray-200"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-gray-200 no-underline transition-all duration-200 ease-out hover:from-gray-500 hover:to-gray-600 hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
            >
              <span className="flex items-center gap-1">
                Send Message
                <TbMailForward size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
