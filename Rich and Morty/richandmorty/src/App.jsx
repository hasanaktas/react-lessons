import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import CharacterPage from "./pages/Character";

function App() {
  const pages = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:characterName/:characterId",
      element: <CharacterPage />,
    },
  ]);

  return pages;
}

export default App;
