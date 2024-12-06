import React from 'react'
import {useContext, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UserInputContext } from '@/app/_context/UserInputContext';
function TopicDescription() {
    const {userCourseInput, setUserCourseInput} = useContext(UserInputContext);
    const handleInputChange = (key, value) => {
        setUserCourseInput((prev) => ({...prev, [key]: value}));
    }

  return (
    <div>
        <div className='mt-5'>
            <label>enter the topic on which you want to create a course</label>
        <Input placeholder='Enter Topic' 
        defaultValue={userCourseInput.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}/>
        </div>
        <div className='mt-5'>
            <label>enter the description of the course</label>
            <Textarea placeholder='Enter Description' 
            defaultValue={userCourseInput.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}/>
        </div>
    </div>
  )
}

export default TopicDescription