<template>
  <div>
    <div id="header" @click="toggleIsHidden">
      <slot name="header" :isOpen="!isHidden"></slot>
    </div>
    <div id="body" :hidden="isHidden">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-accordion",
  props: {
    open: Boolean
  },
  data() {
    return {
      isHidden: !this.open
    };
  },
  methods: {
    toggleIsHidden() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>

<style lang="scss">
#header {
  cursor: pointer;
}
</style>
