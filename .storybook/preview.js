import { BrowserRouter } from 'react-router-dom'

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
