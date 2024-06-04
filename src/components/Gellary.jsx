import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getImage = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImage();
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col items-center mt-12 p-5 bg-gray-900">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-8 text-gray-100">Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={image.download_url}
                  alt={`Gallery Item ${image.id}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex justify-between">
                  <p className="text-gray-100">{image.author}</p>
                  <NavLink className="text-red-500" to={image.url}>Check</NavLink>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-8">
            <button
              className={`px-4 py-2 mx-2 rounded ${page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-700 hover:bg-red-800'} text-white`}
              onClick={() => page > 1 && setPage(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <p className="text-gray-100 px-4 py-2 mx-2 rounded bg-gray-900">{page}</p>
            <button
              className="px-4 py-2 mx-2 bg-green-700 hover:bg-green-800 rounded text-white"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
