import React from "react"
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

export const Heading = ({ title }) => {
  return (
    <>
      <h2 className='heading' data-aos='zoom-in-down'>
        {title}
      </h2>
    </>
  )
}
export default Heading;