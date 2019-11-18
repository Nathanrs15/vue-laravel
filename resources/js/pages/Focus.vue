<template>
  <!-- v-bind:class="{'fill-height': loading}" -->
  <v-container fill-height fluid>
    <v-row>
      <v-col>
        <!-- title="Lista de focos" text="Focos de emisiones contaminantes" -->
        <material-card color="primary">
          <v-flex slot="header">
            <h4 class="title font-weight-light mb-2">Lista de focos</h4>
            <p class="category font-weight-thin">Focos de emisiones contaminantes</p>
          </v-flex>

          <component :is="transition !== 'None' ? `v-${transition}` : 'div'" hide-on-leave>
            <v-skeleton-loader v-if="loading" class="mx-auto" max-width="300">
              <v-boilerplate type="table-heading, table-tbody"></v-boilerplate>
            </v-skeleton-loader>

            <v-data-table
              v-else
              v-model="selected"
              :headers="headers"
              :items="focuses"
              :single-select="true"
              :search="search"
              item-key="name"
              show-select
            >
              <!-- toolbar -->
              <template v-slot:top v-if="focuses">
                <v-toolbar flat color="white">
                  <v-text-field v-model="search" append-icon="search" label="Search" single-line></v-text-field>
                </v-toolbar>
              </template>
              <!-- toolbar End-->
              <!-- Empty Data-->
              <template v-slot:no-data>
                <v-btn color="primary" @click="fetchData">Reset</v-btn>
              </template>
            </v-data-table>
          </component>
        </material-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="500px">
      <!-- <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
      </template>-->
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.name" label="Focus name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.description" label="Focus description"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close(false)">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <SpeedDialComponent
      v-bind:onAdd="openDialog"
      v-bind:onEdit="editItem"
      v-bind:onDelete="deleteItem"
      v-bind:hidden="hidden"
    ></SpeedDialComponent>
  </v-container>
</template>

<script>
import api from "../store/focus";
import LoadingComponent from "../components/Loading";
import AlertComponent from "../components/Alert";
import SpeedDialComponent from "../components/speed-dial";

export default {
  inject: ["theme"],
  components: {
    LoadingComponent,
    AlertComponent,
    SpeedDialComponent,
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
    focuses: [],
    selected: [],
    headers: [
      { text: "Name", value: "name", sortable: false },
      { text: "Description", value: "description", sortable: false }
    ],
    search: "",
    dialog: false,
    loading: false,
    transition: "scale-transition",
    saving: false,
    error: null,
    editedIndex: -1,
    editedItem: {
      name: "",
      description: ""
    },
    defaultItem: {
      name: "",
      description: ""
    },
    hidden: null
  }),
  mounted() {
    console.log("mounted component");
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.focuses = null;
      this.loading = true;
      setTimeout(() => {
        api
          .all()
          .then(response => {
            this.loading = false;
            this.focuses = response.data.data;
          })
          .catch(error => {
            this.loading = false;
            this.error = error.response.data.message || error.message;
          });
      }, 2000);
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    close(update) {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);

      if (update) {
        this.fetchData();
      }
    },
    openDialog() {
      this.dialog = true;
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.focuses[this.editedIndex], this.editedItem);
      } else {
        this.error = null;
        this.saving = true;
        api
          .create(this.editedItem)
          .then(data => {
            this.close(true);
          })
          .catch(e => {
            this.error =
              e.response.data.message ||
              "There was an issue creating the focus.";
          })
          .then(() => {
            this.saving = false;
          });
      }
    },
    editItem() {
      if (this.selected.length > 0) {
        this.editedIndex = this.focuses.indexOf(this.selected[0]);
        this.editedItem = Object.assign({}, this.selected[0]);
        this.dialog = true;
      }
    },
    deleteItem() {
      console.log("delete focus: ", this.selected[0]);
      this.saving = true;
      api
        .delete(this.selected[0].focusId)
        .then(resposne => {
          this.saving = false;
          this.fetchData();
        })
        .catch(error => {
          this.saving = false;
          this.error =
            e.response.data.message ||
            "There was an issue deleteing the focus.";
        });
    }
  },
  watch: {
    dialog(val) {
      val || this.close(false);
    },
    selected(newVal, oldVal) {
      this.hidden = newVal.length > 0 ? true : false;
      console.log("hidden watch: ", this.hidden);
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  }
};
</script>
<style lang="scss">
.v-data-footer {
  justify-content: left !important;
  margin-left: 9px !important;
}

.v-application .grey.lighten-4 {
  background-color: transparent !important;
}
</style>
        <!-- <LoadingComponent v-if="loading"></LoadingComponent> -->
        <!-- <AlertComponent v-else-if="error" v-bind:message="error" v-bind:callback="fetchData"></AlertComponent> -->
        <!-- v-else-if="!loading && !error" -->
        <!--             v-if="!loading && !error"
        -->
