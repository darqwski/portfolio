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
                    Dariusz Cabała - Portfolio/CV
                </div>
                <div className="section-sublinks">
                    <a href="#projects">Projekty</a>
                    <a href="#experience">Doświadczenie</a>
                    <a href="#skills">Umiejętności</a>
                    <a href="#about">O mnie</a>
                    <a href="#contact">Kontakt</a>
                </div>
            </div>
            <div className="portfolio">
                <div className="section-title blue darken-3">
                    <a name="projects" className="white-text">Ogólnie</a>
                </div>
                <div className="porfolio-projects container card">
                    <p> Nie za bardzo wiem co napisać na samym początku i pewnie z tego powodu wciąż jestem w tym miejscu życia co jestem.
                        Ogólnie to jestem programistą który wykonuje kilka własnych projektów, których nikt nigdy nie używał (oprócz osób testujących). </p>
                    <p> Poza programowaniem nie mam większych zainteresowań. Mam psa, wciąż studiuje (maj 2021) i został mi jeszcze rok magisterki.
                        Lubię grać w Fifę i Minecrafta, uwielbiam klocki Lego, umiem układać kostkę rubika 3x3x3 i 5x5x5. Chcę zobaczyć jeszcze dużo miejsc na świecie(Moskwa, Bajkał, Nowa Zelandia)</p>
                    <p>Z tego mieszka</p>
                    <p> Od początku utworzenia stronę wyświetlono <strong>{10000+Number(visits)} razy*</strong></p>
                </div>
                <div className="section-title blue darken-3">
                    <a name="projects" className="white-text">Projekty</a>
                </div>
                <div className="porfolio-projects container card">
                    <p>Poniżej przedstawione są projekty wykonane w czasie wolnym lub na zaliczenie. Kodu komercyjnego nie można pokazać ponieważ jest to wartość oddana firmie.</p>
                    <div className="project-container">
                        <h3>QuizGroup</h3>
                        <p>Aplikacja służąca do tworzenia, udostępniania i rozwiązywania quizow. Całość zawiera zarządzanie quizami, użytkownika oraz zbieranie informacji na temat najczęściej wybranych opcji. Quizy mogą mieć dowolną tematykę i przeznaczenie. Informacje o udzielonych odpowiedziach mogą być w pełni anonimowe lub nie w zależności od wyboru użytkownika. Projekt zawiera same dane testowe, ale można się samemu zarejestrować, zrobić kilka quizów i porozsyłać do znajomych do wykonania</p>
                        <Gallery images={quizGroupPhotos} />
                        <p className="flex">
                            <ImageLink link={quizGroupGitLink} name="QuizGroup" color="black" />
                            <ImageLink link="quiz-group" icon="link" name="QuizGroup" />
                        </p>
                    </div>
                    <div>
                        <div className="project-container">
                            <h3>BucketList</h3>
                            <p>Aplikacja jest zwyczajnym blogiem-pamiętnikiem, jednak napisanym od podstaw z właśnym kreatorem stron. Dodatkowo zawiera również zarządzanie artykulami czy stronami informacyjnymi. Ogólnie w planach jest zrobienie jeszcze prezentacji oglądalności strony jak ktoś na nią w końcu wejdzie</p>
                        </div>
                        <Gallery images={bucketListPhotos} />
                        <p className="flex">
                            <ImageLink link={bucketListGitLink} name="BucketList" color="black" />
                            <ImageLink link="bucket-list" icon="link" name="BucketList" />
                        </p>
                    </div>
                </div>
                <div className="section-title blue darken-3 white-text">
                    <a name="experience" className="white-text">Doświadczenie + Edukacja</a>
                </div>
                <div className="porfolio-lifetime container card">
                    <h5>Połączenie pracy i studiów</h5>
                    <p>Cieżko wytłumaczyć co robiłem od 2017 roku więc tutaj znajduje się przyjemny timeline, problem w opisie polega na tym że sporo okresów czasu na siebie nachodzi stąd, chciałem zaznaczyć występowanie sytuacji 2 etatów + studia w jeszcze niepandemicznej rzewistości</p>
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
                                <td rowSpan={2} className="blue darken-4 white-text">Studia inżynierskie - PK</td>
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
                                    <p> głównie React </p>
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
                                <td className="blue darken-4 white-text">Obrona inżynierki <br/>Początek magisterki</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5>Sumaryczne doświadczenie</h5>
                    <p> W zależności od tego jak bierzemy doświadczenie to mam albo <strong>{sumDate}</strong>, jeżeli liczymy równoległe pracę osobno albo <strong>{sumMultiplication}</strong> jeżeli liczymy przepracowane lata</p>
                </div>
                <div className="section-title blue darken-3 white-text">
                    <a name="skills" className="white-text">
                        Języki programowania/Frameworki
                    </a>
                </div>
                <div className="porfolio-languages container card">
                    <p>Tą sekcję należy podzielić na trzy części</p>
                    <div className="flex">
                        <div>
                            <h5>Dla rekruterów</h5>
                            <p>Kilkuletnie doświadczenie w takich technologiach jak <strong>React</strong>, <strong>Vue</strong> i <strong>Javascript</strong></p>
                            <p>Dobre umiejętności w <strong>PHP</strong>, <strong>Node.js</strong> i <strong>SQL</strong></p>
                            <p>Znajomość Java, Android, C#</p>
                        </div>
                        <div>
                            <h5>Dla programistów</h5>
                            <p>Tworzenie aplikacji Reactowych od początku do końca</p>
                            <p>Tworzenie aplikacji Vue od początku do końca</p>
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
                        <FormInput label="Twój nickname" name="username" />
                        <FormTextarea label="Pytanie" name="question" />
                        <button type="submit" className="btn btn-large blue">Wyślij</button>
                    </form>
                    <p> * - Do prawdziwej ilości dodano 10000, żeby wyglądało poważniej</p>
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
