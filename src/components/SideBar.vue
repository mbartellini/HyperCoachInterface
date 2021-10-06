<template>
  <div class="hidden">
    <vs-sidebar
        background="dark"
        textWhite
        absolute
        v-model="active"
        open
    >
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
  </div>
</template>

<script>
export default {
  data:() => ({
    active: 'home',
  })
}
</script>
