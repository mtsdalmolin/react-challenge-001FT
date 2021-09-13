import React from 'react'

import './Button.scss'

export default function Button({ children, error, loading, ...props }) {
  return (
    <button
      className={error ? 'error' : ''}
      type="button"
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}