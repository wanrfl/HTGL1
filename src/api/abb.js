import request from "../utils/request"

export  default{
    getMemberList(){
        return request({
            url:"https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined",
            method:"get"
        })
    }
}