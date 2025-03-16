import classNames from "classnames/bind";
import styles from "./AcountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/10/1200-x-630-11.jpg" alt="hoa"></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span >Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )
}

export default AcountItem