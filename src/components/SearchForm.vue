<template>
    <div class="container">
        <div class="mb-3">
            <label for="number" class="form-label">{{$t('Number')}}</label>
            <div class="input-group">
                <div class="input-group-text"><input class="form-check-input mt-0 me-1" value="" type="checkbox" id="hasNumber" >includeRR</div>
                <input type="text" class="form-control" id="number" >
            </div>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">{{$t('Status')}}</label>
            <div class="input-group">
                <div class="input-group-text"><input class="form-check-input mt-0 me-1" value="" type="checkbox" id="hasStatus" >includeRR</div>
                <input type="text" class="form-control" id="status" >
            </div>
        </div>
        <div class="mb-3">
            <label for="service" class="form-label">Service</label>
            <select class="form-select" aria-label="Default select example">
                <option value="E">{{ $t('data.receipt.status.E') }}</option>
                <option value="F">{{ $t('data.receipt.status.F') }}</option>
                <option value="P">{{ $t('data.receipt.status.P') }}</option>
                <option value="R">{{ $t('data.receipt.status.R') }}</option>
                <option value="W">{{ $t('data.receipt.status.W') }}</option>
            </select>
        </div>
        <div class="row">
            <div class="col-auto ms-auto">
                <button type="button" class="btn btn-primary">
                    Search
                </button>
                <button type="button" class="btn btn-primary">
                    Clear All
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script setup>

</script>