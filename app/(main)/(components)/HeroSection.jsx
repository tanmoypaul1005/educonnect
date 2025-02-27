
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionH1, MotionP, MotionSpan } from '@/lib/const';

const HeroSection = () => {
  return (
    <section className="pt-6 space-y-6 md:pb-12 md:pt-10 lg:py-32 grainy">
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
        <MotionSpan
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg"
        >
          Hey, Welcome
        </MotionSpan>
        <MotionH1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold font-heading sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Learn Today, Lead Tomorrow.
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          “You don’t understand anything until you learn it more than one way.”
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/courses" className={cn(buttonVariants({ size: "lg" }))}>
            Explore Now
          </Link>
          <Link
            href="/instructor"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Become An Instructor
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroSection;