import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import Button from '~/component/Button';
import styles from './Header.module.scss'
import images from '~/assets/images';
import Menu from '~/component/Popper/Menu';
import { MessagesIcon, UpLoadIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '~/component/Layouts/Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]


const handleMenuChange = (menuItem) => {
    console.log(menuItem)
}
function Header() {
    const currentUser = true

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@nguyenvana'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/getcoins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper', ' inner')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt='LOGOTIKTOK'></img>

                <div>
                    <Search />
                </div>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UpLoadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content='Messages' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src='https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/10/1200-x-630-11.jpg'
                                className={cx('user-avata')}
                                alt='Dinh cao nghe thuat'
                                fallback="......"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )
                        }
                    </Menu>
                </div>
            </div >
        </header >
    );
}

export default Header;