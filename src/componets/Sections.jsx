import React from 'react'

export const Sections = ({title , children , ...props }) => {
  return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}
