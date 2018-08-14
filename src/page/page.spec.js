import React from 'react'
import { shallow } from 'enzyme'
import { Page } from './page'

it('renders without crashing', () => {
    shallow(<Page match={{ params: { pageId: 0 } }} uid="0" requested={{ 'users/0/pages/0': true }} />)
})
