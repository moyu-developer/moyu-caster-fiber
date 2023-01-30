import path from 'path'
import { defineConfig } from 'umi'
import routes from './routes'
import define from './define'

export default defineConfig({
  npmClient: "pnpm",
  mfsu: false,
  routes,
  define,
  alias: {
    config: path.resolve(__dirname, './config/')
  },
})
