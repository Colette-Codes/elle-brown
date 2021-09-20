import React, { useState } from 'react'

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from './EleventyBuild.css'

const hook = `https://api.netlify.com/build_hooks/6148d03b227ea700c966ad43`

const EleventyBuild = () => {
  const [html, setHtml] = useState('')

  const handleClick = () => {
    fetch(`${hook}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        const message = `<p>Success!</p><div><img src="https://thumbs.gfycat.com/FamousJadedJohndory-small.gif"></div>`
        setHtml({ message })
      })
      .catch((error) => {
        const message = `<p>Noooooo!!!! Something went wrong.<br/>${error}</p><div><img src="https://thumbs.gfycat.com/GlaringRevolvingArkshell-max-1mb.gif"></div>`
        setHtml({ message })
      })
  }

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick}>
        Build
      </button>
    </div>
  )
}

export default EleventyBuild
