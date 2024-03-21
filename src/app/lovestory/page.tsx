
import { StorySectionLeft, StorySectionRight } from '@/components/Story/storysection'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {


    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl text-pink-500">Our Love Story</h1>
            </div>
            {/* Tinder Section */}
            <StorySectionRight title="Two People Swiped Right" date="01 March 2022" description="It started when two people swipped right due to Scott working in Swindon And surrounding area for his job at Virgin Media and Deanna having her distance
            set so high. They managad to match, maybe it was the coloured hair for both of them, maybe it was his bike and husky for her." imgSrc="/tinder.png" imgAlt="Tinder Logo" />

            <StorySectionLeft title="First Meet" date="02 April 2022" description="After a couple of weeks talking and moving over to snapchat, on the saturday after a days work scott was talking to dee about her evening. send her the Panda Hug
            me Pen photo and while sitting at home alone without the kids Dee Agreed. after a short
            hour and half ride Scott arrived unable to get on the new build panicing tht he had been stood up. thankfully dee shared her location and showed him the way." imgSrc="/ThePen.webp" imgAlt="Panda Hug Me Pen" />

            <StorySectionRight title="First Date" date="30 April 2022" description="After a days work scott got one the bike and shoot down to take dee out to dinner, for th first time in his life he had booked a table at gigglingsquid but as per normal booked for the wrong time. so to wash some time they both went for drinks at Wetherspoons sat having a couple more drinks then they should scott spent 5 minutes at dinner trying to order a prawn cocktail from a thai tapas place, when dee finally broke him and said i think he means prawn crackers at least it made the waiters night." imgSrc="/GigglingSquid.jpg" imgAlt="Giggling Squid" />

            <StorySectionLeft title="Family Got Bigger" date="29 July 2022" description="The Day their own Fmaily started they got Hunter their American Akita." imgSrc="/ariaalexdog.jpeg" imgAlt="Aria and Alex with Hunter" />

            <StorySectionRight title="Halloween weekend away in Weymouth" date="28 october 2022" description="Scott and Dee embarked on their first family holiday with their kids, Alex and Aria, creating unforgettable memories together. It was a weekend of fun and laughter, with the kids enjoying the beach building snadcastle, running in the sea, going swimming, late night walks on the beach and the arcades was a hit with them. The kids also enjoyed the halloween party at the holiday park, with aria dressed as a witch and alex as a knight. They also enjoyed a trip to northe fort where they had halloween activites and a tour of the fort. On the last day they took a trip to portland to see the lighthouse, while there they climbed onto the rocks where they all got very wet and aria got soaked by a wave. it was a weeked that they all enjoyed and will never forget." imgSrc="/holiday.jpg" imgAlt="Holiday" />

            <StorySectionLeft title="NEC Birmingham" date="27 November 2022" description="Scott, a big fan of motorbikes, wanted to take Dee, alex and aria away and show them something different. So, he decided to take them to the NEC in Birmingham for the National Bike Motorbike Show. He wanted to create memories for them and show them places they have never been.The show was packed with all sorts of bikes, from old classics to the latest tech wonders, plus lots of hands-on stuff and demos that were pretty cool to see. Scott helped alex and aria on the bikes, the faical expresstions and smiles on there faces made it a day we never forget." imgSrc="/nec.jpg" imgAlt="NEC Birmingham" />

            <StorySectionRight title="Our first christmas" date="25 December 2022" description="After a lovely meal, Scott got the kids and everyone around..." imgSrc="/christmas.jpg" imgAlt="Christmas" />

            <StorySectionLeft title="First time on the bike" date="25 December 2022" description="The Day their own Family started they got Hunter their American Akita." imgSrc="/ariaalexdog.jpeg" imgAlt="Aria and Alex with Hunter" />

            <StorySectionRight title="Engagement - She Said Yes!!" date="08 April 2023" description="After taking a trip up to gaydon to see some friends scott knew today was the day he would ask dee to marry him. After a lovely meal Scott got the kids and everyone around, While getting on one knee and proposing, after dee saying Fuck off a lot Asshole a lot asking dee to marry Scott." imgSrc='/Engagement.jpg' imgAlt='Engagment photo' />

            {/* Section for telling people there is soo many more memorys to come */}

            <div className="text-center gap-8 border-2 border-dashed border-pink-400">
                <h6 className='text-pink-500'>Celebrate</h6>
                <h1 className="text-6xl text-pink-500">Join Us on Our Journey</h1>
                <p>Experience the joy and love that has brought us together.</p>
                <div className="flex">
                    <Button>

                    </Button>
                    <Button>

                    </Button>
                </div>
            </div>
        </div>
    )
}

{/* First Meet Section */ }
{/* <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <Image src="/tinder.png" width={500} height={500} alt="Tinder Logo" />
                <div className="text-center mt-4">
                    <h4 className="text-xl mb-2">Two People Swiped Right</h4>
                    <p className="text-sm uppercase mb-2 pt-8">01 March 2022</p>
                    <p>It started when two people swipped right due to Scott working in Swindon And surrounding area for his job at Virgin Media and Deanna having her
                        distance set so high. They managad to match, maybe it was the coloured hair for both of
                        them, maybe it was his bike and husky for her.</p>
                </div>
            </div> */}


{/* <div className="flex">
                <div className="col-md-6 text-center text-md-right">
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                        <h4 className="mb-2">First Meet</h4>
                        <p className="text-uppercase mb-2">02 April 2022</p>
                        <p className="m-0">After a couple of weeks talking and moving over to snapchat, on the saturday
                            after a days work scott was talking to dee about her evening. send her the Panda Hug
                            me Pen photo and while sitting at home alone without the kids Dee Agreed. after a short
                            hour and half ride Scott arrived unable to get on the new build panicing tht he had been
                            stood up. thankfully dee shared her location and showed him the way.</p>
                    </div>
                </div>
                <div className="col-md-6 text-center text-md-left">
                    <Image className="img-fluid ml-md-3" src="/ThePen.webp" width={500}
                        height={500} alt="" />
                </div>
            </div>
            <div className="flex">
                <div className="col-md-6 text-center text-md-right">
                    <Image className="img-fluid mr-md-3" src="/GigglingSquid.jpg" width={500}
                        height={500} alt="" />
                </div>
                <div className="col-md-6 text-center text-md-left">
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                        <h4 className="mb-2">First Date</h4>
                        <p className="text-uppercase mb-2">30 April 2022</p>
                        <p className="m-0">After a days work scott got one the bike and shoot down to take dee out to
                            dinner, for th first time in his life he had booked a table at <a
                                href="https://www.gigglingsquid.com/">gigglingsquid</a> but as per normal booked for
                            the wrong time. so to wash some time they both went for drinks at <a
                                href="https://www.jdwetherspoon.com/pubs/all-pubs/england/wiltshire/the-kings-head-inn-salisbury">Wetherspoons</a>
                            sat having a couple more drinks then they should scott spent 5 minutes at dinner trying
                            to order a prawn cocktail from a thai tapas place, when dee finally broke him and said
                            i think he means prawn crackers at least it made the waiters night.</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="col-md-6 text-center text-md-right">
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                        <h4 className="mb-2">Family Got Bigger</h4>
                        <p className="text-uppercase mb-2">29 July 2022</p>
                        <p className="m-0">The Day their own Fmaily started they got <a href="">Hunter</a> their
                            American Akita.</p>
                    </div>
                </div>
                <div className="col-md-6 text-center text-md-left">
                    <Image className="img-fluid ml-md-3" src="/ariaalexdog.jpeg" width={500}
                        height={500} alt="" />
                </div>
            </div>
            <div className="flex">
                <div className="col-md-6 text-center text-md-right">
                    <Image className="img-fluid mr-md-3" src="/Engagement.jpg" width={500}
                        height={500} alt="" />
                </div>
                <div className="col-md-6 text-center text-md-left">
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3" id='yes'>
                        <h4 className="md-2">Engagement - She Said Yes!!</h4>
                        <p className="text-uppercase mb-2"> 08 April 2023</p>
                        <p className="m-0">After a lovely meal Scott got the kids and everyone around. While getting on
                            one knee and dee saying Fuck off a lot Asshole a lot asking dee to marry Scott.</p>
                    </div>
                </div>
            </div>
        
        First Meet Section
            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">

                <div className="text-center mt-4">
                    <h4 className="text-xl mb-2">First Meet</h4>
                    <p className="text-sm uppercase mb-2">02 April 2022</p>
                    <p>After a couple of weeks talking and moving over to snapchat,
                        <br />
                        on the saturdy after a days work scott was talking to dee about her evening.
                        <br />
                        When he sent her a photo of the Panda Hug me Pen, Dee was sitting at home alone without the kids and messaged back saying come here then.
                        <br />
                        Scott then jumped on his bike and came down, after a short hour and half ride
                        <br />
                        Scott arrived unable to get on the new build panicking that he had been
                        stood up. Thankfully dee shared her location and showed him the way.
                    </p>

                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Image src="/ThePen.webp" width={500} height={500} alt="" className="mx-auto md:ml-auto md:mr-0" />
                </div>
            </div>

            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right">
                    <Image src="/GigglingSquid.jpg" width={500} height={500} alt="" className="mx-auto md:mr-auto md:ml-0" />
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">First Date</h4>
                        <p className="text-sm uppercase mb-2">30 April 2022</p>
                        <p>After a days work scott got on the bike and shoot down to take dee out to
                            dinner, for the first time in his life he had booked a table at <Link
                                href={"https://www.gigglingsquid.com/"} target='_blank' className="hover:text-pink-500">gigglingsquid</Link> but as per normal booked for
                            the wrong time. so to waste some time they both went for drinks at <Link
                                href={"https://www.jdwetherspoon.com/pubs/all-pubs/england/wiltshire/the-kings-head-inn-salisbury"} target='_blank' className="hover:text-pink-500">Wetherspoons.</Link>
                            <br />
                            They sat having a couple more drinks more then they should have, Once they had finish they headed over to the resturant slightly drunk and scott spent 5 minutes at dinner trying
                            to order a prawn cocktail from a thai tapas place, when dee finally broke him and said
                            i think he means prawn crackers at least it made the waiters night. That night they both came to realise that they wanted to make this work.</p>
                    </div>
                </div>
            </div>


            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">Family Got Bigger</h4>
                        <p className="text-sm uppercase mb-2">29 July 2022</p>
                        <p> That weekend we took a trip to wales to collect our american akita called hunter and it was the Day their family became bigger.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Image src="/ariaalexdog.jpeg" width={500} height={500} alt="" className="mx-auto md:ml-auto md:mr-0" />
                </div>
            </div>



            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right">
                    <Image src="/holiday.jpg" width={500} height={500} alt="" className="mx-auto md:mr-auto md:ml-0" />
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">Halloween weekend away in Weymouth</h4>
                        <p className="text-sm uppercase mb-2">28 october 2022</p>
                        <p>Scott and Dee embarked on their first family holiday with their kids, Alex and Aria, creating unforgettable memories together.
                            <br />
                            It was a weekend of fun and laughter, with the kids enjoying the beach building snadcastle, running in the sea, going swimming, late night walks on the beach and the arcades was a hit with them.
                            <br />
                            The kids also enjoyed the halloween party at the holiday park, with aria dressed as a witch and alex as a knight.
                            <br />
                            They also enjoyed a trip to northe fort where they had halloween activites and a tour of the fort.
                            <br />
                            On the last day they took a trip to portland to see the lighthouse, while there they climbed onto the rocks where they all got very wet and aria got soaked by a wave.
                            it was a weeked that they all enjoyed and will never forget.

                        </p>
                    </div>
                </div>
            </div>

     
            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">NEC Birmingham</h4>
                        <p className="text-sm uppercase mb-2">27 November 2022</p>
                        <p>
                            Scott, a big fan of motorbikes, wanted to take Dee, alex and aria away and show them something different. So, he decided to take them to the NEC in Birmingham for the National Bike Motorbike Show. He wanted to create memories for them and show them places they have never been.The show was packed with all sorts of bikes, from old classics to the latest tech wonders, plus lots of hands-on stuff and demos that were pretty cool to see. Scott helped alex and aria on the bikes, the faical expresstions and smiles on there faces made it a day we never forget.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Image src="/nec.jpg" width={500} height={500} alt="" className="mx-auto md:ml-auto md:mr-0" />
                </div>
            </div>






            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right">
                    <Image src="/Engagement.jpg" width={500} height={500} alt="" className="mx-auto md:mr-auto md:ml-0" />
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">Our first christmas</h4>
                        <p className="text-sm uppercase mb-2">25 December 2022</p>
                        <p>After a lovely meal, Scott got the kids and everyone around...</p>
                    </div>
                </div>
            </div>

            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">TODO</h4>
                        <p className="text-sm uppercase mb-2">25 December 2022</p>
                        <p>The Day their own Family started they got Hunter their American Akita.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Image src="/christmas.jpg" width={500} height={500} alt="" className="mx-auto md:ml-auto md:mr-0" />
                </div>
            </div>



            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right">
                    <Image src="/Engagement.jpg" width={500} height={500} alt="" className="mx-auto md:mr-auto md:ml-0" />
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">Engagement - She Said Yes!!</h4>
                        <p className="text-sm uppercase mb-2">08 April 2023</p>
                        <p>After taking a trip up to gaydon to see some friends scott knew today was the day he would ask dee to marry him. After a lovely meal Scott got the kids and everyone around, While getting on
                            one knee and proposing, after dee saying Fuck off a lot and Asshole a lot she said YES. Aria was more interested in the ring and tried taking it. </p>
                    </div>
                </div>
            </div>

            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 text-center md:text-right">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">TODO: add more</h4>
                        <p className="text-sm uppercase mb-2">29 July 2022</p>
                        <p>The Day their own Family started they got Hunter their American Akita.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Image src="/ariaalexdog.jpeg" width={500} height={500} alt="" className="mx-auto md:ml-auto md:mr-0" />
                </div>
            </div>

    

            <div className="md:flex mb-8 p-8 border-2 border-dashed border-pink-400">
                <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right">
                    <Image src="/Engagement.jpg" width={500} height={500} alt="" className="mx-auto md:mr-auto md:ml-0" />
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
                    <div className="text-center mt-4">
                        <h4 className="text-xl mb-2">TODO: add more</h4>
                        <p className="text-sm uppercase mb-2">08 April 2023</p>
                        <p>After a lovely meal, Scott got the kids and everyone around...</p>
                    </div>
                </div>
            </div>

            */}