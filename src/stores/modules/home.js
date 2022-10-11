/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-09 14:00:00
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-09 16:36:31
 * @FilePath: \trip-demo\src\stores\modules\home.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from "@/services"


const useHomeStore = defineStore("home",{
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage: 1,
        houselist:[]
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchCategoriesData() {
            const res = await getHomeCategories()
            this.categories = res.data
        },
        async fetchHouselistData() {
            const res = await getHomeHouselist(this.currentPage)
            // console.log(res)
            this.houselist.push(...res.data)
            this.currentPage++
        }
        
    }
})


export default useHomeStore