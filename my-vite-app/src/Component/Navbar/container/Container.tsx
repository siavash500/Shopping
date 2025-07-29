import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='container overflow-visible  mx-auto'>
      {children}
    </div>
  )
}
