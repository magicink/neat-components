import { addDecorator, configure } from '@storybook/react'
import { addReadme } from 'storybook-readme'

addDecorator(addReadme)

const loadStories = () => {
  require('../stories')
}

configure(loadStories, module)