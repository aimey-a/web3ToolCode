<template>
  <div id="app">
    <div id="app_center">
      <nva></nva>
      <router-view />
    </div>
  </div>
</template>

<script>
import nva from "@/components/nva.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  props: [],
  components: {
    nva,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#app,
body,
hmtl {
  margin: 0;
  padding: 0;
}
#app_center{
    display: flex;
}
</style>
