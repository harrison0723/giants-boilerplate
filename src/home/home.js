import './home.css'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
const { Meta } = Card

export class Home extends Component {
    render() {
        return (
            <div className="home">
            <Link to='/about'>
                <Card
                    hoverable
                    style={{ width: 500 }}
                    cover={<img alt="example" src="https://telescopeobserver.com/wp-content/uploads/2017/08/astronomy-vs-astrology-1024x527.jpeg" />}
                >
                    <Meta
                        title="Where do the stars come from?"
                        description="Learn about Astronomy, a natural science that studies celestial objects and phenomena. Explore the origin of those objects and phenomena and their evolution."
                    />
                </Card>
            </Link>
            </div >
        )
    }
}

export default connect(null, null)(Home)
