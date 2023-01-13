<template>
    
    <div class="receipt-item p-2 my-2">
        <div class="accordion d-grid gap-2">
            <div class="accordion-item " v-for="(record,key) in records" key="key">
                <div class="solid-type p-2"  @click="open(key)">
                    {{ record.item_name }}
                </div>
                <transition name="accordion"
                    @enter="start"
                    @after-enter="end"
                    @before-leave="start"
                    @after-leave="end"
                    >
                    <div v-show="key == active" class="new_item_form">
                        {{ record }}}
                    </div>
                </transition>
            </div>
            <div v-if="isInsertable" class="accordion-item">
                <div class="new-type" @click="create">

                </div>
                <div class="new_item_form">

                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import {defineComponent, reactive, ref} from "vue";
    import * as utility from "../../assets/js/utility.js";
    
    export default defineComponent({
        props:{
            isInsertable: Boolean,
            isEditable: Boolean,
            items: Array
        },
        data(){
            return{
                active : ref(null),
                isCreating : false,
            }
        },
        methods:{
            open(key){
                if (key == this.active) {
                    this.active = null;
                } else {
                    this.active = key;
                }
                console.log("opening: " + this.active)
            },
            create(){
                isCreating = true;
            },
            start(el) {
                el.style.height = el.scrollHeight + "px";
            },
            end(el) {
                el.style.height = "";
            }
        },
        setup(props){
            
            
            const records = [
                {
                    item_name: "coat",
                    price: 20,
                    service:  "dry-clean"
                },{
                    item_name: "jeans",
                    price: 12,
                    service: "handwashing"
                    
                }
            ]
            
            return{
                records
            }
            
        }
        
    })
</script>

<style lang="scss" scoped>
    .accordion {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .accordion-enter-active,
    .accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
    }

    .accordion-enter,
    .accordion-leave {
        height: 0 !important;
        opacity: 0;
    }
    .accordion-item{
        border-radius: 10px;
        z-index:2;
    }
    .close-form{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        z-index:1;
        cursor: pointer;
    }
    .close-form .collapsed{
        z-index:-1;
     }

    .accordion-item>.solid-type{
        background: #22aaee;
        border: 2px solid #22aaee;
        border-radius: 10px;
    }
    .accordion-item>.new-type{
        background: #ffffff;
        border: 2px dashed #22aaee;
        border-radius: 10px;
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