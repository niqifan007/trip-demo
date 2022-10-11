<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 21:10:07
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-11 14:47:14
 * @FilePath: \trip-demo\src\views\home\home.vue
 * @Description:  首页展示
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
    <div class="home" ref="homeRef">
        <home-nav-bar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <home-search-box />
        <home-categories />
        <div class="search-bar" v-if="isShowSearchBar">
            <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
        </div>
        <home-content />
        
    </div>
</template>

<script>
    export default { name: "home"}
</script>

<script setup>

import { computed, onActivated, ref, watch } from 'vue'
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearchBox from "./cpns/home-search-box.vue"
import HomeCategories from "./cpns/home_categories.vue"
import HomeContent from './cpns/home_content.vue'
import SearchBar from '@/components/search-bar/search-bar.vue'

import useScroll from '@/hooks/useScroll'


// // 发送网络请求：热门建议
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()
// const hotSuggests = ref([])
// hyRequest.get({
//     url: "/home/hotSuggests"
// }).then(res => {
//     // console.log(res)
//     hotSuggests.value = res.data
// })

// 模拟加载更多
// const moreBtnClick = () => {
//     console.log("加载更多的数据")
//     homeStore.fetchHouselistData()
// }

// 监听windows窗口滚动
// const scrollListenerHandler = () => {
//     const clientHeight = document.documentElement.clientHeight
//     const scrollTop = document.documentElement.scrollTop
//     const scrollHeight = document.documentElement.scrollHeight
//     // console.log(clientHeight, scrollTop, scrollHeight)
//     if (clientHeight + scrollTop >= scrollHeight) {
//         homeStore.fetchHouselistData()
//     }
// }

// onMounted(()=> {
//     window.addEventListener("scroll", scrollListenerHandler)
// })

// onUnmounted(() => {
//     window.removeEventListener("scroll",scrollListenerHandler)
// })

// useScroll(() => {
//     homeStore.fetchHouselistData()
// })
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
    if(newValue) {
        homeStore.fetchHouselistData().then(() => {
            isReachBottom.value = false
        })
    }
})

// 搜索框显示
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//     isShowSearchBar.value = newTop >100
// })
const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
})

// 跳转到home时，保留原来位置
onActivated(()=>{
    homeRef.value?.scrollTo({
        top: scrollTop.value
    })
})

</script>

<style lang="less" scoped>

.home {
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 60px;
    box-sizing: border-box;
}
.banner {
    img {
        width: 100%;
    }
}

.search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
}


</style>