import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
import enUSLocale from "./languages/en-US";
import zhCNLocale from "./languages/zh-CN.js";

const messages = {
  en_US: {
    ...enUSLocale,
    ...elementEnLocale
  },
  zh_CN: {
    ...zhCNLocale,
    ...elementZhLocale
  }
};

export function getLanguage() {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  }
  // if has not choose language
  const language = navigator.language || navigator.browserLanguage;

  // debugger
  const locales = Object.keys(messages);
  // debugger
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "zh_CN";
}

export function setLanguage(locale) {
  i18n.locale = locale;
}

const i18n = new VueI18n({
  locale: getLanguage(),
  // locale: localStorage.getItem('lang') || 'zh-CN',
  messages
});

export default i18n;
