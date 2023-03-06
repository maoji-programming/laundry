<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
          <rect-window :title="title">
            <table class="table">
              <thead>
                <tr>
                  <th> Action</th>
                  <th v-for="(h, idxH) in headers" :key="idxH"><b>{{ h }}</b></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(r, idxR) in records.slice(recordsNumPerPage * (page - 1),  recordsNumPerPage * page)" :key="idxR">
                  <td>1 2 3</td>
                  <td v-for="(d, idxD) in r" :key="idxD"> {{ d }} </td>
                </tr>
                
              </tbody>
            </table>
            <template #footer>
            <div class="d-flex justify-content-center">
              
              <button type="button" class="btn btn-primary btn-support rounded-circle m-2 p-2" data-toggle="tooltip" data-placement="bottom" :title="$t('home.data.first_page')" @click="turnToPage(1)">
                <IconFirst width="32px" height="32px"/>
              </button>

              <button type="button" class="btn btn-primary btn-support rounded-circle m-2 p-2" data-toggle="tooltip" data-placement="bottom" :title="$t('home.data.previous_page')" @click="turnToPage(page - 1)">
                <IconPrevious width="32px" height="32px"/>
              </button>
              
              <input type="number" placeholder="Page" v-model="n_page" @change="turnToPage(n_page)" :min="1" :max="totalPage" >
              <span class="input-group-text"> / {{ totalPage }}</span>
              
              <button type="button" class="btn btn-primary btn-support rounded-circle m-2 p-2" data-toggle="tooltip" data-placement="bottom" :title="$t('home.data.next_page')" @click="turnToPage(page + 1)">
                <IconNext width="32px" height="32px"/>
              </button>

              <button type="button" class="btn btn-primary btn-support rounded-circle m-2 p-2" data-toggle="tooltip" data-placement="bottom" :title="$t('home.data.last_page')" @click="turnToPage(totalPage)">
                <IconLast width="32px" height="32px"/>
              </button>
                
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
  import { default as cust_config} from "../requests/getCustomerList.js"
  import { default as rece_config}  from "../requests/getReceiptList.js"
  import TheWelcome from '../components/TheWelcome.vue'
  import IconCustomer from '../components/icons/IconCustomer.vue'
  import IconPrevious from '../components/icons/common/IconPrevious.vue'
  import IconNext from '../components/icons/common/IconNext.vue'
  import IconFirst from '../components/icons/common/IconFirst.vue'
  import IconLast from '../components/icons/common/IconLast.vue'

  const title = ref("")
  const records = ref([])
  //const headers = computed(() => {return records.length != 0 && records != null ? Object.keys(records[0]): []})
  const headers = ref([])

  const page = ref(1)
  const n_page = page
  const recordsNumPerPage = ref(5)
  const totalPage = ref(0)

  function retrieveCustomerList(){
    title.value = "Customer List"
    page.value = 1
    retrieveCustomerListCore()
  }
  const retrieveCustomerListCore = async () => {
    await axios(cust_config).then(
      (res) => {
        records.value = res.data
        headers.value = Object.keys(records.value[0])
        totalPage.value = Math.ceil(records.value.length / recordsNumPerPage.value )
      }
    ).catch(
      (err) => {console.log(err)}
    )
    
  }

  const retrieveReceiptList = () => {
    title.value = "Receipt List"
    page.value = 1
    retrieveReceiptListCore()
    
  }

  const retrieveReceiptListCore = async () => {
    await axios(rece_config).then(
      (res) => {
        records.value = res.data.data
        headers.value = Object.keys(records.value[0])
        totalPage.value = Math.ceil(records.value.length / recordsNumPerPage.value )
      }
    ).catch(
      (err) => {console.log(err)}
    )
  }


  const retrieveItemList = () => {
    title.value = "Item List"
  }

  const turnToPage = (p) => {
    page.value = p < 1 || p > totalPage.value ? page.value : p
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

    .btn:hover{
        filter: brightness(1.1)
    }
    .btn:active{
        filter: brightness(1)
    }
</style>