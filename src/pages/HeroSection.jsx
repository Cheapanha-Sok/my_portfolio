import panha from "../assets/img/Panha.jpg"
import CV from "../assets/pdf/Apply For intern Web.pdf"


export default function HeroSection() {
    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-5 md:gap-0 p-10'>
            <div className="w-40 h-40 md:w-96 md:h-96 rounded-full overflow-hidden">
                <img
                    src={panha}
                    alt="Bordered avatar"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-md font-bold text-gray-500'>
                    Hello Im
                </p>
                <p className='text-3xl font-semibold'>Chea panhasok</p>
                <p className='text-xl font-bold text-gray-500'>Software developer</p>
                <div className='flex flex-row gap-5'>
                    <a className="p-2 rounded-lg border-2" href={CV} download={`${"Panha"}_CV.pdf`}>
                        Download CV
                    </a>
                    <a className="p-2 rounded-lg border-2" href='#contact'>
                        Contact info
                    </a>
                </div>
            </div>
        </div>
    )
}
