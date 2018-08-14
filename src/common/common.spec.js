import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './components/404'
import Spinner from './components/spinner'
import Loading from './components/loading'

it('renders without crashing', () => {
    shallow(<NotFound />)
    shallow(<Spinner />)
    shallow(<Loading />)
})
