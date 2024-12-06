'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq, and } from 'drizzle-orm';
import BasicInfo from './_components/BasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
function Page({ params }) {
    const { user, isLoaded } = useUser();
    const [courseId, setCourseId] = useState(null);
    const [courseDetails, setCourseDetails] = useState(null);

    // Unwrap the params to get courseId
    const unwrappedParams = React.use(params);
    const courseIdFromParams = unwrappedParams?.courseId;

    // Set courseId when params.courseId is available
    useEffect(() => {
        if (courseIdFromParams) {
            setCourseId(courseIdFromParams);
        }
    }, [courseIdFromParams]);

    // Fetch course details once user and courseId are available
    useEffect(() => {
        if (isLoaded && user && courseId) {
            getCourse();
        }
    }, [user, isLoaded, courseId]);

    const getCourse = async () => {
        if (user?.primaryEmailAddress?.emailAddress) {
            const result = await db.select().from(CourseList)
                .where(and(
                    eq(CourseList.courseId, courseId),
                    eq(CourseList.createdBy, user.primaryEmailAddress?.emailAddress)
                ));

            // If course data is found, set it to the state
            if (result.length > 0) {
                setCourseDetails(result[0]);
            }
            console.log(result);
        }
    }

    return (
        <div className='mt-10 px-7 md:px-20 lg:px-40 '>
            <h2 className='text-2xl text-center font-bold'>
                Course Layout 
            </h2>
            <BasicInfo courseDetails={courseDetails} />
            <CourseDetail courseDetails={courseDetails} />
            <ChapterList courseDetails={courseDetails} />
        </div>
        
        // <div className="container mx-auto p-6">
        //     {courseDetails ? (
        //         <div className="course-detail">
        //             <h1 className="text-3xl font-semibold mb-4">{courseDetails?.courseOutput?.Course_Name}</h1>
        //             <p className="text-lg mb-6">{courseDetails?.courseOutput?.Description}</p>
                    
        //             <div className="chapters">
        //                 <h2 className="text-2xl font-semibold mb-4">Course Chapters</h2>
        //                 <ul>
        //                     {courseDetails?.courseOutput?.Chapters.map((chapter, index) => (
        //                         <li key={index} className="mb-4">
        //                             <div className="chapter-header flex justify-between">
        //                                 <h3 className="text-xl font-medium">{chapter?.Chapter_Name}</h3>
        //                                 <span className="text-gray-600">{chapter?.Duration}</span>
        //                             </div>
        //                             <p className="text-gray-500">{chapter?.About}</p>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         </div>
        //     ) : (
        //         <p className="text-center text-lg text-gray-500">Loading course details...</p>
        //     )}
        // </div>
    );
}

export default Page;
