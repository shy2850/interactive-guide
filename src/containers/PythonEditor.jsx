import { connect } from '../react-redux'
import PythonEditor from '../components/PythonEditor'
import { setEditor, end, step } from '../reducer/code'

const mapStateToProps = (state, props) => {
    return {
        completed: state.getIn(['step', 'completed']),
        lessonId: state.getIn(['lessonId'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setEditor: (editor) => {
            dispatch(setEditor(editor))
        },
        init: () => {
            dispatch(step(ownProps.codeId, ownProps.step))
        },
        onEnd: () => {
            dispatch(end())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PythonEditor)
