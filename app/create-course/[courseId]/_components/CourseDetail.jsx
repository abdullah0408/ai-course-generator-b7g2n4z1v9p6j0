import React from 'react';
import { FaVideo, FaTrophy, FaListUl, FaBook } from 'react-icons/fa';

const CourseDetail = ({ courseDetails }) => {
  const { level, category } = courseDetails || {};
  const { courseOutput } = courseDetails || {};
  const { Chapters = [], includeVideo } = courseOutput || {};

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">

        {/* Course Information Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Course Details</h2>
          <p className="text-gray-500">Get to know more about the course structure and content.</p>
        </div>

        {/* Grid Layout for Course Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-between">
            <FaListUl className="text-2xl text-indigo-600" aria-label="Chapters" />
            <span className="ml-4 text-lg font-medium text-gray-700">{Chapters.length} {Chapters.length === 1 ? 'Chapter' : 'Chapters'}</span>
          </div>
          <div className="bg-teal-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-between">
            <FaVideo className="text-2xl text-teal-600" aria-label="Video availability" />
            <span className="ml-4 text-lg font-medium text-gray-700">
              {includeVideo === "Yes" ? "Video Available" : "No Videos"}
            </span>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-between">
            <FaTrophy className="text-2xl text-yellow-500" aria-label="Level" />
            <span className="ml-4 text-lg font-medium text-gray-700">{level || "No Level"}</span>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-between">
            <FaBook className="text-2xl text-purple-600" aria-label="Category" />
            <span className="ml-4 text-lg font-medium text-gray-700">{category || "No Category"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
