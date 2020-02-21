<template>
  <base-accordion open>
    <template v-slot:header="{ isOpen }">
      <div class="header">
        <h2>
          {{ header }}<span class="symbol">{{ isOpen ? "+" : "-" }}</span>
        </h2>
      </div>
    </template>
    <template v-slot:body>
      <slot></slot>
    </template>
  </base-accordion>
</template>

<script>
import BaseAccordion from "./BaseAccordion";

export default {
  components: {
    BaseAccordion
  },
  props: {
    header: String
  }
};
</script>

<style lang="scss">
.header {
  text-align: left;
  padding: 0 2rem 0 2rem;
}

.symbol {
  float: right;
}
</style>
