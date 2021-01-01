  <template>
  <div
    class="mt-2"
    :class="[
      { 'md:flex items-center': inline}
    ]"
  >
    <div
      :class="[
        { 'md:w-1/4': inline}
      ]"
    >
      <label
        class="block text-sm leading-5 font-medium text-gray-700"
        :for="inputId"
      >{{ label }}</label>
    </div>
    <div class="flex-grow">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      default: null,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
}
</script>