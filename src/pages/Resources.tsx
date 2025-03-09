import {Button, Text} from '@gravity-ui/uikit';
import styles from './resources.module.scss';
import appStyles from '../app.module.scss';

export const Resources = () => {
    return (
        <>
            <img className={appStyles.soilImage} src="./soil/screenPreview.png" alt="" />
            <div className={styles.wrapper}>
                <div className={styles.buttons}>
                    <Button href="./soil/screen-1.jpg" download view="action">
                        Скачать 1
                    </Button>
                    <Button href="./soil/screen-2.jpg" download view="action">
                        Скачать 2
                    </Button>
                    <Button href="./soil/screen-3.jpg" download view="action">
                        Скачать 3
                    </Button>
                </div>
                <Text variant="header-1" className={styles.heading}>
                    Ссылка на песню
                </Text>
                <div className={styles.buttons}>
                    <Button href="https://youtu.be/_q8YtnAqjvY?si=7lpi5gTKOCycM0BL" view="action">
                        YouTube
                    </Button>
                    <Button href="https://vk.com/audio474499140_456551057" view="action">
                        ВК
                    </Button>
                    <Button
                        href="https://music.yandex.ru/album/15267708/track/82033768?utm_medium=copy_link"
                        view="action"
                    >
                        Яндекс музыка
                    </Button>
                </div>
                <Text variant="header-1" className={styles.heading}>
                    Челендж
                </Text>
                <div className={styles.buttons}>
                    <Button href="https://t.me/+i-cz0YoDuJs0ODAy" view="action">
                        Telegram
                    </Button>
                </div>
            </div>
        </>
    );
};
