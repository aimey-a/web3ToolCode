<template>
  <div>
    {{gas+"gwei"}}
  </div>
</template>

<script>
import { provider, rate } from "@/utils/provider";
export default {
  name: "eth",
  data() {
    return {
      gas: 0,
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {
    this.getGas()
  },
  methods: {
    getGas() {
      provider.getFeeData().then((e) => {
        this.gas = this.$ethers.getNumber(e.gasPrice) / rate
      });
    },
  },
};
</script>

<style lang="css" scoped></style>
