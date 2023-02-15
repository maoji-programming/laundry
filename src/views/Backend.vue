<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
          <rect-window :title="title">
            <table class="table">
              <thead>
                <tr>
                  <th v-for="(h, idxH) in headers" :key="idxH"><b>{{ h }}</b></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(r, idxR) in records" :key="idxR">
                  <td v-for="(d, idxD) in r" :key="idxD"> {{ d }} </td>
                </tr>
                
              </tbody>
              <tfoot>
                
              </tfoot>
            </table>
            <template #footer>
            <div class="row">
              <div class="col-6">
                  <button type="button" class="btn btn-primary btn-support rounded-circle" >
                    previous
                  </button>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-primary btn-support rounded-circle" >
                    next
                  </button>
                </div>
            </div>
          </template>
          </rect-window>
          <!-- <rect-window title="Receipt List"></rect-window>
          <rect-window title="Item List"></rect-window> -->
      </div>
      <div class="col-2">
          <rect-button title="Cust." background="#22aaee" @click="retrieveCustomerList">
              <template #icon><IconCustomer/></template>
          </rect-button>
          <rect-button title="Receipt" background="#22aaee" @click="retrieveReceiptList"></rect-button>
          <rect-button title="Item" background="#22aaee" @click="retrieveItemList"></rect-button>
          <rect-button title="Back" background="#22aaee" @click="$router.push('/dashboard')"></rect-button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, reactive, computed, onMounted} from "vue"
  import axios from "axios"
  import config from "../requests/getReceiptList"
  import TheWelcome from '../components/TheWelcome.vue'
  import IconCustomer from '../components/icons/IconCustomer.vue'

  const title = ref("")
  const records = ref([])
  //const headers = computed(() => {return records.length != 0 && records != null ? Object.keys(records[0]): []})
  const headers = ref([])

  const page = ref(0) 
  function retrieveCustomerList(){
    title.value = "Customer List"
    onMounted(() => {retrieveCustomerListCore()})
  }
  const retrieveCustomerListCore = async () => {
    await axios(config).then(
      (res) => {
        console.log(res)
        records.value = res.data
        headers.value = Object.keys(records.value[0])
      }
    ).catch(
      (err) => {console.log(err)}
    )
  }

  const retrieveReceiptList = () => {
    title.value = "Receipt List"
    console.log(records)
    console.log(headers)
  }
  const retrieveItemList = () => {
    title.value = "Item List"
  }

  const initialize = () => {
    retrieveCustomerList()
  }
  initialize()
</script>

<style>
  .btn-support{
        background-color: #8CCEEE !important;
        border-color: #8CCEEE !important;
        box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-bottom: 10px;
    }

</style>