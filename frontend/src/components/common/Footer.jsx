import React from "react"
import { social } from "../data/datas"
import { getCurrentUsername } from "../../services/api"; 

const username = getCurrentUsername();

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Resceved 2025</p>
      </footer>
    </>
  )
}

export default Footer
