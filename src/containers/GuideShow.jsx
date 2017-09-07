import { connect } from '../react-redux'
import GuideShow from '../components/GuideShow'
import { execCmd } from '../reducer/shell'

const mapStateToProps = (state, props) => {
    const {order} = props
    return {
        guide: state.getIn(['step', 'instruction'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GuideShow)
