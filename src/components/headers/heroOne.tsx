import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeroProps {
    title: string;
    paragraph: string;
    links?: string[];
    imgsrc: string;
    imgalt: string;
}

function HeroOne({ title, paragraph, links, imgsrc, imgalt }: HeroProps) {

    // Ensure links is an array to avoid errors
    links = links || [];
    const linkOne = links[0];
    const linkTwo = links[1];

    // Function to format link path into readable text
    // For example, 'contact-us' becomes 'Contact Us'
    const formatLinkText = (linkPath: string) => {
        if (!linkPath) return '';
        // Split the path by '-', capitalize each part, and join with a space
        return linkPath.split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    };

    const linkOneText = formatLinkText(linkOne);
    const linkTwoText = formatLinkText(linkTwo);

    return (
        <div className="flex flex-col md:flex md:items-center md:justify-center min-h-screen p-5">
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 md:p-4 md:max-w-[1080] md:mx-auto">
                {/* Title on the left side for md screens and up */}
                <h1 className="text-7xl justify-center items-center font-bold md:col-span-1 text-pink-700">
                    {title}
                </h1>
                <div className="flex flex-row md:flex-col gap-2 mt-2 md:mt-0 md:col-span-2 justify-end md:justify-start">
                    {/* Paragraph coming in from the right */}
                    <p className="text-1xl mt-2 md:mt-0 md:col-span-1 md:text-right">
                        {paragraph}
                    </p>

                    {/* Buttons */}

                    {linkOne && (
                        <Link href={linkOne} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {linkOneText}
                        </Link>
                    )}
                    {linkTwo && (
                        <Link href={linkTwo} className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {linkTwoText}
                        </Link>
                    )}
                </div>

                {/* Image */}
                <div className="md:col-span-3">
                    <Image src={imgsrc} alt={imgalt} width={720} height={720} layout="responsive" className="mt-4 md:mt-0" />
                </div>
            </div>
        </div>
    );
}

export default HeroOne;
