import React from 'react'
import { CoreConcept } from './CoreConcepts'
import { CORE_CONCEPTS } from '../data'

export const CoreConceptss = () => {
  return (
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  </section>
  )
}
