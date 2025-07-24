const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='text-3xl font-semibold mb-4'>Contact</h2>
      <p>
        You can reach me at{" "}
        <a href='mailto:tyler@example.com' className='text-blue-600'>
          tyler@example.com
        </a>{" "}
        or connect on{" "}
        <a
          href='https://www.linkedin.com/in/tylerdeans/'
          className='text-blue-600'
          target='_blank'
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;
