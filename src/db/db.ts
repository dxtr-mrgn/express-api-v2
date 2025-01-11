import {BlogDBType} from '../blogs/blog-types';
import {PostDBType} from '../posts/post-types';

export type DBType = {
    blogs: BlogDBType[],
    posts: PostDBType[]
}

export const db: DBType = {
    posts: [],
    blogs: []
};