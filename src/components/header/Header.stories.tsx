import { Meta, Story } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Header from "./NavBar";

export default {
  title: "Header",
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as Meta;

const Template: Story = (args) => <Header {...args} />;
export const Default = Template.bind({});
