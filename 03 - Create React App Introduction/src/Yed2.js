import { useState, useEffect, useMemo } from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [value, setValue] = useState("");
  // const [disabled, setDisabled] = useState(false);
  // const arttir = () => {
  //   setValue((value) => value + 1);
  // };

  // const azalt = () => {
  //   setValue((b) => b - 1);
  // };

  // const disabled = useMemo(() => {
  //   return value === 5;
  // }, [value]);

  // // const color = useMemo(() => {
  // // return  value>0 && value <100 ? 'red' : 'pink'
  // // }, [value]);

  // const color = useMemo(() => {
  //   switch (value) {
  //     case 0:
  //     case 1:
  //     case 2:
  //       return "red";
  //     case 3:
  //     case 4:
  //       return "green";
  //     default:
  //       return "tomato";
  //   }
  // }, [value]);
  // // useEffect(() => {
  // //   if (value === 5) {
  // //     console.log("5 oldu");
  // //     setDisabled(true);
  // //   } else {
  // //     setDisabled(false);
  // //   }
  // // }, [value]);

  return (
    <div className="flex flex-col items-center">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      {value && <p>Merhaba {value}</p>}
    </div>
  );
}

export default App;
