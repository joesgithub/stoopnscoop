import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  	integrations: [preact()],
	site: 'https://www.stoopnscoop.com',
	// check on preferences -> internet sharing and
	// uncomment next line for local device testing
	// server: { port: 3000, host: '0.0.0.0'}
});
