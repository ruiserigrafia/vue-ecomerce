<script>
import ImgComponent from "./ImgComponent.vue";
export default {
  props: { figureAttributes: Object },
  data() {
    return {
      figureBind: this.figureAttributes.attrs,
      imgProps: this.figureAttributes.img,
      textCaption: this.figureAttributes.figCaption.text,
    };
  },
  components: {
    ImgComponent,
  },
};
</script>
<template>
  <figure v-bind="figureBind">
    <ImgComponent :imgAttributes="imgProps" />
    <figcaption>{{ textCaption }}</figcaption>
  </figure>
</template>
<style scoped>
figcaption {
  text-align: center;
  font-size: 1.5em;
}
</style>
