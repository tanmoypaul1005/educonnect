"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation'
import React from 'react'

function EnrollButton() {

    const router = useRouter();

    const handleButtonClick = (e) => {

    }

    return (
        <div onClick={(e) => {
            e.stopPropagation();
            router.push('/categories/1');
        }}>

            <Button

                variant="ghost"
                className="gap-1 text-xs text-sky-700 h-7"
            >
                Enroll
                <ArrowRight className="w-3" />
            </Button>
        </div>
    )
}

export default EnrollButton
