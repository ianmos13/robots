"use client";

import styles from './MenuButton.module.scss';
import {Squash as Hamburger} from "hamburger-react";
import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";

export default function MenuButton({ isOpen, setOpen }) {
    const [isMouseLeaved, setIsMouseLeaved] = useState(true);
    const [isMobileScreen, setIsMobileScreen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    useEffect(() => {
        setIsMobileScreen(isMobile)
    }, [isMobile]);

    return (
        <div className={styles.container}
             onMouseEnter={() => setIsMouseLeaved(false)}
             onMouseLeave={() => setIsMouseLeaved(true)}
             onClick={setOpen}
        >
            <div className={styles.buttonContainer}>
                <div className={styles.buttonBody}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageHamburger}>
                            <Hamburger
                                color={isMouseLeaved ? '#0149bf' : '#FFFFFF'}
                                toggled={isOpen}
                                distance={isMobileScreen ? 'md' : 'lg'}
                                size={isMobileScreen ? 10 : 14}
                                toggle={setOpen}
                            />
                        </div>
                    </div>
                    <span className={styles.text}>
                        Меню
                    </span>
                </div>
            </div>
        </div>
    );
}
