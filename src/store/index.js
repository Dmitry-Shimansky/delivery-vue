// store.js
import { reactive } from 'vue'
import {restsArray} from "@/constants/rests.js";
import {goodsArray} from "@/constants/goods.js";

export const store = reactive({
    isOpen: false,
    rests: restsArray,
    goods: goodsArray,
    toggleModal(value) {
        this.isOpen = value
    }
})