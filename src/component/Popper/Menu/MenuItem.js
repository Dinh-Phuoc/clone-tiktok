import Button from "~/component/Button";
import styles from './Menu.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    const classname = cx('menu-item', {
        separate: data.separate
    })
    return <Button className={classname} leftIcon={data.icon} to={data.to} onClick={onClick}>
        {data.title}
    </Button>
}

export default MenuItem;