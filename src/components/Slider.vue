<template>
    <div class="accordion">
     <input type="radio" name="select" class="accordion-select" checked />
    <div class="accordion-title"><span>One</span></div>
    <div class="accordion-content">Content</div>
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Card</span></div>
    <v-card class="accordion-content">
      <v-card-text>
        <v-btn @click="contador++">Soy Un boton</v-btn>
        <h1 class="text-red">{{ contador }}</h1>
      </v-card-text>
    </v-card>
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div>
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div>
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div>
         <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div>
</div>
</template>

<script setup>
import {ref} from 'vue';

const contador = ref(1)
</script>

<style scoped>
 .accordion {
    box-sizing: border-box;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    width: 100%;
}

.accordion-select {
    cursor: pointer;
    margin: 0;
    opacity: 0;
    z-index: 1;
}

.accordion-title {
    position: relative;
}

.accordion-title:not(:nth-last-child(2))::after {
    border: 1px solid transparent;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}

.accordion-title span {
    bottom: 0px;
    box-sizing: border-box;
    display: block;
    position: absolute;
    white-space: nowrap;
    width: 100%;
}

.accordion-content {
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    transition: margin 0.3s ease 0.1s;
}

.accordion-select:checked + .accordion-title + .accordion-content {
    margin-bottom: 0;
    margin-right: 0;
}

/* Generated styles starts here */

.accordion {
    border-color: #505050;
    border-radius: 18px;
    border-style: solid;
    border-width: 0px;
    flex-direction: row;
    height: 400px;
}

.accordion-title,
.accordion-select  {
    background-color: #2d2d2d;
    color: #ffffff;
    width: 54px;
    height: 100%;
    font-size: 22px;
}

.accordion-select {
    margin-bottom: -65px;
    margin-right: -54px;
}

.accordion-title:not(:nth-last-child(2))::after {
    border-bottom-color: transparent;
    border-right-color: #1f1f1f;
}

.accordion-select:hover + .accordion-title,
.accordion-select:checked + .accordion-title {
    background-color: #3068cc;
}

 .accordion-title span  {
    transform: rotate(-90deg);
    -ms-writing-mode: lr-bt;
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    padding-bottom: 27px;
    padding-top: 27px;
    line-height: 54px;
}

.accordion-content {
    background-color: #3e3e3e;
    color: #f5f2f0;
    height: 400px;
    margin-bottom: -400px;
    margin-right: calc(-1 * calc(100% - 324px));
    padding: 25px;
    width: calc(100% - 324px);
}
</style>
