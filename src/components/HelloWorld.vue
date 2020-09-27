<template>
  <h1 class="font-sans text-lg">{{ msg }}</h1>
  <div class="w-48">
    <BaseButton @click="count++">count is: {{ count }}</BaseButton>
    <BaseButton class="mt-4 flex space-x-2">
      <svg
        class="w-5 h-5 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        ></path>
      </svg>
      <span>Submit</span>
    </BaseButton>
  </div>
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
