import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Course from "@/app/(main)/courses/[course]/components/Course";
import { CourseSidebarMobile } from "@/app/(main)/courses/[course]/components/course-sidebar-mobile";
import { CourseSidebar } from "@/app/(main)/courses/[course]/components/course-sidebar";
import Testimonials from "./components/Testimonials";
import RelatedCourse from "./components/RelatedCourse";
import Overview from "./components/Overview";
import Curriculum from "./components/Curriculum";
import InstructorInfo from "./components/InstructorInfo";


const SingleCoursePage = () => {
  return (
    <>
      <div className="container flex w-full">
        <div className="h-[80px] lg:pl-96 fixed top-8 left-2 inset-y-0 w-full z-50">
          <div>
            {/* Course Sidebar For Mobile */}
            <CourseSidebarMobile />
            {/* <NavbarRoutes /> */}
          </div>
        </div>
        <div className="inset-y-0 flex-col hidden h-full lg:flex w-96">
          <CourseSidebar />
        </div>
        <main className="w-full h-full"> <Course /></main>
      </div>

      <div className="overflow-x-hidden grainy">
        {/* <section className="pt-12 sm:pt-16">
          <div className="container">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="px-6 text-lg text-gray-600 font-inter">
                  Master React JS & Next JS
                </h1>
                <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                  <span className="relative inline-flex sm:inline">
                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                    <span className="relative">Reactive Accelerator </span>
                  </span>
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  <Link href="/categories/1" className={cn(buttonVariants({ size: "lg" }))}>
                    Enroll Now
                  </Link>
                  <Link
                    href=""
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" })
                    )}
                  >
                    See Intro
                  </Link>
                </div>
              </div>
            </div>

            <div className="pb-12 mt-6">
              <div className="relative">
                <div className="absolute inset-0 h-2/3"></div>
                <div className="relative mx-auto">
                  <div className="lg:max-w-3xl lg:mx-auto">
                    <Image
                      className="w-full rounded-lg"
                      width={768}
                      height={463}
                      src="/assets/images/courses/course_1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>


      <section className="py-5">
        <div className="container">
          <span className="bg-success px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
            Development
          </span>
          <h3 className="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
            Reactive Accelerator
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Master React JS & Next JS
          </p>
          <div className="flex flex-col gap-5 mt-6 sm:items-center sm:flex-row sm:gap-6 md:gap-20">
            <div className="flex items-center gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src="https://avatars.githubusercontent.com/u/3633137?v=4"
                alt="saha"
              />
              <p className="font-bold">Tapas Adhikary</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-success">Last Updated: </span>
              <span>Feb 22, 2022</span>
            </div>
          </div>

          {/* Tab */}
          <div className="my-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Carriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
              </TabsList>
              <Overview/>
              <Curriculum/>
              <InstructorInfo/>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
      {/* Related Course */}
      <RelatedCourse />
    </>
  );
};
export default SingleCoursePage;
