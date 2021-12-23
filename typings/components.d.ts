declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    SvgIcon:  new () => {
      $props: {
        iconClass: string
      }
    }
  }
}
export {}