import React from "react";
import styled from "styled-components";
import useBlockStore from "./store";
import GridContainer from "./components/GridContainer";
import GridControls from "./components/GridControls";

const AppContainer = styled("div")`
  position: relative;
  box-sizing: border-box;
  padding: 0px 20px;
  width: 100%;
  height: 100vh;

  @media (min-width: 768px) {
    padding: 0px 40px;
  }
`;

const Section = styled("section")`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 32px;
`;

function App() {
  const theBlock = useBlockStore((state) => state.selectedBlock);

  return (
    <AppContainer>
      <main>
        <header
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ margin: "0px" }}>BoxMover</h1>
        </header>
        <Section>
          <GridContainer selectedBlock={theBlock} />
          <GridControls />
        </Section>
      </main>
    </AppContainer>
  );
}

export default App;
