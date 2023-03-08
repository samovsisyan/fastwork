import React, {ButtonHTMLAttributes, FC} from 'react';
import Button from 'react-bootstrap/Button';
import './index.scss'

interface Interface {
  onClick: () => void
  href: string
  cls: string
  btnIcon: string
  btnLeftIcon: string
  iconStyle: string
  disabled: boolean
}

type ButtonType = Interface & ButtonHTMLAttributes<unknown>;

const SuccessButton: FC<Partial<ButtonType>> = (props) => {
  const {
    title,
    onClick,
    href,
    type,
    cls,
    btnIcon,
    btnLeftIcon,
    iconStyle,
    disabled = false
  } = props

  const _click = () => {
    if (href) {
      window.location.href = href
      return false
    }

    onClick && onClick()
  }

  return (
    <Button className={cls} onClick={_click} type={type} disabled={disabled} >
      {btnLeftIcon && <img src={btnLeftIcon} className={iconStyle} alt=''/>}
      {title && <span> {title} </span>}
      {btnIcon && <img src={btnIcon} className={iconStyle} alt=''/>}
    </Button>
  );
};

//
// const CancelButton = (props) => {
//   const { title, onClick, href, ml, cls } = props
//   const _click = () => {
//     if (href) {
//       window.location.href = href
//       return false
//     }
//
//     onClick && onClick()
//   }
//
//   return (
//     <Button className={cls} style={{ marginLeft: ml }} onClick={_click} {...props}>{title}</Button>
//   )
// }
//
// const VewButton = ({
//                      title,
//                      statusBg,
//                      type,
//                      btnIcon,
//                      iconStyle,
//                      cls
//                    }) => {
//   return (
//     <Button className={`btn-${type} ${cls}`} style={{ backgroundColor: statusBg }}>
//       {title && <span> {title} </span>}
//       {btnIcon && <img src={btnIcon} className={iconStyle} alt=''/>}
//     </Button>
//   )
// }

export {
  SuccessButton,
  // CancelButton,
  // VewButton
}

