import { CourseProgress } from "@/components/course-progress";
import { SectionTitle } from "@/components/section-title";
import { Button, buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "./courses/components/CourseCard";

const categories = [
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
  {
    id: 5,
    title: "IT & Software",
    thumbnail: "/assets/images/categories/it_software.jpg",
  },
  {
    id: 6,
    title: "Personal Development",
    thumbnail: "/assets/images/categories/personal_development.jpg",
  },
  {
    id: 7,
    title: "Business",
    thumbnail: "/assets/images/categories/business.jpg",
  },
  {
    id: 8,
    title: "Photography",
    thumbnail: "/assets/images/categories/photography.jpg",
  },
  {
    id: 9,
    title: "Music",
    thumbnail: "/assets/images/categories/music.jpg",
  },
];

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
  {
    id: 5,
    title: "IT & Software",
    thumbnail: "/assets/images/categories/it_software.jpg",
  },
  {
    id: 6,
    title: "Personal Development",
    thumbnail: "/assets/images/categories/personal_development.jpg",
  },
  {
    id: 7,
    title: "Business",
    thumbnail: "/assets/images/categories/business.jpg",
  },
  {
    id: 8,
    title: "Photography",
    thumbnail: "/assets/images/categories/photography.jpg",
  },
  {
    id: 9,
    title: "Music",
    thumbnail: "/assets/images/categories/music.jpg",
  },
];

const HomePage = () => {
  return (
    <>
      <section className="pt-6 pb-8 space-y-6 md:pb-12 md:pt-10 lg:py-32 grainy">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 overflow-hidden pointer-events-none -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg">
            Hey, Welcome
          </span>
          <h1 className="text-3xl font-bold font-heading sm:text-5xl md:text-6xl lg:text-7xl">
            Learn Today, Lead Tomorrow.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            “You don’t understand anything until you learn it more than one
            way.”
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/courses" className={cn(buttonVariants({ size: "lg" }))}>
              Explore Now
            </Link>
            <Link
              href=""
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Become An Instructor
            </Link>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section
        id="categories"
        className="container py-8 space-y-6 md:py-12 lg:py-24"
      >
        <div className="flex items-center justify-between">
          <SectionTitle>Categories</SectionTitle>

          <Link
            href={""}
            className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
          >
            Browse All <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid justify-center grid-cols-2 gap-4 mx-auto md:grid-cols-3 2xl:grid-cols-4">
          {categories.map((category) => {
            return (
              <Link
              href={`/categories/${category.id}`}
                key={category.id}
                className="relative p-2 overflow-hidden transition-all duration-500 ease-in-out border rounded-lg bg-background hover:scale-105"
              >
                <div className="flex flex-col items-center justify-between gap-4 p-6 rounded-md">
                  <Image
                    src={category.thumbnail}
                    alt={category.title}
                    width={100}
                    height={100}
                  />
                  <h3 className="font-bold">{category.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="container space-y-6 md:py-12 lg:py-24">
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
    </>
  );
};
export default HomePage;
