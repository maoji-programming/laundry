<template>
<div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item selected-item" v-for="(item,key) in records" :key="key">
        <h2 class="accordion-header" :id="'receipt_heading_'+key">
          <button class="d-flex accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#receipt_collapse_'+key" aria-expanded="false" :aria-controls="'receipt_collapse_'+key" data-toggle="tooltip" data-placement="top" :title="serviceTranslate(item.service)">
            <div class="">
                <div class="item-name">{{item.item_name}}</div>
            </div>
            <div class="d-flex service-list">
                <div class="icon px-1" v-if="item.service.includes('B')"><IconBleach /></div>
                <div class="icon px-1" v-if="item.service.includes('DC')"><IconDryClean /></div>
                <div class="icon px-1" v-if="item.service.includes('MW')"><IconMachineWash /></div>
                <div class="icon px-1" v-if="item.withTumbleDry"><IconTumbleDry /></div>
                <div class="icon px-1" v-if="item.withIroning"><IconIroning /></div>
            </div>
            <div class="ms-auto price">
                <div>$ {{item.price}}</div>
            </div>
          </button>
        </h2>
        <div :id="'receipt_collapse_'+key" class="accordion-collapse collapse" :aria-labelledby="'receipt_heading_'+key" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="mb-3">
                <label for="itemName" class="form-label">Item Name</label>
                <input type="text" class="form-control" id="itemName" v-model="records[key].item_name">
            </div>
            <div class="mb-3">
                <label for="service" class="form-label">Service</label>
                <select class="form-select" v-model="records[key].service" :id="'service_'+key" aria-label="Default select example">
                    <option value="MW">{{ $t('data.receipt.service.machineWash') }}</option>
                    <option value="DC">{{ $t('data.receipt.service.dryClean') }}</option>
                    <option value="B">{{ $t('data.receipt.service.bleach') }}</option>
                </select>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input"  v-model="records[key].withIroning" type="checkbox"  :id="'withIroning_'+key">
                    <label class="form-check-label" :for="'withIroning_'+key">
                        Ironing
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input"  v-model="records[key].withTumbleDry" type="checkbox" :id="'withTumbleDry_'+key">
                    <label class="form-check-label" :for="'withTumbleDry_'+key">
                        Tumble Dry
                    </label>
                </div>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Service Price</label>
                <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input type="text" class="form-control" id="price" v-model="records[key].price" disabled>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item new-item">
        <button class="d-flex accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="false"  data-toggle="tooltip" data-placement="top" >
            click here to create new item.
          </button>
      </div>
    </div>
    <!--div class="accordion accordion-flush">
        <div class="accordion-item" v-for="(record,key) in records" :key="key">
            <div class="accordion-header solid-type" :id="'flush-item_header_'+key" >
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-item_body_'+key" aria-expanded="true" :aria-controls="'flush-item_body_'+key">
                {{ record.item_name }}
                </button>
            </div>
            <div :id="'flush-item_body_'+key" class="accordion-collapse collapse" :aria-controls="'flush-item_header_'+key">
            <div class="accordion-body">
                {{ record }}
            </div>
            </div>
        </div>
        
    </div>
    
    <div class="receipt-item p-2 my-2">
        <div class="accordion d-grid gap-2">
            <div :class="'accordion-item '+ (active == key? 'accordion-item-active':'')" v-for="(record,key) in records" :key="key">
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
                        {{ record }}
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
    -->
</template>

<script>
    import {defineComponent, reactive, ref} from "vue";
    import * as utility from "../../assets/js/utility.js";
    
    //defineProps(['isInsertable','isEditable','items'])
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
            serviceTranslate(l){
                    switch(l){
                        case 'B':
                            return 'Bleach';
                        
                        case 'DC':
                            return 'Dry Clean';

                        case 'MW':
                            return 'Machine Wash'
                    }
            },
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
            
            
            var records = [
                {
                    item_name: "coat",
                    price: 20,
                    service:  "DC",
                    withIroning: false,
                    withTumbleDry: false
                },{
                    item_name: "jeans",
                    price: 12,
                    service: "B",
                    withIroning: false,
                    withTumbleDry: false
                },{
                    item_name: "suit",
                    price: 45,
                    service: "MW",
                    withIroning: true,
                    withTumbleDry: true
                }
            ]
            
            return{
                records
            }
            
        }
        
    })
</script>

<style lang="scss" scoped>

    .accordion-item>.solid-type{
        background: #22aaee;
        border: 2px solid #22aaee;
        border-radius: 10px;
        color: #fff;
    }
    .accordion-item>.new-type{
        background: #ffffff;
        border: 2px dashed #22aaee;
        border-radius: 10px;
        color: #22aaee;
    }
    .accordion-button:not(.collapsed)>.d-flex>.icon{
        display: none;

    }
    .icon > svg {
        color: #fff;
        width: 24px;
        height: 24px;
        align-items: left;
    }

    .selected-item .accordion-button{
        background: #22aaee;
        box-shadow: none;
        color: #fff;
    }

    .new-item .accordion-button{
        background: #8CCEEE;
        box-shadow: none;
        color: #fff;
    }

    .accordion-button::after {
        transform: none !important;
        transition: none !important;
        margin: 0%;
    }
    .accordion-button.collapsed::after {
        background: none;
    }

    .accordion-button:not(.collapsed)::after {
        background: none;
    }

    .item-name{
        color: #ffffff;
        font-size: 24px;
        width: 200px
    }
    
    .price{
        text-align: right;
        width: 200px
    }
/*
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
    */
</style>
