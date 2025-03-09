import {Text, TextArea} from '@gravity-ui/uikit';
import {ChangeEvent, useEffect, useState} from 'react';
import styles from '../app.module.scss';
import Editor from '../Editor';

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
            'question16',
            'question17',
            'question18',
            'question19',
            'question20',
            'question21',
            'question22',
            'question23',
            'question24',
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
            <img className={styles.soilImage} src="./soil/1.jpg" />
            <div className={styles.textWrapper}>
                <Text variant="body-2">
                    Когда же собралось множество народа, и из всех городов жители сходились к Нему,
                    Он начал говорить притчею: 5 вышел сеятель сеять семя своё, и когда он сеял...
                </Text>
                <Text variant="subheader-2">Луки 8:4-5 (а)</Text>
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">К кому Иисус говорит притчу?</Text>
                <TextArea
                    size="xl"
                    value={values.question1 || ''}
                    onChange={handleChange('question1')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Куда сеятель сеит свои семена?</Text>
                <TextArea
                    size="xl"
                    value={values.question2 || ''}
                    onChange={handleChange('question2')}
                />
            </div>
            <img className={styles.soilImage} src="./soil/2.jpg" />
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Куда упало первое семя?</Text>
                <TextArea
                    size="xl"
                    value={values.question3 || ''}
                    onChange={handleChange('question3')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Что с ним случилось?</Text>
                <TextArea
                    size="xl"
                    value={values.question4 || ''}
                    onChange={handleChange('question4')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">
                    Как по вашему какая основная прблематика этой почвы?
                </Text>
                <TextArea
                    size="xl"
                    value={values.question5 || ''}
                    onChange={handleChange('question5')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">
                    Какое по вашему мнению решение этой проблематики? (т.е что нужно предпринять
                    чтобы семя не погибло или не было похищено?)
                </Text>
                <TextArea
                    size="xl"
                    value={values.question6 || ''}
                    onChange={handleChange('question6')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Какой результат принесло бы сохраненое семя?</Text>
                <TextArea
                    size="xl"
                    value={values.question7 || ''}
                    onChange={handleChange('question7')}
                />
            </div>
            <img className={styles.soilImage} src="./soil/3.jpg" />
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Куда упало второе семя?</Text>
                <TextArea
                    size="xl"
                    value={values.question8 || ''}
                    onChange={handleChange('question8')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Как эта почва принимает Слово?</Text>
                <TextArea
                    size="xl"
                    value={values.question9 || ''}
                    onChange={handleChange('question9')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">
                    Как по вашему какая основная прблематика этой почвы?
                </Text>
                <TextArea
                    size="xl"
                    value={values.question10 || ''}
                    onChange={handleChange('question10')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">
                    Какое по вашему мнению решение этой проблематики? (т.е что нужно предпринять
                    чтобы семя не погибло?)
                </Text>
                <TextArea
                    size="xl"
                    value={values.question11 || ''}
                    onChange={handleChange('question11')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">
                    В какое время можно увидеть результат этого посеянного семени? (т.е в какой
                    момент видно, что плодом и не пахнет)
                </Text>
                <TextArea
                    size="xl"
                    value={values.question12 || ''}
                    onChange={handleChange('question12')}
                />
            </div>
            <img className={styles.soilImage} src="./soil/4.jpg" />
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Куда упало третье семя?</Text>
                <TextArea
                    size="xl"
                    value={values.question13 || ''}
                    onChange={handleChange('question13')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Что с ним случилось?</Text>
                <TextArea
                    size="xl"
                    value={values.question14 || ''}
                    onChange={handleChange('question14')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Что выросло на этой почве?</Text>
                <TextArea
                    size="xl"
                    value={values.question15 || ''}
                    onChange={handleChange('question15')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Что является "терновник" в толковании Иисуса?</Text>
                <TextArea
                    size="xl"
                    value={values.question15 || ''}
                    onChange={handleChange('question16')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">
                    Какое по вашему мнению решение этой проблематики? (т.е что нужно предпринять
                    чтобы семя не погибло?)
                </Text>
                <TextArea
                    size="xl"
                    value={values.question17 || ''}
                    onChange={handleChange('question17')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Если бы семя сохранилось какой был бы результат?</Text>
                <TextArea
                    size="xl"
                    value={values.question18 || ''}
                    onChange={handleChange('question18')}
                />
            </div>
            <img className={styles.soilImage} src="./soil/5.jpg" />
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Куда упало четвертое семя?</Text>
                <TextArea
                    size="xl"
                    value={values.question19 || ''}
                    onChange={handleChange('question19')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Что на этой почве делают со Словом</Text>
                <TextArea
                    size="xl"
                    value={values.question20 || ''}
                    onChange={handleChange('question20')}
                />
            </div>
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">Какой результат приносит эта почва?</Text>
                <TextArea
                    size="xl"
                    value={values.question21 || ''}
                    onChange={handleChange('question21')}
                />
            </div>
            <img className={styles.soilImage} src="./soil/6.jpg" />
            <div className={styles.inputWrapper}>
                <Text variant="subheader-3">На какой из почв были слушающие?</Text>
                <TextArea
                    size="xl"
                    value={values.question22 || ''}
                    onChange={handleChange('question22')}
                />
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
