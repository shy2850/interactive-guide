import React from '../react'
import { Link } from '../react-router'
import { ListGroup, ListGroupItem, Row, Col, Panel } from '../react-bootstrap'

export default class extends React.Component {
    componentDidMount () {
        const { init } = this.props
        init && init()
    }
    render () {
        const {
            lessonId,
            codes = []
        } = this.props
        const header = <Row>
            <Col xs={6}>代码列表</Col>
            <Col xs={6} className="text-right"><Link to={`/courses/${lessonId}/lessons`}><small>返回</small></Link></Col>
        </Row>
        return <Panel header={header} bsStyle="success">
            <ListGroup>
                {codes.map((item, index) => <ListGroupItem key={index + ''}>
                    <Row>
                        <Col xs={4}><Link to={`/codes/${lessonId}/${item.id}`}>{index + 1}. {item.name}</Link></Col>
                        <Col xs={8}>{item.description}</Col>
                    </Row>
                </ListGroupItem>)}
            </ListGroup>
        </Panel>
    }
}
