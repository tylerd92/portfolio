import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold hover:text-blue-500'>
          Tyler Deans
        </Link>
        <nav className='space-x-4'>
          <Link to='about' className='hover:text-blue-500'>
            About
          </Link>
          {/* <Link to='#projects' className='hover:text-blue-500'>
            Projects
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
