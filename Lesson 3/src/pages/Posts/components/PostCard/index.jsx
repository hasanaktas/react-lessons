import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as services from "../../../../services";
const PostCard = ({ post, updatePosts }) => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const deletePost = async () => {
    try {
      setLoading(true);
      await services.deletePost(post.id);
      await updatePosts();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const editPost = async () => {
    navigate(`/${post.id}`);
  };

  return (
    <div
      className={`flex p-4 text-white rounded-2xl bg-orange-400 flex-col ${
        loading && "opacity-30"
      }`}
    >
      <span className="text-lg font-bold">{post.title}</span>
      <span className="line-clamp-2">{post.content}</span>
      <div className="flex gap-2 mt-4">
        <button
          onClick={editPost}
          className="bg-orange-300 text-black p-2 rounded-lg"
        >
          Duzenle
        </button>
        <button
          onClick={deletePost}
          className="bg-red-600 py-2 px-4 rounded-lg"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default PostCard;
