<!--
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-10 21:32:16
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-11 14:14:45
 * @FilePath: \trip-demo\src\components\tab-control\tab-control.vue
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
-->
<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div 
        class="tab-control-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index)"
      >
        <span>
          {{ item }}
        </span>
      </div>
    </template>
  </div>
</template>

<script setup name="tab-control">
import { ref } from 'vue';


defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(["itemClick"])

const currentIndex = ref(0)
const itemClick = (index) => {
  currentIndex.value = index
  emit("itemClick", index)
}

const setcurrentIndex = (index) => {
  currentIndex.value = index
}

defineExpose ({ setcurrentIndex })

</script>

<style lang="less" scoped>

.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;

  .tab-control-item {
    flex: 1;
    text-align: center;
    &.active {
      color: var(--primary-color);

      span {
        padding: 5px;
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
}

</style>