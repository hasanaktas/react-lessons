import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as services from "../../services";
import { stringToUrlFriendly } from "../../utils";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      setLoading(true);
      const { data } = await services.getCharacters();
      console.log(data.results);
      setCharacters(data.results);
    } catch (error) {
      console.log("hataya dustu", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 p-4 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {loading && <h1>Yukleniyor</h1>}
      {characters.map((character) => {
        return (
          <Link
            to={`/${stringToUrlFriendly(character.name)}/${character.id}`}
            className="bg-slate-300 p-4 flex flex-col items-center rounded-lg"
            key={character.id}
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-24 h-24"
            />
            {character.name}
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
