<template>
  <!-- <div class="btn-main" >
    <font-awesome-icon class="btn-icon" :icon="icon" color="white"/>
    <h2 class="btn-title">{{title}}</h2>
  </div> -->
    <button type="button" class="btn btn-primary btn-main btn-square-xl">
        <div class="btn-icon">
            <slot name="icon"></slot>
        </div>
        <h2 class="btn-title">{{title}}</h2>
    </button>
</template>

<script setup>
    import {reactive, ref} from "vue";
    defineProps(['background','icon','title'])
</script>

<style scoped>
    .btn-square-xl {
        width: -webkit-fill-available;
        max-width: 100% ;
        max-height: 100% ;
        aspect-ratio: 1 / 1;
        text-align: center;
        padding: 0px;
        font-size:24px;
    }
    .btn-main{
        /* Auto layout */
        background-color: v-bind(background) !important;
        border-color: v-bind(background) !important;
        box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .btn-main:hover{
        filter: brightness(1.1)
    }
    .btn-main:active{
        filter: brightness(1)
    }
    

    .btn-main .btn-icon{
        /* Auto layout */
        display: block;
        margin-left: auto;
        margin-right: auto;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
        width: 64px;
    }

    .btn-main .btn-title{
        /* Auto layout */
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 47px;
        display: block;
        align-items: center;
        text-align: center;

        color: #FFFFFF;

        /* Inside auto layout */
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 1;
        
    }


</style>

