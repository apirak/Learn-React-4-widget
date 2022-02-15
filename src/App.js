import React from "react";
import Accordion from "./Components/Accordion";

const items = [
  {
    title: "what is React?",
    content: "React is front end js",
  },
  {
    title: "What is my nickname",
    content: "this is my nickname but not my name",
  },
  {
    title: "Who is this little dog",
    contnet: "I am not a dog",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
