import { useState, useEffect, useMemo } from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [tl, setTl] = useState("");
  const [count, setCount] = useState("");

  const doviz = useMemo(() => {
    const dolar = tl / 10;
    return {
      dolar: dolar * count,
      euro: dolar * 1.2 * count,
    };
  }, [tl, count]);

  useEffect(() => {
    console.log("tl veya count degisti");
  }, [tl, count]);

  return (
    <div className="flex flex-col items-center">
      <Input
        placeholder="Para"
        value={tl}
        onChange={(e) => setTl(e.target.value)}
      />
      <Input
        placeholder="Adet"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div>
        <h6>Dolar : ${doviz.dolar}</h6>
        <h6>Euro : {doviz.euro}</h6>
      </div>
    </div>
  );
}

export default App;
