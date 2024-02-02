import gmail from "../assets/svg/gmail.svg"
import linkedin from "../assets/svg/linkedin.svg"
import telegram from "../assets/svg/telegram.svg"
import phone from "../assets/svg/phone.svg"

export default function Contact() {
    return (
        <div id="contact" className='flex flex-col py-5 gap-5'>
            <div>
                <p className='text-center text-md'>Get in Touch</p>
                <p className='text-center text-3xl font-bold text-gray-400'>Contact Me</p>
            </div>

            <div className='flex flex-col md:flex-row gap-5 md:gap-0 md:justify-evenly mx-auto p-5 border-2 rounded-xl w-full'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={gmail} alt="gmialIcon" className='w-5 h-5' />
                    <a href='mailto:panhachea476@gmail.com'>panhachea476@gmail.com</a>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={linkedin} alt="gmialIcon" className='w-5 h-5' />
                    <a href='mailto:panhachea476@gmail.com'>panhachea476@gmail.com</a>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={telegram} alt="gmialIcon" className='w-5 h-5' />
                    <a href='https://t.me/CheapanhaSok'>CheapanhaSok</a>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <img src={phone} alt="gmialIcon" className='w-5 h-5' />
                    <a href='tel:061809946'>061809946</a>
                </div>

            </div>
        </div>
    )
}

