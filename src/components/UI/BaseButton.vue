<template>
  <button
    ref="button"
    class="w-full px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
    :class="[
      {
        'text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700':
          type === 'primary',
      },
    ]"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
import useFocus from '../../hooks/focus';

export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
  setup() {
    const { element: button, focusElement: focusButton } = useFocus();
    return {
      button,
      focusButton,
    };
  },
};
</script>
