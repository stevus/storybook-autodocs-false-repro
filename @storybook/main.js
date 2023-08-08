module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'false',
  },
  features: {
    postcss: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../jsx/**/*.stories.mdx', '../stories/**/*.stories.mdx'],
}
