<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    console.log("A ccontagem inicial e ${this.count}");
  },
};
</script>

<template>
  <button @click="increment">Count is {{ count }}</button>
</template>

<style scoped>
button {
  cursor: pointer;
  background-color: blue;
  color: white;
}
</style>
