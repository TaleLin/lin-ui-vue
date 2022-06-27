import { provide } from 'vue'

export function provideGlobalConfig(config: Record<string, any>) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in config) {
    if (Object.prototype.hasOwnProperty.call(config, key)) {
      provide(key, config[key])
    }
  }
}
