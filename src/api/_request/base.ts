import { SkzzRestFetch } from 'vunk/element-plus'
const skzzRestFetch = new SkzzRestFetch({
  baseURL: import.meta.env.VITE_BASE_API,
})

export default skzzRestFetch.skzzRequest.bind(skzzRestFetch)