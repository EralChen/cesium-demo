import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    hidden?: boolean
    title?: string
    alwaysShow?: boolean
    affix?: boolean
    icon?: string
    sorted?: number
  }
}
