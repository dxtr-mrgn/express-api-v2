export const invalidNameBlog = {
    payload: {
        'name': 1,
        'description': 'valid',
        'websiteUrl': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZA'
    },
    error: {
        errorsMessages: [
            {
                message: 'name is invalid',
                field: 'name'
            }
        ]
    }
};
export const invalidDescBlog = {
    payload: {
        'name': 'valid',
        'description': 1,
        'websiteUrl': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZA'
    },
    error: {
        errorsMessages: [
            {
                message: 'description is invalid',
                field: 'description'
            }
        ]
    }
};
export const invalidUrlBlog = {
    payload: {
        'name': 'valid',
        'description': 'string',
        'websiteUrl': 1
    },
    error: {
        errorsMessages: [
            {
                message: 'website url is invalid',
                field: 'websiteUrl'
            }
        ]
    }
};
export const missingNameBlog = {
    payload: {
        'description': 'string',
        'websiteUrl': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZA'
    },
    error: {
        errorsMessages: [
            {
                message: 'name is missing',
                field: 'name'
            }
        ]
    }
};
export const missingDescBlog = {
    payload: {
        'name': 1,
        'websiteUrl': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZA'
    },
    error: {
        errorsMessages: [
            {
                message: 'description is missing',
                field: 'description'
            }
        ]
    }
};
export const missingUrlBlog = {
    payload: {
        'name': 1,
        'description': 'string'
    },
    error: {
        errorsMessages: [
            {
                message: 'website url is missing',
                field: 'websiteUrl'
            }
        ]
    }
};
export const tooLongNameBlog = {
    payload: {
        'name': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZA',
        'description': 'string',
        'websiteUrl': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZA'
    },
    error: {
        errorsMessages: [
            {
                message: 'name is too long',
                field: 'name'
            }
        ]
    }
}
export const tooLongDescBlog = {
    payload: {
        'name': 'valid',
        'description': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZAmhttps://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZAmhttps://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZAmhttps://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZAmhttps://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZAm',
        'websiteUrl': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZA'
    },
    error: {
        errorsMessages: [
            {
                message: 'description is too long',
                field: 'description'
            }
        ]
    }
}
export const tooLongUrlBlog = {
    payload: {
        'name': 1,
        'description': 'string',
        'websiteUrl': 'https://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q.kKX8WgmbfmBjIMUIFDjMZAhttps://1U_6htpDD23G7sy-AstWRa4UV6DPN-YTwEVJABFYvYmN8cryBAA3hihb-3eFqM9GnFr3q'
    },
    error: {
        errorsMessages: [
            {
                message: 'website url is too long',
                field: 'websiteUrl'
            }
        ]
    }
}
export const validBlog = {
    payload: {
        'name': 'valid name',
        'description': 'valid desc',
        'websiteUrl': 'valid URL'
    }
}
