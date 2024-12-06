import React, { useState, useEffect } from 'react';

function BasicInfo({ courseDetails }) {
  const [data, setData] = useState(null);

  // Simulate fetching data, e.g., from an API
  useEffect(() => {
    if (courseDetails) {
      setData(courseDetails);
    }
  }, [courseDetails]);

  // Handle case when data is null
  if (!data) {
    return <div className="text-center text-lg text-gray-500">Loading...</div>;
  }

  const { courseOutput } = data; // Extract courseOutput object
  const { CourseName, Description } = courseOutput; // Extract CourseName and Description from courseOutput

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-xl space-y-6">

        {/* Course Information Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">{CourseName}</h2>
          <p className="mt-4 text-lg text-gray-700">{Description}</p>
        </div>

        {/* Decorative Border */}
        <div className="border-t-4 border-indigo-300 w-16 mx-auto"></div>

        {/* Button or Action Section */}
        <div className="flex justify-center mt-6">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
