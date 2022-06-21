import { build } from 'vite'
import { viteBuildConfig } from '../config/vite.config'
import { generateTypes, generateReference } from '../generate/generateTypes'

export async function buildApp() {
  await generateTypes()
  await build(viteBuildConfig)
  await generateReference('dist')
}
