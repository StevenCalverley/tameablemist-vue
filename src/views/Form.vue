<template>
  <h1 class="text-2xl font-medium">Form Development</h1>
  <form @submit.prevent="handleSubmit" class="bg-white rounded p-8">
    <h2 class="font-semibold">Complete the below form</h2>
    <BaseInputGroup
      input-id="name"
      label="Full Name"
      :state="!hasError"
      inline
    >
      <BaseInput
        id="name"
        v-model="form.name"
        :state="!hasError"
      />
      <BaseInvalidFeedback
        v-if="invalidFeedbackDescription !== ''"
      >{{ invalidFeedbackDescription }}</BaseInvalidFeedback>
    </BaseInputGroup>
    <BaseInputGroup
      label="Type"
      input-id="type"
      inline
    >
      <BaseSelect
        id="type"
        v-model="form.type"
        :options="options"
        inline
      />
    </BaseInputGroup>
    <BaseInputGroup
      class="mt-8"
      input-id="sex"
      label="Sex"
      inline
    >
      <div class="space-x-4">
        <BaseRadio
          id="sex-male"
          label="Male"
          name="sex"
          v-model="form.sex"
        />
        <BaseRadio
          id="sex-female"
          label="Female"
          name="sex"
          v-model="form.sex"
        />
      </div>
    </BaseInputGroup>
    <BaseInputGroup
      class="mt-8"
      label='Hobbies'
      input-id="hobbies"
      inline
    >
      <div class="flex flex-row space-x-6">
        <BaseCheckbox
          v-for="hobby in hobbies"
          :key="hobby"
          :value="hobby"
          v-model="form.hobbies"
        />
      </div>
    </BaseInputGroup>
    <div class="mt-8">
      <BaseButton />
    </div>
  </form>
  <div class="mt-16 bg-gray-200 p-4 rounded-lg">
    <h3 class="font-semibold">Form Data</h3>
    <pre class="mt-4">{{ form }}</pre>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';

export default {
  setup() {
    const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];
    const hobbies = ['Football', 'Tennis', 'Chess'];
    const hasError = ref(false);
    const invalidFeedbackDescription = ref('');
    const form = reactive({
      name: '',
      type: '',
      sex: '',
      hobbies: [],
    });

    watchEffect(() => {
      if ( form.name !== '' && form.name.length < 8 ) {
        hasError.value = true;
        invalidFeedbackDescription.value = 'Must be at least 8 characters!'
      } else {
        hasError.value = false;
        invalidFeedbackDescription.value = ''
      }
    })

    const handleSubmit = () => {
      console.log('Submitted!', form);
    };

    return {
      options,
      hobbies,
      handleSubmit,
      form,
      hasError,
      invalidFeedbackDescription
    };
  },
};
</script>

<style></style>
