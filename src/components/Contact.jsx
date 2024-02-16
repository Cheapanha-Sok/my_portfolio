import gmail from "../assets/svg/gmail.svg"
import linkedin from "../assets/svg/linkedin.svg"
import telegram from "../assets/svg/telegram.svg"
import phone from "../assets/svg/phone.svg"
import ALink from "../shared/ALink"

export default function Contact() {
    return (
        <section id="contact" className='flex flex-col py-5 gap-5'>
            <div>
                <p className='text-center text-md'>Get in Touch</p>
                <p className='text-center text-4xl font-bold text-gray-400'>Contact Me</p>
            </div>

            <div className='flex flex-col md:flex-row gap-5 md:gap-0 md:justify-evenly mx-auto p-5  border border-gray-800 rounded-xl w-full'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={gmail} alt="gmialIcon" className='w-5 h-5' />
                    <ALink href='mailto:sokcheapanha11@gmail.com' newtab={true}>sokcheapanha11@gmail.com</ALink>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={linkedin} alt="linkedinIcon" className='w-5 h-5' />
                    <ALink href='https://www.linkedin.com/in/sok-cheapanha-0917802b0/' newtab={true}>Sok Cheapanha</ALink>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={telegram} alt="telegramIcon" className='w-5 h-5' />
                    <ALink href='https://t.me/CheapanhaSok' newtab={true} >CheapanhaSok</ALink>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={phone} alt="phoneIcon" className='w-5 h-5' />
                    <ALink href='tel:061809946'>061809946</ALink>
                </div>

            </div>
        </section>
    )
}

