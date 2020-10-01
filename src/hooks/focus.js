import { ref } from 'vue';

export default function useFocus() {
  const element = ref();
  const focusElement = function () {
    element.value.focus();
  };
  return {
    element,
    focusElement,
  };
}
