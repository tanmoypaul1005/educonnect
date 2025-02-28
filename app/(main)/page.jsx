
import { SectionTitle } from "@/components/section-title";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import CourseCard from "./courses/components/CourseCard";
import InstructorList from "../instructor/page";
import TestimonialSlider from "./(components)/TestimonialSlider";
import { courses } from "@/lib/data";
import HeroSection from "./(components)/HeroSection";
import Category from "./(components)/Category";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-10">
     <HeroSection/>
      {/* Categories Section */}
     <Category/>

      {/* Courses */}
      <section id="courses" className="container space-y-6">
        <div className="flex items-center justify-between">
          <SectionTitle>Courses</SectionTitle>
          <Link
            href={"/courses"}
            className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
          >
            Browse All <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {courses.map((category) => {
            return (
              <CourseCard key={category.id} course={category} />
            );
          })}
        </div>
      </section>

      <InstructorList/>

      <TestimonialSlider/>
    </div>
  );
};
export default HomePage;
