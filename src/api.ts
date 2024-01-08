import { sanitizeUrl } from '@braintree/sanitize-url'
import type { Directive, DirectiveBinding } from 'vue'

function sanitiZer(url: string): string {
  return sanitizeUrl(url)
}

export const vSafeUrl: Directive<HTMLElement, string> = (el: HTMLElement, binding: DirectiveBinding) => {
  el.setAttribute('href', sanitiZer(binding.value))
}

export function useSafeUrl(url: string): string {
  return sanitiZer(url)
}
