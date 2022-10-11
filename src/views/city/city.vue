<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-08 16:50:35
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-09 00:11:53
 * @FilePath: \trip-demo\src\views\city\city.vue
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
    <div class="city top-page">
        <div class="top">
            <!-- 搜索框 -->
            <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

            <!-- tab切换 -->
            <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
                <template v-for="(value, key, index) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
        <div class="content">
            <!-- <city-group :group-data="currentGroup"/> -->
            <template v-for="(value, key, index) in allCities">
                <city-group v-show="tabActive === key" :group-data="value"/>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref,computed } from 'vue'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { getCityAll } from "@/services"
import useCityStore from '@/stores/modules/city'

import CityGroup from './cpns/city-group.vue'

const router = useRouter()

// 搜索框
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}

// tab切换
const tabActive = ref()

/**
 * 网络请求太多，包含大量的逻辑
 * 传递数据给子组件非常麻烦
 * 
 */

// 网络请求，获取城市数据
// const allCity = ref({})
// getCityAll().then(res => {
//     allCity.value = res.data
// })

// 从stone中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)



// 获取选中标签后的数据
// 获取正确的key：将tabs中绑定的tabAction正确绑定
// 根据key从allCities获取数据，通过computed转换成响应式的
const currentGroup = computed(() => allCities.value[tabActive.value])




</script>

<style lang="less" scoped>
.city {
    // --van-tabs-line-height: 30px;

    // .top{
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    // }

    // .content {
    //     margin-top: 98px;
    // }
    .top {
        position: relative;
        z-index: 9;
    }

    // 局部滚动
    .content {
        height: calc(100vh - 98px);
        overflow-y: auto;
    }
}
</style>