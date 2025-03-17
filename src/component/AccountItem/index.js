import classNames from "classnames/bind";
import styles from "./AcountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function AcountItem({ user }) {
    return (
        <Link to={`/@${user.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.avatar} alt={user.nickname}></Image>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span >{user.full_name}</span>
                    {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{user.nickname}</span>
            </div>
        </Link>
    )
}

export default AcountItem