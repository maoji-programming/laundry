<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
          <rect-window title="Customer List"></rect-window>
      </div>
      <div class="col-2">
          <rect-button title="Cust." background="#22aaee" icon="fa-solid fa-coffee">
              <template #icon><IconCustomer/></template>
          </rect-button>
          <rect-button title="Receipt" background="#22aaee" icon="fa-solid fa-coffee"></rect-button>
          <rect-button title="Item" background="#22aaee" icon="fa-solid fa-coffee"></rect-button>
          <router-link to="/dashboard"><rect-button title="Back" background="#22aaee" icon="fa-solid fa-coffee" ></rect-button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import RectButton from '../components/elements/RectButton.vue';
    import RectWindow from '../components/elements/RectWindow.vue';
    import TheWelcome from '../components/TheWelcome.vue'
    import IconCustomer from '../components/icons/IconCustomer.vue'
</script>