import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-4xl mx-auto px-4 py-4 flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
        >
          Tyler Deans
        </Link>
        <nav className='space-x-6'>
          <Link
            to='about'
            className='text-sm font-medium text-gray-600 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-sm'
          >
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
