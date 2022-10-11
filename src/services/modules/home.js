/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-08 21:47:44
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-09 16:10:21
 * @FilePath: \trip-demo\src\services\modules\home.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
import hyRequest from '../request/'


export function getHomeHotSuggests() {
    return hyRequest.get({ 
        url: "/home/hotSuggests" 
    })
}


export function getHomeCategories() {
    return hyRequest.get({
        url: "/home/categories"
    })
}

export function getHomeHouselist(currentPage){
    return hyRequest.get({
        url: "/home/houselist",
        params: {
            page: currentPage
        }
    })
}