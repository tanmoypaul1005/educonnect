import Link from 'next/link';
import React from 'react';

const InstructorCard = ({ instructor }) => (
    <Link href={`/instructor/${instructor?.id}`} className="max-w-sm overflow-hidden transition-transform duration-300 transform bg-white rounded shadow-lg hover:scale-105">
        <img className="object-cover w-full h-48" src={instructor?.image} alt={instructor?.name} />
        <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{instructor?.name}</div>
            <p className="text-base text-gray-700">{instructor?.title}</p>
            <p className="mt-2 text-base text-gray-700">{instructor?.bio}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#instructor</span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#webdev</span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#design</span>
        </div>
    </Link>
);

const InstructorList = () => {
    const instructors = [
        {
            id: 1,
            name: "John Doe",
            title: "Senior Instructor",
            bio: "John has over 10 years of experience in teaching web development and design.",
            image: "https://avatars.githubusercontent.com/u/3633137?v=4"
        },
        {
            id: 1,
            name: "Jane Smith",
            title: "Lead Instructor",
            bio: "Jane specializes in front-end development and has a passion for teaching.",
            image: "https://avatars.githubusercontent.com/u/3633137?v=4"
        },
        {
            id: 1,
            name: "Michael Johnson",
            title: "Instructor",
            bio: "Michael is an expert in back-end development and database management.",
            image: "https://avatars.githubusercontent.com/u/3633137?v=4"
        },
        {
            id: 1,
            name: "Emily Davis",
            title: "Instructor",
            bio: "Emily has a background in graphic design and user experience.",
            image: "https://avatars.githubusercontent.com/u/3633137?v=4"
        },
        {
            id: 1,
            name: "David Wilson",
            title: "Instructor",
            bio: "David is a full-stack developer with a focus on modern JavaScript frameworks.",
            image: "https://avatars.githubusercontent.com/u/3633137?v=4"
        }
    ];

    return (
        <div className="container px-4 py-8 mx-auto">
            <h2 className="mb-8 text-4xl font-bold text-center text-gray-900">Meet Our Instructors</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {instructors.map((instructor, index) => (
                    <InstructorCard
                        key={index}
                        instructor={instructor}
                    />
                ))}
            </div>
        </div>
    );
};

export default InstructorList;