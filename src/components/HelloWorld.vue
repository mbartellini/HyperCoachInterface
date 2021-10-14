<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Hyper Coach Interface!!!!
        </h1>

        <RoutineCard img_src="https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg">Hola pepe</RoutineCard>
        <RoutineCard img_src="https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg">Chau pepe</RoutineCard>
        <RoutineCard img_src="https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg">Hola pepe</RoutineCard>
        <RoutineCard img_src="https://i.pinimg.com/originals/25/49/82/25498264b4b0e7bd98587789c0e4ffaa.jpg">Hola pepe</RoutineCard>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
    <v-card
        elevation="1"
        class="mx-auto"
        max-width="344"
    >
      <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
      ></v-img>
      <v-card-title>
        Top western road trips
      </v-card-title>
    </v-card>
    <div class="text-center">
      <v-btn
          :loading="loading3"
          :disabled="loading3"
          color="blue-grey"
          class="ma-2 white--text"
          @click="loader = 'loading3'"
      >
        Upload
        <v-icon
            right
            dark
        >
          mdi-cloud-upload
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>
<script>
import RoutineCard from "@/components/RoutineCard";

export default {
    name: 'HelloWorld',
    components: {
      RoutineCard,
    },
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      loader: null,
      loading3: false,
    }),
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  }
</script>
