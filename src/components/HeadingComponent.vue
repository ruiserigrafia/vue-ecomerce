<script>
export default {
  props: {
    headingAttributes: Object,
  },
  data() {
    return {
      headingBind: this.headingAttributes.attrs,
      texts: this.headingAttributes.texts,
    };
  },
};
</script>
<template>
  <h1>{{ texts[0] }}</h1>
  <h2>{{ texts[1] }}</h2>
  <h3>{{ texts[2] }}</h3>
</template>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  text-align: center;
}
</style>
