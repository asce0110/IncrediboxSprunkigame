declare module 'react-slick' {
  import React from 'react'
  
  export interface Settings {
    dots?: boolean
    infinite?: boolean
    speed?: number
    slidesToShow?: number
    slidesToScroll?: number
    nextArrow?: React.ReactElement
    prevArrow?: React.ReactElement
    responsive?: Array<{
      breakpoint: number
      settings: Settings
    }>
  }

  export default class Slider extends React.Component<{
    children?: React.ReactNode
  } & Settings> {}
} 