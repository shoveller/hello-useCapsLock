import { useCapsLock } from "components/useCapsLock"
import React, {
  CSSProperties,

  PropsWithChildren
} from 'react'
import caps from './caps.png'

export interface IPasswordProps {
}

const commonStyle: CSSProperties = {
  paddingRight: '1.5rem',
  // width: '10rem'
}

const style: CSSProperties = {
  ...commonStyle,
  backgroundImage: `url(${caps})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right",
}

export const Password = (props: PropsWithChildren<IPasswordProps>) => {
  const isCapsLock = useCapsLock()

  return <input style={isCapsLock ? style : commonStyle} type="password"/>
}
