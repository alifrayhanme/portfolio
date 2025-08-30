import SubHeader from "../ui/SubHeader";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-bg2 flex items-center justify-center lg:py-24 py-16"
    >
      <div className="px-4 xs:px-12 md:px-28 space-y-10 w-full">
        {/* Header */}
        <SubHeader
          title={"Contact"}
          details={"I’m currently available for freelance work"}
        />
        <div className="flex justify-center items-center">
          <p className=" font-ibm font-medium text-[24px] sm:text-[32px] text-brand1 border-2 border-brand1 rounded-tl-3xl rounded-br-3xl py-1.5 px-2.5 text-center">
            Send me a message
          </p>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-6 lg:gap-10 w-full">
          {/* Name */}
          <div className="Para-U space-y-2.5 w-full">
            <p className="text-brand1">Your Name *</p>
            <input
              className="w-full border-b-2 border-white outline-none text-white bg-transparent py-2 focus:border-brand1 transition"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>

          {/* Email */}
          <div className="Para-U space-y-2.5 w-full">
            <p className="text-brand1">Your Email *</p>
            <input
              className="w-full border-b-2 border-white outline-none text-white bg-transparent py-2 focus:border-brand1 transition"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>

          {/* Message */}
          <div className="Para-U space-y-2.5 col-span-2 w-full">
            <p className="text-brand1">Your Message *</p>
            <textarea
              className="w-full border-b-2 border-white outline-none text-white bg-transparent py-2 focus:border-brand1 transition resize-none"
              rows="4"
              placeholder="Enter Your Needs"
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
