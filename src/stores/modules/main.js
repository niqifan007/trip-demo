/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-09 21:49:13
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-10 01:43:17
 * @FilePath: \trip-demo\src\stores\modules\main.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */

import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore =  defineStore("main", {
    state: () => ({
        token: "",

        startDate: startDate,
        endDate: endDate,

        isLoading: false

    })
})


export default useMainStore