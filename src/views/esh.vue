<template>
  <div>
    <el-button type="primary" size="small" @click="GetEsh()">查询</el-button>
    <p v-for="(e,i) in arrayObj" :key="i">
        地址{{e[0]}},{{e[1]}}张
    </p>
  </div>
</template>

<script>
import { GetDuneESH } from "@/api/duneapi";
export default {
  name: "esh",
  data() {
    return {
      arrayObj: [],
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {},
  methods: {
    GetEsh() {
      GetDuneESH("https://api.dune.com/api/v1/query/2965574/results?").then((res) => {
        let data = new Map();

        res.forEach((e) => {
          let u = data.get(e.to);
          if (data.get(e.to) == undefined) {
            data.set(e.to, 1);
          } else {
            data.set(e.to, u + 1);
          }
        });

        var arraylist = Array.from(data);
        arraylist.sort(function (a, b) {
          return b[1] - a[1];
        });
        this.arrayObj = arraylist
      });
    },
  },
};
</script>

<style lang="css" scoped></style>
