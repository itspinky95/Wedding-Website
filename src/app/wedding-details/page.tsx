import Link from 'next/link';
import React from 'react';

export default function WeddingDetails() {
  return (
    <div className='max-w-screen-2xl mx-auto p-4'>
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl text-pink-500 p-8">Our Wedding Details</h1>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">The Venue</h2>
          <p className="mb-6">
            Join us for our special day at <Link href={'https://www.thestoneshotel.co.uk/'} target='_blank' className='hover:text-pink-700'><strong>
              The Stones Hotel, Highpost, Salisbury, Wiltshire, SP4 6AT.</strong>
            </Link>
          </p>
          <div className="mb-8">
            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.792331214997!2d-1.7952720722943962!3d51.12835086555599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873ef2955d6e2b7%3A0x4e37ec2a80b03ae1!2sThe%20Stones%20Hotel!5e0!3m2!1sen!2suk!4v1710627397095!5m2!1sen!2suk"
              className="w-full h-96"
              style={{ border: 20 }}
              allowFullScreen={true}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Accommodations Nearby</h2>
          <ul className="list-disc pl-5 ">
            {/* Replace these with actual hotels and details */}
            <li className="mb-2 list-none"><Link href={'https://maps.app.goo.gl/MYrCceCtrJu5Rnqq5'} target='_blank' className='hover:text-pink-700'>The Stones Hotel - Highpost, Salisbury, Wiltshire SP4 6AT - 01722782020</Link></li>

            <li className="mb-2 list-none"><Link href={'https://maps.app.goo.gl/oan7d3ZgGinRAHNp6'} target='_blank' className='hover:text-pink-700'>Holiday Inn Salisbury - Stonehenge, an IHG Hotel - Solstice Park, Mid Summer Pl, Salisbury SP4 7SQ - 03452413535</Link></li>

            <li className="mb-2 list-none"><Link href={'https://maps.app.goo.gl/gELnkCh3391ED4298'} target='_blank' className='hover:text-pink-700'>Premier Inn Salisbury South Milford hotel - New Petersfinger Rd, Salisbury SP1 2FF - 03301359042</Link></li>

            <li className="mb-2 list-none"><Link href={'https://maps.app.goo.gl/WGzhpSAzKKgiGX5p8'} target='_blank' className='hover:text-pink-700'>Victoria Lodge - 61 Castle Rd, Salisbury SP1 3RH - 01722320586</Link></li>

          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Day&apos;s Itinerary</h2>
          <ul className="list-disc pl-5">
            {/* Adapt these times and events to your schedule */}
            <li className="mb-2 list-none">TBC</li>
            {/* TODO: build out Ceremony schedule. */}
            {/* <li className="mb-2 list-none">11:45 am - Guest Arrive</li>
            <li className="mb-2 list-none">4:30 PM - Cocktail Hour</li>
            <li className="mb-2 list-none">6:00 PM - Reception & Dinner</li>
            <li className="mb-2 list-none">9:00 PM - Dance & Celebration</li> */}
          </ul>
        </section>
      </div>
    </div>
  );
}
