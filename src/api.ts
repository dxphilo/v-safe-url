import { sanitizeUrl } from '@braintree/sanitize-url'

export function vSafeUrl(el: any, binding: any) {
  el.setAttribute('href', sanitizeUrl(binding.value))
}

export function useSafeUrl(url: string): string {
  const sanitizedUrl = sanitizeUrl(url)
  return sanitizedUrl
}
