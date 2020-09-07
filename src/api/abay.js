import request from "../utils/request"

export  default{
    getMemberList(){
        return request({
            url:"https://elm.cangdu.org/v1/users/list?offset=0&limit=20",
            method:"get"
        })
    }
}