import React from '../react'
import { Link } from '../react-router'
import { ListGroup, ListGroupItem, Row, Col, Panel } from '../react-bootstrap'

export default class extends React.Component {
    componentDidMount () {
        const { init } = this.props
        init && init()
    }
    render () {
        const { lessons = [] } = this.props
        const header = <Col>课程列表</Col>
        return <Panel header={header} bsStyle="info">
            <ListGroup>
                {lessons.map((item, index) => <ListGroupItem key={index + ''}>
                    <Row>
                        <Col xs={4}><Link to={`/lessons/${item.id}/codes`}>{index + 1}. {item.name}</Link></Col>
                        <Col xs={8}>{item.description}</Col>
                    </Row>
                </ListGroupItem>)}
            </ListGroup>
        </Panel>
    }
}
