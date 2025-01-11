import express, {Request, Response} from 'express';
import {blogRepository} from '../repositories/blog-repository';
import {HttpStatus} from '../settings';

export const blogRouter = express.Router();

const blogController: any = {
    async getBlogs(req: Request, res: Response) {
        const blogs = await blogRepository.findBlogs();
        res.status(HttpStatus.OK).send(blogs);
    },
    async getBlogById(req: Request, res: Response) {
        const blog = await blogRepository.findBlogs(req.params.id);
        if (blog) {
            res.status(HttpStatus.OK).send(blog);
        } else {
            res.sendStatus(HttpStatus.NOT_FOUND);
        }
    },
    async createBlog(req: Request, res: Response) {
        const blog = await blogRepository.createBlog(req.body);
        if (blog) res.status(HttpStatus.CREATED).send(blog);
    },
    async updateBlog(req: Request, res: Response) {
        const blog = await blogRepository.updateBlog(req.params.id, req.body);
        if (blog) {
            res.sendStatus(HttpStatus.NO_CONTENT);
        } else {
            res.sendStatus(HttpStatus.NOT_FOUND);
        }
    },
    async deleteBlog(req: Request, res: Response) {
        const blog = await blogRepository.deleteBlog(req.params.id);
        if (blog) {
            res.sendStatus(HttpStatus.NO_CONTENT);
        } else {
            res.sendStatus(HttpStatus.NOT_FOUND);
        }
    },
};
blogRouter.get('/', blogController.getBlogs);
blogRouter.post('/', blogController.createBlog);
blogRouter.get('/:id', blogController.getBlogById);
blogRouter.put('/:id', blogController.updateBlog);
blogRouter.delete('/:id', blogController.deleteBlog);