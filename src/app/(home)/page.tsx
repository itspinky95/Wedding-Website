import HeroOne from "@/components/headers/heroOne";

export default function Home() {
  return (
    <main className="">
      {/* TODO: home page content */}
      <HeroOne
        title="Welcome to Scott's and Deanna's Wedding Website"
        paragraph={
          <>
            <p>Welcome to our wedding website! We are thrilled to invite you to share in our joy as we, Scott Jones and Deanna Keels, join hands in marriage. This website is designed to provide you with all the information you need about our upcoming celebration.</p>

            {/* <p>From the serene setting of our chosen venue to the schedule of events, and accommodation details for traveling guests, everything you need to know is right here.</p>

            <p>Our journey together has been nothing short of magical, and we cannot wait to celebrate this new chapter with you. Whether you've been by our sides from the beginning or have joined us along the way, your presence at our wedding means the world to us. Please RSVP as soon as possible, and do not hesitate to reach out for any further information or assistance.</p> */}

            {/* <p>As we count down the days to our wedding, we're filled with anticipation and excitement to share this special moment with you. Please bookmark this website and check back for updates as we get closer to the day. Here's to love, laughter, and a lifetime of happiness together. We look forward to celebrating our love with each and every one of you.</p> */}

            <p>With all our love,<br />Scott & Deanna</p>
          </>
        }
        imgsrc="/redpanda.jpeg"
        imgalt="Red Panda Image of Family"
      // links={["contact-us", "wedding-details"]}
      />
    </main>
  );
}
