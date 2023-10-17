<template>
  <div>
    <el-input v-model="text" placeholder="请输入格式化的消息ID"></el-input>
    <el-button type="primary" @click="updx()">格式</el-button>
    <el-input v-model="uptext"></el-input>
  </div>
</template>

<script>
export default {
  name: "tool",
  data() {
    return {
      text: "text_primary placeholder   exe",
      uptext: "",
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {},
  methods: {
    updx() {
      let d = "";
      let isk = true;
      for (const e of this.text) {
        if (e != " ") {
          d += e;
          isk = true;
        } else {
          if (isk) {
            isk = false;
            d += "_";
          }
        }
      }
      this.uptext = d.toLocaleUpperCase().replaceAll(" ", "_");
    },
  },
};
</script>

<style lang="scss" scoped></style>
