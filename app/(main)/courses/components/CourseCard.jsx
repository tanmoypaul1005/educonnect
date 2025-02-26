"use client"
import { CourseProgress } from '@/components/course-progress';
import { formatPrice } from '@/lib/formatPrice';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import EnrollButton from './EnrollButton';
import { useRouter } from 'next/navigation';

const CourseCard = ({ course }) => {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push(`/courses/${course.id}2`)
            }}
            className='transition-transform duration-300 transform rounded shadow-lg cursor-pointer hover:scale-105' >
            <div className="h-full p-3 overflow-hidden transition border rounded-lg group hover:shadow-sm">
                <div className="relative w-full overflow-hidden rounded-md aspect-video">
                    <Image
                        src={course?.thumbnail ?course?.thumbnail : "/assets/images/courses/JavaScript-BCG-Banner-icons.png"}
                        alt={"course"}
                        className="object-cover"
                        fill
                    />
                </div>
                <div className="flex flex-col pt-2">
                    <div className="text-lg font-medium md:text-base group-hover:text-sky-700 line-clamp-2">
                        Reactive Accelerator
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Development
                    </p>
                    <div className="flex items-center my-3 text-sm gap-x-2 md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                            <div>
                                <BookOpen className="w-4" />
                            </div>
                            <span>4 Chapters</span>
                        </div>
                    </div>

                    <CourseProgress
                        size="sm"
                        value={80}
                        variant={110 === 100 ? "success" : ""}
                    />

                    <div className="flex items-center justify-between mt-4">
                        <p className="font-medium text-md md:text-sm text-slate-700">
                            {formatPrice(49)}
                        </p>

                        <EnrollButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;