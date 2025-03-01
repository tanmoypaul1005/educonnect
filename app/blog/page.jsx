import { SectionTitle } from '@/components/section-title'
import { blogData } from '@/lib/data'
import React from 'react'

function Blog() {

    return (
        <section className="container py-10">
            <SectionTitle>Our latest blog</SectionTitle>
            <div className="flex flex-wrap justify-center mt-6 gap-y-8 lg:gap-y-0 md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">

                {blogData?.map((blog, index) => (
                    <div key={index} className="w-full border border-gray-300 cursor-pointer group max-lg:max-w-xl lg:w-1/3 rounded-2xl">
                        <div className="flex items-center">
                            <img src={blog?.image} alt="blogs tailwind section" className="object-cover w-full rounded-t-2xl" />
                        </div>
                        <div className="p-4 transition-all duration-300 lg:p-6 rounded-b-2xl group-hover:bg-gray-50">
                            <span className="block mb-3 font-medium text-indigo-600">{blog?.date}</span>
                            <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">{blog?.title}</h4>
                            <p className="mb-10 leading-6 text-gray-500">{blog?.description}</p>
                            <a href="javascript:;" className="text-lg font-semibold text-indigo-600 cursor-pointer">Read more..</a>
                        </div>
                    </div>
                ))

                }
            </div>
        </section>
    )
}

export default Blog
