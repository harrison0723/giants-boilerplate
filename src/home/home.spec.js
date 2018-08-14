import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './home'

it('renders without crashing', () => {
    shallow(<Home />)
})
