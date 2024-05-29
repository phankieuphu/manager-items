# Run projects with step
## Step 1:Setup env
#### Create new file .env or copy from .env.example

    cp .env.example .env

Replace your ```mysql``` information

## Step 2: Install Node Modules
      npm install 
or <br> 

      yarn install     

## Step 3: Migration Database
####  Please make sure you provide file .env and information of mysql

    npx sequelize-cli db:migrate
## Step 4: Create User
    node commands/createUser.js create-user <email> <password>

## Step 5: Run Application
    npm start

## Testing
#### Import file
```Manager-items.postman_collection.jon```
to your postman <br> 

1. Use api ```${your_host}/v1/users/login``` with to ```LOGIN``` 
2. Replace your token when call api user/login return to ```Bearer Token```
3. Test API from Folder ```Items```
