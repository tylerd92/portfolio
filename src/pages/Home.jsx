import Projects from "../components/Projects";
import Header from "../components/Header";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-10 space-y-20'>
        <section id='hero' className='text-center py-8'>
          <h2 className='text-5xl font-extrabold tracking-tight text-gray-900 mb-4'>
            Hi, I'm <span className='text-brand-600'>Tyler</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Software Developer focused on building modern web apps with
            JavaScript, Python, Java, and React.
          </p>
        </section>

        <section id='about'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>About Me</h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            I'm a developer with a focus on backend technologies, including
            JavaScript, Java, Python, Node.js, and SQL databases. I have some
            experience with frontend technologies as well, but I enjoy building
            scalable applications and solving real-world problems through clean
            and efficient code.
          </p>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className='text-center py-8 text-sm text-gray-400 border-t border-gray-100 mt-10'>
        &copy; 2025 Tyler Deans. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
