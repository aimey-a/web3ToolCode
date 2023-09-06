<template>
  <div id="home">
    <div id="eths">
      <div id="price">
        <div>
          <div class="ethsbill">
            <a class="a_text">eths最低价</a>
            <el-button type="primary" size="small" @click="ethsPrice()">查询</el-button>
          </div>
          <p>最低：{{ eths.priceUsd }}u</p>
          <p>单价：{{ eths.unitPriceUsd }}u</p>
          <p>最低：{{ eths.price }}e</p>
          <p>单价：{{ eths.unitPrice }}e</p>
        </div>
        <div>
          <div class="ethsbill">
            <a class="a_text">eths账单</a>
            <el-button type="primary" size="small" @click="ethsBill()">查询</el-button>
          </div>
          <p>大户：{{ h.dh }}</p>
          <p>中户：{{ h.zh }}</p>
          <p>韭菜：{{ h.jc }}</p>
        </div>
        <el-table :data="h.log" style="width: 100%">
          <el-table-column label="地址" align="center" width="80%"
            >>
            <template slot-scope="scope">
              <div>
                {{ scope.row[0] }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="张数" align="center" width="20%"
            >>
            <template slot-scope="scope">
              <div>
                {{ scope.row[1] }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { GetEthsPrice, GetEthsBill } from "@/api/api";
export default {
  name: "HomeView",
  data() {
    return {
      eths: {
        priceUsd: 0,
        unitPriceUsd: 0,
        price: 0,
        unitPrice: 0,
      },
      h: {
        dh: 0,
        zh: 0,
        jc: 0,
        log: [],
      },
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {},
  methods: {
    ethsPrice() {
      GetEthsPrice(
        "https://www.etch.market/api/markets/ethscriptions/listed?category=token&collection=erc-20%20eths&show=ShowAll&sortBy=PriceAsc&trait=&searchBy=&page.size=50&page.index=1"
      ).then((res) => {
        let min = 0;
        let d;
        res.ethscriptions.forEach((e) => {
          let p = parseFloat(e.order.unitPriceUsd);
          if (min == 0) {
            min = p;
            d = e.order;
          } else if (min > p) {
            min = p;
            d = e.order;
          }
        });
        this.eths = d;
        console.log(this.eths);
      });
    },
    ethsBill() {
      GetEthsBill(
        "https://www.etch.market/api/markets/history/orders?category=token&events=sold&collection=erc-20%20eths&page.size=100&page.index=1"
      ).then((res) => {
        let u = new Map();
        res.events.forEach((e) => {
          let d = u.get(e.to);
          if (d == undefined) {
            u.set(e.to, 1);
          } else {
            u.set(e.to, d + 1);
          }
        });
        var arrayObj = Array.from(u);
        arrayObj.sort(function (a, b) {
          return b[1] - a[1];
        });
        let dh = 0;
        let zh = 0;
        let jc = 0;
        let log = [];
        arrayObj.forEach((e) => {
          let a = e[1];
          if (a >= 5) {
            if (a >= 10) {
              dh++;
            } else {
              zh++;
            }
            log.push(e);
          } else {
            jc++;
          }
        });
        this.h.dh = dh;
        this.h.zh = zh;
        this.h.jc = jc;
        this.h.log = log;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-descriptions-row,
::v-deep .el-descriptions__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

::v-deep .el-table__header,
::v-deep .el-table__body,
::v-deep .el-table__empty-block {
  width: 100% !important;
}

#eths {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #price {
    max-width: 1200px;
    min-width: 300px;
    .ethsbill {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .a_text {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
</style>
