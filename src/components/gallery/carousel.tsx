import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface CarouselSizeProps {
    photos: {
        src: string
        width: number
        height: number
    }[]
}

export function CarouselSize({ photos }: CarouselSizeProps) {
    return (
        <Carousel
            opts={{
                align: "center", 
            }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <CarouselNext />   
            <CarouselContent>
                {photos.map((photo, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image src={photo.src} alt={`Photo ${index + 1}`} width={300} height={300} layout="responsive" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
