import Projects from "./components/Projects";
import Header from "./components/Header";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900'>
      <Header />

      <main className='max-w-4xl mx-auto px-4 py-10 space-y-20'>
        <section id='hero' className='text-center'>
          <h2 className='text-4xl font-bold mb-4'>Hi, I'm Tyler</h2>
          <p className='text-xl'>
            Software Developer focused on building modern web apps with Python,
            Java, and React.
          </p>
        </section>

        <section id='about'>
          <h2 className='text-3xl font-semibold mb-4'>About Me</h2>
          <p>
            I'm a developer with a focus on backend technologies, including
            Python, Java, Node.js, and SQL databases. I have some experience
            with frontend technologies as well, but I enjoy building scalable
            applications and solving real-world problems through clean and
            efficient code.
          </p>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className='text-center py-6 text-sm text-gray-500'>
        &copy; 2025 Tyler Deans. All rights reserved.
      </footer>
    </div>
  );
}
