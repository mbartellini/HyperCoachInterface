<template>
  <div class="flex items-center justify-center h-screen">
    <h1>NUEVA RUTINA</h1>
    <div class="sm:w-1/2">
      <div class="p-5 w-4/5 mx-auto text-left font-raleway">
        <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
        <form @submit="create">
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Nombre</h3>
            <input type="text" v-model="name"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Detalle</h3>
            <input type="text" v-model="detail"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Dificultad</h3>
            <input type="number" max="5" min="0" v-model="difficult"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Categoria: nombre</h3>
            <input type="email" v-model="cat_name"/>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">Imagen</h3>
            <v-file-input @change="PreviewImage" v-show="false" id="file-upload" v-model="image"/>
            <v-img :src="preview" :height="200" :width="200" class="profilepic" alt="Profile picture"></v-img>
            <v-btn>
              <label @change="PreviewImage" for="file-upload">Subir foto</label>
            </v-btn>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">ciclo entrada en calor</h3>
            <v-container @change="update" full-height class="py-0">
              <v-row>
                <v-col cols="12">
                  <card-list v-model="items" #default="{ item }">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="item.name" label="Name" hide-details />
                      </v-col>
                    </v-row>
                  </card-list>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto" class="py-0 mx-auto">
                  <v-btn @click="add" text>
                    <v-icon>
                      mdi-plus
                    </v-icon>
                    Add
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <div class="my-5">
            <h3 class="text-left font-bold mb-5 font-montserrat">ciclo de potencia</h3>
            <v-container @change="update" full-height class="py-0">
              <v-row>
                <v-col cols="12">
                  <card-list v-model="items2" #default="{ item2 }">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="item2.name" label="Name" hide-details />
                      </v-col>
                    </v-row>
                  </card-list>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto" class="py-0 mx-auto">
                  <v-btn @click="add2" text>
                    <v-icon>
                      mdi-plus
                    </v-icon>
                    Add
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <button type="submit" class="bg-green-400 p-5 text-white">
            Registrarse
          </button>
          <p class="my-2">
            <router-link to="" >Olvidaste tu contraseña?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import {mapState, mapGetters, mapActions} from 'vuex'

import {Category} from "@/api/category";
import CardList from "@/components/CardList";


export default {
  name: 'NewRoutine',
  components: {
    CardList
  },
  data() {
    return {
      name: '',
      detail: '',
      difficult: 0,
      cat_name: '',
      cat_detail: '',
      preview: null,
      image: null,
      metadata: null,
      error: false,
      counter: 10,
      counter2: 10,
      items: [],
      items2: [],
      errorMsg: `An error occurred, please try again`
    }
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    }),
  },
  methods: {
    update() {
      console.log(this.items[0].name)
    },
    PreviewImage() {
      this.preview = URL.createObjectURL(this.image)
    },
    ...mapActions('security', {
      $getCurrentUser: 'getCurrentUser',
      $register: 'register',
    }),
    ...mapActions('category', {
      $createCategory: 'create',
    }),
    async create() {
      let cat = new Category(null, "test", "test");
      await this.$createCategory(cat)
    },
    add () {
      this.items.push({ id: this.counter++ })
    },
    add2 () {
      this.items2.push({ id: this.counter2++ })
    }
  }
}
</script>

<style scoped>

input[type="text"] { padding: 2px; border: 4px solid gray }
input[type="password"] { padding: 2px; border: 4px solid gray }
input[type="email"] { padding: 2px; border: 4px solid gray }
input[type="date"] { padding: 2px; border: 4px solid gray }

.profilepic {
  position: absolute;
  right: 15px;
  border-radius: 50%;
  border: 1px solid white;
}

.container {
  max-width: 600px !important;
}

</style>
