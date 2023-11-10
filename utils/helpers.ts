export const trans = (obj: any) => {
  return obj.ru
}

export const formatNumber = (string: number) => {
  return Number(string).toLocaleString('ru')
}

export const formatPrice = (string: number) => {
  return `${formatNumber(string)} ₸`
}

export const copyObject = (obj: any) => {
  return JSON.parse(JSON.stringify(obj))
}

export const parseSort = (val: string) => {
  if (!val) return [null, null]
  return val.split('-')
}

export const parseAPIError = (res: any) => {
  const error = res?.error?.value?.data?.message
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
