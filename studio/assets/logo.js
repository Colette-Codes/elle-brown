import React from 'react'
import src from '../static/logo.png'

const styles = {
  width: '140px',
}

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={src} style={styles} alt="Elle Brown logo" />
  </div>
)

export default Logo
