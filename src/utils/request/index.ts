import RestFetch from './RestFetch'
import { ElMessage, ElLoadingService } from 'element-plus'
import type { LoadingOptions } from 'element-plus'
import type { RequestOptions } from './RestFetch'

const restFetch = new RestFetch({
  baseURL: import.meta.env.VITE_BASE_API,
  // setRequestInit: (config) => {
  //   const headers = config.headers as Headers
  //   const token = getToken()
  //   if (token) {
  //     headers.set('Authorization', token)
  //   }
  //   return config
  // },
})
interface InitOptions{
  msg?: boolean|string;
  loading?: boolean | LoadingOptions;
}
interface BaseResponse<T = unknown> {
  code: number;
  status: number;
  msg: string;
  data: T;
}

async function request<T extends BaseResponse> (options: RequestOptions, init?: InitOptions):Promise<T> {
  const loading = !!init?.loading
  let loadingService:ReturnType<typeof ElLoadingService>|null = null
  if (loading) {
    loadingService = ElLoadingService(
      typeof init.loading === 'boolean' ?  {} : init.loading, 
    )
  }
  const res = await restFetch.request<T>(options)
  if (!(res.code === 200 || res.status === 10001)) {
    console.warn(res)
    ElMessage({
      type: 'error',
      message: res.msg,
    })
  }
  // token异常
  if (res.status === 10405 || res.status === 10406 || res.status === 10407 || res.status === 10408) {
    // [TODO] 重新去获取token
  }
  if (res.status === 10001 || res.code === 200) { // 请求成功
    if (init?.msg) { 
      ElMessage({
        type: 'success',
        message: typeof init.msg === 'string' ? init.msg : res.msg,
      })
    }
  }
  loadingService?.close()
  return res
}

export {
  RequestOptions,
  BaseResponse,
  InitOptions,
}
export default request
