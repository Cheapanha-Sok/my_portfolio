export default function Experience() {
  return (
    <section id="experience" className="flex flex-col py-5 gap-5 md:h-screen justify-center">
      <div>
        <p className="text-center text-md">The Language I Used To</p>
        <p className="text-center text-4xl font-bold text-gray-400">
          Experience
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-2 bg-slate-100 p-5 rounded-lg">
          <h1 className="text-xl font-semibold">Programming</h1>
          <ul className="list-disc list-inside">
            <li>C , C++ , Java , Kotlin</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Php</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 bg-slate-100 p-5 rounded-lg">
          <h1 className="text-xl font-semibold">Framework</h1>
          <ul className="list-disc list-inside">
            <li>SpringBoot</li>
            <li>Laravel</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>BootStrap</li>
            <li>Flask</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 bg-slate-100 p-5 rounded-lg">
          <h1 className="text-xl font-semibold">Service</h1>
          <ul className="list-disc list-inside">
            <li>Firebase</li>
            <li>GraphApi</li>
            <li>Nginx , Aws EC2</li>
            <li>MySQL , PostgresSQL</li>
            <li>QuartScheduler</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
