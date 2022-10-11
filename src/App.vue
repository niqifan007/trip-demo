<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 19:19:17
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-11 15:16:52
 * @FilePath: \trip-demo\src\App.vue
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
    <div class="app">
        <router-view v-slot="props">
            <keep-alive include="home">
            <component :is="props.Component"></component>
            </keep-alive>
        </router-view>
        <tab-bar v-show="!route.meta.hideTabBar"/>
        <loading/>
        <!-- <tab-bar /> -->
    </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import Loading from "@/components/loading/loading.vue"
import { useRoute } from "vue-router";


const route = useRoute()

</script>

<style lang="less" scoped>



</style>