const BaseGuide = require('./BaseGuide')
const steps = [
    {
        guide: '接下来我们开始git的学习：  \n1.输入 `git status` 检测需要更新的文件状态  ',
        console: ''
    }, {
        test: 'git status',
        guide: '\n2. 输入 `git add .` 添加所有修改到缓冲区  ',
        console: `Changes not staged for commit:  
Untracked files:  
  (use "git add <file>..." to include in what will be committed)
        README.md
        `
    }, {
        test: 'git add (\\.|-a)',
        guide: '\n3. 输入 `git commit -m "commit info"` 提交修改  ',
        console: 'Congratulations!'
    }
]

class GitGuide extends BaseGuide {
    constructor () {
        super({
            mode: 'shell',
            steps
        })
    }
    resolve = cmd => this.steps.find(({test}) => test && new RegExp(test).test(cmd))
}

module.exports = GitGuide
