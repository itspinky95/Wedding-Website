import Image from 'next/image';
import React from 'react'

interface StorySectionProps {
    title: string;
    date: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

// Component to render each story section dynamically
export function StorySectionLeft({ title, date, description, imgSrc, imgAlt }: StorySectionProps) {
    return (
        <>
            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="md:flex-1 text-center md:text-left mt-4 md:mt-0">
                    <h4 className="text-xl mb-2">{title}</h4>
                    <p className="text-lg uppercase mb-2">{date}</p>
                    <p className='text-lg'>{description}</p>
                </div>
                <div className='p-4'>
                    <Image src={imgSrc} width={400} height={400} alt={imgAlt} />
                </div>
            </div>
        </>
    );
}

export function StorySectionRight({ title, date, description, imgSrc, imgAlt }: StorySectionProps) {
    return (
        <>
            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className='p-4'>
                    <Image src={imgSrc} width={400} height={400} alt={imgAlt} />
                </div>
                <div className="md:flex-1 text-center md:text-left mt-4 md:mt-0">
                    <h4 className="text-xl mb-2">{title}</h4>
                    <p className="text-lg uppercase mb-2">{date}</p>
                    <p className='text-lg'>{description}</p>
                </div>
            </div>
        </>
    );
}

