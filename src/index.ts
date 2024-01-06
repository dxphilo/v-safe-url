import { useSafeUrl, vSafeUrl } from './api'

function VueSafeUrl(app: any) {
  app.directive('v-safe-url', vSafeUrl)
}
export { VueSafeUrl, useSafeUrl, vSafeUrl }
