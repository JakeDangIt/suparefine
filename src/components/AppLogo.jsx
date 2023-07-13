import React from 'react'

export default function logo() {
  const styles = {
    logo: {
      color: '#000',
      fontFamily: 'Kumbh Sans',
      fontSize: '2rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
    }
  }
  return (
    <div style={styles.logo}>RecipeBook</div>
  )
}
