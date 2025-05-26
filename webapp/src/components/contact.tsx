import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className='mb-20 sm:mb-28 w-[min(100%, 38rem)]'>
        <SectionHeading>Contact Me</SectionHeading>
        <p>Please contact me directly at {" "}
            <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>{" "}
            or through this form.   
        </p>
        <form className='mt-10 flex flex-col'>
            <input className="h-14 rounded-lg borderBlack" type="email" />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4'/>
            <button className='flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full 
                outline-none transition-all' type="submit"
            >
                Submit <FaPaperPlane className="text-xs opacity-70 transition-all"/>{" "}
            </button>
        </form>
    </section>
  )
}
