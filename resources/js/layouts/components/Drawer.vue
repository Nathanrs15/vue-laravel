<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="230"
  >
    <v-img
      :src="image"
      height="100%"
      gradient="to top right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)"
    >
      <v-list v-if="this.$auth.user().name && this.$auth.user().email">
        <v-list-item link two-line>
          <v-list-item-content>
            <v-list-item-title class="title">{{this.$auth.user().name}}</v-list-item-title>
            <v-list-item-subtitle>{{this.$auth.user().email}}</v-list-item-subtitle>
          </v-list-item-content>
          <!-- <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action> -->
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group>
          <v-list-item class="v-list-item" to="/" :active-class="color">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dasboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <div v-if="!$auth.check()">
            <v-list-item
              v-for="(link, i) in links.unlogged"
              :key="i"
              :to="link.to"
              :active-class="color"
            >
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>

          <div v-if="$auth.check(2)">
            <v-list-item
              v-for="(link, i) in links.user"
              :key="i"
              :to="link.to"
              :active-class="color"
            >
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>

          <div v-if="$auth.check(1)">
            <v-list-item
              v-for="(link, i) in links.admin"
              :key="i"
              :to="link.to"
              :active-class="color"
            >
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-img>
  </v-navigation-drawer>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      right: null,
      mini: true,
      links: {
        // UNLOGGED
        unlogged: [
          {
            text: "Iniciar sesión",
            to: "/login",
            icon: "mdi-view-dashboard"
          }
        ],
        // LOGGED USER
        user: [
          {
            text: "Usuario",
            to: "/dashboard",
            icon: "mdi-view-dashboard"
          }
        ],
        // LOGGED ADMIN
        admin: [
          {
            text: "Usuarios",
            to: "/usuers",
            icon: "supervised_user_circle"
          },
          {
            text: "Focos de emisiones",
            to: "/focus",
            icon: "table_chart"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState("app", ["image", "color"]),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    },
    items() {
      return this.$t("Layout.View.items");
    }
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"])
  },
  components: {}
};
</script>

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }
}
</style>
