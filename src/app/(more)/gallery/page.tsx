import { CarouselSize } from '@/components/gallery/carousel'
import React from 'react'

const photos = [
    {
        src: '/alex2.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/alexAria.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/AriaTwo.jpg',
        width: 4,
        height: 3
    },
    {
        src: '/ariaalexdog.jpeg',
        width: 3,
        height: 4
    },
    {
        src: '/christmas.jpg',
        width: 3,
        height: 4
    },
    {
        src: '/Dee.jpg',
        width: 3,
        height: 4
    },
    {
        src: '/DeeScott.jpg',
        width: 3,
        height: 4
    },
    {
        src: '/nec.jpg',
        width: 3,
        height: 4
    },
]


function page() {


    return (
        <div>
            <CarouselSize photos={photos} />
        </div>
    )
}

export default page