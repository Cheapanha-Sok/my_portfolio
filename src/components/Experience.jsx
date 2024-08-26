export default function Experience() {
  return (
    <section id="experience" className="flex flex-col py-5 gap-5 md:h-screen justify-center">
      <div>
        <p className="text-center text-md">The Languages I Use</p>
        <p className="text-center text-4xl font-bold text-gray-400">
          Experience
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="flex flex-col gap-2 p-5 rounded-lg border-2">
          <h1 className="text-xl font-semibold">Programming</h1>
          <ul className="list-disc list-inside">
            <li>C, C++, Java, Kotlin</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 p-5 rounded-lg border-2">
          <h1 className="text-xl font-semibold">Frameworks</h1>
          <ul className="list-disc list-inside">
            <li>Spring Boot</li>
            <li>Laravel</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Flask</li>
          </ul>
          <h1 className="text-xl font-semibold">Library</h1>
          <ul className="list-disc list-inside">
            <li>ReactJs</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 p-5 rounded-lg border-2">
          <h1 className="text-xl font-semibold">Services</h1>
          <ul className="list-disc list-inside">
            <li>Firebase</li>
            <li>Graph API</li>
            <li>Nginx, AWS EC2</li>
            <li>MySQL, PostgreSQL</li>
            <li>Quartz Scheduler</li>
            <li>Redis</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
