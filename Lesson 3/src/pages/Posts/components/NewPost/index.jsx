import * as React from "react";
import * as services from "../../../../services";
const NewPost = ({ updatePosts }) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleClick = () => {
    setOpen((p) => !p);
  };

  const disabled = React.useMemo(
    () => !title || !content || loading,
    [title, content, loading]
  );

  React.useEffect(() => {
    if (open) {
      setTitle("");
      setContent("");
    }
  }, [open]);

  const sendPost = async () => {
    try {
      setLoading(true);
      await services.createPost({
        title,
        content,
      });
      await updatePosts();
      setLoading(false);
      setOpen(false);
    } catch (error) {}
  };

  return (
    <div>
      <button
        disabled={loading}
        onClick={handleClick}
        className="bg-purple-600 w-full p-4 rounded-lg text-white disabled:opacity-30 "
      >
        {open ? "Kapat" : " Yeni Post Ekle"}
      </button>
      {open && (
        <div className="flex flex-col gap-2 mt-2">
          <input
            disabled={loading}
            value={title}
            placeholder="Basligi Gir"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-200 rounded-lg p-2 disabled:opacity-30"
          />
          <textarea
            value={content}
            disabled={loading}
            placeholder="Icerigi Gir"
            rows={3}
            className="bg-slate-200 rounded-lg p-2 disabled:opacity-30"
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={sendPost}
            disabled={disabled}
            className="bg-green-500 p-2 rounded-lg disabled:opacity-30"
          >
            Kaydet
          </button>
        </div>
      )}
    </div>
  );
};

export default NewPost;

// const CustomInput=({onChange})=>{
//     return (
//         <input
//         value={title}
//         placeholder="Basligi Gir"
//         onChange={(e) => onChange(e.target.value)}
//       />
//     )
// }

// <CustomInput  onChange={e=>setContent(e)}/>
