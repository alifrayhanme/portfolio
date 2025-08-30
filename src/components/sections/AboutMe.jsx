const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="about-bg flex items-center justify-center lg:pt-32 lg:pb-24 py-16"
    >
      <div className="px-4 xs:px-12 md:px-28 grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10">
        <div className="xl:pl-8 space-y-10 lg:col-span-2">
          <div>
            <span className="H2-U text-white border-2 border-brand1 rounded-tl-3xl rounded-br-3xl p-2 bg-bg1">
              About Me
            </span>
          </div>
          <div className="Para-M text-white bg-bg1 rounded-2xl md:rounded-3xl lg:rounded-4xl p-8 space-y-5">
            <p className="text-brand1 Code-M text-xs">&lt;p&gt;</p>
            <div>
              <span className="Logo-M text-brand1 mb-2 inline-block">
                Hello!
              </span>
              <br />
              My name is Alif and I specialize in web developement that
              utilizes
              <span className="text-brand1"> HTML</span>,
              <span className="text-brand1"> CSS</span>,
              <span className="text-brand1"> JS</span>, and
              <span className="text-brand1"> REACT</span> etc. <br />
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works. Striving to
              never stop learning and improving. <br />
              When I'm not coding, I am
              <span className="text-brand1"> writing bolgs</span>, reading, or
              picking up some new hands-on art project like
              <span className="text-brand1"> photography</span>. <br />I like to
              have my perspective and belief systems challenged so that I see
              the world through new eyes.
            </div>
            <p className="text-brand1 Code-M text-xs">&lt;p/&gt;</p>
          </div>
        </div>
        <div className="w-full h-full">
          <img className="w-full h-full" src="./about-work.png" alt="work time" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
