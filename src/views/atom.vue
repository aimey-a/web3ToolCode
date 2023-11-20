<template>
	<div>
		<el-button
			type="primary"
			@click="refresh()"
		>刷新</el-button>
		<el-table
			:data="atomList"
		>
			<el-table-column
				label="单价"
				align="center"
				prop="Price_Sats"
			>
				<template slot-scope="scope">
					<div>
						<!-- {{ scope.row.Price_Sats/100000000/(scope.row.AtomicalContent.Amount/1000)+"sats"}} -->
						{{imputedPrice(scope,"btc",false)}}
					</div>
					<div>
						<!-- {{ scope.row.Price_Sats/100000000/(scope.row.AtomicalContent.Amount/1000)*usd+"u"}} -->

						{{imputedPrice(scope,"u",true)}}
					</div>
				</template>
			</el-table-column>
			<el-table-column
				label="总价"
				align="center"
			>
				<template slot-scope="scope">
					<div>
						{{totalPrice(scope,"btc",false)}}
					</div>
					<div>
						{{totalPrice(scope,"u",true)}}
					</div>
				</template>
			</el-table-column>
			<el-table-column
				label="数量"
				align="center"
				prop="AtomicalContent"
			>
				<template slot-scope="scope">
					<div>
						{{ scope.row.AtomicalContent.Amount }}
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import { GetAtomPrice, GetBtcPrice } from '@/api/api';
export default {
  name: '',
  data() {
    return {
      usd: 0,
      atomList: [],
    }
  },
  props: [],
  components: {

  },
  created() {
    this.btcPrice()
    this.atomPrice()
  },
  mounted() { },
  methods: {
    atomPrice() {
      GetAtomPrice("https://server.atomicalmarket.com/market/v1/token/listing?limit=10&orderby=price&orderdir=asc&offset=0&ticker=atom").then(res => {
        this.atomList = res.result
      })
    },
    btcPrice() {
      GetBtcPrice("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd").then(data => {
        this.usd = data.bitcoin.usd
      })
    },
    imputedPrice(scope, str, isusd = false) {
      let price = scope.row.Price_Sats / 100000000 / (scope.row.AtomicalContent.Amount / 1000)
      if (isusd) {
        price *= this.usd
      }
      price = price.toFixed(6)
      return price + str
    },
    totalPrice(scope, str, isusd = false) {
      let price = scope.row.Price_Sats / 100000000
      if (isusd) {
        price *= this.usd
      }
      price = price.toFixed(6)
      return price + str
    },
    refresh() {
      this.btcPrice()
      this.atomPrice()
    }
  }
}
</script>


<style lang="css" scoped>
</style>
