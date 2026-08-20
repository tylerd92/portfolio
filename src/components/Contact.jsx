const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='text-3xl font-bold text-gray-900 mb-4'>Contact</h2>
      <p className='text-lg text-gray-600 leading-relaxed'>
        You can reach me at{" "}
        <a
          href='mailto:twdeans@gmail.com'
          className='font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
        >
          twdeans@gmail.com
        </a>
        , connect on{" "}
        <a
          href='https://www.linkedin.com/in/tylerdeans/'
          className='font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
          target='_blank'
        >
          LinkedIn
        </a>
        , or find my Github{" "}
        <a
          href='https://github.com/tylerd92'
          className='font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
          target='_blank'
        >
          page
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;
