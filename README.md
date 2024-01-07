# v-safe-url

Secure URL Sanitization for Vue.js Applications

## Why

I built this to help with safe URL sanitization in VueJs application.

**Note:** The plugin has a compact size of 1.59 kB, and you can also check its details on [bundlephobia](https://bundlephobia.com/).

## Installation

Install the package using your preferred package manager:

```bash
npm install v-safe-url

# or

yarn add v-safe-url

# or

pnpm add v-safe-url
```

## Installation

In your Vue.js app entry file (main.ts or main.js), include the following:

```
  // In main.js or similar
  import { createApp } from 'vue';
  import VueSafeUrl from 'v-safe-url';

  const app = createApp(App);
  app.use(VueSafeUrl);
  app.mount('#app');

```

## Usage

Apply the `v-safe-url` directive in your `a` link HTML tags to securely sanitize URLs.

**Note:** The directive shoudl be used on `<a>` tags since it will inject the `href` attribute. If you need to use `usesafeUrl` in non-links, I suggest you check out the [useSafeUrl](#usesafeurl)

```
<script setup>
import { ref } from 'vue';

const untrustedUrl = ref('www.example.com/\u200D\u0000\u001F\x00\x1F\uFEFFfoo');
</script>

<template>
  <div>
    <a v-safe-url="untrustedUrl" target="_blank" rel="noopener noreferrer">Click Here for a Safe Link</a> <!-- www.example.com/foo -->
  </div>
</template>

```

## useSafeUrl

Alternatively, if you prefer to sanitize the URL within the `<script>` tag, import `useSafeUrl` from `v-safe-url`.

```
<script setup>
import { useSafeUrl } from 'v-safe-url';
import { ref } from 'vue';

const uncleanUrl = ref('www.example.com/\u200D\u0000\u001F\x00\x1F\uFEFFfoo');
const safeUrl = useSafeUrl(uncleanUrl.value);
</script>

<template>
  <div>
    <h1>Unsafe URL: {{ uncleanUrl }}</h1>
    <h2>Safe URL: {{ safeUrl }}</h2>
  </div>
</template>

```

If you encounter any issues, find a bug, wish to request a new feature, or propose general refactoring, please open an issue for discussion. Your feedback is valuable, and I appreciate your contributions. I hope this helps!

## License

[MIT](./LICENSE) License © 2023-PRESENT [John Philip](https://github.com/dxphilo)
