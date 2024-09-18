import React from 'react'

export default function Button({name, variant}) {
  return (
    <button className={`${variant} rounded-xl font-semibold `}>{name}</button>
  )
}
