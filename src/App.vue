<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import { LOGO, CART } from "./img/loaderImg";
import "./index.css";
export default {
  data() {
    return {
      headerAttributes: {
        header: {
          attrs: {
            class: "container-grid grid-3columns center-centered",
          },
        },
        figure: {
          attrs: {
            id: "figure-header",
          },
          img: {
            attrs: {
              id: "logo",
              src: LOGO,
              alt: "Logamarca",
            },
          },
          figCaption: {
            attrs: {},
            text: "Logomarca",
          },
        },
        hgroup: {
          attrs: {},
          heading: {
            attrs: {},
            texts: ["Heading 1", "Heading 2", "Heading 3"],
          },
        },
        shoppingcart: {
          attrs: {
            id: "shoppingcart",
            src: CART,
            alt: "shopping cart",
          },
        },
      },
    };
  },
  computed: {},
  methods: {
    AddElements() {},
  },
  mounted() {},
  components: {
    HeaderComponent,
  },
};
</script>

<template>
  <HeaderComponent :headerAttributes="headerAttributes" />
</template>

<style>
.container-grid {
  display: grid;
}

.container-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.grid-3columns {
  grid-template-columns: 20% 60% 20%;
}

.center-centered {
  justify-items: center;
  justify-content: center;
  align-items: center;
}
#logo {
  width: 100%;
}

header {
  background-color: white;
  width: 95%;
  padding-top: 1%;
}
</style>
