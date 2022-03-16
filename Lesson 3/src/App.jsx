import { useRoutes } from "react-router-dom";
import PostPage from "./pages/Post";
import PostsPage from "./pages/Posts";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <PostsPage />,
    },
    {
      path: "/:postId",
      element: <PostPage />,
    },
  ]);

  return routes;
}

export default App;
