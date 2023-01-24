import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/workspaces/nuxt-0120/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}