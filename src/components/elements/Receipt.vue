<template>
    <div class="receipt-item d-flex p-2">
        <div class="icon mx-2">
            <IconError v-if="pendingItem.status == 'E'"></IconError>
            <IconFinished  v-if="pendingItem.status == 'F'"></IconFinished>
            <IconPending v-if="pendingItem.status == 'P'"></IconPending>
            <IconReceived v-if="pendingItem.status == 'R'"></IconReceived>
            <IconWashing v-if="pendingItem.status == 'W'"></IconWashing>
        </div>
        <div>
            <div class="main-tag num">
                <span class="tag-name px-1"><b>Number </b></span>
                <div class="tag-content">{{ isUndefined(pendingItem)  ? "---": pendingItem.pendingNumber }}</div>
            </div>
        </div>
        <div class="ms-auto">
            <div class="main-tag order-time">
                <span class="tag-name px-1"><b>Start Time </b></span>
                <div class="tag-content">{{ isUndefined(pendingItem) ? "####-##-## --:--:--": pendingItem.orderTime }}</div>
            </div>
        </div>
        <div class="icon dropend mx-2">
            <!-- more -->
            <IconMore role="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"/>
            
            <ul class="dropdown-menu p-2">
                <li>go to next</li>
                <li>view detail</li>
            </ul>
        </div>
    </div>


</template>

<script>
    import {defineComponent, reactive, ref} from "vue";
    import * as utility from "../../assets/js/utility.js";
    
    
    export default defineComponent({
        props: ['pendingItem'],
        methods:{
            isUndefined : (obj) => utility.isUndefined(obj)
        }
    })
</script>

<style scoped>
    .receipt-item{
        border-bottom: 1px solid #e7e7e7;
    }

    .main-tag {
        border: 2px solid #22aaee;
        
        border-radius: 10px;
        align-items: center;
    }

    .num{
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