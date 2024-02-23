import { useGeneralStore } from '~/stores/general.store'
import { storeToRefs } from 'pinia'
import moment from 'moment/moment'

export const trans = (obj: any) => {
  if (!obj) return ''
  const generalStore = useGeneralStore()
  const { locale } = storeToRefs(generalStore)
  return obj[locale.value] || obj.ru
}

export const setting = (code: string) => {
  const generalStore = useGeneralStore()
  const { settings } = storeToRefs(generalStore)
  return trans(settings.value[code]?.body) || ''
}

export const formatNumber = (string: number) => {
  return Number(string).toLocaleString('ru')
}

export const formatPrice = (string: number) => {
  const generalStore = useGeneralStore()
  const { currency } = storeToRefs(generalStore)
  // return `${formatNumber(string)} ₸`
  return `${formatNumber(string)} ${currency.value}`
}

export const formatDateTime = (value: string, format = 'DD.MM.YYYY, HH:mm') => {
  if (value == '-') return value
  return value ? moment(value).format(format) : ''
}

export const formatDate = (value: string, format = 'DD.MM.YYYY') => {
  if (value == '-') return value
  return value ? moment(value).format(format) : ''
}

export const formatDateWords = (value: string, format = 'DD MMM YYYY') => {
  if (value == '-') return value
  return value ? moment(value).format(format) : ''
}

export const formatTime = (value: string, format = 'HH:mm') => {
  if (value == '-') return value
  return value ? moment(value).format(format) : ''
}

export const copyObject = (obj: any) => {
  return JSON.parse(JSON.stringify(obj))
}

export const parseSort = (val: string) => {
  if (!val) return [null, null]
  return val.split('-')
}

export const parseAPIError = (res: any) => {
  const error = res?.error?.value?.data?.message || res?.value?.data?.message
  return error || null
}

export const breadcrumbsFromCategoryTree = (tree: Array<any>) => {
  return tree.map((cat) => {
    return {
      title: trans(cat.title),
      link: `/category/${cat.slug}`
    }
  })
}

export const translate = (key: string) => {
  const generalStore = useGeneralStore()
  const { translations } = storeToRefs(generalStore)
  return translations.value?.[key] || key
}

export const toWidgetPurchase = async (show: any) => {
  const authStore = useAuthStore()
  const config = useRuntimeConfig()
  const { user } = storeToRefs(authStore)
  let otkn = ''
  if (user.value) {
    const res = await useAPI(`token/generate`, {
      method: 'POST'
    })
    otkn = res.value.data
  }
  const link = `${config.public.widgetUrl}/1/t/${show.timetables[0].id}/${
    show.timetables[0].uuid
  }${otkn ? `?otkn=${otkn}` : ''}`
  window.open(link, '_blank')
}
