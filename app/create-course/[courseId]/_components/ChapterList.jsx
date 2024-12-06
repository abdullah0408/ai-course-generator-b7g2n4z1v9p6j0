import React from 'react';
import { FaBookOpen, FaCheckCircle } from 'react-icons/fa';

function ChapterList({ courseDetails }) {
  const { courseOutput } = courseDetails || {};
  const { Chapters } = courseOutput || {};

  return (
    <div className="p-5">
      <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold">Chapters</h2>
        <div className="mt-4">
          {Chapters?.map((chapter, index) => (
            <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow flex items-center justify-between">
              <div className="flex items-center">
                <FaBookOpen className="text-3xl text-blue-500 flex-none" /> {/* Prevent icon resizing */}
                <div className="ml-4 flex-1"> {/* Allow text to grow */}
                  <h3 className="font-semibold text-lg">{chapter.ChapterName}</h3>
                  <p className="text-sm text-gray-600 mt-2">{chapter.About}</p>
                </div>
              </div>
              <FaCheckCircle className="text-3xl text-gray-500 flex-none" /> {/* Prevent icon resizing */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChapterList;
