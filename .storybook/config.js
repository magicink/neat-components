import { configure } from '@storybook/react'

const loadStories = () => {
  require('../stories')
}

configure(loadStories, module)