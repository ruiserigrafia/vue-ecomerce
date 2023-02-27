<script>
import HeadingComponent from "./HeadingComponent.vue";
export default {
  props: {
    hgroupAttributes: Object,
  },
  data() {
    return {
      hgroupBind: this.hgroupAttributes.attrs,
      headingProps: this.hgroupAttributes.heading,
    };
  },
  components: {
    HeadingComponent,
  },
};
</script>

<template>
  <hgroup v-bind="hgroupBind">
    <HeadingComponent :headingAttributes="headingProps" />
  </hgroup>
</template>
<style scoped>
hgroup {
  width: 100%;
}
</style>
