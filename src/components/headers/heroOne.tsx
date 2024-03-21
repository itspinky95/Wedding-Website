// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// interface HeroProps {
//     title: string;
//     paragraph: string;
//     links?: string[];
//     imgsrc: string;
//     imgalt: string;
// }

// function HeroOne({ title, paragraph, links, imgsrc, imgalt }: HeroProps) {

//     // Ensure links is an array to avoid errors
//     links = links || [];
//     const linkOne = links[0];
//     const linkTwo = links[1];

//     // Function to format link path into readable text
//     // For example, 'contact-us' becomes 'Contact Us'
//     const formatLinkText = (linkPath: string) => {
//         if (!linkPath) return '';
//         // Split the path by '-', capitalize each part, and join with a space
//         return linkPath.split('-')
//             .map(part => part.charAt(0).toUpperCase() + part.slice(1))
//             .join(' ');
//     };

//     const linkOneText = formatLinkText(linkOne);
//     const linkTwoText = formatLinkText(linkTwo);

//     return (
//         <div className="flex flex-col md:flex md:items-center md:justify-center min-h-screen p-5">
//             <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-4 md:p-4 md:max-w-[1080] md:mx-auto">
//                 {/* Title on the left side for md screens and up */}
//                 <h1 className="text-2xl md:text-7xl justify-center items-center font-bold md:col-span-1 p-8 text-pink-700">
//                     {title}
//                 </h1>
//                 <div className="md:flex flex-row md:flex-col gap-2 mt-2 md:mt-0 md:col-span-2 justify-end md:justify-start p-2">
//                     {/* Paragraph coming in from the right */}
//                     <p className="text-1xl mt-2 md:mt-0 md:col-span-1 md:text-right">
//                         {paragraph}
//                     </p>

//                     {/* Buttons */}

//                     {links && (
//                         <div className='justify-center items-center align-middle text-center p-8' >

//                             <Link href={linkOne} className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition-transform duration-200 m-2">
//                                 {linkOneText}
//                             </Link>

//                             <Link href={linkTwo} className="hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2" >
//                                 {linkTwoText}
//                             </Link>
//                         </div>
//                     )}
//                 </div>

//                 {/* Image */}
//                 <div className="md:col-span-3">
//                     <Image src={imgsrc} alt={imgalt} width={720} height={720} layout="responsive" className="mt-4 md:mt-0" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HeroOne;

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

    links = links || [];
    const linkOne = links[0];
    const linkTwo = links[1];

    const formatLinkText = (linkPath: string) => {
        if (!linkPath) return '';
        return linkPath.split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    };

    const linkOneText = formatLinkText(linkOne);
    const linkTwoText = formatLinkText(linkTwo);

    return (
        <div className="flex flex-col md:flex md:items-center md:justify-center max-h-screen p-5 relative">
            {/* Image positioned absolutely to act as the background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image src={imgsrc} alt={imgalt} layout="fill" objectFit="cover" quality={100} />
            </div>

            {/* Content with higher z-index */}
            <div className="z-10 flex flex-col md:flex mt-10 min-h-screen p-5">
                <div className="flex flex-col  md:gap-4 md:p-4 md:max-w-[1080] md:mx-auto">
                    {/* Title on the left side for md screens and up */}
                    <h1 className="text-2xl md:text-7xl  font-bold md:col-span-1 p-8 ">
                        {title}
                    </h1>
                    <div className="md:flex flex-row md:flex-col gap-2 mt-2 md:mt-0 md:col-span-2 justify-end md:justify-start p-2">
                        {/* Paragraph coming in from the right */}
                        <p className="text-1xl mt-2 md:mt-0 md:col-span-1 md:text-right">
                            {paragraph}
                        </p>
                        {/* Buttons */}
                        {links && (
                            <div className='flex justify-center items-center align-middle text-center md:p-8' >
                                <Link href={linkOne} className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded transition-transform duration-200 m-2">
                                    {linkOneText}
                                </Link>
                                <Link href={linkTwo} className="hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2" >
                                    {linkTwoText}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HeroOne;
