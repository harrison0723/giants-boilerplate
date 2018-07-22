import React from 'react'
import { shallow } from 'enzyme'
import { Create } from './create'

it('renders without crashing', () => {
    shallow(<Create auth={{ isLoaded: true, isEmpty: false }} />)
})
