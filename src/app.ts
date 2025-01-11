import express, {Request, Response} from 'express';
import {HttpStatus, SETTINGS} from './settings';
import {postRepository} from './repositories/post-repository';
import {blogRepository} from './repositories/blog-repository';
import {postRouter} from './posts/post-controller';
import {blogRouter} from './blogs/blog-controller';
export const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send({'Version': '1.0'});
});

app.delete(SETTINGS.ALL_DATA, (req: Request, res: Response) => {
    void postRepository.deleteAllPosts();
    void blogRepository.deleteAllBlogs();
    res.sendStatus(HttpStatus.NO_CONTENT)
});

app.use(SETTINGS.POSTS, postRouter)
app.use(SETTINGS.BLOGS, blogRouter)