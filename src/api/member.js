import request from "../utils/request"

export  default{
    getMemberList(){
        return request({
            url:"/member/list",
            method:"get"
        })
    }
}