import { describe, expect, it } from 'vitest'
import { useSafeUrl } from '../src/api'

describe('should clean and sanitize URLs', () => {
  it('exported', () => {
    const UncleanUrl = '&#104;&#116;&#116;&#112;&#115;&#0000058//&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;'
    const cleanUrl = useSafeUrl(UncleanUrl)

    expect('https://example.com').toEqual(cleanUrl)
  })
})
