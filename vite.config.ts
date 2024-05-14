import { defineConfig } from 'vite';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            name: 'solias_components',
            entry: 'src/index.ts',
            formats: ['es', 'cjs', 'umd', 'iife']
        },
        rollupOptions: {
            external: /^lit/,
            input: [
                'src/scss/styles.scss'
            ]
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            }
        }
    }
});