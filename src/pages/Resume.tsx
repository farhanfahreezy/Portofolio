import { useState, useEffect } from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Resume = () => {
  // const currentBreakpoint = useBreakpointValue({ base: "base", md: "md" });
  const [width, setWidth] = useState(1200);
  const pdfLink =
    "https://drive.google.com/file/d/1GhyLosqwwgirG7zJ-6alQySD_exBMDo1/view?usp=sharing";

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <Stack
      direction="column"
      position="absolute"
      zIndex={1}
      w="100vw"
      align="center"
      spacing="50px"
      paddingX={10}
      top="10vh"
    >
      <Button
        onClick={() => {
          window.open(pdfLink);
        }}
      >
        Download PDF
      </Button>
      <Document file="/cv/Mohammad Farhan F_CV.pdf">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>

      <Button
        onClick={() => {
          window.open(pdfLink);
        }}
      >
        Download PDF
      </Button>
    </Stack>
  );
};

export default Resume;
