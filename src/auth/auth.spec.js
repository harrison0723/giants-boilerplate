import React from 'react'
import { shallow } from 'enzyme'
import { Auth } from './auth'

it('renders without crashing', () => {
    shallow(<Auth />)
})
