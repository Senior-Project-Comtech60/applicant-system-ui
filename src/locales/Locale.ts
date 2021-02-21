import VueI18n from "vue-i18n";

import { languages } from "../locales/messages.js";
export enum Language {
  English = 'en',
  Thai = 'th',
  German = 'de',
}

export class Locale {
  private static instance: VueI18n;
  static Language: any;

  public static get i18n(): VueI18n {
    if (!Locale.instance) {
      Locale.instance = new VueI18n({
        locale: this.currentLanguage,
        messages: languages
      });
    }

    return Locale.instance;
  }

  private static readonly defaultLanguage = Language.English;

  public static get currentLanguage(): Language {
    const language = localStorage.getItem("vue:language");

    for (const key of Object.keys(Language)) {
      if (Language[key] === language) {
        return Language[key];
      }
    }

    return this.defaultLanguage;
  }

  public static set currentLanguage(language: Language) {
    this.i18n.locale = language;
    localStorage.setItem("vue:language", language);
  }
}
