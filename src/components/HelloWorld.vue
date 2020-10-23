<template>
  <h1 class="font-sans text-lg">{{ msg }}</h1>
  <div class="md:w-1/2 flex space-x-4 lg:space-x-16">
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
  <div class="mt-4 md:w-1/2">
    <BaseInput
      id="test-input-id"
      v-model="input"
      placeholder="Name"
      :state="input !== '' && input.length < 8 ? false : null"
    ></BaseInput>
    <p class="mt-1 text-gray-600 text-xs">Please enter your name.</p>
    <p class="mt-4">Typed Value: {{ input }}</p>
  </div>
  <div class="mt-4 md:w-1/2">
    <BaseInput
      id="test-input-id-2"
      v-model="input2"
      label="Test Label 2"
    ></BaseInput>
    <p class="mt-4">Typed Value: {{ input2 }}</p>
  </div>
  <div class="mt-4 md:w-1/2">
    <BaseTextarea id="test-textarea-id" v-model="textarea" label="Text Area"></BaseTextarea>
    <p class="mt-4">Typed Value: <pre class="mt-1 text-sm bg-gray-200 p-2 rounded">{{ textarea }}</pre></p>
  </div>
  <div class="mt-8 md:w-1/2">
    <div class="flex flex-row">
      <div>
        <BaseRadio id="personal" label="Personal" name="type" v-model="radio" />
      </div>
      <div class="ml-4">
        <BaseRadio id="business" label="Business" name="type" v-model="radio" />
      </div>
    </div>
    <p class="mt-4">Selected Value: {{ radio }}</p>
  </div>
  <div class="mt-8 md:w-1/2">
    <BaseCheckbox value="Did you do this?" v-model="checkbox" />
    <BaseCheckbox value="A second value" v-model="checkbox" />
    <BaseCheckbox value="A third value" v-model="checkbox" />
    <p class="mt-4">Selected Value: {{ checkbox }}</p>
  </div>
  <div class="mt-8 md:w-1/2">
    <BaseSelect id="select-example" :options="options" v-model="option" />
    <p class="mt-4">Selected Value: {{ option }}</p>
  </div>
  <div class="mt-8 md:w-1/2">
    <BaseSelectMenu :items="options" v-model="selected" label="Test Label" />
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
      checkbox: [],
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
