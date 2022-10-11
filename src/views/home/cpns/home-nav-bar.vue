<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-08 15:34:32
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-08 15:36:57
 * @FilePath: \trip-demo\src\views\home\cpns\home-nav-bar.vue
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
    <div class="nav-bar">
        <div class="title">民宿app</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    border-bottom: 1px solid #f2f2f2;

    .title {
        color: var(--primary-color);
        font-style: 16px;
        font-weight: 600;
    }
}
</style>