import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

export default {
  title: 'Components/Label',
  component: MyLabel,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Primary = Template.bind({});
export const Secundary = Template.bind({});
export const Large = Template.bind({});

Primary.args = {
  label: 'My label AHH',
  size: 'normal',
  primary: true
};

Secundary.args = {
  label: 'My label AHH',
  size: 'normal',
  primary: false
};

Large.args = {
  label: 'My label AHH',
  size: 'h1'
};