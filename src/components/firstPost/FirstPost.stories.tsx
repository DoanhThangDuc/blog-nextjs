import { Meta, Story } from "@storybook/react";
import { PostModal } from "../../features/PostsSlice";
import FirstPost from "./FirstPost";

export default {
  title: "First Post",
  component: FirstPost,
} as Meta<PostModal>;

const Template: Story<PostModal> = (args) => <FirstPost {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "/images/firstPost.png",
  source: { id: "", name: "PHOTODIARY" },
  title: "The perfect weekend getaway",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfectweekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawaygetawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe pegetawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayThepegetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  imageUrl: "",
  source: { id: "", name: "PHOTODIARY" },
  title: "The perfect weekend getaway",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfectweekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawaygetawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe pegetawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayThepegetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  imageUrl: "/images/firstPost.png",
  source: { id: "", name: "PHOTODIARY" },
  title:
    "This is a long title This is a long This is a long title This is a lon This is a long title This is a lon This is a long title This is a lon title This is a long title This is a long title",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfectweekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawaygetawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe pegetawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayThepegetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  imageUrl: "/images/firstPost.png",
  source: { id: "", name: "PHOTODIARY" },
  title: "Short Title",
  description:
    "The perfect weekend getawayThe perfect weekend getawayThe perfectweekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawaygetawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe pegetawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayThepegetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe perfect weekend getawayThe perfect weekendgetawayThe pegetawayThe perfect weekend getawayThe perfect weekendgetawayThe perfect weekend getawayThe perfect weekend getawayTheperfect weekend getawayThe pe",
};

export const EmptyDescription = Template.bind({});
EmptyDescription.args = {
  imageUrl: "/images/firstPost.png",
  source: { id: "", name: "PHOTODIARY" },
  title: "Title",
  description: "",
};
