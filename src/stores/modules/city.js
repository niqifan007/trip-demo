import { defineStore } from "pinia";


export const useCityStore = defineStore("city",{
    state: () => ({
        cities: []
    }),
    actions: {

    }
})

export default useCityStore