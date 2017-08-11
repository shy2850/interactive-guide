import { connect } from '../react-redux'
import ShellEditor from '../components/ShellEditor'
import { execCmd } from '../reducer/shell'

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        execCmd: (cmd, editor) => {
            dispatch(execCmd(cmd, editor))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShellEditor)