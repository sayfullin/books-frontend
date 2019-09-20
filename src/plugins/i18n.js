import Vue from 'vue/dist/vue.esm.js';
import VueI18n from 'vue-i18n'

import en from '../locales/en'
import ru from '../locales/ru'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'ru',
    messages:{
        en,
        ru
    },
});

export default i18n;