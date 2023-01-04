<template>
    <!-- <b-container fluid>
        <b-row>
            <b-col cols="9">
                <b-row>
                    <b-col cols="6">
                        
                    </b-col>
                    <b-col cols="6">
                        
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <RectWindow title="Queue"></RectWindow>                       
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3">
                <b-row>
                    <b-col cols="12">
                        <RectWindow title="Statistic"></RectWindow>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <RectButton title="Add" background="#22aaee"></RectButton>
                    </b-col>
                    <b-col cols="6">
                        <RectButton title="Backend" background="#22aaee"></RectButton>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <RectButton title="Print" background="#22aaee"></RectButton>
                    </b-col>
                    <b-col cols="6">
                        <RectButton title="Setting" background="#22aaee"></RectButton>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container> -->
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="row my-2">
                    <div class="col-6">
                        <rect-window title="Profit"></rect-window>
                    </div>
                    <div class="col-6">
                        <rect-window title="Number"></rect-window>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <rect-window title="Receipt List" height="400px">
                            <receipt v-for="(receipt,i) in receipts" :key="i" :pendingItem="receipts[i]"></receipt>
                        </rect-window >
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="row my-2">
                    <div class="col-12">
                        <rect-window  title="Statistics"></rect-window >
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-6">
                        <rect-button title="Add" background="#22aaee"></rect-button>
                    </div>
                    <div class="col-6">
                        <rect-button title="Search" background="#22aaee"></rect-button>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-6">
                        <router-link to="/backend"><rect-button title="Data" background="#22aaee"></rect-button></router-link>
                    </div>
                    <div class="col-6">
                        <rect-button title="Setting" background="#22aaee"><template #icon><IconTooling></IconTooling></template></rect-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {defineComponent, reactive, ref} from "vue";
    import IconTooling from "../components/icons/IconTooling.vue"
    
    export default{
        setup() {
            const receipts = [{
                    receiptId: "12013",
                    status: 'W', // E / P -> W -> F -> R
                    pendingNumber: 'A0001',
                    orderTime: '2022-10-02 22:10:01'
                },{
                    receiptId: "12044",
                    status: 'P', 
                    pendingNumber: 'A0002',
                    orderTime: '2022-10-02 22:10:04'
                },{
                    receiptId: "12080",
                    status: 'E', 
                    pendingNumber: 'A0003',
                    orderTime: '2022-10-02 22:10:07'
                },{
                    receiptId: "12013",
                    status: 'W', // E / P -> W -> F -> R
                    pendingNumber: 'A0001',
                    orderTime: '2022-10-02 22:10:01'
                },{
                    receiptId: "12044",
                    status: 'P', 
                    pendingNumber: 'A0002',
                    orderTime: '2022-10-02 22:10:04'
                },{
                    receiptId: "12080",
                    status: 'E', 
                    pendingNumber: 'A0003',
                    orderTime: '2022-10-02 22:10:07'
                },{
                    receiptId: "12013",
                    status: 'W', // E / P -> W -> F -> R
                    pendingNumber: 'A0001',
                    orderTime: '2022-10-02 22:10:01'
                },{
                    receiptId: "12044",
                    status: 'P', 
                    pendingNumber: 'A0002',
                    orderTime: '2022-10-02 22:10:04'
                },{
                    receiptId: "12080",
                    status: 'E', 
                    pendingNumber: 'A0003',
                    orderTime: '2022-10-02 22:10:07'
                },{
                    receiptId: "12013",
                    status: 'W', // E / P -> W -> F -> R
                    pendingNumber: 'A0001',
                    orderTime: '2022-10-02 22:10:01'
                },{
                    receiptId: "12044",
                    status: 'P', 
                    pendingNumber: 'A0002',
                    orderTime: '2022-10-02 22:10:04'
                },{
                    receiptId: "12080",
                    status: 'E', 
                    pendingNumber: 'A0003',
                    orderTime: '2022-10-02 22:10:07'
                }
            
            ]

            return {
                receipts
            }
        }





    }
                
           
   
            
    

</script>