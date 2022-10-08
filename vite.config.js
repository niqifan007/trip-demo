/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-07 19:19:17
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-08 02:38:27
 * @FilePath: \trip-demo\vite.config.js
 * @Description:  
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
