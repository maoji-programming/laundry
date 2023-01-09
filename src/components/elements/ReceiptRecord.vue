<template>
    <div class="receipt-item p-2 my-2">
        <div v-if="isAdding" class="solid-type d-flex">
            
        </div>
        <div v-else class="new-type d-flex">
            <div class="item-name"></div>
        </div>

    </div>


</template>

<script>
    import {defineComponent, reactive, ref} from "vue";
    import * as utility from "../../assets/js/utility.js";
    
    
    export default defineComponent({
        props: ['pendingItem','isAdding'],
        methods:{
            isUndefined : (obj) => utility.isUndefined(obj)
        }
    })
</script>

<style scoped>

    .receipt-item{
        border-radius: 10px;
    }

    .receipt-item.solid-type{
        background: #22aaee;
        border: 2px solid #22aaee;
    }
    .receipt-item.new-type{
        background: #ffffff;
        border: 2px dashed #22aaee;
    }

    .main-tag {
        border: 2px solid #22aaee;
        
        border-radius: 10px;
        align-items: center;
    }

    .item-name{
        width: 100px;
    }

    .order-time{
        width: 200px;
    }

    .tag-name {
        position: absolute;
        top: -10px;
        left: 10px;
        color: #22aaee;
        background: #ffffff;
        font-size: 8px;
        user-select: none;
    }

    .tag-content {
        text-align: center;
    }

    .icon > svg {
        width: 24px;
        align-items: center;
    }
</style>