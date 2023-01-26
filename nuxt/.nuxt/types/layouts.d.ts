import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "E:/GitHub/vue3_and_so_on/nuxt-0120/nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}