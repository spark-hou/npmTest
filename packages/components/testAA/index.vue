/**
* @author  sparkHou
* @date 2023-04-05 17:01
* @Description:
*/
<template>
  <a-date-picker v-model:value="val" placeholder="吼吼吼的自定义"/>
</template>

<script>
import { defineComponent,ref } from "vue";

export default defineComponent({
    setup() {
let val=ref(undefined)
      return {val};
    }
  }
);
</script>

<style scoped lang="less">

</style>
