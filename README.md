# v-safe-url

Safe and Secure URLs in Your Vue.js Applications

## Installation

Install the package using your preferred package manager:

```
npm install v-safe-url

# or

yarn add v-safe-url

# or

pnpm add v-safe-url
```

In your Vue.js app entry file (main.ts or main.js), add the following:

```
// In main.js or similar
import { createApp } from 'vue';
import { VueSafeUrl } from 'v-safe-url';

const app = createApp(App);
app.use(VueSafeUrl);
app.mount('#app');
```

## Usage

In your application component, you can utilize the `v-safe-url` directive, which will securely parse the URL for you.

```
<script setup>
import { ref } from 'vue'

const untrustedUrl = ref('www.example.com/\u200D\u0000\u001F\x00\x1F\uFEFFfoo')
</script>

<template>
  <div>
    <a v-safe-url="untrustedUrl">Click Here</a> // www.example.com/foo
  </div>
</template>

```

Or, if you prefer to sanitize the URL inside the `<script>` tag, you can import `useSafeUrl` from `v-safe-url` as shown below.

```
<script setup>
import { useSafeUrl } from 'v-safe-url';
import { ref } from 'vue';

const uncleanUrl = ref('Hello World!');
const safeUrl = useSafeUrl(uncleanUrl.value);
</script>

<template>
  <div>
    <h1>Unsafe URL: {{ uncleanUrl }}</h1>
    <h2>Safe URL: {{ safeUrl }}</h2>
  </div>
</template>

```

## License

[MIT](./LICENSE) License © 2023-PRESENT [John Philip](https://github.com/dxphilo)
