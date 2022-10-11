/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-11 15:00:18
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-11 15:00:26
 * @FilePath: \trip-demo\postcss.config.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
// postcss.config.js
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
        }
        }
    };