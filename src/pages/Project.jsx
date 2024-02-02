import ALink from "../shared/ALink";

export default function Project() {
    return (
        <div id='projects' className='flex flex-col py-5 gap-5'>
            <div>
                <p className='text-center text-md'>The project I have create</p>
                <p className='text-center text-4xl font-bold text-gray-400'>Project</p>
            </div>
            <div className='grid grid-cols md:grid-cols-4 w-full gap-5'>
                <div className='flex flex-col border border-gray-800 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            School Management System
                        </p>
                        <p>This project use JavaFx , SceneBuilder for build interface and mysql for database</p>
                        <div>
                            <ALink style={true} href="https://github.com/Cheapanha-Sok/schoolMangementSystem-v2.git" newtab={true}>Git Hub</ALink>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col border border-gray-800 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            School Management System
                        </p>
                        <p>This project use SpringBoot for backend and database use MySQL</p>
                        <div>
                            <ALink style={true} href="https://github.com/Cheapanha-Sok/springBootWithHibernate.git" newtab={true}>Git Hub</ALink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border border-gray-800 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            E-Library
                        </p>
                        <p>This project use react js for frontend and backend use firebase </p>
                        <div className='flex flex-row gap-2 '>
                            <ALink style={true} href="https://tosan.vercel.app" newtab={true}>Live Demo</ALink>
                            <ALink style={true} href="https://github.com/Cheapanha-Sok/E-Library.git" newtab={true}>Git Hub</ALink>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col border border-gray-800 rounded-xl items-center justify-center'>
                    <ALink href="https://github.com/Cheapanha-Sok" newtab={true}>See more on Git hub</ALink>
                </div>
            </div>
        </div>
    )
}
