import React from 'react';


const About = () => {
  return (
    <div className="font-sans bg-gray-800 text-gray-200">
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-60 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Memory Maker</h1>
          <p className="text-xl md:text-2xl mb-6">Professional Photography & Videography Services</p>
        </div>
      </section>

      <section id="team" className="py-16 bg-gray-900 text-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="team-member bg-gray-800 p-6 rounded-lg shadow-md">
              <img src="https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">John Doe</h3>
              <p className="text-gray-100">Lead Photographer</p>
            </div>
            <div className="team-member bg-gray-800 p-6 rounded-lg shadow-md">
              <img src="https://taramarieclark.wordpress.com/wp-content/uploads/2013/03/random-people-random-16382026-600-800.jpg?w=600" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Jane Smith</h3>
              <p className="text-gray-100">Videographer</p>
            </div>
            <div className="team-member bg-gray-800 p-6 rounded-lg shadow-md">
              <img src="https://pm1.aminoapps.com/6768/676c9a18de8a91290c9a069e932afb642cad6631v2_hq.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Alice Johnson</h3>
              <p className="text-gray-100">Assistant Photographer</p>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-16 bg-gray-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Our History</h2>
          <p className="text-lg mb-6 text-gray-100">Memory Maker was founded in 2010 with a passion for capturing life's most cherished moments. Over the years, we have grown into a full-service photography and videography studio, serving clients all over the world.</p>
        </div>
      </section>

      <section id="vision-mission" className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">Our Vision & Mission</h2>
          <p className="text-lg mb-6 text-gray-100">Our vision is to be the leading provider of photography and videography services, known for our creativity and professionalism. Our mission is to capture and create lasting memories for our clients through exceptional service and artistry.</p>
        </div>
      </section>

    </div>
  );
};

export default About;
