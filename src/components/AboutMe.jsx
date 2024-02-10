import aboutMe from "../assets/img/aboutme.png"

export default function AboutMe() {
  return (

    <section id="about" className="flex flex-col md:flex-row gap-5 md:items-center md:h-screen">
      <div className='flex flex-col py-5 gap-5 items-center'>
        <div>
          <p className='text-md'>Get to know about me</p>
          <p className='text-4xl font-bold text-gray-400'>About Me</p>
        </div>

        <div className='flex flex-col md:flex-row md:w-[50%]'>
          I am Sok Cheapanha, a third-year student at the Royal University of Phnom Penh, where I am majoring in Information Technology and Engineering. I am all about simplicity and hard work,
          and I pride myself on being friendly and approachable.
          Thanks for taking the time to check out my portfolio!
        </div>
      </div>
      <div className="hidden md:block md:w-[60%]">
        <img src={aboutMe} alt="aboutMe" />
      </div>
    </section>

  )
}
