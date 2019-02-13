<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://www.gravatar.com/avatar/3113b06c78a972112e4f7bd4bd06a89a">
              </p>
            </figure>
            <div class="media-content">
              <h1 class="title">
                Gaël Demette
              </h1>
              <div class="subtitle">
                aka Panda, aka Nainterceptor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <main class="content">
        <h2>À propos de moi</h2>
        <p>
          Jeune développeur de 26 ans, je suis tombé dans le code quand j'étais petit.
          Ma <a target="_blank" href="http://codes-sources.commentcamarche.net/source/41398">
            première contribution opensource
          </a>  date de 2007,
          alors que j'avais 14 ans. Autodidacte dans l'âme, et grand passionné de web,
          je suis sans cesse en veille de nouvelles technologies.
        </p>
        <div class="columns">
          <div class="column">
            <h2>Expériences professionnelles</h2>
            <ul>
              <li>Depuis Fév. 2018 - Président @ Qonfucius</li>
              <li>Avr. 2016 > Janv. 2018 - CTO @ HungryUp</li>
              <li>Sept. 2015 > Janv. 2016 - Lead Developer @ Adrenaline Hunter</li>
              <li>2014 > 2018 - Auto entrepreneur et freelance</li>
              <li>2014 > 2015 - Formations d’ingénieurs BAC +3 à BAC +5 (Java EE et Web)</li>
              <li>2013 > 2014 - Développeur web @ Webtales</li>
              <li>2012 > 2013 - Développeur web @ Izeos</li>
              <li>2011 > 2012 - Développeur web @ agence de communication « Com’ des grands »</li>
              <li>2010 > 2012 - Formateur bénévole @ l'association « le LIEN : L'informatique et nous »</li>
              <li>2009 > 2011 - Technicien de maintenance informatique @ HAVAS IT (Suresnes 92)</li>
              <li>Juin 2008 - Technicien de maintenance informatique @ HAVAS IT (Suresnes 92) - Stage</li>
            </ul>
          </div>
          <div class="column">
            <h2>Formations</h2>
            <ul>
              <li>2014 > 2016 - Master of Science à Supinfo (Paris, Tour Montparnasse)</li>
              <li>2013 > 2014 - Bachelor of Science à Supinfo (Paris, Tour Montparnasse)</li>
              <li>
                2011 > 2013 - BTS Services Informatiques aux Organisations (S.I.O.) Option Solutions
                Logicielles et Application Métiers à IRIS (Paris XVII)
              </li>
              <li>
                2008 > 2011 - Bac Professionnel Systèmes Electroniques et Numériques (S.E.N.)
                Option Télécoms et Réseaux à IRIS (Paris XVII)
              </li>
            </ul>
          </div>
          <div class="column">
            <h2>Langues</h2>
            <ul>
              <li>Français, langue maternelle</li>
              <li>Anglais, technique</li>
            </ul>
            <h2>Autres</h2>
            <ul>
              <li>Autodidacte</li>
              <li>Conférencier</li>
              <li>Contributeur open-source (~90 dépots en tout genre)</li>
            </ul>
          </div>
        </div>
        <h2>Compétences</h2>
        <div class="columns">
          <div class="column">
            <h3>Développement</h3>
            <ul>
              <li>NodeJS (Confirmé)</li>
              <li>VueJS/NuxtJS (Confirmé)</li>
              <li>Ember.JS (Confirmé)</li>
              <li>PHP (Confirmé)</li>
              <li>Web statique (HTML5/CSS3) (Confirmé)</li>
              <li>Bases de données relationnelles (MySQL/MariaDB) (Confirmé)</li>
              <li>Bases de données documentaires (MongoDB) (Confirmé)</li>
              <li>Symfony 2 (Intermédiaire)</li>
              <li>Zend framework 2 (Intermédiaire)</li>
              <li>Go-lang (Intermédiaire)</li>
              <li>Rust-lang (Intermédiaire)</li>
            </ul>
          </div>
          <div class="column">
            <h3>Administration système</h3>
            <ul>
              <li>Linux (Debian) (Confirmé)</li>
              <li>Scripting (Intermédiaire)</li>
              <li>Docker (Intermédiaire)</li>
              <li>Ansible (Intermédiaire)</li>
              <li>Terraform (Intermédiaire)</li>
              <li>Bases de données documentaires (MongoDB) (Intermédiaire)</li>
              <li>Bases de données multi-tenant (Graph, documentaire) (ArangoDB) (Intermédiaire)</li>
            </ul>
          </div>
          <div class="column">
            <h3>Gestion de projet et d'équipe</h3>
            <ul>
              <li>Git (Confirmé)</li>
              <li>Gitlab (Confirmé)</li>
              <li>Redmine (Confirmé)</li>
              <li>Atlassian (Confirmé)</li>
              <li>Gestion d'équipe (Intermédiaire)</li>
              <li>Gestion de délais (Intermédiaire)</li>
              <li>Gestion de projet (Intermédiaire)</li>
              <li>Subversion (Intermédiaire)</li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>
<style lang="scss" scoped>
  @import "assets/css/variables";
  @import "~bulma/sass/layout/hero.sass";
  @import "~bulma/sass/elements/content.sass";
  @import "~bulma/sass/components/media.sass";

  main {
    margin: 20px 0;
  }
</style>
