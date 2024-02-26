<template>
  <div>
    <n-select
      :multiple="multiple"
      filterable
      :render-label="renderLabel"
      value-field="id"
      :placeholder="placeholder"
      :options="autocomplete ? remoteOptions : options"
      @update:value="handleInput"
      @focus="handleBlur"
      @search="handleSearch"
      :remote="autocomplete"
      :value="value"
      :clearable="clearable" />
  </div>
</template>

<script setup lang="ts">
import { NSelect } from 'naive-ui'
import { useGeneralStore } from '@/stores/general.store'
import { computed, onMounted, ref } from 'vue'
import { copyObject } from '~/utils/helpers'

const generalStore = useGeneralStore()
const emit = defineEmits(['update:modelValue'])
const remoteOptions = ref([])

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Выбор'
  },
  validationId: String,
  value: [String, Number, Array],
  multiple: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: Boolean,
    default: false
  },
  autocompleteSearchField: {
    type: String,
    default: 'title'
  },
  options: {
    type: Array
  },
  language: {
    type: String,
    default: ''
  },
  labelField: {
    type: String,
    default: 'title'
  },
  model: {
    type: String
  }
})

const renderLabel = (v: any) => {
  if (props.autocomplete && (v.text || v.label)) {
    return v.text || v.label
  }
  let str = `[${v.id}] `
  str +=
    props.language && v[props.labelField]
      ? v[props.labelField][props.language]
      : v[props.labelField]
  return str
}

const computedValues = computed(() => {
  if (Array.isArray(props.value) && props.value.length) {
    let f = props.value[0]
    if (typeof f === 'object') return props.value.map((v: any) => v.id)
  }
  return props.value
})

onMounted(() => {
  if (computedValues.value) {
    emit('update:modelValue', copyObject(computedValues.value))
    if (props.autocomplete) {
      handleSearch('', [computedValues.value])
    }
  }
})

const handleInput = (v: any) => {
  emit('update:modelValue', v)
}

const handleBlur = () => {
  if (props.autocomplete) {
    handleSearch('')
  }
}

const handleSearch = (v: any, ids: Array<any> = []) => {
  if (!props.autocomplete) return
  generalStore
    .autocompleteSearch(props.model, v, props.autocompleteSearchField, ids)
    .then((res: any) => {
      remoteOptions.value = res || []
    })
}
</script>
