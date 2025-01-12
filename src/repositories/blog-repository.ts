import {BlogDBType} from '../types/blog-types';
import {BlogInputType} from '../types/blog-types';
import {db} from '../db/db';

export const blogRepository = {
    async deleteAllBlogs() {
        db.blogs = [];
    },
    async createBlog(blogInput: BlogInputType) {
        const newBlog: BlogDBType = {
            id: Date.now() + Math.random().toString(),
            name: blogInput.name,
            description: blogInput.description,
            websiteUrl: blogInput.websiteUrl
        }
        db.blogs.push(newBlog)
        return newBlog
    },
    async updateBlog(id: string, blogUpdate: BlogInputType) {
        for (let i = 0; i < db.blogs.length; i++) {
            if (db.blogs[i].id === id) {
                db.blogs[i] = {...db.blogs[i], ...blogUpdate}
                return true
            }
        }
        return false
    },
    async findBlogs(id?: string) {
        if (!id) {
            return db.blogs;
        } else {
            return db.blogs.find(blog => blog.id === id);
        }
    },
    async deleteBlog(id: string) {
        for (let i = 0; i < db.blogs.length; i++) {
            if (db.blogs[i].id === id) {
                db.blogs.splice(i, 1);
                return true
            }
        }
        return false
    }
};