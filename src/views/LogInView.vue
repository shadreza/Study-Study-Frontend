<template>
  <div class="log-in">
    <div class="hero is-info">
      <div class="hero-body has-text-centered">
        <h1 class="title">Log in</h1>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <form action="">
              <div class="field">
                <label for="form-email">Email</label>
                <div class="control">
                  <input type="email" class="input" id="form-email" />
                </div>
              </div>

              <div class="field">
                <label for="form-password">Password</label>
                <div class="control">
                  <input type="password" class="input" id="form-password" />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button class="button is-dark">Log in</button>
                </div>
              </div>

              <hr />

              or <router-link to="/signup"> click here</router-link> to signup !
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LogInView",
};
</script>