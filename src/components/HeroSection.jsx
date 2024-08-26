import panha from "../assets/img/Panha.jpg";
import ALink from "../shared/ALink";
import gitHub from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-0 md:h-screen">
      <div className="w-40 h-40 md:w-96 md:h-96 rounded-full overflow-hidden">
        <img
          src={panha}
          alt="Bordered avatar"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="text-center space-y-2">
          <p className="text-md font-bold text-gray-500">Hello Im</p>
          <p className="text-3xl font-semibold">Sok Cheapanha</p>
          <p className="text-xl font-bold text-gray-500">Software Enginner</p>
        </div>

        <div className="flex flex-row gap-5">
          <ALink href="#contact" style={true}>
            Contact info
          </ALink>
        </div>
        <div className="flex flex-row gap-5">
          <ALink href="https://github.com/Cheapanha-Sok" newtab={true}>
            <img src={gitHub} alt="gitHub" className="h-10 w-10" />
          </ALink>
          <ALink
            href="https://www.linkedin.com/in/sok-cheapanha-0917802b0/"
            newtab={true}
          >
            <img src={linkedin} alt="linkedin" className="h-10 w-10" />
          </ALink>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </section>
  );
}
