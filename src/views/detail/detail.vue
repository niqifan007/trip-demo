<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-10 01:21:02
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-11 14:16:33
 * @FilePath: \trip-demo\src\views\detail\detail.vue
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
    <div class="detail top-page" ref="detailRef">
        <tab-control
        v-if="showTabControl"
        class="tabs"
        :titles="names"
        @itemClick="tabClick"
        ref="tabControlRef"
        />
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
            <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule" />
            <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
            <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
            <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
            <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
            <detail-map name="周边" :ref="getSectionRef" />
            <detail-intro :price-intro="mainPart.introductionModule" />

        </div>
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">民宿APP!</div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDetailInfos } from "@/services"

import TabControl from "@/components/tab-control/tab-control.vue"
import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"
import useScroll from '@/hooks/useScroll'

const router = useRouter()
const route = useRoute()
const houseId = route.params.id


// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
    detailInfos.value = res.data
})

// 返回按钮
const onClickLeft = () => {
    router.back()
}

// 监听滚动显示tab
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
    return scrollTop.value >= 300
})

// tab导航栏滑动页面
// const landlordRef = ref()
const sectionEls = ref({})
const names = computed(()=>{
    return Object.keys(sectionEls.value)
})
const getSectionRef = (value) =>{
    if(!value) return
    const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
}
const tabClick = (index) => {
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let instance = el.offsetTop
    if (index !== 0 ) {
        instance = instance - 44
    }
    detailRef.value.scrollTo({
        top: instance,
        behavior: "smooth"
    })
}

// 页面滚动 匹配对应的tabcontrol的index
const tabControlRef = ref()
watch(scrollTop, (newValue) => {
    // 获取所有区域的offsettops
    const els = Object.values(sectionEls.value)
    const values = els.map(el => el.offsetTop)

    // 根据newvalue 去匹配对应的tab
    let index = values.length - 1
    for (let i = 0; i < values.length; i++) {
        if (values[i] > newValue + 44 ) {
            index = i - 1 
            break
        }
        
    }
    tabControlRef.value?.setcurrentIndex(index)
})


</script>

<style lang="less" scoped>

.tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    background: #fff;

}
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style>