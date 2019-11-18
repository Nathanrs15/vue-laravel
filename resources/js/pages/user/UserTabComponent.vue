<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col cols="12">
        <material-card class="card-tabs" :color="reactiveColor">
          <v-flex slot="header">
            <v-tabs v-model="tabs" background-color="transparent" slider-color="white">
              <span class="subheading font-weight-light mr-3" style="align-self: center">Tareas:</span>

              <v-tab class="mr-3" key="list" @click="changeColor('list')">
                <v-icon class="mr-2">list</v-icon>Lista
              </v-tab>

              <v-tab class="mr-3" key="add" @click="changeColor('add')">
                <v-icon class="mr-2">edit</v-icon>Añadir
              </v-tab>
            </v-tabs>
          </v-flex>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <keep-alive>
                <UserListComponent />
              </keep-alive>
            </v-tab-item>

            <v-tab-item>
              <RegisterUserComponent />
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import RegisterUserComponent from "./UserAdd";
import UserListComponent from "./UserList";

export default {
  inject: ["theme"],
  components: {
    RegisterUserComponent,
    UserListComponent
  },
  data() {
    return {
      reactiveColor: "primary",
      tabs: 0
    };
  },
  methods: {
    changeColor(key) {
      this.reactiveColor = key == "list" ? "primary" : "green";
    }
  }
};
</script>
