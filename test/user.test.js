import supertest from "supertest";
import { web } from '../src/application/web.js'
import { prismaClient } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";


describe ('POST /api/users', function () {

    afterEach( async () => {
        await prismaClient.user.deleteMany({
            where: {
                username: 'testuser'
            }
        })
    })

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'testuser',
                password: 'testpassword',
                name: 'Test User',
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('testuser');
        expect(result.body.data.name).toBe('Test User');
        expect(result.body.data.password).toBeUndefined();

    })

     it('should can register is not allowed to be empty username, password, name', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: '',
                name: '',
            });

            logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.error).toBeDefined();

    })

     it('should can register is not allowed to be empty username', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: 'testpassword',
                name: 'test name',
            });

            logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.error).toBeDefined();

    })

     it('should can register is not allowed to be empty  password', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'testusername',
                password: '',
                name: 'test name',
            });

            logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.error).toBeDefined();

    })

     it('should can register is not allowed to be empty name', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'testusername',
                password: 'testpassword',
                name: '',
            });

            logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.error).toBeDefined();

    })

 it('should reject register usernama already exist', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'testuser',
                password: 'testpassword',
                name: 'Test User',
            });

        logger.info(result.body)

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('testuser');
        expect(result.body.data.name).toBe('Test User');
        expect(result.body.data.password).toBeUndefined();
       
        result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'testuser',
                password: 'testpassword',
                name: 'Test User',
            });

        logger.info(result.body)

        expect(result.status).toBe(400);
        expect(result.body.error).toBeDefined();

    })

})