import React from 'react'
import { shallow } from 'enzyme'
import { Nav } from './nav'

it('renders without crashing', () => {
    shallow(<Nav auth={{ isLoaded: true, isEmpty: false }} location={{ pathname: '/' }} />)
})
