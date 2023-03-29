/**
* @author  sparkHou
* @date 2023-03-29 11:02
* @Description:
*/
<template>
<div>
  <a-dropdown-button @click="handleButtonClick">
    Dropdown
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">
          <UserOutlined />
          1st menu item
        </a-menu-item>
        <a-menu-item key="2">
          <UserOutlined />
          2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          <UserOutlined />
          3rd item
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button>
</div>
</template>

<script setup>

function handleButtonClick(){

}
function handleMenuClick(){

}
</script>

<style scoped>

</style>
