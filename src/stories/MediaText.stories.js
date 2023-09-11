import MediaText from '../modules/MediaText.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Media Text',
  component: MediaText,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
    // onClick: {},
    // size: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    subheading: 'Header Right',
    heading: 'Faster Connections, Better Conversions',
    copy: 'Let us help you grow your audience — and get them to convert — with innovative campaigns and creative, data-driven strategies. We put the value of our experience to work for you to deliver results that exceed your expectations.',
    call_to_action_primary: {
      text: 'Have a project? Let\'s talk',
      url: '#',
    },
    call_to_action_secondary: {
      text: 'Learn More',
      url: '#',
    },
    image: {
      url: 'https://via.placeholder.com/900x900?text=FPO?fit=crop&crop=faces,entropy,center&q=70&auto=format&or=0&fm=jpeg&w=355&h=266',
      alt: 'Descriptive alt text that describes the image.',
    },
  },
};