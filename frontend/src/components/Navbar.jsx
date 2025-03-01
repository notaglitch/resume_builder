import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white px-8 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer">Resume Builder</h1>
      <div className="flex justify-end gap-8">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/templates" className="text-white hover:text-gray-300">Templates</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
      </div>
    </div>
  )
}


export default Navbar;
