<template>
  <div>
    <a :href="href">
      <img id="icon" :src="src" :alt="alt" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    href: String,
    src: String,
    alt: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#icon {
  height: 100%;
}
</style>
