<template>
  <header class="p-4 bg-gray-800 text-white flex items-baseline">
    <router-link to="/"
      ><h1 class="font-semibold">Tameablemist DevZone</h1></router-link
    >
    <nav class="ml-16">
      <router-link to="form">Form Development</router-link>
    </nav>
  </header>
  <section class="mx-auto mt-4 container">
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'App',
};
</script>
