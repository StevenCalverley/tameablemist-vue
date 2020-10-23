<template>
  <h1 class="text-2xl font-medium">Form Development</h1>
  <form @submit.prevent="handleSubmit" class="bg-gray-200 rounded p-8">
    <h2 class="font-semibold">Complete the below form</h2>
    <BaseInputGroup
      class="mt-4"
      input-id="name"
      label="Full Name"
      :state="!hasError"
      invalid-feedback="Must be at least 8 characters."
      inline
    >
      <BaseInput
        id="name"
        v-model="form.name"
        :state="!hasError"
      />
    </BaseInputGroup>
    <div class="mt-4">
      <BaseSelect
        id="type"
        label="Type"
        v-model="form.type"
        :options="options"
        inline
      />
    </div>
    <div class="mt-4 inline-flex w-full">
      <p class="block text-sm leading-5 font-medium text-gray-700 w-1/4">
        Sex:
      </p>
      <div class="space-x-2">
        <BaseRadio id="sex-male" label="Male" name="sex" v-model="form.sex" />
        <BaseRadio
          id="sex-female"
          label="Female"
          name="sex"
          v-model="form.sex"
        />
      </div>
    </div>
    <div class="mt-4 flex">
      <p class="block text-sm leading-5 font-medium text-gray-700 w-1/4">
        Hobbies:
      </p>
      <div class="flex flex-row space-x-2">
        <BaseCheckbox
          v-for="hobby in hobbies"
          :key="hobby"
          :value="hobby"
          v-model="form.hobbies"
        />
      </div>
    </div>
    <div class="mt-8 w-48 ml-auto">
      <BaseButton />
    </div>
  </form>
  <div class="mt-16 bg-gray-200 p-4 rounded-lg">
    <h3 class="font-semibold">Form Data</h3>
    <pre class="mt-4">{{ form }}</pre>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
    const hobbies = ['Football', 'Tennis', 'Chess'];
    const hasError = ref(false);
    const form = reactive({
      name: '',
      type: '',
      sex: '',
      hobbies: [],
    });

    const handleSubmit = () => {
      if (form.name.length < 8) {
        hasError.value = true;
      }
      console.log('Submitted!', form);
    };

    return {
      options,
      hobbies,
      handleSubmit,
      form,
      hasError
    };
  },
};
</script>

<style></style>
