import {PostDBType} from '../posts/post-types';
import {PostInputType} from '../posts/post-types';
import {db} from '../db/db';

export const postRepository = {
    async deleteAllPosts() {
        db.posts = [];
    },
    async createPost(postInput: PostInputType) {
        const blog = db.blogs.find(blog => blog.id === postInput.blogId)

        const newPost: PostDBType = {
            id: Date.now() + Math.random().toString(),
            title: postInput.title,
            shortDescription: postInput.shortDescription,
            content: postInput.content,
            blogId: postInput.blogId,
            blogName: blog?.name || ""
        }
        db.posts = [...db.posts, newPost];
        return newPost
    },
    async updatePost(id: string, postUpdate: PostInputType) {
        for (let i = 0; i < db.posts.length; i++) {
            if (db.posts[i].id === id) {
                db.posts[i] = {...db.posts[i], ...postUpdate}
                return true
            }
        }
        return false
    },
    async findPosts(id?: string) {
        const posts = db.posts

        if (!id) {
            return posts;
        } else {
            return posts.find(blog => blog.id === id);
        }
    },
    async deletePost(id: string) {
        for (let i = 0; i < db.posts.length; i++) {
            if (db.posts[i].id === id) {
                db.posts.splice(i, 1);
                return true
            }
        }
        return false
    }
};