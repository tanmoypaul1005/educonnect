import React from "react";

const TestimonialSlider = () => {
    return (
        <div className="container px-4 mx-auto">
            {/* bg-slate-900 */}
            <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                <div className="mb-10 space-y-5 md:mb-10 md:text-center">
                    <div className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                        Words from Others
                    </div>
                    <h1 className="mb-5 text-3xl font-semibold text-gray-500 md:text-center md:text-5xl">
                        Its not just us.
                    </h1>
                    <p className="text-xl text-gray-500 md:text-center md:text-2xl">
                        Heres what others have to say about us.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <ul className="space-y-8">
                    <li className="text-sm leading-6">
                        <TestimonialCard
                            name="Kanye West"
                            title="Rapper &amp; Entrepreneur"
                            image="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                            testimonial="Find God."
                        />
                    </li>
                    <li className="text-sm leading-6">
                        <TestimonialCard
                            name="Tim Cook"
                            title="CEO of Apple"
                            image="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            testimonial="Diam quis enim lobortis scelerisque fermentum dui
                                        faucibus in ornare. Donec pretium vulputate sapien nec
                                        sagittis aliquam malesuada bibendum."
                        />
                    </li>
                    <li className="text-sm leading-6">

                        <TestimonialCard
                            name="Kanye West"
                            title="Rapper &amp; Entrepreneur"
                            image="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                            testimonial="Find God."
                        />
                    </li>
                    <li className="text-sm leading-6">
                        <TestimonialCard
                            name="Tim Cook"
                            title="CEO of Apple"
                            image="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            testimonial="Diam quis enim lobortis scelerisque fermentum dui
                                        faucibus in ornare. Donec pretium vulputate sapien nec
                                        sagittis aliquam malesuada bibendum."
                        />
                    </li>
                </ul>

                <ul className="hidden space-y-8 sm:block">
                    <li className="text-sm leading-6">
                        <TestimonialCard 
                            name="Kanye West"
                            title="CEO of Twitter"
                            image="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            testimonial=" Enim neque volutpat ac tincidunt vitae semper. Mattis
                                        aliquam faucibus purus in massa tempor. Neque vitae
                                        tempus quam pellentesque nec. Turpis cursus in hac
                                        habitasse platea dictumst."
                        />
                    </li>
                    <li className="text-sm leading-6">
                    <TestimonialCard
                            name="Tim Cook"
                            title="CEO of Apple"
                            image="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            testimonial="Diam quis enim lobortis scelerisque fermentum dui
                                        faucibus in ornare. Donec pretium vulputate sapien nec
                                        sagittis aliquam malesuada bibendum."
                        />
                    </li>
                    <li className="text-sm leading-6">
                    <TestimonialCard 
                            name="Kanye West"
                            title="CEO of Twitter"
                            image="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            testimonial=" Enim neque volutpat ac tincidunt vitae semper. Mattis
                                        aliquam faucibus purus in massa tempor. Neque vitae
                                        tempus quam pellentesque nec. Turpis cursus in hac
                                        habitasse platea dictumst."
                        />
                    </li>
                    <li className="text-sm leading-6">
                    <TestimonialCard
                            name="Tim Cook"
                            title="CEO of Apple"
                            image="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                            testimonial="Diam quis enim lobortis scelerisque fermentum dui
                                        faucibus in ornare. Donec pretium vulputate sapien nec
                                        sagittis aliquam malesuada bibendum."
                        />
                    </li>
                </ul>

                <ul className="hidden space-y-8 lg:block">
                    <li className="text-sm leading-6">
                        <div className="relative group">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <a
                                href="https://twitter.com/satyanadella"
                                className="cursor-pointer"
                            >
                                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                                            alt="Satya Nadella"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Satya Nadella
                                            </h3>
                                            <p className="text-gray-500 text-md">
                                                CEO of Microsoft
                                            </p>
                                        </div>
                                    </div>
                                    <p className="leading-normal text-gray-300 text-md">
                                        Tortor dignissim convallis aenean et tortor at. At
                                        ultrices mi tempus imperdiet nulla malesuada. Id cursus
                                        metus aliquam eleifend mi. Quis ipsum suspendisse
                                        ultrices gravida dictum fusce ut.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className="text-sm leading-6">
                        <div className="relative group">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <a
                                href="https://twitter.com/dan_schulman"
                                className="cursor-pointer"
                            >
                                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                                            alt="Dan Schulman"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Dan Schulman
                                            </h3>
                                            <p className="text-gray-500 text-md">CEO of PayPal</p>
                                        </div>
                                    </div>
                                    <p className="leading-normal text-gray-300 text-md">
                                        Quam pellentesque nec nam aliquam sem et tortor
                                        consequat id. Enim sit amet venenatis urna cursus.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className="text-sm leading-6">
                        <div className="relative group">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <a
                                href="https://twitter.com/satyanadella"
                                className="cursor-pointer"
                            >
                                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                                            alt="Satya Nadella"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Satya Nadella
                                            </h3>
                                            <p className="text-gray-500 text-md">
                                                CEO of Microsoft
                                            </p>
                                        </div>
                                    </div>
                                    <p className="leading-normal text-gray-300 text-md">
                                        Tortor dignissim convallis aenean et tortor at. At
                                        ultrices mi tempus imperdiet nulla malesuada. Id cursus
                                        metus aliquam eleifend mi. Quis ipsum suspendisse
                                        ultrices gravida dictum fusce ut.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li className="text-sm leading-6">
                        <div className="relative group">
                            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                            <a
                                href="https://twitter.com/dan_schulman"
                                className="cursor-pointer"
                            >
                                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                                            alt="Dan Schulman"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Dan Schulman
                                            </h3>
                                            <p className="text-gray-500 text-md">CEO of PayPal</p>
                                        </div>
                                    </div>
                                    <p className="leading-normal text-gray-300 text-md">
                                        Quam pellentesque nec nam aliquam sem et tortor
                                        consequat id. Enim sit amet venenatis urna cursus.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TestimonialSlider;


const TestimonialCard = ({
    name,
    title,
    image,
    testimonial,
}) => {
    return (
        <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
                href="https://twitter.com/tim_cook"
                className="cursor-pointer"
            >
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-100 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                        <img
                            src={image}
                            className="w-12 h-12 bg-center bg-cover border rounded-full"
                            alt="Tim Cook"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-muted-foreground">
                                {name}
                            </h3>
                            <p className="text-gray-500 text-md">{title}</p>
                        </div>
                    </div>
                    <p className="leading-normal text-muted-foreground text-md">
                        {testimonial}
                    </p>
                </div>
            </a>
        </div>
    )
}