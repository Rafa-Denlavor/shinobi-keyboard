import { useState } from "react";

function useBoard() {
  const [status, setStatus] = useState("initial");

  return { status, setStatus };
}

export default useBoard;
