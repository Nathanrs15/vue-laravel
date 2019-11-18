<template>
  <div>
    <v-alert prominent type="error" elevation="24" border="left" transition="scale-transition">
      <v-row align="center">
        <v-col class="grow">{{this.message}}</v-col>
        <v-col class="shrink">
          <v-btn @click="this.callback">Reintentar</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>
<script>
export default {
  props: {
    message: String,
    callback: Function
  }
};
</script>
