import React from 'react'

const Icon = ({ name }: { name: string }) => (
  <span className={`glyphicon glyphicon-${name}`} />
)

export default Icon
