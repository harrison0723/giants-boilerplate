import React from 'react'
import { Spin, Icon } from 'antd'

const Spinner = (props) => {
    return (
        <div className="loading">
            <Spin indicator={<Icon type="loading" style={{ fontSize: props.size === 'big' ? 50 : 25 }} spin />} />
        </div>
    )
}

export default Spinner