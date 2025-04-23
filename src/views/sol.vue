<template>
	<div>
		<div>
			<el-button icon="el-icon-search" circle @click="Search"></el-button>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="per" label="价格"> </el-table-column>
				<el-table-column prop="num" label="数量"> </el-table-column>
				<el-table-column prop="U" label="u"> </el-table-column>
				<el-table-column prop="R" label="r"> </el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import { getjg } from "../api/价格";
export default {
	name: "sol",
	data() {
		return {
			Sol: {
				111: 40,
				134: 20,
			},
			tableData: [],
		};
	},
	props: [],
	components: {},
	created() {},
	mounted() {
		this.Search();
	},
	methods: {
		Getsol() {
			return new Promise((resolve, reject) => {
				let m = 0;
				let per = 0;
				for (const key1 in this.Sol) {
					let num = this.Sol[key1];
					m += num;
					per += key1 * num;
				}
				getjg("sol")
					.then((res) => {
						resolve({
							成本价格: per,
							数量: m,
							当前sol: res,
						});
					})
					.catch((err) => {
						reject(err);
					});
			});
		},
		SolPer(solp, num) {
			let p = solp.成本价格 - num * solp.数量;
			if (p > 0) {
				// 当前sol
				this.tableData.push({
					per: num,
					num: solp.数量,
					U: `盈利${p}u`,
					R: `盈利${p * 7.3}`,
				});
			} else {
				this.tableData.push({
					per: num,
					num: solp.数量,
					U: `亏损${p}u`,
					R: `亏损${p * 7.3}`,
				});
			}
		},
		Search() {
			this.tableData = [];
			this.Getsol()
				.then((solp) => {
					this.SolPer(solp, solp.当前sol);
					for (let i = 0; i < 200; i++) {
						if (i % 10 == 0 && i > 0) {
							this.SolPer(solp, i);
						}
					}
				})
				.catch((err) => {
					reject(err);
				});
		},
	},
};
</script>

<style lang="scss" scoped></style>
