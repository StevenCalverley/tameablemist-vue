<template>
  <div class="mt-1 relative flex">
    <input
      :id="id"
      :type="type"
      ref="input"
      class="form-input w-full sm:text-sm sm:leading-5 placeholder-gray-500"
      :class="[
        {
          'font-medium text-red-500 border-red-400 focus:border-red-400 focus:shadow-outline-error bg-red-100':
            state !== null && !state,
        },
      ]"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-2 text-red-600"
      v-if="state !== null && !state"
    >
      <BaseIcon solid>
        <icon-exclamation-circle />
      </BaseIcon>
    </div>
  </div>
</template>

<script>
import IconExclamationCircle from '../icons/IconExclamationCircle.vue';
import useFocus from '../../../hooks/focus';

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  components: {
    IconExclamationCircle,
  },
  setup() {
    const { element: input, focusElement: focusInput } = useFocus();

    return {
      input,
      focusInput,
    };
  },
};
</script>
