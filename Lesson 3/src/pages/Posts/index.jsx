import * as React from "react";
import * as services from "../../services";
import { NewPost, PostCard } from "./components";

const PostsPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setLoading(true);
      setPosts([]);
      const { data: posts } = await services.getAllPosts();
      setPosts(posts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updatePosts = async () => {
    try {
      const { data: posts } = await services.getAllPosts();
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? (
        <span>Yukleniyor ...</span>
      ) : (
        <div className="flex flex-col gap-2 p-4 ">
          <NewPost updatePosts={updatePosts} />

          {posts.map((post) => {
            return (
              <PostCard key={post.id} post={post} updatePosts={updatePosts} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostsPage;
