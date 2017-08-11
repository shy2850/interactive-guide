const GitGuide = require('../bean/GitGuide')
const gitGuide = new GitGuide()

module.exports = conf => {
    return {
        onRoute (pathname, req, resp) {
            switch (pathname) {
            case '/git-guide':
                return false
            }
        }
    }
}
