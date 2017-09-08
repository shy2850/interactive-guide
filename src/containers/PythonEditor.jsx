import { connect } from '../react-redux'
import PythonEditor from '../components/PythonEditor'
import { setEditor, prev, next, step } from '../reducer/code'

let order
const mapStateToProps = (state, props) => {
    return {
        completed: state.getIn(['step', 'completed']),
        lessonId: state.getIn(['lessonId'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let props = {
        setEditor: (editor) => {
            dispatch(setEditor(editor))
        },
        onPrev: () => {
            dispatch(prev())
        },
        onNext: () => {
            dispatch(next())
        }
    }
    if (order !== ownProps.order) {
        order = ownProps.order
        props.step = () => {
            dispatch(step(ownProps.codeId, ownProps.order))
        }
    }
    return props
}
export default connect(mapStateToProps, mapDispatchToProps)(PythonEditor)
