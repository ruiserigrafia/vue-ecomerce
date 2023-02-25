<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  data() {
    return {
      myObject: {
        title: "Nos passos de Jesus",
        author: "Bispo Edir Macedo",
        publishesat: "2015",
      },
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  components: {
    HeaderComponent,
  },
};
</script>

<template>
  <HeaderComponent :hasFigure="true" :hasHgroup="true" :hasAside="true" />
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}-{{ key }}:{{ value }}
    </li>
  </ul>
</template>

<style scoped></style>
