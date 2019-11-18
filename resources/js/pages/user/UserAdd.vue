<template>
  <!-- <material-card color="blue" title="Añadir nuevo usuario"> -->
  <v-form ref="form" v-model="valid" :lazy-validation="true">
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>

    <v-text-field
      v-model="password_confirmation"
      :rules="passwordRules"
      label="Confirm password"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="roles"
      :rules="[v => !!v || 'Item is required']"
      label="Roles disponibles"
      required
    ></v-select>

    <!-- <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
    ></v-checkbox>-->

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
  <!-- </material-card> -->
  <!-- <div class="container">
      <div class="card card-default">
        <div class="card-header">Crear usuarios</div>
        <div class="card-body">
          <div class="alert alert-danger" v-if="has_error && !success">
            <p
              v-if="error == 'registration_validation_error'"
            >Error(es) de validación, por favor consulte el mensaje(s) a continuación.</p>
            <p
              v-else
            >Error, imposible de registrar en este momento. Si el problema persiste, póngase en contacto con un administrador.</p>
          </div>
          <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
            <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">
              <label for="email">E-mail:</label>
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="user@example.com"
                v-model="email"
              />
              <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" class="form-control" v-model="password" />
              <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
            </div>
            <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
              <label for="password_confirmation">Confirmación de la contraseña</label>
              <input
                type="password"
                id="password_confirmation"
                class="form-control"
                v-model="password_confirmation"
              />
            </div>
            <button type="submit" class="btn btn-default">Crear</button>
          </form>
        </div>
      </div>
  </div>-->
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [v => !!v || "Password is required"],
    password_confirmation: "",
    //password_confirmationRules: [v => !!v || "Password is required"],
    select: "",
    roles: ["Administrator", "User"],
    has_error: false,
    error: "",
    errors: {},
    success: false
  }),
  mounted() {
    console.log("Register component mounted");
  },
  methods: {
    register() {
      var app = this;
      this.$auth.register({
        data: {
          email: app.email,
          password: app.password,
          password_confirmation: app.password_confirmation
        },
        success: function() {
          app.success = true;
          this.$router.push({
            name: "login",
            params: { successRegistrationRedirect: true }
          });
        },
        error: function(res) {
          console.log(res.response.data.errors);
          app.has_error = true;
          app.error = res.response.data.error;
          app.errors = res.response.data.errors || {};
        }
      });
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        //this.register();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
//  return {
//       name: "",
//       email: "",
//       password: "",
//       password_confirmation: "",
//       has_error: false,
//       error: "",
//       errors: {},
//       success: false
//     };
