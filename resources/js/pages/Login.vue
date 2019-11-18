<template>
  <v-container fluid>
    <!-- <div class="container">
      <div class="card card-default">
        <div class="card-header">Sign in</div>
        <div class="card-body">
          <div class="alert alert-danger" v-if="has_error">
            <p>Incorrect password or user</p>
          </div>
          <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-group">
              <label for="email">E-mail:</label>
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="user@example.com"
                v-model="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" class="form-control" v-model="password" required />
            </div>
            <v-btn
              class="ma-2"
              type="submit"
              :loading="loading"
              :disabled="loading"
              color="secondary"
            >Sign in</v-btn>
          </form>
        </div>
      </div>
    </div>-->
    <v-flex md12 lg6>
      <material-card color="primary" title="Iniciar sesión">
        <v-form autocomplete="off" @submit.prevent="login" method="post">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>

          <v-text-field v-model="password" label="Password" required></v-text-field>
          <v-btn
            class="ma-2"
            type="submit"
            :loading="loading"
            :disabled="loading"
            color="primary"
          >Iniciar sesión</v-btn>
        </v-form>
      </material-card>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: "admin@test.com",
      password: "admin",
      has_error: false,
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      // get the redirect object
      var redirect = this.$auth.redirect();
      var app = this;
      this.$auth.login({
        params: {
          email: app.email,
          password: app.password
        },
        success: function() {
          // handle redirection
          this.loading = false;
          console.log("Login user role: ", this.$auth.user().roleId);
          const redirectTo = redirect
            ? redirect.from.name
            : this.$auth.user().roleId === 1
            ? "admin.dashboard"
            : "dashboard";
          this.$router.push({ name: redirectTo });
        },
        error: function() {
          this.loading = false;
          app.has_error = true;
        },
        rememberMe: true,
        fetchUser: true
      });
    }
  }
};
</script>
<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
