import { ref, computed } from 'vue';
export default function useSearchFilter(items) {
  const search = ref('');

  const filteredOptions = computed(() => {
    return applySearchFilter(search, items);
  });

  const applySearchFilter = (search, items) => {
    return items.value.filter((item) =>
      item.toLowerCase().startsWith(search.value.toLowerCase())
    );
  };

  return {
    search,
    filteredOptions,
  };
}
