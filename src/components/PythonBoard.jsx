import React from '../react'
import Grid from './Grid'
import GuideShow from '../containers/GuideShow'
import PythonEditor from '../containers/PythonEditor'
import ShellEditor from '../containers/ShellEditor'
export default ({params: {
    codeId,
    order
}}) => <Grid columns={[0.36, 0.64]}>
    <GuideShow codeId={codeId} order={order}/>
    <Grid columns={[0.7, 0.3]} vertical>
        <PythonEditor codeId={codeId} order={order}/>
        <ShellEditor />
    </Grid>
</Grid>
