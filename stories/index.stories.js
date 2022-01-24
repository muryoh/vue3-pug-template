import PugFlag from "../src/index.vue";

export default {
  parameters: {
    layout: "centered",
  },
};

export const pug = () => ({
  components: { PugFlag },
  template: "<pug-flag></pug-flag>",
});
