/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 19:57:07
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-10 01:22:02
 * @FilePath: \trip-demo\src\router\index.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
import { createRouter,createWebHashHistory  } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    // 映射关系 path -> component
    routes:[
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: () => import("@/views/home/home.vue")
        },
        {
            path: "/order",
            component: () => import("@/views/order/order.vue")
        },
        {
            path: "/message",
            component: () => import("@/views/message/message.vue")
        },
        {
            path: "/favor",
            component: () => import("@/views/favor/favor.vue")
        },
        {
            path: "/city",
            component: () => import("@/views/city/city.vue"),
            // meta: {
            //     hideTabBar: true
            // }
        },
        {
            path: "/search",
            component: () => import("@/views/search/search.vue"),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: "/detail/:id",
            component: () => import("@/views/detail/detail.vue"),
            
        }

    ]
})

export default router