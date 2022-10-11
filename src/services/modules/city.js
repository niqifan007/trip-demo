/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-08 21:34:40
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-08 21:40:04
 * @FilePath: \trip-demo\src\services\modules\city.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
import hyRequest from '../request'


export function getCityAll() {
    return hyRequest.get({
        url: "/city/all"
    })
}