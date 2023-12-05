import React from "react";
import styled from "styled-components";
import GridContainer from "./components/GridContainer";
import Block from "./components/Block";

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
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0px;
`;

const BlockWrapper = styled("div")`
  grid-column: span 4;
`;

function App() {
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
          <GridContainer>
            <BlockWrapper>
              <Block isSelected={true} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
            <BlockWrapper>
              <Block isSelected={false} />
            </BlockWrapper>
          </GridContainer>
        </Section>
      </main>
    </AppContainer>
  );
}

export default App;
