<script>
export default {
  props: { imgAttributes: Object },
  data() {
    return {
      imgBind: this.imgAttributes.attrs,
    };
  },
};
</script>
<template>
  <img v-bind="imgBind" />
</template>
<style scoped></style>
