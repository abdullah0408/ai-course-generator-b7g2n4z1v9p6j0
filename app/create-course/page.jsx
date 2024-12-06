'use client';
import { useContext, useEffect } from 'react';
import { UserInputContext } from '@/app/_context/UserInputContext';
import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import LoadingDialog from './_components/LoadingDialog';
import { generateCourseLayout_Gemini } from '@/configs/gemini';
import { useUser } from '@clerk/nextjs';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useRouter } from 'next/navigation';

function CreateCourse() {
  const { user } = useUser();
  const router = useRouter();
  const steperOptions = [
    { id: 1, name: 'Category', icon: <FileText /> },
    { id: 2, name: 'Topic & Desc', icon: <FileText /> },
    { id: 3, name: 'Options', icon: <FileText /> },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const checkValidation = () => {
    if (!userCourseInput) return true;

    if (activeStep === 0 && !userCourseInput.category) {
      return true;
    }
    if (activeStep === 1 && !userCourseInput.title) {
      return true;
    }
    if (
      activeStep === 2 &&
      (userCourseInput.difficulty === undefined ||
        userCourseInput.duration === undefined ||
        userCourseInput.videoContent === undefined ||
        userCourseInput.numberOfChapters === undefined)
    ) {
      return true;
    }
    return false;
  };

  const generateCourseLayout = async () => {
    setLoading(true);
  
    const basicPrompt =
      'Generate a course tutorial with the following details: Course Name, Description, along with Chapter Name, About, Duration, and Category:';
    const userInputPrompt = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.title}, Level: ${userCourseInput?.difficulty}, Duration: ${userCourseInput?.duration}, Number of Chapters: ${userCourseInput?.numberOfChapters}, in JSON format like`;
    const jsonPromt = `{"CourseName": "Name of the Course", "Description": "Brief description of the course", "Chapters": [{"ChapterName": "Name of the Chapter", "About": "Brief description of the chapter", "Duration": "Time duration to complete the chapter", "Category": "Category or subject focus of the chapter", "Topic": "Key topics covered in the chapter", "Level": "Difficulty level of the chapter"}]}`
    const prompt = `${basicPrompt} ${userInputPrompt} ${jsonPromt}`;
  
    const result = await generateCourseLayout_Gemini.sendMessage(prompt);
    const text = result.response.candidates[0]?.content?.parts[0]?.text;
  
    const parsedData = JSON.parse(text);
    console.log(parsedData);
    setLoading(false);
    saveCourseLayout(parsedData);
  };

  const saveCourseLayout = async (parsedData) => {
    const id = uuidv4();
    const result = await db.insert(CourseList).values({
      courseId: id,
      level: userCourseInput.difficulty,
      category: userCourseInput.category,
      name: userCourseInput.title,
      courseOutput: parsedData,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      userProfileImage: user?.imageUrl,
    });
    router.push(`/create-course/${id}`);
  }

  return (
    <div>
      <div className='flex flex-col mt-5 justify-between items-center'>
        <h2 className='text-4xl font-bold text-primary'>Create Course</h2>
        <div className='flex gap-5'>
          {steperOptions.map((item, id) => (
            <div className='flex items-center' key={id}>
              <div className='flex flex-col w-[50px] md:w-[100px] items-center gap-2'>
                <div
                  className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center ${
                    activeStep >= id && 'bg-primary'
                  }`}
                >
                  {item.icon}
                </div>
                <div className='hidden md:block'>
                  <h2 className='md:text-sm'>{item.name}</h2>
                </div>
              </div>
              {id !== steperOptions.length - 1 && (
                <div
                  className={`h-1 mb-[12%] w-[50px] md:w-[100px] bg-gray-200 rounded-full lg:w-[170px] ${
                    activeStep - 1 >= id && 'bg-purple-600'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='px-10 md:px-20 lg:px-40 mt-10'>
        {activeStep === 0 && <SelectCategory />}
        {activeStep === 1 && <TopicDescription />}
        {activeStep === 2 && <SelectOption />}
        <div className='flex justify-between mt-10'>
          <Button
            variant='outline'
            disabled={activeStep === 0}
            onClick={() => setActiveStep(activeStep - 1)}
            className={activeStep === 0 && 'invisible'}
          >
            Previous
          </Button>
          <Button
            disabled={activeStep === steperOptions.length - 1 || checkValidation()}
            className={activeStep === 2 && 'invisible'}
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Next
          </Button>

          {activeStep === steperOptions.length - 1 && (
            <Button disabled={checkValidation()} onClick={generateCourseLayout}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
      <div>
        <LoadingDialog loading={loading} />
      </div>
    </div>
  );
}

export default CreateCourse; // Ensure this is the default export
