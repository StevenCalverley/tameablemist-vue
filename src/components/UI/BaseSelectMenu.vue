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
          <BaseButton
            type="select"
            aria-haspopup="listbox"
            :aria-expanded="isOpen"
            :aria-labelledby="labelID"
            class="cursor-pointer relative border-gray-300 bg-white pl-3 pr-10 text-left sm:text-sm sm:leading-5"
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
          </BaseButton>
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
              ref="searchInput"
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
import { ref, toRefs, computed, nextTick } from 'vue';
import useSearchFilter from '../../hooks/searchFilter';
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
  setup(props, { emit }) {
    const { label, items, modelValue } = toRefs(props);

    // Template Refs
    const searchInput = ref(null);
    const button = ref(null);
    const options = ref(null);

    const labelID = computed(() => {
      return 'listbox-' + label.value.toLowerCase().split(' ').join('-');
    });

    const { search, filteredOptions } = useSearchFilter(items);

    const isOpen = ref(false);
    const open = async () => {
      if (isOpen.value) {
        return;
      }
      isOpen.value = true;
      await nextTick();
      searchInput.value.focusInput();
      scrollToHighlighted();
    };

    const close = () => {
      if (!isOpen.value) {
        return;
      }
      isOpen.value = false;
      button.value.focusButton();
    };

    const highlightedIndex = ref(0);
    const handleSelect = (item) => {
      emit('update:modelValue', item);
      search.value = '';
      highlightedIndex.value = items.value.findIndex((el) => el === item);
      close();
    };

    const selectHighlighted = () => {
      handleSelect(filteredOptions.value[highlightedIndex.value]);
    };

    const scrollToHighlighted = () => {
      options.value.children[highlightedIndex.value].scrollIntoView({
        block: 'nearest',
      });
    };

    const highlight = (index) => {
      highlightedIndex.value = index;

      if (highlightedIndex.value < 0) {
        highlightedIndex.value = filteredOptions.value.length - 1;
      }

      if (highlightedIndex.value > filteredOptions.value.length - 1) {
        highlightedIndex.value = 0;
      }

      scrollToHighlighted();
    };

    const highlightPrev = () => {
      highlight(highlightedIndex.value - 1);
    };

    const highlightNext = () => {
      highlight(highlightedIndex.value + 1);
    };

    return {
      isOpen,
      search,
      searchInput,
      button,
      labelID,
      highlightedIndex,
      filteredOptions,
      options,
      selectHighlighted,
      open,
      close,
      handleSelect,
      highlightPrev,
      highlightNext,
    };
  },
};
</script>
