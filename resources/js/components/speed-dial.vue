<template>
  <v-speed-dial
    v-model="fab"
    fixed
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-btn fab dark small color="green" @click="this.onAdd">
      <v-icon>add</v-icon>
    </v-btn>

    <v-btn v-if="this.hidden" fab dark small color="warning" @click="this.onEdit">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-btn v-if="this.hidden" fab dark small color="red" @click="this.onDelete">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      default: true
    },
    onAdd: Function,
    onEdit: Function,
    onDelete: Function
  },
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition"
  })
};
</script>
