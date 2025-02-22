import { CourseProgress } from '@/components/course-progress';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/formatPrice';
import { ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({course}) => {
    return (
        <Link className='transition-transform duration-300 transform rounded shadow-lg hover:scale-105' href={`/courses/${course.id}`}>
            <div className="h-full p-3 overflow-hidden transition border rounded-lg group hover:shadow-sm">
                <div className="relative w-full overflow-hidden rounded-md aspect-video">
                    <Image
                        src="/assets/images/courses/course_1.png"
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

                        <Button
                            variant="ghost"
                            className="gap-1 text-xs text-sky-700 h-7"
                        >
                            Enroll
                            <ArrowRight className="w-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;