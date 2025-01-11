import request from 'supertest';
import {app} from '../src/app';
import {HttpStatus, SETTINGS} from '../src/settings';
import {
    invalidDescBlog,
    invalidNameBlog,
    invalidUrlBlog,
    missingDescBlog,
    missingNameBlog,
    missingUrlBlog,
    tooLongDescBlog,
    tooLongNameBlog,
    tooLongUrlBlog,
    validBlog
} from './datasets/blogs';

const api = () => request(app);

describe('Blogs', () => {
    // beforeAll(async () => {
    //     await api()
    //         .delete(SETTINGS.ALL_DATA)
    //         .expect(HttpStatus.NO_CONTENT);
    //     await api()
    //         .get(SETTINGS.BLOGS)
    //         .expect(HttpStatus.OK, []);
    // });
    //
    // let newBlog1: any = {}, newBlog2: any = {}, blogToUpdate: any = {}, newBlog1IdUrl: string = '';
    // describe('POST /blogs', () => {
        // it('Create a Blog - 400 invalid Name', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(invalidNameBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, invalidNameBlog.error);
        // });
        // it('Create a Blog - 400 invalid Desc', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(invalidDescBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, invalidDescBlog.error);
        // });
        // it('Create a Blog - 400 invalid URL', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(invalidUrlBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, invalidUrlBlog.error);
        // });
        // it('Create a Blog - 400 missing Name', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(missingNameBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, missingNameBlog.error);
        // });
        // it('Create a Blog - 400 missing Desc', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(missingDescBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, missingDescBlog.error);
        // });
        // it('Create a Blog - 400 missing URL', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(missingUrlBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, missingUrlBlog.error);
        // });
        // it('Create a Blog - 400 too long Name', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(tooLongNameBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, tooLongNameBlog.error);
        // });
        // it('Create a Blog - 400 too long Desc', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(tooLongDescBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, tooLongDescBlog.error);
        // });
        // it('Create a Blog - 400 too long URL', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(tooLongUrlBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, tooLongUrlBlog.error);
        // });
        // it('Create a Blog - 401 invalid login', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(validBlog.payload)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
        // it('Create a Blog - 401 invalid password', async () => {
        //     await api()
        //         .post(SETTINGS.BLOGS)
        //         .send(validBlog.payload)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
    //     it('Create a Blog - 200', async () => {
    //         const res = await api()
    //             .post(SETTINGS.BLOGS)
    //             .send(validBlog.payload)
    //             .expect(HttpStatus.CREATED);
    //
    //         expect(Object.keys(res.body)).toHaveLength(4);
    //
    //         expect(typeof res.body.id).toBe('string');
    //         expect(typeof res.body.name).toBe('string');
    //         expect(typeof res.body.description).toBe('string');
    //         expect(typeof res.body.websiteUrl).toBe('string');
    //
    //         expect(res.body.name).toBe(validBlog.payload.name);
    //         expect(res.body.description).toBe(validBlog.payload.description);
    //         expect(res.body.websiteUrl).toBe(validBlog.payload.websiteUrl);
    //
    //         newBlog1 = res.body;
    //     });
    //     it('Create a Blog - 200 - Duplicate', async () => {
    //         const res = await api()
    //             .post(SETTINGS.BLOGS)
    //             .send(validBlog.payload)
    //             .expect(HttpStatus.CREATED);
    //
    //         expect(Object.keys(res.body)).toHaveLength(4);
    //
    //         expect(typeof res.body.id).toBe('string');
    //         expect(typeof res.body.name).toBe('string');
    //         expect(typeof res.body.description).toBe('string');
    //         expect(typeof res.body.websiteUrl).toBe('string');
    //
    //         expect(res.body.name).toBe(validBlog.payload.name);
    //         expect(res.body.description).toBe(validBlog.payload.description);
    //         expect(res.body.websiteUrl).toBe(validBlog.payload.websiteUrl);
    //
    //         newBlog2 = res.body;
    //     });
    // });
    // describe('GET /blogs', () => {
    //     it('GET /blogs', async () => {
    //         await api()
    //             .get(SETTINGS.BLOGS)
    //             .expect(HttpStatus.OK, [newBlog1, newBlog2]);
    //     });
    // });
    // describe('GET /blogs/:id', () => {
        // it('Get a Blog - 404 invalid id', async () => {
        //     await api()
        //         .get(SETTINGS.BLOGS + '/' + 1234)
        //         .expect(HttpStatus.NOT_FOUND);
        // });
        // it('Get a Blog - 404 no id', async () => {
        //     await api()
        //         .get(SETTINGS.BLOGS + '/')
        //         .expect(HttpStatus.NOT_FOUND);
        // });
        // it('Get a Blog - 401 invalid login', async () => {
        //     await api()
        //         .get(newBlog1IdUrl)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
        // it('Get a Blog - 401 invalid password', async () => {
        //     await api()
        //         .get(newBlog1IdUrl)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
    //     it('Get a Blog - 200', async () => {
    //         newBlog1IdUrl = SETTINGS.BLOGS + '/' + newBlog1.id;
    //
    //         const res = await api()
    //             .get(newBlog1IdUrl)
    //             .expect(HttpStatus.OK);
    //
    //         expect(Object.keys(res.body)).toHaveLength(4);
    //
    //         expect(typeof res.body.id).toBe('string');
    //         expect(typeof res.body.name).toBe('string');
    //         expect(typeof res.body.description).toBe('string');
    //         expect(typeof res.body.websiteUrl).toBe('string');
    //
    //         expect(res.body.name).toBe(validBlog.payload.name);
    //         expect(res.body.description).toBe(validBlog.payload.description);
    //         expect(res.body.websiteUrl).toBe(validBlog.payload.websiteUrl);
    //     });
    // });
    // describe('PUT /blogs/:id', () => {
    //     it('Update a Blog - 404 invalid id', async () => {
    //         await api()
    //             .put(SETTINGS.BLOGS + '/' + 1234)
    //             .expect(HttpStatus.NOT_FOUND);
    //     });
    //     it('Update a Blog - 404 no id', async () => {
    //         await api()
    //             .put(SETTINGS.BLOGS + '/')
    //             .expect(HttpStatus.NOT_FOUND);
    //     });
        // it('Update a Blog - 400 invalid Name', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(invalidNameBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, invalidNameBlog.error);
        // });
        // it('Update a Blog - 400 invalid Desc', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(invalidDescBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, invalidDescBlog.error);
        // });
        // it('Update a Blog - 400 invalid URL', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(invalidUrlBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, invalidUrlBlog.error);
        // });
        // it('Update a Blog - 400 missing Name', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(missingNameBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, missingNameBlog.error);
        // });
        // it('Update a Blog - 400 missing Desc', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(missingDescBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, missingDescBlog.error);
        // });
        // it('Update a Blog - 400 missing URL', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(missingUrlBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, missingUrlBlog.error);
        // });
        // it('Update a Blog - 400 too long Name', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(tooLongNameBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, tooLongNameBlog.error);
        // });
        // it('Update a Blog - 400 too long Desc', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(tooLongDescBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, tooLongDescBlog.error);
        // });
        // it('Update a Blog - 400 too long URL', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(tooLongUrlBlog.payload)
        //         .expect(HttpStatus.BAD_REQUEST, tooLongUrlBlog.error);
        // });
        // it('Update a Blog - 401 invalid login', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(validBlog.payload)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
        // it('Update a Blog - 401 invalid password', async () => {
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(validBlog.payload)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
        // it('Get a Blog - 200', async () => {
        //     const res = await api()
        //         .get(newBlog1IdUrl)
        //         .expect(HttpStatus.OK);
        //
        //     blogToUpdate = res.body;
        // });
        // it('Update a name in the Blog - 204', async () => {
        //     blogToUpdate.name = 'Updated Name';
        //
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(blogToUpdate)
        //         .expect(HttpStatus.NO_CONTENT);
        //     const res = await api()
        //         .get(newBlog1IdUrl)
        //         .expect(HttpStatus.OK);
        //
        //     expect(blogToUpdate.name).toEqual(res.body.name);
        // });
        // it('Update a description in the Blog - 204', async () => {
        //     blogToUpdate.description = 'Updated Desc';
        //
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(blogToUpdate)
        //         .expect(HttpStatus.NO_CONTENT);
        //     const res = await api()
        //         .get(newBlog1IdUrl)
        //         .expect(HttpStatus.OK);
        //
        //     expect(blogToUpdate.description).toEqual(res.body.description);
        // });
        // it('Update a URL in the Blog - 204', async () => {
        //     blogToUpdate.websiteUrl = 'Updated URL';
        //
        //     await api()
        //         .put(newBlog1IdUrl)
        //         .send(blogToUpdate)
        //         .expect(HttpStatus.NO_CONTENT);
        //     const res = await api()
        //         .get(newBlog1IdUrl)
        //         .expect(HttpStatus.OK);
        //
        //     expect(blogToUpdate.websiteUrl).toEqual(res.body.websiteUrl);
        //     newBlog1 = blogToUpdate;
        // });
        // it('Updated Blog is getting back with all Blogs', async () => {
        //     await api()
        //         .get(SETTINGS.BLOGS)
        //         .expect(HttpStatus.OK, [newBlog1, newBlog2]);
        // });
    // });
    describe('DELETE /blogs/:id', () => {
        it('Delete a Blog - 404 invalid id', async () => {
            await api()
                .delete(SETTINGS.BLOGS + '/' + 1234)
                .expect(HttpStatus.NOT_FOUND);
        });
        // it('Delete a Blog - 404 no id', async () => {
        //     await api()
        //         .delete(SETTINGS.BLOGS + '/')
        //         .expect(HttpStatus.NOT_FOUND);
        // });
        // it('Delete a Blog - 401 invalid login', async () => {
        //     await api()
        //         .delete(newBlog1IdUrl)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
        // it('Delete a Blog - 401 invalid password', async () => {
        //     await api()
        //         .delete(newBlog1IdUrl)
        //         .expect(HttpStatus.UNAUTHORIZED);
        // });
        // it('Delete a Blog - 204', async () => {
        //     await api()
        //         .delete(newBlog1IdUrl)
        //         .expect(HttpStatus.NO_CONTENT);
        // });
        // it('Delete a Blog second time- 404', async () => {
        //     await api()
        //         .delete(newBlog1IdUrl)
        //         .expect(HttpStatus.NOT_FOUND);
        // });
        // it('Get a deleted Blog - 404', async () => {
        //     await api()
        //         .get(newBlog1IdUrl)
        //         .expect(HttpStatus.NOT_FOUND);
        // });
        // it('Deleted Blog is not returned with all blogs', async () => {
        //     await api()
        //         .get(SETTINGS.BLOGS)
        //         .expect(HttpStatus.OK, [newBlog2]);
        // });
    });
});