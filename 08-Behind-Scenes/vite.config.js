// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
// });

import react from '@vitejs/plugin-react';
import MillionLint from '@million/lint';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [MillionLint.vite(), react()],
});
