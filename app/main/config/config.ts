import path from 'path'
import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  npmClient: "pnpm",
  mfsu: false,
  routes,
  alias: {
    config: path.resolve(__dirname, './config/')
  }
})
