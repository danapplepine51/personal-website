import { motion } from 'framer-motion';
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '../lib/hooks';
import pineApple from "/pineapple.png";

export default function Home(){

    // const {ref, inView} = useInView({
    //     threshold: 0.5,
    // });
    // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000){
    //         setActiveSection("Home");
    //     }
    // }, [inView, setActiveSection, timeOfLastClick]);
    const { ref } = useSectionInView('Home', 0.5);

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-28 sm:pt-36">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div 
                    initial={{opacity: 0, scale: 0}}
                    animate= {{opacity: 1, scale: 1}}
                    transition={{type: "tween", duration:0.2}}>
                        {
                            <img src={pineApple} alt="Image" width={100} height={100} className="object-cover h-24 w-24 
                            rounded-full border-[0.35rem] border-red-300 shadow-2xl"/>
                        }
                    </motion.div>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
            sm:text-4xl"
            initial={{opacity : 0, y : 100}}
            animate={{opacity : 1, y : 0}}>
                <span className="font-bold">
                    Hello, I&apos;m Daniel.<br />
                </span>
                 Welcome to my website!!
                {/* I&apos;m interested in {" "}
                <span className="font-bold">
                    Software Engineering
                </span> */}

            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2
            px-4 text-lg font-medium"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.1}}>
                {/* <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex
                items-center gap-2 rounded-full
                outline-none focus:scale-110
                hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact Me!!<BsArrowRight />
                </Link> */}
                <a className="group bg-white text-gray-500 px-7 py-3 flex
                items-center gap-2 rounded-full outline-none
                focus:scale-110 hover:scale-110 active:scale-105 transition
                cursor-pointer" href="/CV.pdf" /*download={true}*/>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>
                <a className="bg-white p-4 text-gray-700 flex
                items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition
                cursor-pointer" href="https://linkedin.com/in/daniel-minhoi-song" target="_blank"><BsLinkedin />
                </a>
                <a className="bg-white p-4 text-gray-700 flex
                items-center gap-2 text-[1.35rem] rounded-full
                focus:scale-[1.15] hover:text-gray-900 hover:scale-[1.15] active:scale-105 transition
                cursor-pointer" href="https://github.com" target="_blank"><FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}