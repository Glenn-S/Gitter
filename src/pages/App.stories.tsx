import { ComponentMeta, ComponentStory } from "@storybook/react";
import App from "./App";

export default {
  title: 'Pages/App',
  component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Primary = Template.bind({});