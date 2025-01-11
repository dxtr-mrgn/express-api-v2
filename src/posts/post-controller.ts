import express, {Request, Response} from 'express';
import {HttpStatus} from '../settings';
import {postRepository} from '../repositories/post-repository';

export const postRouter = express.Router();

const postController = {
    async getPosts(req: Request, res: Response) {
        const posts = await postRepository.findPosts();
        res.status(HttpStatus.OK).send(posts);
    },
    async getPostById(req: Request, res: Response) {
        const post = await postRepository.findPosts(req.params.id);
        if (post) {
            res.status(HttpStatus.OK).send(post);
        } else {
            res.sendStatus(HttpStatus.NOT_FOUND);
        }
    },
    async createPost(req: Request, res: Response) {
        const post = await postRepository.createPost(req.body);
        if (post) res.status(HttpStatus.CREATED).send(post);
    },
    async updatePost(req: Request, res: Response) {
        const post = await postRepository.updatePost(req.params.id, req.body);
        if (post) {
            res.sendStatus(HttpStatus.NO_CONTENT);
        } else {
            res.sendStatus(HttpStatus.NOT_FOUND);
        }
    },
    async deletePost(req: Request, res: Response) {
        const post = await postRepository.deletePost(req.params.id);
        if (post) {
            res.sendStatus(HttpStatus.NO_CONTENT);
        } else {
            res.sendStatus(HttpStatus.NOT_FOUND);
        }
    },
};
postRouter.get('/', postController.getPosts);
postRouter.post('/', postController.createPost);
postRouter.get('/:id', postController.getPostById);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);