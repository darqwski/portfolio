import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
        }
    },
    pl: {
        translation: {
            "About me paragraph": "Ogólnie od początku chciałem być backendowcem bo z racji tego że programowaniem zajmowałem się od stosunkowo młodego wieku, nie miałem problemu z uczeniem się nowych języków. Po poznaniu wszystkich rodzajów (back/front/embedded/desktop/mobile) stwierdziłem że najciekawszy, najprzyjemniejszy i najbardziej efektowny jest backend. Po tym odkryciu stworzyłem dwa większe projekty, jeden do agregowania artykułów (takie SQUID tylko że mój), drugi do czegoś pomiędzy pamiętnikiem/organizatorem a notatnikiem(mały evernote) które są na GIT'ie i można je pobrać z GooglePlay. Potem prywatne projekty chwilowo zostały wstrzymane bo poszedłem do pierwszej pracy gdzie zrobiłem całego ERP'a. Serio, to cały system, od logowania godzin pracy, przez planowanie projektów do generatora raportów i kwitków. W między czasie znalazłem drugą pracę, którą dostałem totalnie przypadkiem. Szukałem wtedy dodatkowej pracy, jako mobile developer, bo myślałem że umiem mobile (nie umiem, przyznaje). Poszedłem na rozmowę, okazało się że to pozycja frontendowa, ale pomimo zaskoczenia mojego jak i rekrutujących, pracę dostałem. I tak sobie zostałem na frontendzie, bo stwierdzam że choć jest to relatywnie małoodpowiedzialne zajęcie, to jest masa bałaganu który trzeba posprzątać. To jest zadanie które podobno nie występuje w nowych projektach, ale jak na razie nie widziałem jeszcze pięknego kodu który nie wymagałby refactoru(oprócz tego który napisałem ja, i nie dalej niż 2 tygodnie wcześniej)",
            "About me paragraph, ending": "TLDR; W skrócie, jestem programistą frontendowym."
        },
        common: {
            and: "i"
        },
        dates: {
            months1: "miesiąc",
            months2: "miesiące",
            months3: "miesiące",
            months4: "miesiące",
            months5: "miesiący",
            months6: "miesiący",
            months7: "miesiący",
            months8: "miesiący",
            months9: "miesiący",
            months10: "miesiący",
            months11: "miesiący",
            months12: "miesiący",
            years1: "rok",
            years2: "lata",
            years3: "lata",
            years4: "lata",
            years5: "lat",
            years6: "lat",
            years7: "lat",
            years8: "lat",
            years9: "lat",
            years10: "lat",
            years11: "lat",
            years12: "lat",
            years13: "lat",
            years14: "lat",
        }
    }
};
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "pl",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;
