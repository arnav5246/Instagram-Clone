import React from 'react'
import { create } from 'react-test-renderer'
import SocialInputs from '../social-inputs'

describe('Social-Inputs Component', () => {
  const props = {
    inputs: {
      
    },
    change: jest.fn(),
  }

  it('should match snapshot', () => {
    const tree = create(<SocialInputs {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
