export const invalidTitlePost = {
    payload: {
        'title': 1,
        'shortDescription': 'valid shortDescription',
        'content': 'valid content',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'title is invalid',
                field: 'title'
            }
        ]
    }
};
export const invalidDescPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 1,
        'content': 'valid content',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'shortDescription is invalid',
                field: 'shortDescription'
            }
        ]
    }
};
export const invalidContentPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 'valid shortDescription',
        'content': 1,
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'content is invalid',
                field: 'content'
            }
        ]
    }
};
export const invalidBlogIdPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 'valid shortDescription',
        'content': 'valid content',
        'blogId': 1
    },
    error: {
        errorsMessages: [
            {
                message: 'blogId is invalid',
                field: 'blogId'
            }
        ]
    }
};
export const missingTitlePost = {
    payload: {
        'shortDescription': 'valid shortDescription',
        'content': 'valid content',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'title is missing',
                field: 'title'
            }
        ]
    }
};
export const missingDescPost = {
    payload: {
        'title': 'valid title',
        'content': 'valid content',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'shortDescription is missing',
                field: 'shortDescription'
            }
        ]
    }
};
export const missingContentPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 'valid shortDescription',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'content is missing',
                field: 'content'
            }
        ]
    }
};
export const missingIdPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 'valid shortDescription',
        'content': 'valid content'
    },
    error: {
        errorsMessages: [
            {
                message: 'blogId is missing',
                field: 'blogId'
            }
        ]
    }
};
export const tooLongTitlePost = {
    payload: {
        'title': 'valid title valid title valid title valid title valid title',
        'shortDescription': 'valid shortDescription',
        'content': 'valid content',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'title is too long',
                field: 'title'
            }
        ]
    }
}
export const tooLongDescPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 'valid shortDescription valid shortDescription valid shortDescription valid shortDescription valid shortDescription valid shortDescription valid shortDescription',
        'content': 'valid content',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'shortDescription is too long',
                field: 'shortDescription'
            }
        ]
    }
}
export const tooLongContentPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 'valid shortDescription',
        'content': 'valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content valid content ',
        'blogId': 'valid blogId',
    },
    error: {
        errorsMessages: [
            {
                message: 'content is too long',
                field: 'content'
            }
        ]
    }
}
export const validPost = {
    payload: {
        'title': 'valid title',
        'shortDescription': 'valid shortDescription',
        'content': 'valid content',
        'blogId': 'valid blogId',
    }
}
