<template>
  <header class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">Gaël Demette</nuxt-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">
            Mon profil
          </nuxt-link>
          <nuxt-link class="navbar-item" to="/00-panda">
            00 Panda
          </nuxt-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Contact
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="mailto:gael@demette.fr" title="Email" target="_blank">
                <span class="icon"><fa-icon pack="far" name="envelope" /></span>
                <span>Email</span>
              </a>
              <a class="navbar-item" href="https://github.com/Nainterceptor" title="Github" target="_blank">
                <span class="icon"><fa-icon pack="fab" name="github" /></span>
                <span>Github</span>
              </a>
              <a class="navbar-item" href="https://twitter.com/Nainterceptor" title="Twitter" target="_blank">
                <span class="icon"><fa-icon pack="fab" name="twitter" /></span>
                <span>Twitter</span>
              </a>
              <a class="navbar-item" href="https://www.linkedin.com/in/gaeldemette/" title="LinkedIn" target="_blank">
                <span class="icon"><fa-icon pack="fab" name="linkedin" /></span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  @import "assets/css/variables";
  @import "~bulma/sass/components/navbar.sass";
</style>
