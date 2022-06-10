import type { App } from 'vue'

export class Component {
  static name: string
  static install(app: App): void
}
