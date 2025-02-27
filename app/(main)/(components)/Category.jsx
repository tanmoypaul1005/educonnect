import React from 'react';
import CategoryCard from './CategoryCard';
import { SectionTitle } from '@/components/section-title';
import { categories } from '@/lib/data';

const Category = () => {
    return (
        <section
            id="categories"
            className="container space-y-6"
        >
            <div className="flex items-center">
                <SectionTitle>Categories</SectionTitle>
            </div>
            <div className="grid justify-center grid-cols-2 gap-4 mx-auto md:grid-cols-3 2xl:grid-cols-4">
                {categories?.map((category) => {
                    return (
                        <CategoryCard key={category.id} category={category} />
                    );
                })}
            </div>
        </section>
    );
};

export default Category;