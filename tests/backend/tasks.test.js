```javascript
const request = require('supertest');
const app = require('../../server/index.js');
const Task = require('../../server/models/Task.js');

describe('Task Management API', () => {
  let token;

  beforeAll(async () => {
    // User login and get token
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });
    token = res.body.token;
  });

  afterAll(async () => {
    // Cleanup
    await Task.deleteMany();
  });

  // Test for task creation
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Task',
        description: 'This is a test task'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('task');
  });

  // Test for getting all tasks
  it('should get all tasks', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Test for updating a task
  it('should update a task', async () => {
    const res = await request(app)
      .put('/api/tasks/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Updated Test Task',
        description: 'This is an updated test task'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('task');
  });

  // Test for deleting a task
  it('should delete a task', async () => {
    const res = await request(app)
      .delete('/api/tasks/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Task deleted');
  });
});
```