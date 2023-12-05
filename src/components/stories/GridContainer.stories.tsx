import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import GridContainer from "../GridContainer";
import Block from "../Block";

const BlockWrapper = styled("div")`
  grid-column: span 4;
`;

export const Default: StoryObj<typeof GridContainer> = {
  render: (args) => <GridContainer {...args} />,
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

const decoratorStyles = {
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
};

const meta: Meta<typeof GridContainer> = {
  title: "Components/GridContainer",
  component: GridContainer,
  decorators: [
    (GridContainerStory) => (
      <div style={decoratorStyles}>
        <GridContainerStory />
      </div>
    ),
  ],
};

export default meta;
