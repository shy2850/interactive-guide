class BaseGuide {
    constructor (props = {}) {
        const {
            mode = 'shell',
            steps = []
        } = props
        this.mode = mode
        this.steps = steps
    }
    init = () => {
        return {
            mode: this.mode,
            steps: this.steps.length,
            item: this.steps[0]
        }
    }
    resolve = cmd => cmd
}

module.exports = BaseGuide
