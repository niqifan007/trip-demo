/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-09 19:48:30
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-10 22:32:06
 * @FilePath: \trip-demo\src\hooks\useScroll.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */

import { onMounted, onUnmounted,ref } from 'vue'
import { throttle } from 'underscore'

// export default function useScroll(reachBottomCB) {
//     const scrollListenerHandler = () => {
//         const clientHeight = document.documentElement.clientHeight
//         const scrollTop = document.documentElement.scrollTop
//         const scrollHeight = document.documentElement.scrollHeight
//         if (clientHeight + scrollTop >= scrollHeight) {
//             console.log("底部了")
//             if(reachBottomCB) reachBottomCB()
//         }
//     }
    
//     onMounted(()=> {
//         window.addEventListener("scroll", scrollListenerHandler)
//     })
    
//     onUnmounted(() => {
//         window.removeEventListener("scroll",scrollListenerHandler)
//     })
// }

export default function useScroll(elRef) {

    let el = window

    const isReachBottom = ref(false)

    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)

    // 防抖/节流
    const scrollListenerHandler = throttle(() => {
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }
        // console.log("监听到滚动")
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            // console.log("底部了")
            isReachBottom.value = true
        }
    }, 100)
    
    onMounted(()=> {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener("scroll", scrollListenerHandler)
    })
    
    onUnmounted(() => {
        el.removeEventListener("scroll",scrollListenerHandler)
    })

    return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}