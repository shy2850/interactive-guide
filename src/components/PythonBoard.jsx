import React from '../react'
import Grid from './Grid'
import GuideShow from '../containers/GuideShow'
import PythonEditor from '../containers/PythonEditor'
export default ({params: {
    codeId,
    order
}}) => <Grid columns={[0.36, 0.64]}>
    <GuideShow codeId={codeId} order={order}/>
    <PythonEditor codeId={codeId} order={order}/>
</Grid>
