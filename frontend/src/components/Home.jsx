import { Link } from 'react-router-dom';
import { DocumentDuplicateIcon, PencilIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Home = () => {
    return (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Create Your Professional Resume
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Choose from multiple professional templates, fill in your details, and download your perfect resume in minutes.
            </p>
            <div className="mt-8">
              <Link
                to="/templates"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:text-lg"
              >
                Browse Templates
              </Link>
            </div>
          </div>
  
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white mx-auto">
                <DocumentDuplicateIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Multiple Templates</h3>
              <p className="mt-2 text-base text-gray-500">
                Choose from our collection of professionally designed templates
              </p>
            </div>
  
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white mx-auto">
                <PencilIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Easy to Edit</h3>
              <p className="mt-2 text-base text-gray-500">
                Simple and intuitive interface to input your information
              </p>
            </div>
  
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white mx-auto">
                <ArrowDownTrayIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Export Options</h3>
              <p className="mt-2 text-base text-gray-500">
                Download your resume in PDF or Word format
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Home;