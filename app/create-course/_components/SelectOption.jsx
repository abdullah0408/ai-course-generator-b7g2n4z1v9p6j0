import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { UserInputContext } from '@/app/_context/UserInputContext';
import { useContext } from 'react';
function SelectOption() {
    const {userCourseInput, setUserCourseInput} = useContext(UserInputContext);
    const handleInputChange = (key, value) => {
        setUserCourseInput((prev) => ({...prev, [key]: value}));
    }
  return (
    <div>
        <div className='grid grid-cols-2 gap-10'>
        <div>
            <label>Difficulty Level</label>
            <Select defaultValue={userCourseInput.difficulty} onValueChange={(value) => handleInputChange('difficulty', value)} className="focus:outline-none">
    <SelectTrigger className="p-2 rounded-md border border-gray-300 focus:border-gray-300">
        <SelectValue placeholder="Select Level" />
    </SelectTrigger>
    <SelectContent className="bg-white rounded-md shadow-lg border border-gray-200">
        <SelectGroup>
            <SelectItem
                value="beginner"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                Beginner
            </SelectItem>
            <SelectItem
                value="intermediate"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                Intermediate
            </SelectItem>
            <SelectItem
                value="advanced"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                Advanced
            </SelectItem>
        </SelectGroup>
    </SelectContent>
</Select>


        </div>
        <div>
            <label>Course Duration</label>
            <Select defaultValue={userCourseInput.duration} onValueChange={(value) => handleInputChange('duration', value)} className="focus:outline-none">
    <SelectTrigger className="p-2 rounded-md border border-gray-300 focus:border-gray-300">
        <SelectValue placeholder="Select Duration" />
    </SelectTrigger>
    <SelectContent className="bg-white rounded-md shadow-lg border border-gray-200">
        <SelectGroup>
            <SelectItem
                value="less_than_10"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                Less than 10 Hours    
            </SelectItem>
            <SelectItem
                value="10_hours"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                10 Hours
            </SelectItem>
            <SelectItem
                value="20_hours"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                20 Hours
            </SelectItem>
            <SelectItem
                value="more_than_20"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                More than 20 Hours
            </SelectItem>
            <SelectItem
                value="custom"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                Custom
            </SelectItem>
            

        </SelectGroup>
    </SelectContent>
</Select>


        </div>
        <div>
            <label>Include Video Content</label>
            <Select defaultValue={userCourseInput.videoContent} onValueChange={(value) => handleInputChange('videoContent', value)} className="focus:outline-none">
    <SelectTrigger className="p-2 rounded-md border border-gray-300 focus:border-gray-300">
        <SelectValue placeholder="Select Option" />
    </SelectTrigger>
    <SelectContent className="bg-white rounded-md shadow-lg border border-gray-200">
        <SelectGroup>
            <SelectItem
                value="yes"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                Yes    
            </SelectItem>
            <SelectItem
                value="no"
                className="p-2 hover:bg-gray-100 rounded-md"
            >
                No
            </SelectItem>
        </SelectGroup>
    </SelectContent>
</Select>


        </div>
        <div>
            <label>Number of Chapters</label>
            <Input defaultValue={userCourseInput.numberOfChapters} type='number' placeholder='Enter Number of Chapters' 
            onChange={(e) => handleInputChange('numberOfChapters', e.target.value)}/>
        </div>
        </div>
        
    </div>
  )
}

export default SelectOption