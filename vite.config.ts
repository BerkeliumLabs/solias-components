import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            name: 'solias_components',
            entry: 'src/my-element.ts',
            formats: ['es', 'cjs', 'umd', 'iife']
        },
        rollupOptions: {
            external: /^lit/
        }
    }
});