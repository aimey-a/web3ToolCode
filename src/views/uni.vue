<template>
  <div></div>
</template>

<script>
import * as univ3 from "@uniswap/v3-sdk";
import * as unisdk from "@uniswap/sdk-core";
export default {
  name: "uni",
  data() {
    return {};
  },
  props: [],
  components: {},
  created() {},
  mounted() {
    console.log(unisdk);
    // const currentPoolAddress = univ3.computePoolAddress({
    //   factoryAddress: unisdk.POOL_FACTORY_CONTRACT_ADDRESS,
    //   tokenA: unisdk.CurrentConfig.tokens.in,
    //   tokenB: unisdk.CurrentConfig.tokens.out,
    //   fee: unisdk.CurrentConfig.tokens.poolFee,
    // });
    // console.log(currentPoolAddress);

    // const poolContract = new this.$ethers.Contract(
    //   currentPoolAddress,
    //   IUniswapV3PoolABI.abi,
    //   getProvider()
    // );
    // console.log(poolContract);
  },
  methods: {},
};
</script>

<style lang="css" scoped></style>
