const Header = () => {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Tyler Deans</h1>
        {/* <nav className='space-x-4'>
          <a href='#about' className='hover:text-blue-500'>
            About
          </a>
          <a href='#projects' className='hover:text-blue-500'>
            Projects
          </a>
          <a href='#contact' className='hover:text-blue-500'>
            Contact
          </a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
