<template>
    <div class="d-flex my-2">
        <div >
            <slot name="icon"></slot>
        </div>
        <div>
            <div class="main-tag num">
                <span class="tag-name"><b>Number</b></span>
                <div class="tag-content">{{ pendingItem.pendingNumber }}</div>
            </div>
        </div>
        <div class="ms-auto">
            <div class="main-tag order-time">
                <span class="tag-name"><b>Start Time</b></span>
                <div class="tag-content">{{ pendingItem.orderTime }}</div>
            </div>
        </div>
        <div>
            <!-- more -->
        </div>
    </div>

</template>

<script>
    import {defineComponent, reactive, ref} from "vue";
    
    export default defineComponent({
        props: ['pendingItem']
    })
</script>

<style scoped>
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
    }

    .tag-content {
        text-align: center;
    }
</style>