import { StorySectionLeft } from '@/components/Story/storysection';
import { RSVPForm } from '@/components/forms/rsvp'; // Import RSVP form component
import Image from 'next/image'; // Import Next.js Image component for optimized images
import React from 'react'; // Import React

// The main functional component for the page
export default function RSVPPage() {
  return (
    <>
      <div className='max-w-screen-2xl mx-auto p-4'>
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl text-pink-500">RSVP to Our Special Day</h1>
          <p className="mt-4">Your presence would make our day even more special. Please let us know if you can attend.</p>
        </div>

        {/* Story Section Example: How We Met */}
        <StorySectionLeft
          title="We Would Like To Thank You"
          date="01 March 2022"
          // TODO: Finish this
          description="We would like to take this moment to thank you. for being part of our lives. Whether you come to the wedding or not Throughout both of our lives, we have been through ups and downs."
          imgSrc="/Family.jpg"
          imgAlt="Family"
        />

        {/* RSVP Form */}
        <div>
          <RSVPForm />
        </div>

        {/* Contect Us Sections */}
        {/* sending gifts section */}
        {/* TODO */}
      </div>
    </>
  );
}


