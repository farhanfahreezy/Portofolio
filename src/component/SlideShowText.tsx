import { Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

interface TypicalProps {
  text: string[];
  fontSize: string;
  fontWeight: string;
  delay: number;
}

const Typical = ({ text, fontSize, fontWeight, delay }: TypicalProps) => {
  const [currentText, setCurrentText] = useState<string>(text[0]);
  const numWord = text.length;
  const indexWord = useRef(0);

  useEffect(() => {
    setTimeout(() => {
      indexWord.current += 1;
      if (indexWord.current >= numWord) {
        indexWord.current = 0;
      }
      setCurrentText(text[indexWord.current]);
    }, delay);
    //
  }, [currentText]);

  return (
    <>
      <Text
        fontSize={fontSize}
        fontWeight={fontWeight}
        transition="opacity 0.3s"
      >
        {currentText}
      </Text>
    </>
  );
};

export default Typical;
