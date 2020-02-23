<template>
  <v-container
    class="wide d-flex justify-center w-100 position-fixed"
    style="padding: 60px 0 0;"
    fluid>
    <v-container>
      <v-layout
        align-center
        class="position-relative">
        <v-layout
          class="w-100 h-100 position-absolute justify-center align-center"
          style="z-index: 150;">
          <nuxt-link 
            to="/">
            <Logo />
          </nuxt-link>
        </v-layout>
        
        <a 
          style="z-index: 151;"
          @click.prevent="$nuxt.$emit('drawer--open')">
          <v-icon
            color="#3f549c"
            size="32">
            menu
          </v-icon>
        </a>

        <nuxt-link 
          class="ml-auto"
          style="z-index: 151;"
          to="book-now">
          <BtnBlue
            text="Book Now"
            class="ml-auto" />
        </nuxt-link>
      </v-layout>
    </v-container>
  </v-container>
</template>
