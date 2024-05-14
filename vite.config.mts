import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			name: 'diffblazer',
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es', 'cjs', 'umd'],
		},
		minify: false,
	},
	plugins: [dts()],
})
