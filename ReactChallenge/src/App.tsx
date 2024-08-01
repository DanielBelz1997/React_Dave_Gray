import { useState } from "react";
import Text from "./Text";
import styled from "styled-components";
import BoxProps from "../types/warp";
import Input from "./Input";

function App() {
  const [text, setText] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <Container>
      <Box text={text}>
        <Text text={text} hexValue={hexValue} isDarkText={isDarkText} />
      </Box>
      <StyledInput>
        <Input
          text={text}
          setText={setText}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        />
      </StyledInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div<BoxProps>`
  width: 300px;
  height: 300px;
  display: flex;
  margin-bottom: 5vh;
  border: solid;
  background-color: ${(props) => (props.text ? props.text : "white")};
`;

const StyledInput = styled.div`
  width: 300px;
  border: solid;
`;

export default App;
