import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing

export default function FoodPage() {
  // List of foods available at the event
  const eventFoods = [
    "Vegetarian Lasagna",
    "Grilled Chicken with Honey Mustard Sauce",
    "Vegan Quinoa Salad",
    "Chocolate Fountain with Fruit Skewers"
  ];

  // Evening food details
  const eveningFood = {
    provider: "Burnout BBQ",
    location: "Oxford",
    menu: [
      "Smoked Brisket",
      "Pulled Pork Sandwiches",
      "BBQ Vegan Burger",
      "Grilled Corn on the Cob"
    ],
    about: "Burnout BBQ is renowned for its authentic smoked meats and inventive vegan options, bringing the heart of Texas BBQ to Oxford. With a passion for slow-cooked flavors and a commitment to quality, Burnout BBQ has been a local favorite for years."
  };

  // Links to local food spots - example data
  const localFoodSpots = [
    { name: "Joe's Pizza", url: "/joes-pizza" },
    { name: "The Green Salad Bar", url: "/green-salad-bar" },
    { name: "Sunny Side Breakfast Cafe", url: "/sunny-side-cafe" }
  ];

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Event Food Details</h1>

      <section className="mb-8">
        <h2 className="text-center text-2xl font-semibold mb-2 text-pink-600">What&apos;s Cooking?</h2>
        <ul>
          {eventFoods.map((food, index) => (
            <li key={index} className="text-lg mb-1">{food}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-center text-2xl font-semibold mb-2 text-pink-600">Evening Delight: Burnout BBQ from Oxford</h2>
        <p>{eveningFood.about}</p>
        <p className="mt-2">Here&apos;s what Burnout BBQ will be serving:</p>
        <ul>
          {eveningFood.menu.map((item, index) => (
            <li key={index} className="text-lg mb-1">{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-center text-2xl font-semibold mb-2 text-pink-600">Explore Local Eats</h2>
        <p>Looking for more options? Check out these great local food spots:</p>
        <ul>
          {localFoodSpots.map((spot, index) => (
            <li key={index} className="text-lg mb-1">
              <Link href={spot.url} className="text-blue-500 hover:text-blue-700">{spot.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
