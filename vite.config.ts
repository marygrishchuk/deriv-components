import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-dts';

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

export default defineConfig(() => ({
    esbuild: {
        jsxInject: "import React from 'react'",
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            formats: ['es'],
        },
        rollupOptions: {
            external: isExternal,
        },
    },
    plugins: [dts()],
}));
