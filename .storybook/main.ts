import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  babel: (config) => {
    if (config.presets != null) {
      config.presets.push(require.resolve('@linaria/babel-preset'));
    } else {
      config.presets = [require.resolve('@linaria/babel-preset')]
    }
    return config;
  },
};
export default config;
