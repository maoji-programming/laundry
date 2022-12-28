<script setup>
import RectButton from '../components/elements/RectButton.vue';
import RectWindow from '../components/elements/RectWindow.vue';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <b-container fluid>
        <b-row>
            <b-col cols="9">
                <b-row>
                    <b-col cols="6">[customer]</b-col>
                    <b-col cols="6">[profit]</b-col>
                </b-row>
                <b-row>
                    <RectWindow title="Queue"></RectWindow>
                </b-row>
            </b-col>
            <b-col cols="3">
                <b-row>
                    <RectWindow title="Statistic"></RectWindow>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <RectButton title="Add"></RectButton>
                    </b-col>
                    <b-col cols="6">
                        <RectButton title="Backend"></RectButton>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6">
                        <RectButton title="Print"></RectButton>
                    </b-col>
                    <b-col cols="6">
                        <RectButton title="Setting"></RectButton>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>