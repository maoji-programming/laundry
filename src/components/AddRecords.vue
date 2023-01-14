<template>
    <rect-window title="Add Records">
        <div class="modal-content">
            <div class="container">
                <div class="row">
                    <div class="col-12 add-records-frame" >
                        <h3>Customer Infomration</h3>
                        <div class="input-frame">
                            <div class="mb-3">
                                <label for="customerName" class="form-label">Customer Name</label>
                                <input type="text" class="form-control" id="customerName" >
                            </div>
                            <div class="mb-3">
                                <label for="customerPhone" class="form-label">Customer Phone</label>
                                <input type="text" class="form-control" id="customerPhone" aria-describedby="phoneHelp">
                                <div id="phoneHelp" class="form-text">*acquired</div>
                            </div>
                        </div>
                        <h3>Receipt</h3>
                        <div class="receipt-frame mb-2">
                            <div class="py-2">
                                <!-- record -->
                                <receipt-accordion :isAdding="true"/>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="d-grid align-items-end">
                            <button type="button" class="btn btn-primary btn-main">
                                Enter
                            </button>
                            <button type="button" class="btn btn-secondary btn-support">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </rect-window>
</template>

<script>




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
</style>