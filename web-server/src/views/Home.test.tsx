import { render } from '@testing-library/react'
import React from 'react'
import Home from './Home'

describe('Home', () => {
  it('Should render each repository', () => {
    render(<Home />)
  })

  it('Should render repository link correctly', () => {
    render(<Home />)
  })
})
