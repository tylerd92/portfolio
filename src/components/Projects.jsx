const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='text-3xl font-semibold mb-6'>Featured Projects</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-white shadow rounded-xl p-5'>
          <h3 className='text-xl font-semibold'>Chat App</h3>
          <p className='text-sm text-gray-600 mt-2'>
            A real-time chat application built with Node.js, Express, and Socket.io (web sockets).
            Users can join rooms and send messages to each other in real-time.
          </p>
          <a
            href='https://github.com/tylerd92/node-chat-app'
            className='inline-block mt-3 text-blue-600 hover:underline'
            target="_blank"
          >
            GitHub
          </a>
          <a
            href='https://node-chat-app-tylerd92.onrender.com/'
            className='inline-block ml-3 text-blue-600 hover:underline'
            target="_blank"
          >
            Live Demo
          </a>
        </div>
        {/* <div className='bg-white shadow rounded-xl p-5'>
          <h3 className='text-xl font-semibold'>Calculator App</h3>
          <p className='text-sm text-gray-600 mt-2'>
            TBD
          </p>
          <a
            href='#'
            className='inline-block mt-3 text-blue-600 hover:underline'
          >
            Live Demo
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
