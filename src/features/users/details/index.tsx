import React from 'react'

type Props={
    id:string
}
export const UserDetails = ({id}:Props) => {
      console.log({ id });
  return (
    <div>UserDetails</div>
  )
}
