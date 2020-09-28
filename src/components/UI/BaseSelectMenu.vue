<template>
  <on-click-outside :do="close">
    <div class="space-y-1">
      <label
        v-if="label"
        :id="labelID"
        class="block text-sm leading-5 font-medium text-gray-700"
      >
        {{ label }}
      </label>
      <div class="relative">
        <span class="inline-block w-full rounded-md shadow-sm">
          <button
            type="button"
            aria-haspopup="listbox"
            :aria-expanded="isOpen"
            :aria-labelledby="labelID"
            class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            @click="open"
            ref="button"
          >
            <div class="flex items-center space-x-3">
              <span v-if="modelValue !== ''" class="block truncate">{{
                modelValue
              }}</span>
              <span v-else class="text-gray-500">Select an item...</span>
            </div>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </span>

        <div
          class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
          v-show="isOpen"
        >
          <div class="p-2">
            <BaseInput
              id="search-option"
              class="bg-gray-200"
              v-model="search"
              ref="search"
              @keydown.esc="close"
              @keydown.up="highlightPrev"
              @keydown.down="highlightNext"
              @keydown.enter.prevent="selectHighlighted"
              @keydown.tab.prevent
            />
          </div>
          <ul
            tabindex="-1"
            role="listbox"
            ref="options"
            :aria-labelledby="labelID"
            aria-activedescendant="listbox-item-3"
            class="max-h-56 rounded-md p-2 text-base leading-6 overflow-auto focus:outline-none sm:text-sm sm:leading-5"
          >
            <li
              v-for="(item, idx) in filteredOptions"
              :key="item"
              @click="handleSelect(item)"
              :id="`listbox-item${idx}`"
              role="option"
              class="cursor-pointer rounded select-none relative py-2 pl-3 pr-9 hover:bg-blue-500 hover:text-white"
              :class="[
                { 'text-gray-900 ': item === !modelValue },
                { 'bg-blue-500 text-white': idx === highlightedIndex },
              ]"
            >
              <div class="flex items-center space-x-3">
                <span
                  class="font-normal block truncate"
                  :class="[{ 'font-semibold': item === modelValue }]"
                  >{{ item }}</span
                >
              </div>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-4"
                v-show="item === modelValue"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  :class="{
                    'text-blue-500': item === modelValue,
                  }"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </li>
            <div v-show="filteredOptions.length === 0" class="mt-2">
              No results found for "{{ search }}"
            </div>
          </ul>
        </div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from './OnClickOutside.vue';

export default {
  components: {
    OnClickOutside,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      search: '',
      highlightedIndex: 0,
    };
  },
  computed: {
    labelID() {
      return 'listbox-' + this.label.toLowerCase().split(' ').join('-');
    },
    filteredOptions() {
      return this.applySearchFilter(this.search, this.items);
    },
  },
  methods: {
    open() {
      if (this.isOpen) {
        return;
      }
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.search.focusInput();
        this.scrollToHighlighted();
      });
    },
    close() {
      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;
      this.$refs.button.focus();
    },
    handleSelect(item) {
      this.$emit('update:modelValue', item);
      this.search = '';
      this.highlightedIndex = this.items.findIndex((el) => el === item);
      this.close();
    },
    applySearchFilter(search, items) {
      return items.filter((item) =>
        item.toLowerCase().startsWith(search.toLowerCase())
      );
    },
    selectHighlighted() {
      this.handleSelect(this.filteredOptions[this.highlightedIndex]);
    },
    scrollToHighlighted() {
      this.$refs.options.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
      });
    },
    highlight(index) {
      this.highlightedIndex = index;

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1;
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0;
      }

      this.scrollToHighlighted();
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1);
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1);
    },
  },
  created() {},
};
</script>
