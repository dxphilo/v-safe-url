import { sanitizeUrl } from '@braintree/sanitize-url'

interface BindingOptions {
  value: string
  oldValue?: string
  arg?: string
  modifiers?: { [modifier: string]: boolean }
  instance: any
}

export function vSafeUrl(el: HTMLElement, binding: BindingOptions) {
  el.setAttribute('href', sanitizeUrl(binding.value))
}

export function useSafeUrl(url: string): string {
  const sanitizedUrl = sanitizeUrl(url)
  return sanitizedUrl
}
