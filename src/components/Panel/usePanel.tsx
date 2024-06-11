import { useCallback, useEffect, useState } from "react";
import { Status } from "../Board/Enum";
import { PanelProps } from "./TPanelProps";

function usePanel({changeStatus, changeScore} : PanelProps) {
  const [level, setLevel] = useState(1);
  const [caracters, setCaracters] = useState<Array<string>>([]);
  const [typedCharacters, setTypedCharacters] = useState<Array<string>>([]);

  const generateRandomCharacters = useCallback(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz1234567890";
    const randomCharacters = [];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      randomCharacters.push(letters[randomIndex].toUpperCase());
    }

    setCaracters(randomCharacters);
  }, [level]);

  const handleKeyDown = useCallback(
    (event: { key: string }) => {
      const newCharacter = event.key.toUpperCase();
      setTypedCharacters((prev) => [...prev, newCharacter]);

      if (typedCharacters.length === 6) {
        const isCorrect = caracters.every((caracter, index) => {
          if (caracter === typedCharacters[index]) {
            changeScore((prev: number) => prev + 1);
          }
          return caracter === typedCharacters[index];
        });

        if (isCorrect) {
          changeScore((prev: number) => prev + typedCharacters.length);
          setLevel((prev) => prev + 1);
          setTypedCharacters([]);
        } else {
          setLevel(1);
          changeStatus(Status.FINISHED);
        }
      }
    },
    [event, caracters, typedCharacters]
  );

  useEffect(() => {
    generateRandomCharacters();
  }, [level]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { level, caracters, typedCharacters };
}

export default usePanel;
