## Todos

#### Authentication
1. Authentication should be done by array

    ```js
    // By department
    Router.get('resource', Auth(['SEC', 'EXEC'], null), controller);

    // By Exec
    Router.get('resource', Auth(null, ['DCEO', 'CEO', 'LO']), controller);

    // If Logged in or not
    Router.get('resource', Auth(true), controller); //anyone logged in
    Router.get('resource', Auth(false), controller); //anyone not logged in

    ```

1. Account approval
1. Login and logout
1. Revoking of account privileges
1. Setting account privileges


#### Files
1. File uploading (including file tags to database)
1. Downloading
