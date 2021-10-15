<template>
  <div class="flex items-center justify-center h-screen">
    <h1>Registro</h1>
    <div class="sm:w-1/2">
      <div class="p-5 w-4/5 mx-auto text-left font-raleway">
        <form @submit="login">
          <div class="my-5">
            <v-container>
              <v-row>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-text-field
                      v-model="firstname"
                      outlined
                      clearable
                      counter="50"
                      :rules="nameRules"
                      required
                      label="Nombre*"
                  />
                </v-col>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-text-field
                      v-model="lastname"
                      outlined
                      counter="50"
                      :rules="nameRules"
                      label="Apellido*"
                      required
                      clearable
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-autocomplete
                      ref="gender"
                      v-model="gender"
                      :items="['Masculino', 'Femenino', 'Prefiero no indicar']"
                      label="Género*"
                      placeholder="Seleccionar..."
                      required
                      outlined
                  ></v-autocomplete>
                </v-col>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
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
                        :max="today"
                        :min="yesterday"
                        no-title
                        scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                          text
                          color="primary"
                          @click="menu = false"
                      >
                        Cancelar
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
                          label="Fecha de nacimiento*"
                          prepend-icon="mdi-calendar"
                          readonly
                          required
                          v-bind="attrs"
                          v-on="on"
                          outlined
                      ></v-text-field>
                    </template>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                    cols="12"
                    sm="10"
                    md="6"
                >
                  <v-text-field
                      v-model="email"
                      outlined
                      counter="100"
                      :rules="mailRules"
                      label="E-mail*"
                      required
                      clearable
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-img
                      :src="preview"
                      :height="150"
                      :width="150"
                      class="profilepic"
                      alt="Profile picture" />
                </v-col>
              </v-row>

              <v-row
                  align="center"
              >
                <v-col
                    cols="6"
                    sm="4"
                    md="2"
                >
                  <v-file-input @change="handleImage" v-show="false" id="file-upload" v-model="image" style="margin: 0"/>
                  <v-btn class="pa-5">
                    <label for="file-upload">Subir foto de perfil</label>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-text-field
                      v-model="username"
                      outlined
                      counter="50"
                      :rules="nameRules"
                      label="Usuario*"
                      required
                      clearable
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-text-field
                      v-model="password"
                      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPass ? 'text' : 'password'"
                      name="input-10-2"
                      label="Contraseña*"
                      counter="50"
                      :rules="nameRules"
                      required
                      outlined
                      @click:append="showPass = !showPass"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-text-field
                      v-model="passwordConfirmation"
                      :append-icon="showPassConf ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassConf ? 'text' : 'password'"
                      name="input-10-2"
                      label="Confirmar contraseña*"
                      outlined
                      @click:append="showPassConf = !showPassConf"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <p
                      v-show="passwordConfirmation.length > 0 && password !== passwordConfirmation"
                      class="ml-3 red--text"
                  >
                    Las contraseñas no coinciden.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                    cols="8"
                    sm="6"
                    md="3"
                >
                  <v-btn
                      type="button"
                      @click="login"
                      :disabled="util || password.length < 3 || password !== passwordConfirmation || firstname.length <= 0 || firstname.length > 50 || lastname.length <= 0 || lastname.length > 50 || email.length <= 0 || email.length > 100 || username.length <= 0 || username.length > 50 || password.length <= 0 || password.length > 50"
                      class="bg-green-400 p-5 text-white text-decoration-underline"
                      color="primary"
                  >
                    Registrarse
                  </v-btn>
                  <p v-show="password.length < 3 || password !== passwordConfirmation || firstname.length <= 0 || firstname.length > 50 || lastname.length <= 0 || lastname.length > 50 || email.length <= 0 || email.length > 100 || username.length <= 0 || username.length > 50 || password.length <= 0 || password.length > 50">Asegurese de completar todos los campos</p>

                  <v-dialog
                      v-model="dialog"
                      width="500"
                      persistent
                  >
                    <v-card>
                      <v-card-title class="text-h5">
                        {{error? errorMsg : successMsg}}
                      </v-card-title>

                      <v-card-text
                      >
                        {{error? errorDetails : 'Para terminar de crear su cuenta, revisá tu casilla de mail y verificala. Luego de verificarla podrás iniciar sesión.'}}
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            :color="error? 'error' : 'success'"
                            text
                            class="text-decoration-underline"
                            @click="finishDialog"
                        >
                          {{error? 'Reintentar' : 'Iniciar sesión'}}
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import {RegisterCredentials} from "@/api/user";
import router from "@/router";

export default {
  name: 'Registration',
  data() {
    return {
      dialog: false,
      showPass: false,
      showPassConf: false,
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      util: false,
      nameRules: [
        (v) => !!v || "Este campo es obligatorio",
        (v) => (v && v.length <= 50) ||
            "Maximo 50 caracteres",],
      mailRules: [
        (v) => !!v || "Este campo es obligatorio",
        (v) => (v && v.length <= 100) ||
            "Maximo 100 caracteres",],
      passwordConfirmation: '',
      menu: null,
      gender: ["Masculino","Femenino","Prefiero no indicar"],
      date: '',
      today: new Date(Date.now() - 864e5).toISOString().slice(0, 10),
      yesterday: new Date("1900-01-01").toISOString().slice(0, 10),
      email: '',
      preview: 'https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer.png',
      image: null,
      avatarUrl: '',
      phone: '',
      metadata: { img_src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QBCRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAkAAAAMAAAABAEQAAEABAAEAAAABAAAAAAAAAAAAAP/bAEMACwkJBwkJBwkJCQkLCQkJCQkJCwkLCwwLCwsMDRAMEQ4NDgwSGRIlGh0lHRkfHCkpFiU3NTYaKjI+LSkwGTshE//bAEMBBwgICwkLFQsLFSwdGR0sLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLP/AABEIATsB2gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APJqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikoAWirVrp2p3rQpaWdzMZpRBEY4mKPKQWCB/u5wCevareq+Hte0M2C6ram2N8rNAGdG4VgrBthOCMigDKorrrXwJqtz4gvfDrXtlHdWtml6ZT5jRSI6xsAmBu/iHbtWlb/C7WLi+1WxGp2CvpxtN7lJiri4j80FQB26UAef0VsWvh3UL278QWlvLb50SC8ubqSRmRGjtX2Ns4Jye1R6f4f8Q6tbT3mm6dcXUEEohlaABmVyu/G3O48egoAy6Kc8csR2yRujAsuJFKncp2kc+h4NNoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSp7W2uL25tbS3UNPczJBCpZVDSOdoBZsAV2/ga10nTPFU2l+JLBRqCuIbFrk7oobtTkDYflO8Y2N9MfeyADCsfB3ifUNLu9Yhsytjb273KPKdr3KJy3kIMk4wT2HFOXR9PuvCL6zZeb/aOmaj5GrIzbkNtPzDKi44AOAfxr2+GSDQNQu7K5dItG1Dz76wkmYLBa3H37m0Zm+UBv9Yg92HavJbTzode8WWHhaybW9J1WCezMaJIkCLL86sZCAB5ZJCnIz+NAHpEF4useBtP1O1RFuLKG1vwsShQlzp0itIAEA67W7d6wviz9ju9I0K8hngaWK6yiiRPNMNxFvyEBzjgUzQ/h94xj0/+z9Q8RSafp7vJJJZacxd2aQAMHkGBz3HI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XbGe0ldpCvlvK5cyEYOeajm1rzfDun6B9mC/ZNRnvzc+ZkyGVdm3ZjjH17VkUUAPgkEM1vMV3CKWOUqTjcEYNtz712Oo+KvCWq3tzqF94R826uCrTONVuEDFVCD5UUDoBXF0UAaJv7GLWYNSsLD7NawXdtdQ2RneXaIirFfNYbuSPTvRrGqf2trN/qxgEP2u6FyYQ+7bjHy78D09KzqKANfxHrP/AAkGrXOqfZltjNFbxmIOZMeVGI9xYgdcelO1/XDrjaOTbC3/ALO0u203AkL+Z5Of3nIGM+lY1FAG5qniK4v/APhGGgia0m0Gwgs4Zo5CzO8LbllHAx9Oa1J/EvhTV3+16/4beTUyqie40y8a1ju3UY3yxYIBPciuPooA3dY8RS6n/Z1tb2kNhpOmtusdPt2ZkVi2WklduWc9z/jzX8Q6v/b2r3+qm3+z/a/KzFv8zb5cax/ewOuM9KyqKAOn1Txfc6voFjo11aIbm2lt3kvxIfMuFgRo4xImOSAcZz2rl6WkoAZyTRg04ACnUAR0U+k20ANp4AFMp9AC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAEZ6mn0zqakoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkPQ0tNbpQAg60+mr3p1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU1ulOpD0NACL3p1MXrT6ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAj6Gng5oIzTORQBJRTNxpw5oAWiiigAooooAKKKKACipJwBPcAAACWQADgABjwBUdABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUtFADdopelLRQAUUUUAFFFFABRRW/b29s0FuTBCSYYySY1JJKjknFAH/9k=" },
      error: true,
      errorMsg: 'Ha ocurrido un error.',
      successMsg: 'Usuario creado exitosamente',
      errorDetails: 'Revise que los datos ingresados son correctos.'
    }
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    })
  },
  methods: {
    PreviewImage() {
      this.preview = URL.createObjectURL(this.image)
    },
    ...mapActions('security', {
      $register: 'register',
    }),
    handleImage() {
      if (this.image) {
        if (this.image.size > 1024 * 50) {
          this.errorDetails = "La imagen ingresada es demasiado grande."
          this.dialog = true
          return;
        }
        this.PreviewImage();
        const aux = this.getImg();
        aux.then(data => this.metadata = {img_src: data});
      }
    },
    getImg() {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(this.image);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    async login(e) {
      this.util = true
      this.handleImage()
      e.preventDefault()
      if (this.firstname.length <= 0 || this.firstname.length > 50 || this.lastname.length <= 0 || this.lastname.length > 50 || this.email.length <= 0 || this.email.length > 100 || this.username.length <= 0 || this.username.length > 50 || this.password.length <= 0 || this.password.length > 50 ) {
        this.dialog = true
        this.util = false
        return
      }
      try {
        if (this.gender === "Prefiero no indicar") {
          this.gender = 'other'
        } else if (this.gender === "Masculino") {
          this.gender = 'male'
        } else if (this.gender === "Femenino") {
          this.gender = 'female'
        } else {
          this.gender = ''
        }
        const credentials = new RegisterCredentials(this.username, this.password, this.firstname, this.lastname, this.gender, new Date(this.date.toString()).getTime(), this.email, this.phone, "", this.metadata)
        await this.$register({credentials, rememberMe: true })
        this.error = false
      } catch(error) {
        this.error = true
        if (error.message) {
          this.errorDetails = error.message
        } else if (error.details) {
          this.errorDetails = error.details[0]
        } else if (error.description) {
          this.errorDetails = error.description
        } else {
          this.errorDetails = error
        }
        this.password = ''
        this.passwordConfirmation = ''
      }
      this.util = false
      this.dialog = true
    },
    finishDialog() {
      this.dialog = false
      if (!this.error) {
        router.push('/login')
      }
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
  border-radius: 50%;
  border: 2px solid black;
}
</style>