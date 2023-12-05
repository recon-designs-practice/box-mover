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

const Header = styled("header")`
  position: relative;
  box-sizing: border-box;
  padding: 40px 0px 80px 0px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

function App() {
  const theBlock = useBlockStore((state) => state.selectedBlock);

  return (
    <AppContainer>
      <main>
        <Header>
          <h1 style={{ margin: "0px" }}>BoxMover</h1>
          <p style={{ margin: "0px 0px 0px 0px" }}>
            Move the the box highlight using the buttons.
          </p>
        </Header>
        <Section>
          <GridContainer selectedBlock={theBlock} />
          <GridControls />
        </Section>
      </main>
    </AppContainer>
  );
}

export default App;
