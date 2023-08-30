<template>
  <div id="app">
    <div id="app_center">
      <div>
        <nva></nva>
      </div>
      <div id="center_txt">
        <router-view />
      </div>
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
#app_center {
  display: flex;
  // align-items: center;
  justify-content: center;
}
#center_txt{
    width: 1100px;
}
</style>
