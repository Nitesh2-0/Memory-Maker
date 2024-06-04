import React from 'react';

const Home = () => {
  return (
    <section className="relative bg-cover bg-center h-screen mt-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black opacity-60 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Capture Your Precious Moments with Memory Maker</h1>
        <p className="text-xl md:text-2xl mb-6">Professional Photography & Videography Services</p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">View Portfolio</button>
      </div>
    </section>
  );
};

export default Home;
