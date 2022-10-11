<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-10 21:18:00
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-10 21:21:09
 * @FilePath: \trip-demo\src\views\detail\cpns\detail_08-intro.vue
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
  <div class="intro">
    <h2 class="title">{{ priceIntro.title }}</h2>
    <div class="content">
      {{ priceIntro.introduction }}
    </div>
  </div>
</template>

<script setup name="home">

defineProps({
  priceIntro: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.intro {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>