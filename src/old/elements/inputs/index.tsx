import React, {ChangeEvent, FC, SetStateAction, useEffect, useState} from 'react'
import { Form } from 'react-bootstrap'
import './index.css'

interface Interface {
  placeholder: string
  onChange: (e: ChangeEvent) => void
  ml: string
  size: string
  labelTitle: string
  height: string
  value: SetStateAction<string>
  readOnly: boolean
  required: string
  name: string
  error: boolean | undefined
  type: string
  iconSrc: string
  labelStyle: string
  cls: string
  disabled: boolean | undefined
  as:  React.ElementType<any> | undefined
  tooltipText: string
  onFocus: () => void
}

const Input: FC<Partial<Interface>> = (props) => {
  const {
    placeholder,
    onChange,
    ml,
    size,
    labelTitle,
    height,
    value,
    readOnly,
    required,
    name,
    error,
    type,
    iconSrc,
    labelStyle,
    cls,
    disabled,
    as,
    tooltipText,
    onFocus
  } = props
  const [dValue, setDevalue] = useState('')

  useEffect(() => {
    value && setDevalue(value)
  }, [value])

  return (
    <Form.Group
      className={`input ${cls}`}
      style={{
        marginLeft: ml,
        height: height,
        width: size
      }}>
      {labelTitle && <Form.Label className={`${labelStyle}`}>{labelTitle}</Form.Label>}

      {iconSrc &&
        <>
          <img src={iconSrc} alt="" className='' data-rh={tooltipText}/>
        </>
      }
      <Form.Control
        className={disabled ? 'disabled-field' : ''}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setDevalue(e.target.value)
          onChange && onChange(e)
        }}
        readOnly={readOnly}
        value={dValue || ''}
        required={required}
        isValid={!error}
        name={name}
        isInvalid={error}
        disabled={disabled}
        as={as}
        onFocus={onFocus}
      />
      {!!error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </Form.Group>
  )
}



export {
  Input
}
