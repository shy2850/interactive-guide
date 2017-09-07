import { connect } from '../react-redux'
import Codes from '../components/Codes'
import { list } from '../reducer/code'

const mapStateToProps = (state) => {
    let codes = state.getIn(['codes'])
    let lessonId = state.getIn(['lessonId'])
    return {
        lessonId,
        codes
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const {
        params: {
            lessonId
        }
    } = ownProps
    return {
        init: (cmd, editor) => {
            dispatch(list(lessonId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Codes)
