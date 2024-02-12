import { useState } from 'react';
import ALink from "../shared/ALink";
import react from "../assets/img/react.png"
import tailwind from "../assets/img/tailwind.png"
import firebase from "../assets/img/firebase.png"
import tosanImg1 from "../assets/img/tosan1.png"
import tosanImg2 from "../assets/img/tosan2.png"
import javaFx1 from "../assets/img/javaFx1.png"
import javaFx2 from "../assets/img/javaFx2.png"
import mysql from "../assets/img/mysql.png"
import java from "../assets/svg/java.svg"
import Tech from "./Tech";

export default function Project() {
    const [isHovered, setIsHovered] = useState(false);

    const tosan = [react, tailwind, firebase];
    const schoolmanagementsystem = [java, mysql];

    return (
        <section id='projects' className='flex flex-col py-5 gap-5 items-center'>
            <div>
                <p className='text-center text-md'>The project I have create</p>
                <p className='text-center text-4xl font-bold text-gray-400'>Project</p>
            </div>
            <div className='flex flex-row border border-gray-800 rounded-xl items-center gap-5 p-5'>

                <div className='flex flex-col gap-5'>
                    <p className='text-lg font-bold'>
                        University Mangement System
                    </p>
                    <p>The University Management System is a comprehensive solution designed to streamline administrative tasks within educational institutions. With a focus on simplicity and efficiency, this project allows users to perform CRUD operations, manage students and teachers, enroll students in departments, and much more.  </p>
                    <div>
                        <ALink style={true} href="https://github.com/Cheapanha-Sok/E-Library.git" newtab={true}>Code</ALink>
                    </div>
                    <Tech images={schoolmanagementsystem} />
                </div>
                <div className="hidden md:block transition-all duration-500 ease-in-out transform hover:scale-105">
                    <img
                        src={isHovered ? javaFx2 : javaFx1}
                        alt="tosanImage"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </div>
            <div className='flex flex-row border border-gray-800 rounded-xl items-center gap-5 p-5'>
                <div className="hidden md:block transition-all duration-500 ease-in-out transform hover:scale-105">
                    <img
                        src={isHovered ? tosanImg1 : tosanImg2}
                        alt="tosanImage"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>

                <div className='flex flex-col gap-5'>
                    <p className='text-lg font-bold'>
                        E-Library
                    </p>
                    <p>This project aim to make an user easy to read book on internet without go to library , and this project also have 3 roles : user , author and admin . For admin role can manage all data in data in the system otherwise author role can manage their own data have been created.  </p>
                    <div className="space-y-1">
                        <p className="font-bold">Test Account for Author</p>
                        <p>Email : author@gmail.com</p>
                        <p>Password : pass123</p>
                    </div>
                    <div className='flex flex-row gap-2 '>
                        <ALink style={true} href="https://tosan.vercel.app" newtab={true}>Live Demo</ALink>
                        <ALink style={true} href="https://github.com/Cheapanha-Sok/E-Library.git" newtab={true}>Code</ALink>
                    </div>
                    <Tech images={tosan} />
                </div>
            </div>
            {/* </div> */}
            <ALink href="https://github.com/Cheapanha-Sok" newtab={true}>See more on Git hub</ALink>
        </section>
    )
}
