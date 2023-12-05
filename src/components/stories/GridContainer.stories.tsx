import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import GridContainer from "../GridContainer";

export const Default: StoryObj<typeof GridContainer> = {
  render: (args) => <GridContainer {...args} />,
  args: {
    
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
