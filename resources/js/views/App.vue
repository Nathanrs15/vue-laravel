<template>
  <v-app>
    <Toolbar></Toolbar>
    <Drawer></Drawer>
    <Content></Content>
  </v-app>
</template>

<script>
import Drawer from "../layouts/components/Drawer.vue";
import Toolbar from "../layouts/components/Toolbar.vue";
import Content from "../layouts/components/Content.vue";

export default {
  components: {
    Drawer,
    Toolbar,
    Content
  }
};
</script>
