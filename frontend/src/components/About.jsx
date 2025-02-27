const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Resume Builder
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We help professionals create stunning resumes that stand out from the crowd
          </p>
        </div>

        <div className="mt-16">
          <div className="prose prose-lg mx-auto text-gray-500">
            <p className="mb-8">
              Resume Builder is a powerful tool designed to help job seekers create professional, eye-catching resumes with ease. Our platform combines beautiful design with practical functionality to ensure your resume makes the right impression.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">About the Developer</h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="https://avatars.githubusercontent.com/u/178072799?v=4" 
                  alt="Developer Profile" 
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Ghafoor Nazari</h3>
              <p className="mb-4">
              Self Taught Developer and Cybersecurity Enthusiast
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/notaglitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                >
                  Visit My GitHub
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Project Features</h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-4">Professional Templates</li>
              <li className="mb-4">User-friendly interface that makes resume creation effortless</li>
              <li className="mb-4">Multiple export options to suit your needs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
