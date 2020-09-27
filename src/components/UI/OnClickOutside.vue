<template>
  <div ref="root"><slot /></div>
</template>

<script>
import { ref, onBeforeUnmount, onMounted } from 'vue';
export default {
  props: ['do'],
  setup(props) {
    const root = ref(null);

    const listener = (e) => {
      if (e.target === root.value || root.value.contains(e.target)) {
        return;
      }
      props.do();
    };

    onMounted(() => {
      console.log(root.value);
      document.addEventListener('click', listener);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', listener);
    });

    return {
      root,
    };
  },
};
</script>
