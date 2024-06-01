import ALink from "../shared/ALink";
import ProjectItem from "./ProjectItem";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import firebase from "../assets/img/firebase.png";
import tosanImg1 from "../assets/img/tosan1.png";
import tosanImg2 from "../assets/img/tosan2.png";
import javaFx1 from "../assets/img/javaFx1.png";
import javaFx2 from "../assets/img/javaFx2.png";
import laravel from "../assets/svg/laravel.svg";
import mysql from "../assets/img/mysql.png";
import java from "../assets/svg/java.svg";
import ygrean1 from "../assets/img/ygrean1.png";
import ygrean2 from "../assets/img/ygrean2.png";
import secenceBuilder from "../assets/img/scencebuilder.jpg";

export default function Project() {
    const tosan = [react, tailwind, firebase];
    const schoolManagementSystem = [java, mysql, secenceBuilder];
    const ygRean = [react, tailwind, laravel];

    return (
        <section id='projects' className='flex flex-col py-5 gap-5 items-center'>
            <div>
                <p className='text-center text-md'>The projects I have created</p>
                <p className='text-center text-4xl font-bold text-gray-400'>Projects</p>
            </div>
            <ProjectItem
                title="University Management System"
                description="The University Management System is a comprehensive solution designed to streamline administrative tasks within educational institutions. With a focus on simplicity and efficiency, this project allows users to perform CRUD operations, manage students and teachers, enroll students in departments, and much more."
                codeLink="https://github.com/Cheapanha-Sok/E-Library.git"
                techImages={schoolManagementSystem}
                img1={javaFx1}
                img2={javaFx2}
            />
            <ProjectItem
                title="E-Library"
                description="This project aims to make it easy for users to read books online without going to a library. This project has 3 roles: user, author, and admin. The admin can manage all data in the system, and the author can manage their own data."
                link="https://tosan.vercel.app"
                codeLink="https://github.com/Cheapanha-Sok/E-Library.git"
                techImages={tosan}
                img1={tosanImg1}
                img2={tosanImg2}
                accountInfo={{
                    'Test Account for Author': '',
                    'Email': 'author@gmail.com',
                    'Password': 'pass123'
                }}
            />
            <ProjectItem
                title="YgRean"
                description="This project aims to help users improve their learning tools. This project has 2 roles: user and admin. The admin can manage all data in the system, and the user can manage their functionality."
                link="https://ygrean.site"
                codeLink="https://github.com/Cheapanha-Sok/ygrean_web.git"
                techImages={ygRean}
                img1={ygrean1}
                img2={ygrean2}
                accountInfo={{
                    'Test Account for User': '',
                    'Email': 'user2@example.com',
                    'Password': 'password'
                }}
            />
            <ALink href="https://github.com/Cheapanha-Sok" newtab={true}>See more on GitHub</ALink>
        </section>
    );
}
