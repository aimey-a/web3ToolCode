<template>
  <div>
    {{ gas + "gwei" }}
  </div>
</template>

<script>
import { provider, rate } from "@/utils/provider";
import { GetPrice } from "@/api/okx";

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
    // this.getGas()
    this.getBu();
  },
  methods: {
    getGas() {
      provider.getFeeData().then((e) => {
        this.gas = this.$ethers.getNumber(e.gasPrice) / rate;
      });
    },
    getBu() {
      // provider.getBalance("0x630176dF43d0A9F144aE27979f81eBa8AD4f1788").then(e =>{
      //     console.log(this.$ethers.getNumber(e) / rate**2);
      // })
      // GetPrice().then(e =>{
      //     console.log(console.log(e));
      // })

      const DAI = new Token(
        ChainId.MAINNET,
        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        18
      );

      // note that you may want/need to handle this async code differently,
      // for example if top-level await is not an option
      Fetcher.fetchPairData(DAI, WETH[DAI.chainId]).then((e) => {
        const route = new Route([e], WETH[DAI.chainId]);
        console.log(route.midPrice.toSignificant(6)); // 201.306
        console.log(route.midPrice.invert().toSignificant(6)); // 0.00496756
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
