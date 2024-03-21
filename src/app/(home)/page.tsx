import HeroOne from "@/components/headers/heroOne";

export default function Home() {
  return (
    <main className="">
      {/* TODO: home page content */}
      <HeroOne
        title="Welcome to Scott's and Deanna's Wedding Website"
        paragraph="Welcome to our wedding website! We are thrilled to invite you to share in our joy as Scott and Deanna, join hands in marriage. This website is designed to provide you with all the information you need about our upcoming celebration."
        imgsrc="/underTheSea.jpeg"
        imgalt="Red Panda Image of Family"
      links={["contact-us", "wedding-details"]}
      />
    </main>
  );
}
