/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 21:33:44
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-09 01:26:58
 * @FilePath: \trip-demo\src\stores\modules\city.js
 * @Description:  city网络请求
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
import { defineStore } from "pinia";
import { getCityAll } from "@/services"


const useCityStore = defineStore("City",{
    state: () => ({
        allCities: {},

        currentCity: { 
            cityName: "广州" 
        }
    }),
    actions: {
        async fetchAllCitiesData() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})


export default useCityStore