import { useSafeUrl, vSafeUrl } from './api'

function install(app: any, _options = {}) {
  app.directive('safe-url', vSafeUrl)
}
export default {
  install,
}
export { useSafeUrl }
