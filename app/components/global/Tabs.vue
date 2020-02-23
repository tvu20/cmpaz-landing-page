<template>
  <div>
    <v-col cols="12">
      <v-slider
        v-model="tabs"
        min="0"
        max="10" />
    </v-col>

    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      class="elevation-2"
      dark
      :centered="centered"
      :grow="grow"
      :vertical="vertical"
      :right="right"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
      :icons-and-text="icons">
      <v-tabs-slider />

      <v-tab
        v-for="i in tabs"
        :key="i"
        :href="`#tab-${i}`">
        Tab {{ i }}
        <div 
          v-if="`tab-${i}` === tab"
          style="margin-left: 200px;">
          HELLO
        </div>
      </v-tab>

      <v-tab-item
        v-for="i in tabs"
        :key="i"
        :value="'tab-' + i">
        <v-card
          flat
          tile>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: false,
        centered: false,
        grow: false,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 3,
      }
    },
  }
</script>