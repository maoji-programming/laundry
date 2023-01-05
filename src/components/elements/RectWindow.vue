<template>
    <div class="main-window">
        <h2 class="main-window-header">{{title}}</h2>
        <div class="main-window-body">
            <perfect-scrollbar>
                <slot />
            </perfect-scrollbar>
        </div>
        <div class="main-window-bottom"></div>
    </div>
</template>
<script>
    import {defineComponent, reactive, ref} from "vue";

    export default defineComponent({
        props:[
            "width",
            "height",
            "title",
        ]

    })
</script>
<style>
    .main-window {
        /* Appearance */
        display: block;
        border-radius: 10px;
        box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.25);
        width: v-bind(width);

        /* Auto-layout */
        position: relative;
        flex-direction: column;
    }
    .main-window-header {
        display: block;
        margin: 0px;
        padding: 5px 15px;
        text-align: left;
        color: #fff;
        background-color: #22aaee;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .main-window-body{
        display: block;
        color: #000;
        background: #fff;
        height: v-bind(height);
        width: v-bind(width);
       
    }

    .main-window-bottom{
        display: block;
        background: #fff;
        height: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    
    .ps{
        height: v-bind(height);
    }
</style>