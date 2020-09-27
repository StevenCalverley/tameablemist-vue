<template>
  <h1 class="font-sans text-lg">{{ msg }}</h1>
  <BaseButton @click="count++">count is: {{ count }}</BaseButton>
  <div class="mt-4">
    <BaseInput
      id="test-input-id"
      v-model="input"
      label="Test Label"
    ></BaseInput>
  </div>
  <p class="mt-4">Typed Value: {{ input }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      input: '',
    }
  },
}
</script>
