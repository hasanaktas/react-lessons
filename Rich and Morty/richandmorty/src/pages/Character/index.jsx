import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as services from "../../services";
import { stringToUrlFriendly } from "../../utils";
const CharacterPage = () => {
  let { characterId, characterName } = useParams();
  const [loading, setLoading] = useState(false);
  const [character, setChracter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCharater();
  }, [characterId]);

  const getCharater = async () => {
    try {
      setLoading(true);
      const { data } = await services.getCharacter(characterId);
      if (characterName === stringToUrlFriendly(data.name)) {
        console.log("biribirine esit");
      } else {
        navigate(`/${stringToUrlFriendly(data.name)}/${characterId}`, {
          replace: true,
        });
        console.log("isimler farkli");
      }
      console.log(data);
      setChracter(data);
    } catch (error) {
      console.log("hataya dustu", error);
      navigate("/1");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {loading && <h1>yukleniyor...</h1>}
      {character && (
        <div className="flex flex-col">
          <img
            src={character.image}
            className="w-32 h-32 rounded-xl "
            alt="character.name"
          />
          <h1>{character.name}</h1>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
