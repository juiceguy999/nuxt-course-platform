<template>
  <label class="select-none cursor-pointer px-4 py-3 bg-[#333333] rounded-md font-medium block max-w-fit" :class="[{'bg-[#42B883] text-[#000]': modelValue}]">
    <input
     type="checkbox"
     :value="modelValue"
     @input="$emit('update:modelValue', !modelValue)"
     class="invisible absolute" 
    />
    {{ modelValue ? 'Completed' : 'Uncompleted' }}
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>
