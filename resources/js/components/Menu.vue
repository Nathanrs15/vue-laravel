<template>
  <!--UNLOGGED-->
  <v-list dense nav>
    <div v-if="!$auth.check()">
      <v-list-item v-for="route in routes.unlogged" :key="route.name" :to="{name: route.path}" link>
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-if="$auth.check(2)">
      <v-list-item v-for="route in routes.user" :key="route.name" :to="{name: route.path}" link>
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-if="$auth.check(1)">
      <v-list-item v-for="route in routes.admin" :key="route.name" :to="{name: route.path}" link>
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>

    <!-- <div v-if="$auth.check()">
      <v-list-item @click.prevent="$auth.logout()">
        <v-list-item-icon>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>-->
  </v-list>

  <!--LOGGED USER-->
</template>
<script>
export default {
  data() {
    return {
      routes: {
        // UNLOGGED
        unlogged: [
          {
            name: "Inicio",
            path: "home",
            icon: "mdi-view-dashboard"
          },
          {
            name: "Iniciar sesión",
            path: "login",
            icon: "mdi-view-dashboard"
          }
        ],
        // LOGGED USER
        user: [
          {
            name: "Dashboard",
            path: "dashboard",
            icon: "mdi-view-dashboard"
          }
        ],
        // LOGGED ADMIN
        admin: [
          {
            name: "User administration",
            path: "admin.dashboard",
            icon: "supervised_user_circle"
          },
          {
            name: "Focos",
            path: "admin.focus",
            icon: "table_chart"
          },
          {
            name: "Crear usuario",
            path: "admin.register",
            icon: "person_add"
          }
        ]
      }
    };
  },
  mounted() {
    //console.log("Auth:", $auth.check(2));
  }
};
</script>
