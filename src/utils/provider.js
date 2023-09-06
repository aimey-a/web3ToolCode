
import * as ethers from 'ethers'
const provider = new ethers.JsonRpcProvider(process.env.VUE_APP_K_Live_URL)

const rate = 10**9

export {provider,rate}