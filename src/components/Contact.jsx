const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='text-3xl font-semibold mb-4'>Contact</h2>
      <p>
        You can reach me at{" "}
        <a href='mailto:tylerdeans@proton.me' className='text-blue-600'>
          tylerdeans@proton.me
        </a>{" "}
        , connect on{" "}
        <a
          href='https://www.linkedin.com/in/tylerdeans/'
          className='text-blue-600'
          target='_blank'
        >
          LinkedIn
        </a>
        , or find my Github{" "}
        <a
          href='https://github.com/tylerd92'
          className='text-blue-600'
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
