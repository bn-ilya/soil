import {Text, TextArea} from '@gravity-ui/uikit';
import {ChangeEvent, useEffect, useState} from 'react';
import Editor from '../Editor';
import styles from '../app.module.scss';

// eslint-disable-next-line complexity
export const Main = () => {
    // Создаем состояние для каждого TextArea
    const [values, setValues] = useState<{[key: string]: string}>({});

    // Функция для обработки изменений в TextArea
    const handleChange = (key: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setValues((prevValues) => ({
            ...prevValues,
            [key]: newValue,
        }));
        localStorage.setItem(key, newValue);
    };

    // Загружаем сохраненные значения из localStorage при монтировании компонента
    useEffect(() => {
        const savedValues: {[key: string]: string} = {};
        const keys = [
            'question1',
            'question2',
            'question3',
            'question4',
            'question5',
            'question6',
            'question7',
            'question8',
            'question9',
            'question10',
            'question11',
            'question12',
            'question13',
            'question14',
            'question15',
        ];
        keys.forEach((key) => {
            const savedValue = localStorage.getItem(key);
            if (savedValue) {
                savedValues[key] = savedValue;
            }
        });
        setValues(savedValues);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="header-2">Чтобы приехать на конференцию РАЗОГРЕТЫМ:</Text>
                    <Text variant="subheader-3">
                        1. Внимательно изучите предложенный сегмент текста из Евангелия от Луки.
                    </Text>
                    <Text variant="subheader-3">
                        2. Обратите внимание на предложенные выделения слов и фраз, чтобы проследить
                        взаимосвязи и акценты.
                    </Text>
                    <Text variant="subheader-3">3. Ответьте на предложенные вопросы.</Text>
                </div>
            </div>
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="header-2">📖 Лук 13:22-14:35.</Text>

                    <Text variant="subheader-3">
                        Абзац - 1. УЗКАЯ ДВЕРЬ, в которую не смогут войти ...
                    </Text>
                    <Text variant="body-2">
                        <b>13:22</b> И проходил по городам и селениям, уча и направляя путь к
                        Иерусалиму. 23 Некто сказал Ему: Господи! неужели МАЛО спасаемых? Он же
                        сказал им:
                    </Text>
                    <Text variant="body-2">
                        24 ПОДВИЗАЙТЕСЬ войти сквозь <b className={styles.redText}>узкие двери</b>,
                        ибо, сказываю вам, МНОГИЕ поищут войти, и{' '}
                        <span className={styles.yellowBackgroud}>не возмогут</span>. 25 Когда хозяин
                        дома встанет и <b className={styles.redText}>затворит двери</b>, тогда вы,
                        стоя
                        <b> ВНЕ</b>🔥 , станете <b className={styles.redText}>стучать в двери</b> и
                        говорить: «Господи! Господи! отвори нам»; но Он скажет вам в ответ:{' '}
                        <b>«не знаю вас, откуда вы»</b>. 26 Тогда станете говорить:{' '}
                        <u>«мы ели и пили пред Тобою, и на улицах наших учил Ты»</u>. 27 Но Он
                        скажет: «говорю вам:{' '}
                        <b>не знаю вас, откуда вы; отойдите от Меня все делатели неправды</b>». 28
                        Там будет плач и скрежет зубов, когда увидите Авраама, Исаака и Иакова и
                        всех
                        <span className={styles.blueText}> пророков</span> в Царствии Божием, а себя
                        изгоняемыми <b>ВОН</b>🔥 . 29 И придут от востока и запада, и севера и юга,
                        и возлягут в Царствии Божием.
                        <span className={styles.blackBackgroud}>⚡</span> 30 И вот, есть{' '}
                        <span className={styles.redBackgroud}>последние</span>, которые будут{' '}
                        <span className={styles.redBackgroud}>первыми</span>, и есть{' '}
                        <span className={styles.redBackgroud}>первые</span>, которые будут{' '}
                        <span className={styles.redBackgroud}>последними</span>.
                    </Text>
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        1. Чем, исходя из этого отрывка, является УЗКАЯ ДВЕРЬ, через которую
                        необходимо ПОДВИЗАТЬСЯ ВОЙТИ?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question1 || ''}
                        onChange={handleChange('question1')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        2. В чем главная проблема тех МНОГИХ, которые «поищут войти и не возмогут»?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question2 || ''}
                        onChange={handleChange('question2')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">3. Какое ИМЯ они получают от Иисуса?</Text>
                    <TextArea
                        size="xl"
                        value={values.question3 || ''}
                        onChange={handleChange('question3')}
                    />
                </div>
            </div>
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="subheader-3">Абзац - 2. Птенцы, которые не захотели ...</Text>
                    <Text variant="body-2">
                        31 В тот день пришли некоторые из фарисеев и говорили Ему: выйди и удались
                        отсюда, ибо Ирод хочет убить Тебя.
                    </Text>
                    <Text variant="body-2">
                        32 И сказал им: пойдите, скажите этой лисице: се, изгоняю бесов и совершаю
                        исцеления сегодня и завтра, и в третий день кончу; 33 а впрочем, Мне должно
                        ходить сегодня, завтра и в последующий день, потому что не бывает, чтобы{' '}
                        <span className={styles.blueText}>пророк </span>
                        погиб вне Иерусалима. 34 Иерусалим! Иерусалим! избивающий{' '}
                        <span className={styles.blueText}>пророков</span> и камнями побивающий
                        посланных к тебе! сколько раз <b>ХОТЕЛ Я</b> собрать чад твоих, как птица
                        птенцов своих под крылья, и <b>ВЫ НЕ ЗАХОТЕЛИ</b>! 35 Се,{' '}
                        <b className={styles.fontSizeUp}>
                            оставляется вам дом <u>ваш</u> пуст
                        </b>
                        . Сказываю же вам, что вы не увидите Меня, пока не придет время, когда
                        скажете: «благословен Грядый во имя Господне!»
                    </Text>
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        1. Что значит фраза «сколько раз <u>хотел Я</u> собрать чад твоих, как птица
                        птенцов своих по крылья»? Что хотел сказать этим Иисус? Чего хотел Иисус?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question4 || ''}
                        onChange={handleChange('question4')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        2. Есть ли повторяющиеся «смысловые персонажи» в 1 и 2 абзацах? Каким
                        образом этот абзац продолжает мысль предыдущего?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question5 || ''}
                        onChange={handleChange('question5')}
                    />
                </div>
            </div>
            {/* Абзац 3 */}
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="subheader-3">
                        Абзац - 3. Дитя, которое не захотели спасти ...
                    </Text>
                    <Text variant="body-2">
                        <b>14:1</b> Случилось Ему в <i className={styles.purpleText}>субботу</i>{' '}
                        придти в дом одного из{' '}
                        <span className={styles.redBackgroud}>начальников</span> фарисейских вкусить
                        хлеба, и они наблюдали за Ним. 2 И вот, предстал пред Него человек,{' '}
                        <span className={styles.beigeBackgroud}>страждущий водяною болезнью</span>.
                        3 По сему случаю Иисус спросил законников и фарисеев: позволительно ли{' '}
                        <span className={styles.beigeBackgroud}>врачевать</span> в{' '}
                        <i className={styles.purpleText}>субботу?</i>
                    </Text>
                    <Text variant="body-2">
                        4 Они молчали. И, прикоснувшись,{' '}
                        <span className={styles.beigeBackgroud}>исцелил</span> его и отпустил.
                    </Text>
                    <Text variant="body-2">
                        5 При сем сказал им: <b>если у кого из вас дитя или вол</b>{' '}
                        <span className={styles.beigeBackgroud}>упадет в колодезь</span>, не тотчас
                        ли вытащит его и в <i className={styles.purpleText}>субботу</i>?
                    </Text>
                    <Text variant="body-2">
                        6 И <span className={styles.yellowBackgroud}>не могли</span> отвечать Ему на
                        это.
                    </Text>
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        1. В чем СУТЬ аргумента Иисуса, которым Он обосновывает Свои действия?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question6 || ''}
                        onChange={handleChange('question6')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        2. Есть ли повторяющиеся по смыслу персонажи в этом абзаце? Каким образом
                        этот абзац продолжает мысль 1-2 абзаца?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question7 || ''}
                        onChange={handleChange('question7')}
                    />
                </div>
            </div>
            {/* Абзац 4 */}
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="subheader-3">
                        Абзац - 4. Место, на которое не хотят садиться ...
                    </Text>
                    <Text variant="body-2">
                        7 Замечая же, как{' '}
                        <u>
                            <i>званые</i>
                        </u>{' '}
                        выбирали <span className={styles.redBackgroud}>первые места</span>, сказал
                        им притчу:
                    </Text>
                    <Text variant="body-2">
                        8 когда ты будешь{' '}
                        <u>
                            <i>позван</i>
                        </u>{' '}
                        кем на брак, не садись на{' '}
                        <span className={styles.redBackgroud}>первое место</span>, чтобы не случился
                        кто из{' '}
                        <u>
                            <i>званых</i>
                        </u>{' '}
                        им почетнее тебя, 9 и{' '}
                        <u>
                            <i>звавший</i>
                        </u>{' '}
                        тебя и его, подойдя, не сказал бы тебе: «
                        <span className={styles.redBackgroud}>уступи ему место</span>»; и тогда со
                        стыдом должен будешь занять{' '}
                        <span className={styles.redBackgroud}>последнее место</span>. 10 Но когда{' '}
                        <u>
                            <i>зван</i>
                        </u>{' '}
                        будешь, придя, садись на{' '}
                        <span className={styles.redBackgroud}>последнее место</span>, чтобы{' '}
                        <u>
                            <i>звавший</i>
                        </u>{' '}
                        тебя, подойдя, сказал: «друг! пересядь выше»; тогда будет тебе честь пред
                        сидящими с тобою, <span className={styles.blackBackgroud}>⚡</span> 11 ибо
                        всякий возвышающий САМ СЕБЯ унижен будет, а унижающий СЕБЯ возвысится.
                    </Text>
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        1. КТО должен определять ТВОЕ МЕСТО? (Или так: ЧТО должно определять твое
                        место?)
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question8 || ''}
                        onChange={handleChange('question8')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        2. Есть ли повторяющиеся по смыслу персонажи в этом абзаце? Каким образом
                        этот абзац продолжает мысль 1-2-3 абзаца?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question9 || ''}
                        onChange={handleChange('question9')}
                    />
                </div>
            </div>
            {/* Абзац 5 */}
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="subheader-3">
                        Абзац - 5. Люди, которых не хотят звать на пир ...
                    </Text>
                    <Text variant="body-2">
                        12 Сказал же и{' '}
                        <u>
                            <i>позвавшему</i>
                        </u>{' '}
                        Его:
                    </Text>
                    <Text variant="body-2">
                        когда делаешь обед или ужин, не{' '}
                        <u>
                            <i>зови</i>
                        </u>{' '}
                        друзей твоих, ни братьев твоих, ни родственников твоих, ни соседей богатых,
                        чтобы и они тебя когда не{' '}
                        <u>
                            <i>позвали</i>
                        </u>
                        , и не получил ты <span className={styles.blueBackground}>воздаяния</span>.
                        13 Но, когда делаешь пир,{' '}
                        <u>
                            <i>зови</i>
                        </u>{' '}
                        <span className={styles.lightGreenBackground}>
                            нищих, увечных, хромых, слепых
                        </span>
                        , 14 и блажен будешь, что они не могут{' '}
                        <span className={styles.blueBackground}>воздать</span> тебе, ибо{' '}
                        <span className={styles.blueBackground}>воздастся</span> тебе в воскресение
                        праведных.
                    </Text>
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        1. Какой вариант списка приглашенных является ЕСТЕСТВЕННЫМ?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question10 || ''}
                        onChange={handleChange('question10')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        2. Есть ли повторяющиеся по смыслу персонажи в этом абзаце? Каким образом
                        этот абзац продолжает мысль 1-2-3-4 абзаца?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question11 || ''}
                        onChange={handleChange('question11')}
                    />
                </div>
            </div>
            {/* Абзац 6 */}
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="subheader-3">
                        Абзац - 6. Званные, которые не захотели прийти ...
                    </Text>
                    <Text variant="body-2">
                        15 Услышав это, некто из возлежащих с Ним сказал Ему: блажен, кто вкусит
                        хлеба в Царствии Божием! Его:
                    </Text>
                    <Text variant="body-2">
                        16 Он же сказал ему: один человек сделал большой ужин и{' '}
                        <span className={styles.itelicU}>звал</span> МНОГИХ, 17 и когда наступило
                        время ужина, послал раба своего сказать{' '}
                        <span className={styles.itelicU}>званым</span>: «идите, ибо уже все готово».
                        18 И начали все, как бы сговорившись,{' '}
                        <span className={styles.orangeBackgroud}>извиняться</span>. Первый сказал
                        ему: «я купил землю, и мне нужно пойти посмотреть ее; прошу тебя,{' '}
                        <span className={styles.orangeBackgroud}>извини</span> меня». 19 Другой
                        сказал: «я купил пять пар волов и иду испытать их; прошу тебя,{' '}
                        <span className={styles.orangeBackgroud}>извини</span> меня». 20 Третий
                        сказал: «я женился и потому{' '}
                        <span className={styles.yellowBackgroud}>не могу</span> придти». 21 И,
                        возвратившись, раб тот донес о сем господину своему. Тогда,{' '}
                        <b>разгневавшись</b> 😤 , хозяин дома сказал рабу своему: «пойди скорее по
                        улицам и переулкам города и приведи сюда{' '}
                        <span className={styles.lightGreenBackground}>
                            нищих, увечных, хромых и слепых
                        </span>
                        ». 22 И сказал раб: «господин! исполнено, как приказал ты, и еще есть{' '}
                        <span className={styles.redBackgroud}>место</span>». 23 Господин сказал
                        рабу: «пойди по дорогам и изгородям и убеди придти, чтобы{' '}
                        <span className={styles.fontSizeUp}>
                            наполнился дом <u>мой</u>
                        </span>
                        . <span className={styles.blackBackgroud}>⚡</span> 24 Ибо сказываю вам, что
                        никто из тех <span className={styles.itelicU}>званых</span> не вкусит моего
                        ужина, ибо МНОГО <span className={styles.itelicU}>званых</span>, но МАЛО
                        избранных».
                    </Text>
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        1. Насколько греховными были ценности, которые вступили в конфликт с
                        приглашением на «большой ужин»?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question12 || ''}
                        onChange={handleChange('question12')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        2. Есть ли повторяющиеся по смыслу персонажи в этом абзаце? Каким образом
                        этот абзац продолжает мысль 1-2-3-4-5 абзаца?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question13 || ''}
                        onChange={handleChange('question13')}
                    />
                </div>
            </div>
            {/* Абзац 7 */}
            <div className={styles.paragraph}>
                <div className={styles.textWrapper}>
                    <Text variant="subheader-3">
                        Абзац - 7. Приходящие к ИИСУСУ, которые не смогут быть Его УЧЕНИКАМИ...
                    </Text>
                    <Text variant="body-2">
                        25 С Ним шло множество народа; и Он, обратившись, сказал им:
                    </Text>
                    <Text variant="body-2">
                        26 если кто приходит ко Мне и не возненавидит отца своего и матери, и жены и
                        детей, и братьев и сестер, а притом и самой жизни своей, тот{' '}
                        <span className={styles.yellowBackgroud}>не может</span> быть Моим{' '}
                        <span className={styles.greenBackground}>учеником</span>; 27 и кто не несет
                        креста своего и идет за Мною,{' '}
                        <span className={styles.yellowBackgroud}>не может</span> быть Моим{' '}
                        <span className={styles.greenBackground}>учеником</span>. 28 Ибо кто из вас,
                        желая построить башню, не сядет прежде и не вычислит издержек, имеет ли он,
                        что нужно для совершения ее, 29 дабы, когда положит основание и{' '}
                        <span className={styles.yellowBackgroud}>не возможет</span> совершить, все
                        видящие не стали смеяться над ним, 30 говоря: «этот человек начал строить и{' '}
                        <span className={styles.yellowBackgroud}>не мог</span> окончить». 31 Или
                        какой царь, идя на войну против другого царя, не сядет и не посоветуется
                        прежде, <span className={styles.yellowBackgroud}>силен</span> ли он с
                        десятью тысячами противостать идущему на него с двадцатью тысячами? 32
                        Иначе, пока тот еще далеко, он пошлет к нему посольство просить о мире. 33
                        Так всякий из вас, кто не отрешится от всего, что имеет,{' '}
                        <span className={styles.yellowBackgroud}>не может</span> быть Моим{' '}
                        <span className={styles.greenBackground}>учеником</span>. 34 Соль — добрая
                        вещь; но если соль потеряет{' '}
                        <span className={styles.yellowBackgroud}>силу</span>, чем исправить ее? 35
                        Ни в землю, ни в навоз не годится; <b>ВОН</b>🔥 выбрасывают ее. Кто имеет
                        уши слышать, да слышит!
                    </Text>
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        1. Насколько греховными и аморальными являются те связи - взаимоотношения,
                        которые Иисус требует возненавидеть, чтобы стать Его полноценным учеником?
                        Каким образом, рассказанные в контексте абзаца притчи, объясняют смысл
                        требования Иисуса?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question14 || ''}
                        onChange={handleChange('question14')}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Text variant="subheader-3">
                        2. Есть ли повторяющиеся по смыслу персонажи в этом абзаце? Каким образом
                        этот абзац продолжает и подитоживает мысль 1-2-3-4-5-6 абзаца?
                    </Text>
                    <TextArea
                        size="xl"
                        value={values.question15 || ''}
                        onChange={handleChange('question15')}
                    />
                </div>
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Веди здесь свой конспект ;D</Text>
                <div className={styles.editor}>
                    <Editor />
                </div>
            </div>
        </div>
    );
};
