<template>
  <component :is="transition !== 'None' ? `v-${transition}` : 'div'" hide-on-leave>
    <v-skeleton-loader v-if="loading" class="mx-auto" max-width="300">
      <v-boilerplate type="list-item-avatar-two-line"></v-boilerplate>
      <v-boilerplate type="list-item-avatar-two-line"></v-boilerplate>
      <v-boilerplate type="list-item-avatar-two-line"></v-boilerplate>
    </v-skeleton-loader>

    <v-list v-else two-line>
      <v-list-item v-for="user in users" :key="user.name" @click="getUserById(user.id)">
        <v-list-item-avatar>
          <v-icon>person</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="user.name"></v-list-item-title>
          <v-list-item-subtitle v-text="user.role"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn icon>
                <v-icon color="grey lighten-1" v-on="on">mdi-information</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </component>
</template>
<script>
export default {
  components: {
    VBoilerplate: {
      functional: true,
      render(h, { data, props, children }) {
        return h(
          "v-skeleton-loader",
          {
            ...data,
            props: {
              boilerplate: false,
              ...props
            }
          },
          children
        );
      }
    }
  },
  data: () => ({
    has_error: false,
    users: null,
    loading: false,
    transition: "scale-transition",
    dialog: false
  }),
  mounted() {
    this.getUsers();

    console.log("User list component mounted");
  },
  methods: {
    getUsers() {
      this.loading = true;

      setTimeout(() => {
        this.$http({
          url: "api/users",
          method: "GET"
        })
          .then(res => {
            console.log("user list:", res.data);
            console.log("tabs", this.tabs);

            this.users = res.data.users;
            this.loading = false;
          })
          .catch(err => {
            this.has_error = true;
            this.loading = false;

            console.log("error: ", err);
          });
      }, 2000);
    },
    getUserById(id) {
      this.$http({
        url: "api/users/" + id,
        method: "GET"
      })
        .then(res => {
          console.log("user:", res.data);
        })
        .catch(err => {
          this.has_error = true;
          console.log("error: ", err);
        });
    }
  }
};
</script>
