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
            <div class="col-8">
                <div class="row my-2">
                    <div class="col-6">
                        <RectWindow title="Profit"></RectWindow>
                    </div>
                    <div class="col-6">
                        <RectWindow title="Number"></RectWindow>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <RectWindow title="Receipt List" height="400px">
                            <Receipt :pendingItem="receipts[0]"></Receipt>
                        </RectWindow>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="row my-2">
                    <div class="col-12">
                        <RectWindow title="Statistics"></RectWindow>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-6">
                        <RectButton title="Add" background="#22aaee"></RectButton>
                    </div>
                    <div class="col-6">
                        <RectButton title="Search" background="#22aaee"></RectButton>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-6">
                        <RectButton title="Data" background="#22aaee"></RectButton>
                    </div>
                    <div class="col-6">
                        <RectButton title="Setting" background="#22aaee"></RectButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Receipt from '../components/elements/Receipt.vue';
    import RectButton from '../components/elements/RectButton.vue';
    import RectWindow from '../components/elements/RectWindow.vue';
    
    
                receipts: [
                    {
                        pendingNumber: 'A0001',
                        orderTime: '2022-10-02 22:10:01'
                    }
                ]
            
    

</script>