import Image from "next/image";

export function MasonryGridGallery() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/nec.jpg"
                        width={720} height={720}
                        alt="gallery-photo"
                    />

                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src="/nec.jpg"
                        width={720} height={720}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
                <div>
                    <Image
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src="/nec.jpg"
                        alt="gallery-photo"
                        width={720} height={720}
                    />
                </div>
            </div>
        </div>
    );
}