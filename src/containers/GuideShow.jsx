import { connect } from '../react-redux'
import GuideShow from '../components/GuideShow'
import { step } from '../reducer/code'

const mapStateToProps = (state, props) => {
    const {order} = props
    return {
        guide: state.getIn(['step', 'instruction'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        init: () => {
            dispatch(step(ownProps.codeId, ownProps.order))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GuideShow)
