import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/priyonosantosa/Documents/prys/repo/xalun/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}