import { useState } from "react";

import styled from "styled-components";
import BoxProps from "../types/warp";

function App() {
  const [text, setText] = useState("");

  return (
    <Container>
      <Box text={text}>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginInline: "auto",
            fontSize: "35px",
          }}
        >
          {text}
        </p>
      </Box>
      <Input onChange={(e) => setText(e.target.value)} />
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

const Input = styled.input`
  font-size: 25px;
  border: solid;
`;

export default App;
