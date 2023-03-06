<template>
    <div class="container">
        <div class="mb-3">
            <label for="search_number" class="form-label">{{$t('home.search.number')}}</label>
            <div class="input-group">
                <div class="input-group-text"><input class="form-check-input mt-0 me-1" value="" type="checkbox" id="search_hasNumber" v-model="isSearchingNumber">{{ $t('home.search.include') }}</div>
                <input type="text" class="form-control" id="search_number" :disabled="!isSearchingNumber" v-model="filterform.searchNumber">
            </div>
        </div>
        <div class="mb-3">
            <label for="search_customerPhone" class="form-label">{{$t('home.search.customer_phone')}}</label>
            <div class="input-group">
                <div class="input-group-text"><input class="form-check-input mt-0 me-1" value="" type="checkbox" id="search_hasCustomerPhone" v-model="isSearchingCustomerPhone">{{ $t('home.search.include') }}</div>
                <input type="text" class="form-control" id="search_customerPhone" maxlength="10" :disabled="!isSearchingCustomerPhone" v-model="filterform.phone">
            </div>
        </div>
        <div class="mb-3">
            <label for="search_status" class="form-label">{{$t('home.search.status')}}</label>
            <div class="input-group">
                <div class="input-group-text"><input class="form-check-input mt-0 me-1" value="" type="checkbox" id="search_hasStatus" v-model="isSearchingStatus">{{ $t('home.search.include') }}</div>
                <select id="search_status" class="form-select" aria-label="Default select example" :disabled="!isSearchingStatus" v-model="filterform.status">
                    <option value="E">{{ $t('data.receipt.status.E') }}</option>
                    <option value="F">{{ $t('data.receipt.status.F') }}</option>
                    <option value="P">{{ $t('data.receipt.status.P') }}</option>
                    <option value="R">{{ $t('data.receipt.status.R') }}</option>
                    <option value="W">{{ $t('data.receipt.status.W') }}</option>
                </select>
            </div>
        </div>
        <div class="mb-3">
            <label for="search_startdate" class="form-label">{{$t('home.search.start_time')}}</label>
            <div class="input-group">
                <div class="input-group-text"><input class="form-check-input mt-0 me-1" value="" type="checkbox" id="search_hasStartdateFrom" v-model="isSearchingStartDateTimeFrom">{{ $t('home.search.include') }}</div>
                <div class="input-group-text range_word">{{$t('home.search.from')}}</div>
                <input type="date" class="form-control" id="search_fromStartDate" :disabled="!isSearchingStartDateTimeFrom" v-model="filterform.startDateFrom">
                <input type="time" class="form-control" id="search_fromStartTime" :disabled="!isSearchingStartDateTimeFrom" v-model="filterform.startTimeFrom">
            </div>
            <div class="input-group">
                <div class="input-group-text"><input class="form-check-input mt-0 me-1" value="" type="checkbox" id="search_hasStartdateTo" v-model="isSearchingStartDateTimeTo">{{ $t('home.search.include') }}</div>
                <div class="input-group-text range_word">{{$t('home.search.to')}}</div>
                <input type="date" class="form-control" id="search_toStartDate" :disabled="!isSearchingStartDateTimeTo" v-model="filterform.startDateTo">
                <input type="time" class="form-control" id="search_toStartTime" :disabled="!isSearchingStartDateTimeTo" v-model="filterform.startTimeTo">
            </div>
        </div>
        <div class="row">
            <div class="col-auto ms-auto">
                <!-- <button type="button" class="btn btn-warning me-2" @click="test()">
                    test
                </button> -->
                <button type="button" class="btn btn-primary btn-main me-2" @click="search()">
                    Search
                </button>
                <button type="button" class="btn btn-primary btn-main"  @click="clearAll()">
                    Clear All
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .range_word{
        width: 70px
    }
    .btn-main{
        border-color: #22aaee;
        background-color: #22aaee;
    }
</style>
<script setup>
import {ref, reactive} from "vue"
import {isEmpty} from "../assets/js/utility.js";

const emit = defineEmits('query');

const isSearchingNumber = ref(false)
const isSearchingCustomerPhone = ref(false)
const isSearchingStatus = ref(false)
const isSearchingStartDateTimeFrom = ref(false)
const isSearchingStartDateTimeTo = ref(false)


const filterform = reactive({
    // searchNumber: "",
    // phone: "",
    // status: "",
    // startDateFrom:"",
    // startTimeFrom:"",
    // startDateTo:"",
    // startTimeTo:""
})


const clearAll = () => {
    isSearchingNumber.value = false;
    isSearchingCustomerPhone.value = false;
    isSearchingStatus.value = false;
    isSearchingStartDateTimeFrom.value = false;
    isSearchingStartDateTimeTo.value = false;

    for(var k in filterform){
        delete filterform[k]
    }

}

const validate = () => {
    if(!isSearchingNumber.value || isEmpty(filterform.searchNumber)){
        delete filterform.searchNumber
    }
    if(!isSearchingCustomerPhone.value || isEmpty(filterform.phone)){
        delete filterform.phone
    }
    if(!isSearchingStatus.value || isEmpty(filterform.status)){
        delete filterform.status
    }
    if(!isSearchingStartDateTimeFrom.value || isEmpty(filterform.startDateFrom)){
        delete filterform.startDateFrom
    }
    if(!isSearchingStartDateTimeFrom.value || isEmpty(filterform.startTimeFrom) || isEmpty(filterform.startDateFrom)){
        delete filterform.startTimeFrom
    }
    if(!isSearchingStartDateTimeTo.value || isEmpty(filterform.startDateTo)){
        delete filterform.startDateTo
    }
    if(!isSearchingStartDateTimeTo.value || isEmpty(filterform.startTimeTo) || isEmpty(filterform.startDateTo)){
        delete filterform.startTimeTo
    }
    
}

const search = () => {
    validate()
    emit('query',filterform)
    console.log(filterform)

}
const test = () =>{
    console.log(filterform)
}


</script>