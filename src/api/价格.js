import axios from 'axios'

async function getjg(name) {
    switch (name) {
        case 'btc':
            name = 'bitcoin'
            break
        case 'eth':
            name = 'ethereum'
            break
        case 'doge':
            name = 'dogecoin'
            break
        case 'avax':
            name = 'avalanche-2'
            break
        case 'sol':
            name = 'solana'
            break
        default:
            name = 'bitcoin'
            break
    }
    const header = {
        proxy: {
            host: '127.0.0.1',
            port: 7890,
        },
    }
    try {
        let data = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`,
            header
        )
        return data.data[name].usd
    } catch (error) {
        return 0
    }
}

export { getjg }