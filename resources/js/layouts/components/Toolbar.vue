<template>
  <v-app-bar id="core-toolbar" app flat hide-on-scroll style="background: #eee;">
    <!-- <v-app-bar-nav-icon @click.stop="onClickBtn" ></v-app-bar-nav-icon> -->
    <v-flex align-center layout py-2>
      <v-toolbar-title>
        <v-btn class="default v-btn--simple" icon @click.stop="onClickBtn">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="default v-btn--simple"
        icon
        v-if="$auth.check()"
        @click.prevent="$auth.logout()"
      >
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-flex>
  </v-app-bar>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    responsive: false,
    title: null
  }),
  watch: {
    $route(val) {
      this.title = val.name;
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClickBtn() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onClick() {
      //
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  }
};
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>
