This directory contains all the routes of the application. Each route is a folder with the following structure:

(app) this folder contains all the files related to the main app functionality.

(auth) this folder contains all the files related to the authentication functionality.

(dashboard) this folder contains all the files related to the dashboard functionality.

Whenever you find a folder with () it means that it is a group route and it contains more routes inside.

and it will not afect the routing of the application. For example:

```
src/app/(app)/(dashboard)
# Can be accessed by:
{WEB_URL}/
```
