import { SectionTitle } from '@/components/section-title';
import { MotionDiv } from '@/lib/const';
import { instructors } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InstructorCard = ({ instructor }) => (
    <MotionDiv
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="max-w-sm overflow-hidden transition-transform duration-300 transform bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl"
    >
      <Link href={`/instructor/${instructor?.id}`}>
        <div className="relative w-full h-48">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            src={"https://avatars.githubusercontent.com/u/3633137?v=4"}
            alt={instructor?.name}
          />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-gray-900">{instructor?.name}</div>
          <p className="text-base text-gray-700">{instructor?.title}</p>
          <p className="mt-2 text-base text-gray-700">{instructor?.bio}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#instructor</span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#webdev</span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#design</span>
        </div>
      </Link>
    </MotionDiv>
  );

const InstructorList = () => {
    
    return (
        <div className="container">
            <SectionTitle>Meet Our Instructors</SectionTitle>
            <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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












