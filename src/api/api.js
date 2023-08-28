import request from '@/utils/request'

export function GetEthsPrice(url) {
    return request.get(url)
}
export function GetEthsBill(url) {
    return request.get(url)
}