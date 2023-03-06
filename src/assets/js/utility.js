import { onBeforeMount, onMounted } from "vue";

export function isUndefined(obj){ return typeof obj == 'undefined' }
export function isEmpty(obj){ return !obj }

export function amountRoundOff(num){return Math.round(num * 100) / 100}

