import { upperFirst, camelCase } from 'lodash'
import Vue from 'vue'

// global imports
const requireComponent = require.context(
  '~/components/global',
  true,
  /\.vue$/
)

export default requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  // Register component globally
  Vue.component(componentName, componentConfig.default || componentConfig)
})
