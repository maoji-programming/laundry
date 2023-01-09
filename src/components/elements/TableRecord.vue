<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th id="th_action">ACTION</th>
                    <th :id="'th_'+h" v-for="(h,k) in headers" :key="k">{{h}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import {defineComponent, reactive, ref} from "vue";

    export default defineComponent({
        props:[
            "headers",
            "height",
            "title",
        ]

    })
</script>