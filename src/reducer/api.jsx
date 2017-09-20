
export const lesson = {
    list: (courseId) => fetch(`/courses/${courseId}/lessons`).then(res => res.json())
}

export const code = {
    list: (lessonId) => fetch(`/lessons/${lessonId}/codes`).then(res => res.json()),
    step: (codeId, order = 1) => fetch(`/codes/${codeId}/${order}`).then(res => res.json())
}

export const section = {
    validate: (sectionId, code) => {
        return fetch(`/section/${sectionId}/validate`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'POST',
            body: 'code=' + encodeURIComponent(code)
        }).then(res => res.json())
    }
}
