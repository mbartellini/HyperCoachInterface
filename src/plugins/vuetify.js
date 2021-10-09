import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#8e8e8f',
                secondary: '#6f6f6f',
                accent: '#444444',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                primaryFont: '#FFFFFF',
                secondaryFont: '#000000'',
            },
        },
    },
})

export default vuetify