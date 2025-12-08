import { defineConfig } from 'vitest/config'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    exclude: [...configDefaults.exclude],
    include: [
      'tests/**/*.test.ts',
    ]
  },
})
