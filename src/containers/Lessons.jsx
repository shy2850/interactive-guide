import { connect } from '../react-redux'
import Lessons from '../components/Lessons'
import { init } from '../reducer/lesson'

const mapStateToProps = (state) => {
    let lessons = state.getIn(['lessons'])
    return {
        lessons
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const {
        params: {
            courseId
        }
    } = ownProps
    return {
        init: (cmd, editor) => {
            dispatch(init(courseId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lessons)
