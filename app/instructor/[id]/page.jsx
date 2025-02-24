import CourseCard from "@/app/(main)/courses/components/CourseCard";
import { CourseProgress } from "@/components/course-progress";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import {
  ArrowRight,
  ArrowRightIcon,
  BookOpen,
  MessageSquare,
  Presentation,
  Star,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const courses = [
  {
    id: 1,
    title: "Design",
    thumbnail: "/assets/images/categories/design.jpg",
  },

  {
    id: 3,
    title: "Development",
    thumbnail: "/assets/images/categories/development.jpg",
  },
  {
    id: 4,
    title: "Marketing",
    thumbnail: "/assets/images/categories/marketing.jpg",
  },
];
const InstructorProfile = () => {
  return (
    <section id="categories" className="py-6 space-y-6 lg:py-12">
      <div className="container grid grid-cols-12 lg:gap-x-8 gap-y-8">
        {/* Instructor Info */}
        <div className="col-span-12 lg:col-span-4 ">
          <div className="p-6 bg-white shadow rounded-2xl">
            <div className="mb-6">
              <div className="mx-auto mb-5 overflow-hidden rounded-full w-36 h-36">
                <img
                  src="https://avatars.githubusercontent.com/u/3633137?v=4"
                  alt=""
                  className="object-cover w-full h-full rounded"
                />
              </div>

              <div>
                <h4 className="text-xl text-center lg:text-2xl">
                  Tapas Adhikary
                </h4>
                <div className="mb-6 text-sm font-medium text-center text-gray-600">
                  Senior Software Engineer
                </div>
                <ul className="grid flex-wrap items-center grid-cols-1 gap-3 text-sm font-medium text-gray-600 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-4">
                  <li className="flex items-center space-x-3">
                    <Presentation className="w-4 text-gray-600" />
                    <div>10+ Courses</div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <UsersRound className="w-4 text-gray-600" />
                    <div>2k+ Students</div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MessageSquare className="w-4 text-gray-600" />
                    <div>1500+ Reviews</div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-4 text-gray-600" />
                    <div>4.9 Average Rating</div>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-xs leading-[1.8]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend.
            </p>
          </div>
        </div>
        {/* Courses */}
        <div className="col-span-12 lg:col-span-8">
          <div>
            <SectionTitle className="mb-6">Courses</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {courses.map((category) => {
                return (
                  <CourseCard key={category.id} course={category} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InstructorProfile;
