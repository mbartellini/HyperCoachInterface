<template>
  <vs-sidebar
      class="ma-auto overflow-hidden"
      background="dark"
      textWhite
      square
      v-model="active"
      open
  >
    <vs-sidebar-item id="placeHolder1">
      <b> Hyper Coach Interface </b>
    </vs-sidebar-item>
    <vs-sidebar-item id="placeHolder1">

    </vs-sidebar-item>
    <vs-sidebar-item id="placeHolder1">
      placeHolder1
    </vs-sidebar-item>
    <vs-sidebar-item id="placeHolder2">
      placeHolder2
    </vs-sidebar-item>
    <vs-sidebar-item id="placeHolder3">
      placeHolder3
    </vs-sidebar-item>
    <vs-sidebar-item id="placeHolder4">
      placeHolder4
    </vs-sidebar-item>
  </vs-sidebar>
</template>

<script>
export default {
  name: 'SideBar',

  data:() => ({
    active: 'home',
  })
}
</script>
