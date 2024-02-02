export default function Project() {
    return (
        <div id='projects' className='flex flex-col py-5 gap-5'>
            <div>
                <p className='text-center text-md'>The project I have create</p>
                <p className='text-center text-3xl font-bold text-gray-400'>Project</p>
            </div>
            <div className='grid grid-cols md:grid-cols-4 w-full gap-5'>
                <div className='flex flex-col border-2 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            School Management System
                        </p>
                        <p>This project use JavaFx , SceneBuilder for build interface and mysql for database</p>
                        <div>
                            <a className="p-2 rounded-lg border-2" href="https://github.com/Cheapanha-Sok/schoolMangementSystem-v2.git" target="_blank" rel="noopener noreferrer">Git Hub</a>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col border-2 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            School Management System
                        </p>
                        <p>This project use SpringBoot for backend and database use MySQL</p>
                        <div>
                            <a className="p-2 rounded-lg border-2" href="https://github.com/Cheapanha-Sok/springBootWithHibernate.git" target="_blank" rel="noopener noreferrer">Git Hub</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border-2 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            E-Library
                        </p>
                        <p>This project use react js for frontend and backend use firebase </p>
                        <div className='flex flex-row gap-2 '>
                            <a className="p-2 rounded-lg border-2" href="https://tosan.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="p-2 rounded-lg border-2" href="https://github.com/Cheapanha-Sok/E-Library.git" target="_blank" rel="noopener noreferrer">Git Hub</a>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col border-2 rounded-xl items-center justify-center'>
                    <a className="font-bold" href="https://github.com/Cheapanha-Sok" target="_blank" rel="noopener noreferrer">See more on Git hub</a>
                </div>
            </div>
        </div>
    )
}
