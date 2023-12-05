import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Block from "../Block";

const BlockTemplate: StoryObj<typeof Block> = {
  render: (args) => <Block {...args} />,
  args: {
    isSelected: false,
  },
};

export const Default: StoryObj<typeof Block> = {
  ...BlockTemplate,
  args: {
    isSelected: false,
  },
};

export const Selected: StoryObj<typeof Block> = {
  ...BlockTemplate,
  args: {
    isSelected: true,
  },
};

const decoratorStyles = {
  width: "100px",
  height: "100px",
};

const meta: Meta<typeof Block> = {
  title: "Components/Block",
  component: Block,
  decorators: [
    (BlockStory) => (
      <div style={decoratorStyles}>
        <BlockStory />
      </div>
    ),
  ],
};

export default meta;
