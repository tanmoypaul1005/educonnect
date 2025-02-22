import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryCard({category}) {
    return (
        <Link
            href="/courses"
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
    )
}

export default CategoryCard
