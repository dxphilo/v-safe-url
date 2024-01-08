import type { App } from 'vue'
import { useSafeUrl, vSafeUrl } from './api'

function install(app: App, _options = {}) {
  app.directive('safe-url', vSafeUrl)
}

export default {
  install,
}
export { useSafeUrl }
