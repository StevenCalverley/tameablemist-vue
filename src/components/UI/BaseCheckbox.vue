<template>
  <div class="flex flex-row">
    <label class="inline-flex items-center">
      <input
        type="checkbox"
        class="form-checkbox"
        :checked="checked"
        :value="value"
        @change="updateInput"
      />
      <span class="ml-2 flex-grow">{{ label || value }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [Array, Boolean],
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Array],
      default: '',
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },
  computed: {
    checked() {
      let checked = false;
      if (
        typeof this.modelValue === 'object' &&
        this.modelValue instanceof Array
      ) {
        checked = this.modelValue.indexOf(this.value) > -1;
      } else if (typeof this.modelValue === 'boolean') {
        checked = this.modelValue;
      }

      return checked;
    },
  },
  methods: {
    updateInput(event) {
      const isChecked = event.target.checked;

      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(event.target.value);
        } else {
          newValue.splice(newValue.indexOf(event.target.value), 1);
        }
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit(
          'update:modelValue',
          isChecked ? this.trueValue : this.falseValue
        );
      }
    },
  },
};
</script>

<style></style>
