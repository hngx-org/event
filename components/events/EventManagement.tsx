import { EventMagementProps } from '@/@types'
import React from 'react'

const EventManagement = (props: EventMagementProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default EventManagement