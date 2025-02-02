import React from "react";
import Cards from "./Cards";

function Project() {
  const projects = [
    {
      tittle: "Cab Booking",
      text: "Built with MERN stack (MongoDB, Express.js, React, Node.js), integrated Google Maps API for real-time navigation, Firebase authentication, and Stripe for payments. Features live ride tracking and a seamless booking experience. 🚖",
      link: "https://www.shutterstock.com/shutterstock/videos/1055387528/thumb/9.jpg?ip=x480https://cdni.iconscout.com/illustration/premium/thumb/online-cab-booking-3606535-3013176.png?f=webp",
    },
    {
      tittle: "Trip Planning Using AI",
      text: "Developed using React, Node.js, Firebase, and Google Gemini AI to provide personalized travel recommendations. Features Google authentication, real-time budget-based suggestions for hotels & destinations, and a seamless user experience. 🌍✨",
      link: "https://tse1.mm.bing.net/th?id=OIP.IHZT1_EfK_WBT3YfXQG4DwHaEJ&pid=Api&P=0&h=180",
    },
    {
      tittle: "Video Chat App",
      text: " Built with React, Node.js, Express, and WebRTC, enabling seamless real-time video communication. Features peer-to-peer connections, dynamic room creation, and a responsive UI for an enhanced user experience. 🎥📞",
      link: "https://s3.envato.com/files/acf5cd31-d48e-4b70-a679-fa8acfad1643/inline_image_preview.jpg",
    },
    {
      tittle: "E-commerce",
      text: "E-Commerce Clone – A full-stack e-commerce application built with React, Redux,Node. Features include product listings, cart management, order processing, and a seamless shopping experience with a responsive UI. Integrated Redux for efficient state management. 🚀",
      link: "https://static.vecteezy.com/system/resources/thumbnails/008/710/627/original/online-shopping-and-purchasing-animation-with-colorful-shopping-bags-buying-clothes-online-and-paying-money-with-card-4k-footage-shop-from-home-with-computer-monitor-animated-free-video.jpg",
    },
  ];
  return (
    <main className="h-screen mt-14 blocks">
      <section className="py-20 text-center p-8">
        <h1 className="text-4xl font-bold mb-4"> I build things For The Web</h1>
        <p className="text-blue-400 font-medium mb-6">
          the projects i worked on
        </p>
        <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 p-2">
          {projects.map((project, index) => (
            <Cards
              key={index}
              link={project.link}
              tittle={project.tittle}
              text={project.text}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Project;
