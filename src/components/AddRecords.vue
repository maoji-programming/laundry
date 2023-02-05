<template>
    <rect-window :title="$t('home.add.T')">
        <div class="modal-content">
            <div class="container">
                <div class="row">
                    <div class="col-12 add-records-frame" >
                        <h3>{{$t('home.add.customer_information.T')}}</h3>
                        <div class="input-frame">
                            <div class="mb-3">
                                <label for="customerName" class="form-label">{{$t('home.add.customer_information.customer_name')}}</label>
                                <input type="text" class="form-control" id="customerName" v-model="name">
                            </div>
                            <div class="mb-3">
                                <label for="customerPhone" class="form-label">{{$t('home.add.customer_information.customer_phone')}}</label>
                                <input type="text" class="form-control" id="customerPhone" aria-describedby="phoneHelp">
                                <div id="phoneHelp" class="form-text">*{{$t('home.add.customer_information.acquired')}}</div>
                            </div>
                        </div>
                        <h3>{{$t('home.add.receipt_information.T')}}</h3>
                        <div class="receipt-frame mb-2">
                            <div class="py-2">
                                <!-- record -->
                                <perfect-scrollbar >
                                    <receipt-accordion class="me-3" :isAdding="true"/>
                                </perfect-scrollbar>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex px-4">
                            <div>{{$t('home.add.service_fee')}}</div>
                            <div class="ms-auto pe-4">$ 15</div>
                        </div>
                        <div class="d-flex px-4">
                            <div><b>{{$t('home.add.total')}}</b></div>
                            <div class="ms-auto pe-4"><b>$ 2500</b></div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-12">
                        <div class="d-grid align-items-end">
                            <button type="button" class="btn btn-primary btn-main">
                                Enter
                            </button>
                            <button type="button" class="btn btn-secondary btn-support" data-bs-dismiss="modal">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </rect-window>
</template>

<script setup>
    import {computed, onMounted, reactive, ref} from "vue";
    
    var name ="";
    var phone= "";
    const records = reactive([]) 
    const serviceFee = computed({
        get(){
            return records.reduce((a, b) => {
                return a + b;
            })
        },
        set(n_serviceFee){
            serviceFee = n_serviceFee
        }
    })
    const total = computed({
        get(){
            return records.reduce((a, b) => {
                return a + b;
            }) + serviceFee;
        },

        set(n_total){
            total = n_total;
        }
    })
    






    

</script>

<style scoped>
    .add-records-frame{
        height: 640px;
        display: flex;
        flex-flow: column;
    }

    .receipt-frame{
        border: 2px solid #22aaee;
        border-radius: 10px;
        flex: 1 1 auto;

    }
    .input-frame{
        flex: 0 1 auto;
    }

    .btn-main{
        /* Auto layout */
        background-color: #22aaee !important;
        border-color: #22aaee !important;
        box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .btn-main{
        /* Auto layout */
        background-color: #22aaee !important;
        border-color: #22aaee !important;
        box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .btn-support{
        background-color: #8CCEEE !important;
        border-color: #8CCEEE !important;
        box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .btn:hover{
        filter: brightness(1.1)
    }
    .btn:active{
        filter: brightness(1)
    }
    .modal-content{
        border-radius: 0px;
    }
    .ps{
        height: 334px;
    }
</style>