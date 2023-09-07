// GET 
import request from '@/utils/request'

export function GetPrice() {
    return request.get("/api/v5/public/instruments?instType=SPOT")
}
