<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
          <rect-window :title="title.value">
            <table class="table">
              <thead>
                <tr>
                  <th ></th>
                </tr>
                <tr>

                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </rect-window>
          <!-- <rect-window title="Receipt List"></rect-window>
          <rect-window title="Item List"></rect-window> -->
      </div>
      <div class="col-2">
          <rect-button title="Cust." background="#22aaee">
              <template #icon><IconCustomer/></template>
          </rect-button>
          <rect-button title="Receipt" background="#22aaee" ></rect-button>
          <rect-button title="Item" background="#22aaee"></rect-button>
          <rect-button title="Back" background="#22aaee" @click="$router.push('/dashboard')"></rect-button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, reactive} from "vue"
  import axios from "axios"
  import TheWelcome from '../components/TheWelcome.vue'
  import IconCustomer from '../components/icons/IconCustomer.vue'

  const title = ref("")
  const records = reactive([])

  const retrieveCustomerList = () => {
    title.value = "Customer List"
  }
  const retrieveReceiptList = () => {
    title.value = "Receipt List"
  }
  const retrieveItemList = () => {
    title.value = "Item List"
  }

  const initialize = () => {
    retrieveCustomerList()
  }
  initialize()
</script>