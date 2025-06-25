import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Text = () => {
  const [text] = useTypewriter({
    words: ["Senior Data Analyst"],
  });

  return (
    <div className="type-writer">
      <h2>{text}</h2>
    </div>
  );
};
export default Text;
