import { tokenService } from '@/utils/token.service'
import { useGeneralStore } from '@/stores/general.store'
import { storeToRefs } from 'pinia'

export const useAPI = (request: any, opts: any = {}) => {
  const config = useRuntimeConfig()
  const generalStore = useGeneralStore()
  const { clientId, locale } = storeToRefs(generalStore)

  opts.headers = {
    'X-API-TOKEN': config.public.apiToken,
    'X-CLIENT-ID': clientId.value,
    'Accept-Language': locale.value
  }

  const authToken = tokenService.getToken()
  if (authToken) {
    opts.headers = {
      ...opts.headers,
      Authorization: `Bearer ${authToken}`
    }
  }

  return useFetch(request, { baseURL: config.public.baseURL, ...opts })
}
