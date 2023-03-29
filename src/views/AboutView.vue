<template>
  <div class='about'>
    <h1>This is an about page</h1>
    <testBtn></testBtn>
  </div>
</template>

<script setup>
import testBtn from '../../packages/components/testBtn/index.vue'

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
