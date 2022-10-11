<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 21:42:27
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-09 20:48:34
 * @FilePath: \trip-demo\src\components\tab-bar\tab-bar.vue
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
    <div class="tab-bar">
        <van-tabbar 
        v-model="currentIndex" 
        active-color="#ff9854" 
        route
        >
            <template v-for="(item, index) in tabbarData">
                <van-tabbar-item :to="item.path">
                    <template #default>
                        <span>{{ item.text }}</span>
                    </template>
                    <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
                        <img v-else :src="getAssetURL(item.imageActive)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>

import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import { ref, watch } from "vue"
import { useRoute } from "vue-router";

const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
    const index = tabbarData.findIndex(item => item.path === newRoute.path)
    if (index === -1) return
    currentIndex.value = index
})



</script>

<style lang="less" scoped>
.tab-bar {
    img {
        height: 26px;
    }
}
</style>