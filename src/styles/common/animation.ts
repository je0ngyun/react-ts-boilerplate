import { keyframes } from 'styled-components'
import { Unit } from '@karibash/pixel-units'

type SlideKeyframeUnit = Unit<'px'> | Unit<'%'>

export const slideUp = (y: SlideKeyframeUnit) => keyframes`
  from {
    transform: translateY(${y});
  }
  to {
    transform: translateY(0px);
  }
`

export const slideDown = (y: SlideKeyframeUnit) => keyframes`
    0% {
        transform : translateY(0px) 
    }
    100% {
        transform : translateY(${y})
    }
`

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`
