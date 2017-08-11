import { connect } from '../react-redux'
import GuideShow from '../components/GuideShow'
import { execCmd } from '../reducer/shell'

const mapStateToProps = (state) => {
    const index = state.getIn(['index'])
    return {
        guide: state.getIn(['steps', index, 'guide'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GuideShow)
