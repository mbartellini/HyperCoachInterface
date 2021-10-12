<template>
  <v-container fluid>
    <v-container fluid>
      <v-row class="text-h5 ma-3">
        <h1>Editar perfil</h1>
      </v-row>
    </v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <div style="margin-top:40px">
          <v-avatar
              color="primary"
              size="250"
              style="margin-bottom: 15px"
          >
            <v-img
                :src="user.img"
                class="mx-auto"
                max-width="250"
                height="250"
                rounded
            />
          </v-avatar>
        </div>
        <div style="margin-bottom: 10px">
          <v-file-input @change="PreviewImage" v-show="false" id="file-upload" v-model="image"/>
          <v-img :src="preview" :height="300" :width="300" class="profilepic" alt="Profile picture"></v-img>
          <v-btn>
            <label @change="PreviewImage" for="file-upload">Cambiar foto</label>
          </v-btn>
        </div>
        <div>
          <h1>Nombre</h1>
          <v-text-field
              clearable
              outlined
              :value="user.name"
          />
        </div>
        <div>
          <h1>Usuario</h1>
          <v-text-field
              clearable
              outlined
              :value="user.username"
          />
        </div>
        <div>
          <h1>E-mail</h1>
          <v-text-field
              clearable
              outlined
              :value="user.email"
          />
        </div>
        <div>
          <h1>Sexo</h1>
          <v-autocomplete
              ref="gender"
              v-model="gender"
              :items="['Masculino', 'Femenino', 'Prefiero no indicar']"
              :label="user.sex"
              placeholder="Select..."
              required
              outlined
          ></v-autocomplete>
        </div>
        <div>
          <h1>Fecha de nacimiento</h1>
          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <v-date-picker
                v-model="date"
                no-title
                scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menu = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="date"
                  :label="user.date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
              ></v-text-field>
            </template>
          </v-menu>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.profilepic {
  position: absolute;
  right: 15px;
  border-radius: 50%;
  border: 1px solid white;
}
</style>

<script>
export default {
  name: 'Profile',

  data: () => ({
    user: {
      name: "Juan Ignacio Garcia Matwieiszyn",
      img: "../assets/Juani.jpeg",
      username: "juano",
      email: "juanigarcia@itba.edu.ar",
      sex: "Por favor",
      age: 20,
      date: '20-10-2020',
    },
  }),
}
</script>
