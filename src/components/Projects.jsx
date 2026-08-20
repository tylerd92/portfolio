const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='text-3xl font-bold text-gray-900 mb-6'>Featured Projects</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5'>
          <h3 className='text-xl font-semibold text-gray-900'>Calculator App</h3>
          <p className='text-sm text-gray-600 mt-2 leading-relaxed'>
            A calculator application built with Python, FastAPI, JavaScript,
            TailwindCSS, and HTML. Users can create an account and perform basic
            arithmetic operations.
          </p>
          <a
            href='https://github.com/tylerd92/calculator_final_project'
            className='inline-block mt-3 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
            target='_blank'
          >
            GitHub
          </a>
        </div>
        <div className='bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5'>
          <h3 className='text-xl font-semibold text-gray-900'>Chat App</h3>
          <p className='text-sm text-gray-600 mt-2 leading-relaxed'>
            A real-time chat application built with Node.js, Express, and
            Socket.io (web sockets). Users can join rooms and send messages to
            each other in real-time.
          </p>
          <a
            href='https://github.com/tylerd92/node-chat-app'
            className='inline-block mt-3 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
            target='_blank'
          >
            GitHub
          </a>
          <a
            href='https://node-chat-app-tylerd92.onrender.com/'
            className='inline-block ml-3 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
            target='_blank'
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
