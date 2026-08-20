import Header from "../components/Header";

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-900'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-10 space-y-20'>
        <section id='about-intro' className='text-center py-8'>
          <h1 className='text-5xl font-extrabold tracking-tight text-gray-900 mb-4'>About Me</h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Software Developer with a passion for building modern web applications and solving real-world problems.
          </p>
        </section>

        <section id='background'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Background</h2>
          <p className='text-lg text-gray-600 leading-relaxed mb-4'>
            I am a software developer with a passion for building web applications. I specialize in backend development using Python and Java, and I have experience with frontend technologies like React and TailwindCSS.
          </p>
          <p className='text-lg text-gray-600 leading-relaxed'>
            In my projects, I focus on writing clean, efficient code and creating user-friendly interfaces. I have been working as a developer for five years and enjoy learning new technologies and improving my skills.
          </p>
        </section>

        <section id='skills'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Skills</h2>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 text-lg'>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>Python</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>Java</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>JavaScript</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>FastAPI</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>Spring</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>Flask</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>Docker</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>MySQL</li>
            <li className='bg-white p-3 rounded-lg shadow-sm ring-1 ring-gray-100 text-center font-medium text-gray-700 transition-colors hover:text-brand-600 hover:ring-brand-200'>Git</li>
          </ul>
        </section>
      </main>

      <footer className='text-center py-8 text-sm text-gray-400 border-t border-gray-100 mt-10'>
        &copy; 2025 Tyler Deans. All rights reserved.
      </footer>
    </div>
  );
}

export default About;