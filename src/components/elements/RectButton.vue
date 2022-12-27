<template>
  <div class="btn-main" >
    <font-awesome-icon class="btn-icon" :icon="icon" />
    <h2 class="btn-title">{{title}}</h2>
  </div>
</template>

<script>
    import {defineComponent, reactive, ref} from "vue";
    
    export default defineComponent({
        props: ['background','icon','title']
    })
</script>

<style scoped>
    .btn-main{
        /* Auto layout */
        background-color: v-bind(background);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        gap: 10px;

        box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }
    .btn-main:hover{
        filter: brightness(1.1);
    }
    .btn-main:active{
        filter: brightness(1);
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
        height: 100px;
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

