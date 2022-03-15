import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const print = () => {
    alert(value);
  };

  const clearValue = () => {
    setValue("");
  };

  const focus = () => {
    // document.getElementById("hasan").focus();
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center">
      <Button onClick={print} title="Inputtaki Degeri Yazdir" />
      <Button onClick={clearValue} title="Inputtaki Alanini Temizle" />
      <input
        ref={inputRef}
        id="hasan"
        placeholder="fokuslancak alan"
        className="bg-purple-400 p-4 text-white placeholder:text-white"
      />

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buraya Yazi Yaz"
      />
      <Button onClick={focus} title="Input alanina fokusla" />
    </div>
  );
}

export default App;
