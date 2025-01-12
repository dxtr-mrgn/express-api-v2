import {BlogDBType} from '../types/blog-types';
import {PostDBType} from '../types/post-types';

export type DBType = {
    blogs: BlogDBType[],
    posts: PostDBType[]
}

export const db: DBType = {
    posts: [],
    blogs: []
};