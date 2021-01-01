<template>
  <svg
    class="w-6 h-6"
    :fill="iconColor"
    :view-box.camel="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    :aria-labelledby="iconName" 
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g>
      <slot></slot>
    </g>
  </svg>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    solid: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  },
  setup(props) {
    const viewBox = computed(() => {
      return props.solid ? '0 0 20 20': '0 0 24 24'; 
    })

    return {
      viewBox
    }
  }
}
</script>

<style>

</style>