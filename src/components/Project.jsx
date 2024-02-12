import ALink from "../shared/ALink";
import react from "../assets/img/react.png"
import tailwind from "../assets/img/tailwind.png"
import firebase from "../assets/img/firebase.png"
import Tech from "./Tech";

export default function Project() {

    const images = [react, tailwind, firebase];
    return (
        <section id='projects' className='flex flex-col py-5 gap-5 items-center'>
            <div>
                <p className='text-center text-md'>The project I have create</p>
                <p className='text-center text-4xl font-bold text-gray-400'>Project</p>
            </div>
            <div className='grid grid-cols md:grid-cols-3 w-full gap-5'>
                <div className='flex flex-col border border-gray-800 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            School Management System
                        </p>
                        <p>This project use JavaFx , SceneBuilder for build interface and mysql for database</p>
                        <div>
                            <ALink style={true} href="https://github.com/Cheapanha-Sok/schoolMangementSystem-v2.git" newtab={true}>Code</ALink>
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
                            <ALink style={true} href="https://github.com/Cheapanha-Sok/springBootWithHibernate.git" newtab={true}>Code</ALink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border border-gray-800 rounded-xl'>
                    <div className='flex flex-col gap-5 p-5'>
                        <p className='text-lg font-bold'>
                            E-Library
                        </p>
                        <p>This project aim to make an user easy to read book on internet without go to library , and this project also have 3 roles : user , author and admin . For admin role can manage all data in data in the system otherwise author role can manage their own data have been created.  </p>
                        <div className="space-y-1">
                            <p className="font-bold">Test Account for Author : </p>
                            <p>Email : author@gmail.com</p>
                            <p>Password : pass123</p>
                        </div>
                        <div className='flex flex-row gap-2 '>
                            <ALink style={true} href="https://tosan.vercel.app" newtab={true}>Live Demo</ALink>
                            <ALink style={true} href="https://github.com/Cheapanha-Sok/E-Library.git" newtab={true}>Code</ALink>
                        </div>
                        <Tech images={images} />
                    </div>

                </div>
            </div>
            <ALink href="https://github.com/Cheapanha-Sok" newtab={true}>See more on Git hub</ALink>
        </section>
    )
}
