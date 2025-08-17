import React from 'react';
import { useParams } from 'react-router-dom';
import videos from '../data/videos';

const dummyComments = [
  { id: 1, user: "John Doe", comment: "Amazing video! Learned a lot." },
  { id: 2, user: "Jane Smith", comment: "Thanks for sharing this content." },
  { id: 3, user: "Alex Johnson", comment: "Looking forward to more videos like this!" },
];

function Player() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <div className="p-6 text-center text-red-600 font-semibold">Video not found!</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900">{video.title}</h1>

      <video
        controls
        src={video.videoUrl}
        poster={video.thumbnailUrl}
        className="w-full rounded-lg shadow-lg mb-6"
      >
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">{video.views} views • {video.uploadTime}</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl shadow-md select-none">
              {video.author.charAt(0)}
            </div>

            <div>
              <p className="font-semibold text-gray-800">{video.author}</p>
              <p className="text-gray-500 text-sm">{video.subscriber}</p>
            </div>

            <button className="ml-6 bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-5 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-shadow shadow-sm hover:shadow-md text-gray-700 font-semibold">
            👍 Like
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-shadow shadow-sm hover:shadow-md text-gray-700 font-semibold">
            👎 Dislike
          </button>
        </div>
      </div>

      <div className="mb-10 whitespace-pre-line text-gray-700 leading-relaxed border-b border-gray-300 pb-6">
        {video.description}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-5 text-gray-900">Comments</h2>
        {dummyComments.map((comment) => (
          <div
            key={comment.id}
            className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-gray-800 mb-1">{comment.user}</p>
            <p className="text-gray-600 leading-snug">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Player;
