import React from 'react';
import { Code2, Briefcase, Heart, Music, BookOpen, Film, Globe, Paintbrush } from 'lucide-react';
import { UserInputContext } from '@/app/_context/UserInputContext';
import { useContext } from 'react';

function SelectCategory() {
    const categories = [
        {
            id: 1,
            name: 'Programming',
            icon: <Code2 />,
            prompt: 'Create a course about programming',
        },
        {
            id: 2,
            name: 'Business',
            icon: <Briefcase />,
            prompt: 'Create a course about business',
        },
        {
            id: 3,
            name: 'Health',
            icon: <Heart />,
            prompt: 'Create a course about health & fitness',
        },
        {
            id: 4,
            name: 'Music',
            icon: <Music />,
            prompt: 'Create a course about music',
        },
        {
            id: 5,
            name: 'Literature',
            icon: <BookOpen />,
            prompt: 'Create a course about literature',
        },
        {
            id: 6,
            name: 'Film Making',
            icon: <Film />,
            prompt: 'Create a course about film making',
        },
        {
            id: 7,
            name: 'Travel',
            icon: <Globe />,
            prompt: 'Create a course about travel',
        },
        {
            id: 8,
            name: 'Art & Design',
            icon: <Paintbrush />,
            prompt: 'Create a course about art & design',
        },
        {
            id: 9,
            name: 'Other',
            icon: <Paintbrush />,
            prompt: 'Create a course about other',
        },
    ];

    const {userCourseInput, setUserCourseInput} = useContext(UserInputContext);

    const handleCategoryClick = (categoryName) => {
        setUserCourseInput((prev) => ({...prev, category: categoryName}));
    }
    return (
        <div>
            <label>Select Category</label>
        <div className="overflow-y-auto" >
            <div className="grid grid-rows-2 grid-flow-col gap-10">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className={`flex justify-center items-center flex-col h-[200px] w-[200px] p-10 border rounded-lg hover:shadow-lg hover:cursor-pointer hover:bg-gray-100 ${userCourseInput.category === category.name && `bg-gray-100`}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <div>{category.icon}</div>
                        <div>{category.name}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default SelectCategory;
