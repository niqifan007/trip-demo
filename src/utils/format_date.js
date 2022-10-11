/*
 * @Author: waka 923325372@qq.com
 * @Date: 2022-10-09 02:09:55
 * @LastEditors: waka 923325372@qq.com
 * @LastEditTime: 2022-10-09 22:16:31
 * @FilePath: \trip-demo\src\utils\format_date.js
 * @Description:  格式化时间函数
 * 
 * Copyright (c) 2022 by waka 923325372@qq.com, All Rights Reserved. 
 */
import dayjs from 'dayjs'


export function formatMonthDay(date, formatStr = "MM月DD日") {
    return dayjs(date).format(formatStr)
}



export function getDiffDate(startDate,endDate) {
    return dayjs(endDate).diff(startDate, "day")
}