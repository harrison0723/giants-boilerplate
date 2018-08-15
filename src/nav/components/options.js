import React from 'react'
import { Dropdown, Icon, Menu } from 'antd'

const Options = (props) => {
    return (
        <div className="options">
            <Dropdown trigger={['click']} overlay={
                <Menu>
                    <Menu.Item key="0">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/">Option 1</a>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.baidu.com/">Option 2</a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="3">
                        <div onClick={props.signout}>Logout</div>
                    </Menu.Item>
                </Menu>}>
                <a href="true" className="ant-dropdown-link">
                    <span>{props.email} </span><Icon type="down" />
                </a>
            </Dropdown>
        </div>
    )
}

export default Options