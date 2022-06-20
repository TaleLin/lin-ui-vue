import { build } from 'vite'
import { viteBuildConfig } from '../config/vite.config'

export async function buildApp() {
  await build(viteBuildConfig)
}
