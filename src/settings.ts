export const SETTINGS = {
    PORT: process.env.PORT || 3005,
    BLOGS: '/blogs',
    POSTS: '/posts',
    ALL_DATA: '/testing/all-data',
    LOGIN: 'admin',
    PASSWORD: 'qwerty'
};

export const enum HttpStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404
}