import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as services from "../../services";
const PostPage = () => {
  const { postId } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [updateLoading, setUpdateLoading] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    getPost();
  }, [postId]);

  const disabled = React.useMemo(
    () => !title || !content || updateLoading,
    [title, content, updateLoading]
  );

  const getPost = async () => {
    try {
      setLoading(true);
      const { data: post } = await services.getPost(postId);
      setTitle(post.title);
      setContent(post.content);
      setLoading(false);
    } catch (error) {}
  };

  const updatePost = async () => {
    try {
      setUpdateLoading(true);
      await services.updatePost(postId, { title, content });
      navigate("/");
    } catch (error) {
      console.log(error);
      updateLoading(false);
    }
  };

  if (loading) {
    return <h1>Yukleniyor</h1>;
  }

  return (
    <div className="flex flex-col gap-2 mt-2 p-4">
      <input
        disabled={updateLoading}
        value={title}
        placeholder="Basligi Gir"
        className="bg-slate-200 rounded-lg p-2 disabled:opacity-30"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        disabled={updateLoading}
        value={content}
        placeholder="Icerigi Gir"
        rows={3}
        className="bg-slate-200 rounded-lg p-2 disabled:opacity-30"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        disabled={disabled}
        onClick={updatePost}
        className="bg-green-500 p-2 rounded-lg disabled:opacity-30"
      >
        Kaydet
      </button>
    </div>
  );
};

export default PostPage;
