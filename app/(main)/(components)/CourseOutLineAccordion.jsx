"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`overflow-hidden bg-white border-[2.5px] shadow-lg rounded-2xl ${isOpen ? 'border-blue-700' : ''}`}>
      <button
        className="flex items-center justify-between w-full p-4 text-lg font-semibold transition bg-gray-100 hover:bg-gray-200"
        onClick={onClick}
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 text-gray-700">{content}</div>
      </motion.div>
    </div>
  );
};

const CourseAccordion = ({ course }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">{course.title}</h2>
      <div className="space-y-4">
        {course.outline.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function CourseOutLineAccordion() {
  const courses = [
    {
      title: "React Mastery",
      outline: [
        { title: "Introduction to React.js", content: "Learn the basics of React.js, including components, state, and props." },
        { title: "React Hooks", content: "Understand React hooks such as useState, useEffect, and custom hooks." },
        { title: "React Router", content: "Explore client-side routing using React Router." },
        { title: "State Management", content: "Manage global state using Context API, Redux, and Zustand." },
        { title: "Tailwind CSS with React", content: "Style your React components using Tailwind CSS." },
        { title: "Framer Motion Animations", content: "Enhance UI interactions with animations using Framer Motion." },
        { title: "React Context API", content: "Learn how to manage state globally using React Context API." },
        { title: "React Performance Optimization", content: "Techniques to optimize the performance of your React applications." },
        { title: "Testing React Applications", content: "Learn how to test your React applications using Jest and React Testing Library." }
      ]
    },
    {
      title: "Advanced React Techniques",
      outline: [
        { title: "Next.js Fundamentals", content: "Learn about file-based routing, server-side rendering, and static site generation." },
        { title: "API Integration in React", content: "Understand how to fetch data using Fetch API, Axios, and React Query." },
        { title: "Authentication in React", content: "Implement authentication with Firebase, NextAuth, and JWT." },
        { title: "Performance Optimization", content: "Improve React app performance with memoization and lazy loading." },
        { title: "Unit Testing in React", content: "Test React components using Jest and React Testing Library." },
        { title: "Deployment Strategies", content: "Deploy React apps using Vercel, Netlify, and traditional servers." },
        { title: "PWA with React", content: "Convert a React app into a Progressive Web App (PWA)." },
        { title: "GraphQL with React", content: "Use Apollo Client to fetch data from a GraphQL API." },
        { title: "Advanced Animations", content: "Create complex animations and interactions with Framer Motion." }
      ]
    }
  ];

  return (
    <div className="mx-auto mt-4 space-y-8 y-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {courses.map((course, index) => (
          <CourseAccordion key={index} course={course} />
        ))}
      </div>
    </div>
  );
}