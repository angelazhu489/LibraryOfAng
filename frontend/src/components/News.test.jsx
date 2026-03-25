import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News.jsx'
import '@testing-library/jest-dom/vitest'

describe('News', () => {
  test('use jsdom in this test file', () => {
    const element = document.createElement('div')
    expect(element).not.toBeNull()
  })

  // test('render news', async () => {
  // await render(<News />)
  // })
})