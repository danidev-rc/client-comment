import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='fixed top-0 w-full z-50 bg-black text-white'>
      <nav className='container mx-auto flex justify-between items-center py-4'>
        <h1 className='text-2xl font-bold'>APP</h1>
        <ul className='flex space-x-4'>
          <li>
            <Link to='/' className='hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/login' className='hover:underline'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/register' className='hover:underline'>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
