import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SectionDivider from './components/SectionDivider';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';

function App(){
  return (
    <>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[35rem] 
      h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
      sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
      xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <Header />
      <main className="flex flex-col items-center px-4">
        
        <Home />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
    
  )
}

export default App
