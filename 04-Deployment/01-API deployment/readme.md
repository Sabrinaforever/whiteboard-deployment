# Objectives
1. Finish off the to-do list API from last week's live code.
2. Deploy the API to cloud (read the [deploy guide](https://github.com/bangbangjim/whiteboard-challenges-backend/blob/master/04-Deployment/01-API%20deployment/Deploy%20guide.md)).
# Specs

**Delete a to-do task**

Create a route, with appropriate URL and method, that would delete a to-do task based on the task Id, sending the updated to-do list as the response.

If the task is not found, send a 'task not found' string as the response.

**Add a to-do task**

Enhance the existing POST /tasks function by adding a logic to make sure the request body received **MUST** contain the keys 'title', 'person' and 'done'.

**Update a to-do task**

Currently, the function just replace the entire existing to-do task with req.body. Enhance the function such that when the request body is like:
```js
{
  "person": "Fat"
}
```
where not all the fields are provided, it will just update the fields that is provided. For example, if a PUT /tasks/0 is sent with the above request body, then
```js
{
  "id": 0,
  "title": "Dry shoes",
  "person": "Jimmy",
  "done": true
}
```
will become
```js
{
  "id": 0,
  "title": "Dry shoes",
  "person": "Fat",
  "done": true
}
```



