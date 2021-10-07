<template>
    <vs-sidebar
        background="dark"
        textWhite
        static-position
        absolute
        default-index="1"
        class="sidebarx"
        spacer
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
</template>

<script>
export default {
  data:() => ({
    active: 'home',
  })
}
</script>
