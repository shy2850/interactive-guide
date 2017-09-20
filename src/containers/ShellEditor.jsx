import { connect } from '../react-redux'
import ShellEditor from '../components/ShellEditor'
import { setTerminal } from '../reducer/shell'

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTerminal: (editor) => {
            dispatch(setTerminal(editor))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShellEditor)
