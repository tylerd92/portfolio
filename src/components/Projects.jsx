const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='text-3xl font-semibold mb-6'>Projects</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        <div className='bg-white shadow rounded-xl p-5'>
          <h3 className='text-xl font-semibold'>Project One</h3>
          <p className='text-sm text-gray-600 mt-2'>
            A web app that does XYZ using React, Flask, and PostgreSQL. Includes
            full CRUD and authentication.
          </p>
          <a
            href='#'
            className='inline-block mt-3 text-blue-600 hover:underline'
          >
            GitHub
          </a>
        </div>
        <div className='bg-white shadow rounded-xl p-5'>
          <h3 className='text-xl font-semibold'>Project Two</h3>
          <p className='text-sm text-gray-600 mt-2'>
            Another cool project description with key highlights.
          </p>
          <a
            href='#'
            className='inline-block mt-3 text-blue-600 hover:underline'
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
