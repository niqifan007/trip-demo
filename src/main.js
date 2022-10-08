/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 19:19:17
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-07 20:17:50
 * @FilePath: \trip-demo\src\main.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

import "normalize.css"
import "./assets/css/index.css"


createApp(App).use(router).use(pinia).mount('#app')
