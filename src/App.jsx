import { useState } from "react";
import { FileData } from "./components/data";
import Structure from "./components/Structure";

function App() {
  const [count, setCount] = useState(0);
  console.log("22222222", FileData);
  return (
    <>
      <Structure FileData={FileData} />
    </>
  );
}

export default App;
