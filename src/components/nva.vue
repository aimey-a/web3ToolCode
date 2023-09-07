<template>
  <div>
    <!-- <el-menu :router="true" :default-active="$route.path">
      <div v-for="(e,i) in router" :key="i">
        <el-menu-item :index="e.path">
          <span slot="title">{{e.name}}</span>
        </el-menu-item>
      </div>
    </el-menu> -->
  </div>
</template>

<script>
export default {
  name: "nva",
  data() {
    return {
      router: [],
    };
  },
  props: [],
  components: {},
  created() {
    this.router = this.$router.options.routes;
    this.router.sort((i, j) => {
      return i.meta.rank - j.meta.rank;
    });
  },
  mounted() {
    
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
