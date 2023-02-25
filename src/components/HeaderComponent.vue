<script>
import { LOGO } from "./../img/loaderImg";
export default {
  props: { hasFigure: Boolean, hasHgroup: Boolean, hasAside: Boolean },
  data() {
    return {
      hasFigure: this.hasFigure,
      hasHgroup: this.hasHgroup,
      hasAside: this.hasAside,
      figAtrributes: {
        id: "component-figure",
      },
      imgAtrributes: {
        src: LOGO,
        id: "logo",
      },
    };
  },
  beforeMount() {},
  created() {},
  methods: {},
};
</script>

<template>
  <header class="container-grid center-centered">
    <figure v-if="hasFigure" v-bind="figAtrributes">
      <img v-bind="imgAtrributes" />
    </figure>
    <hgroup v-if="hasHgroup"></hgroup>
    <aside v-if="hasAside">
      <form action="#"></form>
    </aside>
  </header>
</template>

<style scoped>
header {
  grid-template-columns: 20% 60% 20%;
  width: 95%;
  /*
  height: 200px;
  background-color: aqua;
  */
}
#logo {
  width: 100%;
}

#component-figure {
  width: 80%;
}
</style>
