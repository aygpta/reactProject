import React from 'react';
import { Link } from 'react-router-dom';
import videos from '../data/videos';

function Home() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Video List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Link
            to={`/player/${video.id}`}
            key={video.id}
            className="block bg-white rounded shadow hover:shadow-lg cursor-pointer overflow-hidden"
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
