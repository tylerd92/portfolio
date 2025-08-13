import Header from "../components/Header";

const About = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-10 space-y-20'>
        <section id='about-intro' className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>About Me</h1>
          <p className='text-xl'>
            Software Developer with a passion for building modern web applications and solving real-world problems.
          </p>
        </section>

        <section id='background'>
          <h2 className='text-3xl font-semibold mb-4'>Background</h2>
          <p className='text-lg mb-4'>
            I am a software developer with a passion for building web applications. I specialize in backend development using Python and Java, and I have experience with frontend technologies like React and TailwindCSS.
          </p>
          <p className='text-lg'>
            In my projects, I focus on writing clean, efficient code and creating user-friendly interfaces. I have been working as a developer for five years and enjoy learning new technologies and improving my skills.
          </p>
        </section>

        <section id='skills'>
          <h2 className='text-3xl font-semibold mb-4'>Skills</h2>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 text-lg'>
            <li className='bg-white p-3 rounded-lg shadow-sm'>Python</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>Java</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>JavaScript</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>FastAPI</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>Spring</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>Flask</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>Docker</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>MySQL</li>
            <li className='bg-white p-3 rounded-lg shadow-sm'>Git</li>
          </ul>
        </section>
      </main>

      <footer className='text-center py-6 text-sm text-gray-500'>
        &copy; 2025 Tyler Deans. All rights reserved.
      </footer>
    </div>
  );
}

export default About;