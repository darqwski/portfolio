import React from 'react';
import './css/index.less';
import AppManager from '@/context/app-manager';
import ModalManager from '@/context/modal-manager';
import SnackBarManager from '@/context/snackbar-manager';
import './i18n';
import {useTranslation} from "react-i18next";
import {createUseStyles} from "react-jss";
import Gallery from "@/components/gallery";
import GitLink from "@/components/git-link";
import ImageLink from "@/components/git-link";
import {useAppContext} from "@/context/app-manager/context";
import FormDataManager from "@/context/form-data-manager";
import {FormInput} from "@/components/forms";
import FormTextarea from "@/components/forms/form-textarea";
/**
 * React Architecture
 * This main AppComponent is created main for adding global contexts f.e. Modal, Snackbar or Cookies management
 */

interface IApp {
    appData: unknown;
}

const useStyles = createUseStyles({

})

const useMonthYear = (monthNumber: number) => {
    const {t } = useTranslation(['dates','common'])
    const years = parseInt(`${monthNumber/12}`);
    const months = monthNumber%12
    if( years === 0){
        if(months === 0) {
            return "Just started!";
        }
        return `${months} ${t(`months${months}`)}`
    }
    return `${years} ${t(`years${years}`)} ${t('common:and')} ${months === 0 ? '' : `${months} ${t(`months${months}`)}`}`
}

const GLStartDate = new Date(2019, 0,15);
const GAStartDate = new Date(2018, 5,1);
const ShoperStartDate = new Date(2020, 8,1);
const quizGroupPhotos = [
    "project-images/QuizGroup1.png",
    "project-images/QuizGroup2.png",
    "project-images/QuizGroup3.png",
    "project-images/QuizGroup4.png",
]
const bucketListPhotos = [
    "project-images/BucketList1.png",
    "project-images/BucketList2.png",
    "project-images/BucketList3.png",
    "project-images/BucketList4.png",
    "project-images/BucketList5.png",
]
const quizGroupGitLink = 'https://github.com/darqwski/quiz-group'
const bucketListGitLink = 'https://github.com/darqwski/bucket-list'

const currentDate = new Date();
const App: React.FC = () => {
    const {t , i18n} = useTranslation('translation')
    const classes = useStyles()
    const experienceSum = parseInt((`${((currentDate.getTime() - GLStartDate.getTime()) + (currentDate.getTime() - GAStartDate.getTime()))/(1000*3600*24*30)}`));
    const experienceMultiplication = parseInt(`${(currentDate.getTime() - GAStartDate.getTime())/(1000*3600*24*30)}`);
    const sumDate = useMonthYear(experienceSum);
    const sumMultiplication = useMonthYear(experienceMultiplication);
    const { appData: { visits, questions } } = useAppContext()
    return (
        <>
            <div className="nav-bar blue darken-4">
                <div className="section-logo white-text">
                    Dariusz Caba??a - Portfolio/CV
                </div>
                <div className="section-sublinks">
                    <a href="#projects">Projekty</a>
                    <a href="#experience">Do??wiadczenie</a>
                    <a href="#skills">Umiej??tno??ci</a>
                    <a href="#about">O mnie</a>
                    <a href="#contact">Kontakt</a>
                </div>
            </div>
            <div className="portfolio">
                <div className="section-title blue darken-3">
                    <a name="projects" className="white-text">Og??lnie</a>
                </div>
                <div className="porfolio-projects container card">
                    <p> Nie za bardzo wiem co napisa?? na samym pocz??tku i pewnie z tego powodu wci???? jestem w tym miejscu ??ycia co jestem.
                        Og??lnie to jestem programist?? kt??ry wykonuje kilka w??asnych projekt??w, kt??rych nikt nigdy nie u??ywa?? (opr??cz os??b testuj??cych). </p>
                    <p> Poza programowaniem nie mam wi??kszych zainteresowa??. Mam psa, wci???? studiuje (maj 2021) i zosta?? mi jeszcze rok magisterki.
                        Lubi?? gra?? w Fif?? i Minecrafta, uwielbiam klocki Lego, umiem uk??ada?? kostk?? rubika 3x3x3 i 5x5x5. Chc?? zobaczy?? jeszcze du??o miejsc na ??wiecie(Moskwa, Bajka??, Nowa Zelandia)</p>
                    <p>Z tego mieszka</p>
                    <p> Od pocz??tku utworzenia stron?? wy??wietlono <strong>{10000+Number(visits)} razy*</strong></p>
                </div>
                <div className="section-title blue darken-3">
                    <a name="projects" className="white-text">Projekty</a>
                </div>
                <div className="porfolio-projects container card">
                    <p>Poni??ej przedstawione s?? projekty wykonane w czasie wolnym lub na zaliczenie. Kodu komercyjnego nie mo??na pokaza?? poniewa?? jest to warto???? oddana firmie.</p>
                    <div className="project-container">
                        <h3>QuizGroup</h3>
                        <p>Aplikacja s??u????ca do tworzenia, udost??pniania i rozwi??zywania quizow. Ca??o???? zawiera zarz??dzanie quizami, u??ytkownika oraz zbieranie informacji na temat najcz????ciej wybranych opcji. Quizy mog?? mie?? dowoln?? tematyk?? i przeznaczenie. Informacje o udzielonych odpowiedziach mog?? by?? w pe??ni anonimowe lub nie w zale??no??ci od wyboru u??ytkownika. Projekt zawiera same dane testowe, ale mo??na si?? samemu zarejestrowa??, zrobi?? kilka quiz??w i porozsy??a?? do znajomych do wykonania</p>
                        <Gallery images={quizGroupPhotos} />
                        <p className="flex">
                            <ImageLink link={quizGroupGitLink} name="QuizGroup" color="black" />
                            <ImageLink link="quiz-group" icon="link" name="QuizGroup" />
                        </p>
                    </div>
                    <div>
                        <div className="project-container">
                            <h3>BucketList</h3>
                            <p>Aplikacja jest zwyczajnym blogiem-pami??tnikiem, jednak napisanym od podstaw z w??a??nym kreatorem stron. Dodatkowo zawiera r??wnie?? zarz??dzanie artykulami czy stronami informacyjnymi. Og??lnie w planach jest zrobienie jeszcze prezentacji ogl??dalno??ci strony jak kto?? na ni?? w ko??cu wejdzie</p>
                        </div>
                        <Gallery images={bucketListPhotos} />
                        <p className="flex">
                            <ImageLink link={bucketListGitLink} name="BucketList" color="black" />
                            <ImageLink link="bucket-list" icon="link" name="BucketList" />
                        </p>
                    </div>
                </div>
                <div className="section-title blue darken-3 white-text">
                    <a name="experience" className="white-text">Do??wiadczenie + Edukacja</a>
                </div>
                <div className="porfolio-lifetime container card">
                    <h5>Po????czenie pracy i studi??w</h5>
                    <p>Cie??ko wyt??umaczy?? co robi??em od 2017 roku wi??c tutaj znajduje si?? przyjemny timeline, problem w opisie polega na tym ??e sporo okres??w czasu na siebie nachodzi st??d, chcia??em zaznaczy?? wyst??powanie sytuacji 2 etat??w + studia w jeszcze niepandemicznej rzewisto??ci</p>
                    <div className="experience-container">
                        <table className="table" >
                            <thead>
                            <th>Czas</th>
                            <th>Edukacja</th>
                            <th>Praca 1</th>
                            <th>Praca 2</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2017 X</td>
                                <td rowSpan={2} className="blue darken-4 white-text">Studia in??ynierskie - PK</td>
                                <td/>
                                <td rowSpan={3}/>
                            </tr>
                            <tr>
                                <td>2018 V</td>
                                <td rowSpan={8} className="grey darken-4 white-text">
                                    General Automatic
                                    <p>jako Programista Mobile/Web/Embedded</p>
                                </td>
                            </tr>
                            <tr>
                                <td>2018 X</td>
                                <td rowSpan={1} className="light-green lighten-2 "> Sekcja Android</td>
                            </tr>
                            <tr>
                                <td>2019 I</td>
                                <td rowSpan={1} className="blue darken-4 white-text">Studia CD.</td>
                                <td rowSpan={4} className="orange darken-2 white-text">
                                    Global logic
                                    <p>jako Junior Frontend Developer</p>
                                    <p> g????wnie React </p>
                                </td>
                            </tr>
                            <tr>
                                <td>2019 III</td>
                                <td className="black white-text">Hackaton - SheepYeah</td>
                            </tr>
                            <tr>
                                <td>2019 XI</td>
                                <td className="black orange-text">Hackaton - HackYeah A11Y</td>
                            </tr>
                            <tr>
                                <td> --- </td>
                                <td rowSpan={2} className="blue darken-4 white-text"> Studia CD.</td>
                            </tr>
                            <tr>
                                <td>2020 IX</td>
                                <td rowSpan={2} className="indigo darken-2 white-text">
                                    Shoper
                                    <p> Vue, React, VanillaJS (Bezframeworkowy) </p>
                                </td>
                            </tr>
                            <tr>
                                <td>2021 II</td>
                                <td className="blue darken-4 white-text">Obrona in??ynierki <br/>Pocz??tek magisterki</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5>Sumaryczne do??wiadczenie</h5>
                    <p> W zale??no??ci od tego jak bierzemy do??wiadczenie to mam albo <strong>{sumDate}</strong>, je??eli liczymy r??wnoleg??e prac?? osobno albo <strong>{sumMultiplication}</strong> je??eli liczymy przepracowane lata</p>
                </div>
                <div className="section-title blue darken-3 white-text">
                    <a name="skills" className="white-text">
                        J??zyki programowania/Frameworki
                    </a>
                </div>
                <div className="porfolio-languages container card">
                    <p>T?? sekcj?? nale??y podzieli?? na trzy cz????ci</p>
                    <div className="flex">
                        <div>
                            <h5>Dla rekruter??w</h5>
                            <p>Kilkuletnie do??wiadczenie w takich technologiach jak <strong>React</strong>, <strong>Vue</strong> i <strong>Javascript</strong></p>
                            <p>Dobre umiej??tno??ci w <strong>PHP</strong>, <strong>Node.js</strong> i <strong>SQL</strong></p>
                            <p>Znajomo???? Java, Android, C#</p>
                        </div>
                        <div>
                            <h5>Dla programist??w</h5>
                            <p>Tworzenie aplikacji Reactowych od pocz??tku do ko??ca</p>
                            <p>Tworzenie aplikacji Vue od pocz??tku do ko??ca</p>
                            <p>Refactor Vanilla =&gt; React, Vanilla =&gt; Vue oraz synchronizacja technologii</p>
                            <p>Tworzenie bibliotek przy pomocy rollup'a</p>
                            <p>Hooki, Typescript, ContextAPI, Redux, Webpack, i18n, a11y</p>
                        </div>
                        <div>
                            <h5>Dla normalnych ludzi</h5>
                            <p>Pisanie i kolorowanie stron internetowych</p>
                        </div>
                    </div>
                </div>
                <div className="section-title blue darken-3 white-text">
                    <a name="about" className="white-text">
                        O mnie
                    </a>
                </div>
                <div className="porfolio-about container card">
                    <h6>{t('About me paragraph, ending')}</h6>

                    <p>{t('About me paragraph')}</p>
                    <img src="project-images/woodstock_image.jpeg" style={{maxWidth: '100%'}} /></div>

                <div className="section-title blue darken-3 white-text">
                    <a name="contact">Pytania?</a>
                </div>
                <div className="container card">
                    <form method="POST">
                        <FormInput label="Tw??j nickname" name="username" />
                        <FormTextarea label="Pytanie" name="question" />
                        <button type="submit" className="btn btn-large blue">Wy??lij</button>
                    </form>
                    <p> * - Do prawdziwej ilo??ci dodano 10000, ??eby wygl??da??o powa??niej</p>
                </div>

            </div>
        </>
    );
};

const AppWithContext: React.FC<IApp> = ({ appData }) => {
    return (
        <AppManager appData={appData}>
            <ModalManager>
                <SnackBarManager>
                    <FormDataManager initialData={{}}>
                        <App />
                    </FormDataManager>
                </SnackBarManager>
            </ModalManager>
        </AppManager>
    )
}
export default AppWithContext;
