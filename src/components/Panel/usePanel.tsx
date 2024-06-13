import { useCallback, useEffect, useState } from "react";
import { Status } from "../Board/Enum";
import { PanelProps } from "./TPanelProps";

function usePanel({ status, changeStatus, changeScore }: PanelProps) {
  const [level, setLevel] = useState(1);
  const [caracters, setCaracters] = useState<Array<string>>([]);
  const [typedCharacters, setTypedCharacters] = useState<Array<string>>([]);
  const [secondsLeft, setSecondsLeft] = useState<number>(5);

  const generateRandomCharacters = useCallback(() => {
    const lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz1234567890";
    const randomCharacters = [];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * lettersAndNumbers.length);
      randomCharacters.push(lettersAndNumbers[randomIndex].toUpperCase());
    }

    setCaracters(randomCharacters);
  }, []);

  const handleKeyDown = useCallback(
    (event: { key: string }) => {
      const newCharacter = event.key.toUpperCase();
      typedCharacters.push(newCharacter);

      const lastIndex = typedCharacters.length - 1;
      const sameCaracter = typedCharacters[lastIndex] === caracters[lastIndex];

      if (sameCaracter) {
        changeScore((prev: number) => prev + 1);
      } else {
        changeStatus(Status.FINISHED);
      }

      if (typedCharacters.length === 6) {
        const isCorrect = caracters.every((caracter, index) => {
          return caracter === typedCharacters[index];
        });

        if (isCorrect) {
          setLevel((prev) => prev + 1);
          setTypedCharacters([]);
        } else {
          setLevel(1);
          changeStatus(Status.FINISHED);
        }
      }
    },
    [caracters, typedCharacters, changeScore, changeStatus]
  );

  useEffect(() => {
    generateRandomCharacters();
  }, [level, generateRandomCharacters]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;

    if (status === Status.PLAYING) {
      intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 0.05);
      }, 50);

      timeoutId = setTimeout(() => {
        changeStatus(Status.TIME_UP);
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      if (secondsLeft) setSecondsLeft(5);
    };
  // ATTENTION: Do not add secondsLeft as dep of the hook to avoid blocking the timer
  }, [level, status, changeStatus]);

  console.log(secondsLeft);

  return {
    level,
    secondsLeft,
    caracters,
    typedCharacters,
  };
}

export default usePanel;
