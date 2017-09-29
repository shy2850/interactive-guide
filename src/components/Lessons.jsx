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
            <ul className="list-unstyled" style={{lineHeight: 2.2, textIndent: 16}}>
                {lessons.map((item, index) => <li key={index + ''}>
                    <Row>
                        {/* <Col xs={4}><Link to={`/lessons/${item.id}/codes`}>{index + 1}. {item.name}</Link></Col> */}
                        <Col xs={4}>{index + 1}. {item.name}</Col>
                        <Col xs={8}>{item.description}</Col>
                    </Row>
                    <ul className="list-unstyled">
                        {item.codeList.map((code, i) => <li key={i + ''}>
                            <Row>
                                <Col xs={4} style={{textIndent: 36}}><Link to={`/codes/${code.id}/1`}>{i + 1}. {code.name}</Link></Col>
                                <Col xs={8}>{code.description}</Col>
                            </Row>
                        </li>)}
                    </ul>
                </li>)}
            </ul>
        </Panel>
    }
}
