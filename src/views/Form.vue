<template>
  <h1 class="text-2xl font-medium">Form Development</h1>
  <form @submit.prevent="handleSubmit" class="w-1/2 bg-gray-200 rounded p-4">
    <h2 class="font-semibold">Complete the below form</h2>
    <div class="mt-2">
      <BaseInput
        id="name"
        v-model="form.name"
        label="Name"
        placeholder="Enter name"
        inline
      />
    </div>
    <div class="mt-2">
      <BaseSelect
        id="type"
        label="Type"
        v-model="form.type"
        :options="options"
        inline
      />
    </div>
    <div class="mt-4 w-48 ml-auto">
      <BaseButton />
    </div>
  </form>
  <div class="mt-8 bg-gray-200 p-4">
    <h3 class="font-semibold">Form Data</h3>
    <pre class="mt-4">{{ form }}</pre>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
    const form = reactive({
      name: '',
      type: '',
    });

    const handleSubmit = () => {
      console.log('Submitted!', form);
    };

    return {
      options,
      handleSubmit,
      form,
    };
  },
};
</script>

<style></style>
