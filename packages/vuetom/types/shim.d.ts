declare const __VP_HASH_MAP__: Record<string, string>
declare const __CARBON__: boolean
declare const __BSA__: boolean
declare const __ALGOLIA__: boolean
declare module '*.vue' {
  import { ComponentOptions } from 'vue'

  const comp: ComponentOptions
  export default comp
}

declare interface Window {
  __VP_HASH_MAP__: any
}
