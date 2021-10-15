# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.
​
1. Explain what a token is used for.

Tokens are stings of cryptic text that can be stored on the client-side. These tokens are issued by the server when users provide valid credentials upon logging in. When a token is saved to local storage or session storage, the user can access protected routes and information. Because of tokens, the user only has to log in once, and the saved token can continue to be read by the server whenever necessary to know that the user has been validated. A token can be removed by a user logging out or may only be stored for a set amount of time and then automatically removed.
​
2. What steps can you take in your web apps to keep your data secure?
In order to keep web apps secure, authentication and authorization is extremely important. A site with private information should only be accessible to a user with a valid username and password. Effective communication with the sever is critical in authorizing access to the user. We must make sure the server sends us a token and save it on the client side. We must protect all routes which should only be available to authorized users. At any point a request is sent to the server, the saved user token should be sent through a header so the server can verify authenticity before performing any protected CRUD operation.
​
3. Describe how web servers work.
​
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.