import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hooks';


export default function About() {
    // const {ref, inView} = useInView({
    //     threshold: 0.80,
    // });
    // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000){
    //         setActiveSection("About");
    //     }
    // }, [inView, setActiveSection, timeOfLastClick]);
    const { ref } = useSectionInView('About', 0.8);

    return (
        <motion.section ref = {ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
        scroll-mt-28"
        initial = {{ opacity: 0, y:100 }}
        animate = {{ opacity: 1, y: 0}}
        transition = {{ delay: 0.175}}
        id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p>
                Hi. I&apos;m Daniel(Min Hoi) Song and I&apos;m interested in solving problems happening in real word using computer. 
            </p>
        </motion.section>
    )
}
