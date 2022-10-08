/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 22:46:30
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-07 22:48:40
 * @FilePath: \trip-demo\src\utils\load_assets.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
export const getAssetURL = (image) => {
    //参数一：相对路径
    //参数二：当前路径的url
    return new URL(`../assets/img/${image}`,import.meta.url).href
}