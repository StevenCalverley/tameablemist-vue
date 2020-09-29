<template>
  <h1 class="font-sans text-lg">{{ msg }}</h1>
  <div class="w-1/2 flex space-x-16">
    <BaseButton @click="count++">count is: {{ count }}</BaseButton>
    <BaseButton class="flex justify-center items-center space-x-4">
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
  <hr class="my-8" />
  <div class="mt-4 w-1/2">
    <BaseInput
      id="test-input-id"
      v-model="input"
      label="Test Label"
      inline
    ></BaseInput>
    <p class="mt-4">Typed Value: {{ input }}</p>
  </div>
  <div class="mt-4 w-1/2">
    <BaseInput
      id="test-input-id-2"
      v-model="input2"
      label="Test Label 2"
    ></BaseInput>
    <p class="mt-4">Typed Value: {{ input2 }}</p>
  </div>
  <div class="mt-4 w-1/2">
    <BaseTextarea id="test-textarea-id" v-model="textarea" label="Text Area"></BaseTextarea>
    <p class="mt-4">Typed Value: <pre class="mt-1 text-sm bg-gray-200 p-2 rounded">{{ textarea }}</pre></p>
  </div>
  <div class="mt-8 w-1/2">
    <BaseRadio label="Personal" name="type" v-model="radio" />
    <BaseRadio label="Business" name="type" v-model="radio" />
    <p class="mt-4">Selected Value: {{ radio }}</p>
  </div>
  <div class="mt-8 w-1/2">
    <BaseSelect :options="options" v-model="option" />
    <p class="mt-4">Selected Value: {{ option }}</p>
  </div>
  <div class="mt-8 w-1/2">
    <BaseSelectMenu :items="options" v-model="selected" label="Test Label" />
    <p class="mt-4">Selected Value: {{ selected }}</p>
  </div>
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
      input2: '',
      textarea: '',
      radio: '',
      option: 'Option 1',
      options: [
        'Option 1',
        'Test 1',
        'Option 2',
        'Test 2',
        'Option 3',
        'Test 3',
        'Option 4',
        'Test 4',
      ],
      selected: '',
    };
  },
};
</script>
