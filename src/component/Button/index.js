import classNames from 'classnames/bind';
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    text,
    primary = false,
    outline = false,
    disabled,
    className,
    rounded,
    size,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disabled,
        leftIcon,
        rightIcon,
        [size]: size,
        [className]: className
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button;