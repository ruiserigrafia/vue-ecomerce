<script>
import FigureComponent from "./FigureComponent.vue";
import HgroupComponent from "./HgroupComponent.vue";
import ImgComponent from "./ImgComponent.vue";
export default {
  props: { headerAttributes: Object },
  data() {
    return {
      headerBind: this.headerAttributes.header.attrs,
      figureProps: this.headerAttributes.figure,
      hgroupProps: this.headerAttributes.hgroup,
      cartProps: this.headerAttributes.shoppingcart,
    };
  },
  components: {
    FigureComponent,
    HgroupComponent,
    ImgComponent,
  },
};
</script>

<template>
  <header v-bind="headerBind">
    <FigureComponent :figureAttributes="figureProps" />
    <HgroupComponent :hgroupAttributes="hgroupProps" />
    <aside class="container-flex flex-column center-centered">
      <ImgComponent :imgAttributes="cartProps" />
    </aside>
  </header>
</template>

<style scoped>
#figure-header {
  width: 80%;
}
#shoppingcart {
  width: 20%;
}
</style>
