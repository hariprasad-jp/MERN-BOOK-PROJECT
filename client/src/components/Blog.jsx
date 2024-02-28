import React from 'react'

const Blog = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center mt-12">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Replace the placeholders below with actual blog posts */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Best Books in 2024</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis sem sit amet quam vehicula, id accumsan ex congue.
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">
            Read More
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Best Authors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis sem sit amet quam vehicula, id accumsan ex congue.
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">
            Read More
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Award winning Books</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis sem sit amet quam vehicula, id accumsan ex congue.
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog