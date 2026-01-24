"use client";
import { useState } from "react";
import { personalData } from '@/utils/data/personal-data';
import { TbMailForward } from "react-icons/tb";

function ContactForm() {
  const [error, setError] = useState({ required: false });
  const [message, setMessage] = useState("");

  const handleSendMail = (e) => {
    e.preventDefault();

    if (!message) {
      setError({ required: true });
      return;
    }

    setError({ required: false });
    const mailtoLink = `mailto:${personalData.email}?body=${encodeURIComponent(message)}`;
    window.open(mailtoLink);
    setMessage("");
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              value={message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">
              Message is required!
            </p>}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
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
};

export default ContactForm;