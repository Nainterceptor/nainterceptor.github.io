<template>
  <div>
    <vue-header />
    <nuxt />
  </div>
</template>

<script>
import VueHeader from '~/components/header.vue';

export default {
  components: {
    VueHeader,
  },
};
</script>
