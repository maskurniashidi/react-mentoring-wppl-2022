# Documentations
How to use this API for frontend / mobile usage  
Base URL: Localhost (temporary)
# Table of Contents
* Authentication  
  * [sign up](#sign-up)
  * [login](#login)  
* Project management  
  * [create new project](#create-new-project)
  * [get all projects](#get-all-projects)
  * [get specified project](#get-specified-project)
  * [update project](#update-project)
  * [delete project](#delete-project)
* Logged user management
  * [get logged user data](#get-logged-user-data)
  * [update logged user](#update-logged-user)
  * [update logged user photo](#update-photo-profile)
  * [delete logged user](#delete-logged-user)
* Project collaborator management 
  * [search user](#search-user-by-fullname)
  * [add new collaborator](#add-new-project-collaborator)
  * [delete collaborator](#delete-project-collaborator)
* Spending and budget management
  * [get project spendings](#get-all-project-spending)
  * [add project spendings](#add-new-project-spending)
  * [delete project spending](#delete-existing-project-spending)
  * [update total budget](#update-total-budget-of-project)
* Task management
  * [get single task](#get-single-task)
  * [create task](#create-a-new-task)
  * [update task](#update-task)
  * [delete task](#delete-task)
  * [finish task](#finish-task)
* Project report
  * [get project report](#get-specified-project-report)
* Project gallery management  
  * [add new documentation](#create-new-documentation-for-project-management)
  * [get all documentations](#get-project-galleries)
* Admin dashboard
  * [get total for each data](#get-total-for-each-data)
  * [get all users](#get-all-users)
  * [get all projects](#get-all-projects-admin)
  * [get all catalogs](#get-all-catalogs-admin)
  * [get all orders](#get-order-dashboards)
  * [get all inspirations](#get-all-inspirations-admin)
  * [get all withdrawals](#get-all-withdrawals-admin)
  * [confirm order](#verification-order-by-admin)
  * [verification withdrawal request](#verification-withdrawal-request)
* Marketplace
  * [get all catalogs](#get-all-marketplace-catalogs)
  * [search catalogs (by title)](#search-marketplace-catalog)
  * [filter catalog (by category)](#filter-marketplace-catalog-category)
  * [filter catalog (by range price)](#filter-marketplace-catalog-price)
  * [get specified catalog (with reviews)](#get-specified-catalog)
* Marketplace wishlists
  * [add to wishlist](#add-to-wishlist)
  * [get wishlists](#get-all-wishlists)
  * [delete from wishlist](#delete-from-wishlist)
* Matketplace data management
  * [create new product](#create-a-new-product)
  * [create new service](#create-a-new-service)
  * [get all catalogs](#get-all-marketplace-catalogs)
  * [get specified catalog (with reviews)](#get-specified-catalog)
  * [filter catalog (by range price)](#filter-marketplace-catalog-price)  
  * [update existing product](#update-existing-product)  
  * [update existing service](#update-existing-service)
  * [delete catalog](#delete-existing-catalog)
* Marketplace order management (buyer)
  * [create order](#create-order)  
  * [get orders](#get-orders)  
  * [get specified order](#get-specified-order)  
  * [upload slip](#upload-slip-transfer)  
  * [finish order](#done-order-by-buyer)
* Marketplace order management (seller)
  * [get orders (seller)](#get-orders-data-for-seller)
  * [get specified order](#get-specified-order)  
  * [reject order](#reject-order-by-seller)  
  * [upload service result (finishing)](#upload-service-result-by-seller-finishing)
  * [get list banks](#get-list-banks)
  * [add new bank](#add-new-bank-data)
  * [get withdrawals](#get-list-of-withdrawal)
  * [submission for new withdrawal request](#new-withdrawal-request)
* Marketplace reviews
  * [create new review](#create-new-reviews)
* Inspirations
  * [create new inspiration](#create-new-inspiration)
  * [get all inspiration](#get-all-inspirations)
  * [get specified inspiration](#get-detail-inspirations)
  * [update inspiration](#update-existing-inspiration)
  * [delete inspiration](#delete-inspiration)

## Sign up
* ### Endpoint   
  `/api/auth/signup`
* ### Method  
  POST
* ### Headers
  `Content-type: application/json`
* ### Body
  ```
  {
    "name": String,
    "type": String,
    "numberPhone": String,
    "email": String,
    "password": String
  }
  ```
* ### Response success
  ```
  {
    "message": "User signup successfully",
    "user": {
        "fullname": "john doe",
        "type": "personal",
        "numberPhone": 6289123456789,
        "email": "johndoe@gmail.com"
    }
  }
  ```
* ### Response fail (because email already exist)
  ```
  {
    "statusCode": 400,
    "message": "E-Mail already exist",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
## Login
Login user for manipulate data (CRUD)
* ### Endpoint   
  `/api/auth/login`
* ### Method  
  POST
* ### Headers
  `Content-type: application/json`
* ### Body
  ```
  {
    "email": String,
    "password": String
  }
  ```
* ### Response success
  ```
  {
    "message": "User signup successfully",
    "token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
  ```
* ### Response fail (because email / password wrong)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized",
    "error": "Unauthorized"
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```

## Create new Project 
Token is obtained from login response
* ### Endpoint  
  `/api/projects`
* ### Method
  POST
* ### Headers
  ```
  Content-Type: application/json
  Authorization: `Bearer ${token}`
  ```
* ### Body
  ```
  {
    "title": String,
    "totalContract": Number,
    "startDate": String (YYYYMMDD),
    "finishDate": String (YYYYMMDD),
    "address": String
  }
  ```
* ### Response Success
  ```
  {
    "message": "Created project successfully",
    "data": {
        "id": 35,
        "title": "Pengembangan proyek sengketa",
        "admin": "john doe",
        "dates": {
            "start": "2022-01-07T17:00:00.000Z",
            "finish": "2022-07-07T17:00:00.000Z",
            "duration": "181"
        }
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
## Get all Projects
Token is obtained from login response
* ### Endpoint
  `/api/projects`
* ### Method
  GET
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Success fetched all projects",
    "data": {
        "projectsOwned": [
            {
                "id": 32,
                "name": "Pengembangan proyek homestay",
                "admin": "john doe",
                "totalContract": 500000000,
                "duration": 181,
                "address": "Maluku",
                "cost": 0,
                "imageUrl": null
            },
            {
                "id": 33,
                "name": "Pembangunan Proyek IKN",
                "admin": "john doe",
                "totalContract": 500000000,
                "duration": 181,
                "address": "Sulawesi Selatan",
                "cost": 3150000,
                "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/project-gallery/fc33c8d3-dd96-42aa-ad15-0c23ca3fcebd.jpeg"
            },
            {
                "id": 35,
                "name": "Pengembangan proyek sengketa",
                "admin": "john doe",
                "totalContract": 500000000,
                "duration": 181,
                "address": "Maluku",
                "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/project-gallery/872d09fc-b568-4fed-a0d8-48272add655d.jpeg",
                "cost": 0
            },
            {
                "id": 36,
                "name": "Pengembangan proyek kolam renang",
                "admin": "john doe",
                "totalContract": 20000000,
                "duration": 122,
                "address": "Yogyakarta",
                "cost": 0,
                "imageUrl": null
            }
        ],
        "projectsCollab": [
            {
                "id": 29,
                "name": "Pembangunan Jembatan",
                "admin": "Rocket mail",
                "totalContract": 15000000,
                "duration": 52,
                "address": "Sulawesi Selatan",
                "cost": 3500000,
                "imageUrl": null
            },
            {
                "id": 30,
                "name": "Pembangunan Wc",
                "admin": "Rocket mail",
                "totalContract": 22000000,
                "duration": 52,
                "address": "Sulawesi Selatan",
                "cost": 1000000,
                "imageUrl": null
            },
            {
                "id": 37,
                "name": "Pengembangan proyek kolam renang",
                "admin": "john morisson",
                "totalContract": 20000000,
                "duration": 122,
                "address": "Yogyakarta",
                "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/project-gallery/7ebe194d-7eb7-497d-8e20-29694cbd8ae1.jpeg",
                "cost": 0
            }
        ],
        "budgets": {
            "sumContracts": 1577000000,
            "sumSpendings": 7650000,
            "remainingBudget": 1569350000
        },
        "percentageBudgets": {
            "spending": 0.4850982878883957,
            "remainBudget": 99.51490171211161
        }
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
## Get Specified Project
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId`
* ### Method
  GET
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ###  Response success 
  ```
  {
    "message": "Fetch single project successfully",
    "project": {
        "id": 29,
        "title": "Pembangunan Jembatan",
        "admin": "rocketmail",
        "adminId": 27,
        "totalContract": 15000000,
        "start": "2021-12-22T17:00:00.000Z",
        "finish": "2022-02-12T17:00:00.000Z",
        "address": "Sulawesi Selatan"
    },
    "spendings": [
        {
            "id": 19,
            "content": "Penyewaan jasa aduk semen dengan pasir",
            "cost": 2000000
        },
        {
            "id": 33,
            "content": "Pengecoran",
            "cost": 1500000
        }
    ],
    "members": [
        {
            "id": 49,
            "name": "rocketmail"
        },
        {
            "id": 50,
            "name": "john doe"
        }
    ],
    "tasks": [
        {
            "id": 1,
            "content": "Perancangan Kontruksi",
            "isFinished": 1
        },
        {
            "id": 10,
            "content": "Pengadukan Semen",
            "isFinished": 1
        }
    ]
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Project not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
## Update Project
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId`
* ### Method
  PUT
* ### Headers
  ```
  Content-Type: application/json
  Authorization: `Bearer ${token}`
  ```
* ### Body
  ```
  {
    "title": String,
    "address": String
  }
  ```
* ### Response Success 
  ```
  {
    "message": "Update project successfully",
    "data": [
        {
            "id": 33,
            "title": "Pembangunan Proyek IKN",
            "address": "Sulawesi Selatan"
        }
    ]
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Project not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because not owned data)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
## Delete Project
* ### Endpoint  
  `/api/projects/:projectId`
* ### Method
  DELETE
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Delete project successfully"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Project not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because not owned data)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```

## Get Logged User Data
Token is obtained from login response
* ### Endpoint  
  `/api/profile`
* ### Method
  GET
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Fetch user logged in successfully",
    "data": {
        "name": "rocketmail",
        "photo": "Some Avatar",
        "accountType": "company",
        "isVerified": 0,
        "numberPhone": 6289123456789,
        "email": "rocketmail@gmail.com",
        "facebook": null,
        "instagram": null
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```

## Update logged user
Token is obtained from login response
* ### Endpoint  
  `/api/profile`
* ### Method
  PUT
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  Content-Type: application/json
  ```
* ### Body
  ```
  {
    "name": String,
    "type": String,
    "numberPhone": String,
    "email": String,
    "facebook": String,
    "instagram": String,
  }
  ```
* ### Response Success
  ```
  {
    "message": "Update user logged in successfully",
    "data": {
        "facebook": "rocketmail FB",
        "instagram": "rocketmail_"
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
## Update photo profile 
Update photo profile for logged user  
token is obtained from login response 
* ### Endpoint  
  `/api/profile/photo`
* ### Method
  PUT
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "image": File
  ```
* ### Response success  
  ```
  {
    "message": "Update photo successfully",
    "photo": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-user-avatar/93ffb31c-db9e-4d7f-8df3-4f8a0d62585f.jpeg"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Delete logged user
Token is obtained from login response
* ### Endpoint  
  `/api/profile`
* ### Method
  DELETE
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Delete user successfully"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
## Search User by Fullname
Token is obtained from login response  
* ### Endpoint  
  `/api/user`
* ### Method
  POST
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  Content-Type: application/json
  ```
* ### Body
  ```
  {
    "name": String
  }
  ```
* ### Response Success
  ```
  {
    "searchResult": [
        {
            "USERID": 25,
            "FULLNAME": "jane doe",
            "EMAIL": "janedoe@gmail.com"
        },
        {
            "USERID": 28,
            "FULLNAME": "john morisson",
            "EMAIL": "morisson@gmail.com"
        }
    ]
  }
  ```
* ### Response fail (because request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input this fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```

## Add new Project Collaborator
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId`
* ### Method
  POST
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  Content-Type: application/json
  ```
* ### Body
  ```
  {
    "userId": String
  }
  ```
* ### Response Success
  ```
  {
    "message": "Add new projects collaborator successfully",
    "affectedData": {
        "projectId": 33,
        "userId": 25
    }
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because logged user already added) 
  ```
  {
    "statusCode": 400,
    "message": "Logged user already added",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because user result already added)
  ```
  {
    "statusCode": 400,
    "message": "User already added",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because logged user isn't project admin/owner) 
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project not found)
  ```
  {
      "statusCode": 404,
      "message": "Project not found",
      "error": "Not Found"
  }
  ```
## Delete Project Collaborator
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/members/:userId`
* ### Method
  DELETE
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Delete project's collaborator successfully"
  }
  ```
* ### Response fail (because logged user can't delete from project collaboration) 
  ```
  {
    "statusCode": 400,
    "message": "Cannot delete collaborator from logged user",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because logged user isn't project admin/owner) 
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project not found)
  ```
  {
      "statusCode": 404,
      "message": "Project not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because user not found)
  ```
  {
    "statusCode": 404,
    "message": "Collaborator id not found",
    "error": "Not Found"
  }
  ```
## Get all project spending  
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/budgets`
* ### Method
  GET
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success  
  ```
  {
    "message": "Fetch budgets successfully",
    "data": {
        "budgets": [
            {
                "id": 19,
                "projectId": 29,
                "date": "2022-03-16T17:00:00.000Z",
                "content": "Penyewaan jasa aduk semen dengan pasir",
                "amount": 20,
                "cost": 2000000
            }
        ],
        "report": {
            "totalBudget": 15000000,
            "totalSpending": 2000000,
            "remainBudget": 13000000
        }
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because project not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Add new project spending  
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/budgets`
* ### Method
  POST
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  Content-Type: application/json
  ```
* ### Body
  ```
  {
    "date": String (YYYY-MM-DD),
    "content": String,
    "amount": Number,
    "cost": Number
  }
  ```
* ### Response Success
  ```
  {
    "message": "Add new project spending successfully"
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because project admin isn't logged user)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project not found)
  ```
  {
      "statusCode": 404,
      "message": "Project not found",
      "error": "Not Found"
  }
  ```
## Delete existing project spending  
Token is obtained from login response  
* ### Endpoint  
  `/api/projects/:projectId/budgets/:budgetId`
* ### Method
  DELETE
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Delete existing project spending successfully"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because project admin isn't logged user)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Update total budget of project  
Token is obtained from login response  
* ### Endpoint  
  `/api/projects/:projectId/updateBudget`
* ### Method
  POST
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  Content-Type: application/json
  ```
* ### Body
  ```
  {
    "budget": Number
  }
  ```
* ### Response Success
  ```
  {
    "message": "Update budget contract successfully",
    "updatedBudget": 22000000
  }
  ```
* ### Response fail (because request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input this fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because project admin isn't logged user)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Project not found",
      "error": "Not Found"
  }
  ```
## Get single task  
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/task/:taskId`
* ### Method
  GET
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success
  ```
  {
    "message": "Fetch single task successfully",
    "data": {
        "id": 4,
        "content": "Perancangan Kontruksi",
        "isFinished": 0,
        "projectId": 32
    }
  }
  ```

* ### Response fail (because task not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because token not available)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
## Create a new task  
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/task`
* ### Method
  POST
* ### Headers
  ```
  Authorization: `Bearer ${token}`
  Content-Type: application/json
  ```
* ### Body  
  ```
  {
    "content": String
  }
  ```
* ### Response success
  ```
  {
    "message": "Create new project task successfully",
    "task": "Pengecoran"
  }
  ```
* ### Response fail (because request body not available (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input this fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because project admin isn't logged user)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project or task not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Update task  
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/task/:taskId`
* ### Method
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-Type: application/json
  ```
* ### Body  
  ```
  {
    "content": String
  }
  ```
* ### Response success
  ```
  {
    "message": "Update project task successfully",
    "updatedTask": "Pengadukan Semen"
  }
  ```
* ### Response fail (because request body not available (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input this fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because project admin isn't logged user)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project or task not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Delete Task
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/task/:taskId`
* ### Method
  DELETE
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Delete project task successfully"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because project admin isn't logged user)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project or task not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Finish task  
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/task/:taskId/finish`
* ### Method
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Task finished",
    "finishedTask": "Perancangan Kontruksi",
    "finishedBy": "rocketmail@gmail.com"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because project collaborator isn't logged user)
  ```
  {
    "statusCode": 403,
    "message": "Unpermission to access",
    "error": "Forbidden"
  }
  ```
* ### Response fail (because project or task not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Get specified project report   
Token is obtained from login response
* ### Endpoint  
  `/api/projects/:projectId/report`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Fetch project report successfully",
    "project": {
        "id": 32,
        "title": "Pengembangan proyek homestay",
        "address": "Maluku",
        "start": "2022-01-07T17:00:00.000Z",
        "finish": "2022-07-07T17:00:00.000Z",
        "duration": 181,
        "status": "On Going"
    },
    "reports": {
        "workDay": 76,
        "remainingDay": 105,
        "totalBudget": 500000000,
        "totalSpending": 0,
        "remainingBudget": 500000000,
        "totalTask": 3,
        "finishedTask": 1
    },
    "percentages": {
        "workDay": 42,
        "remainingDay": 58,
        "totalSpending": 0,
        "remainingBudget": 100,
        "task": 33,
        "total": 21
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because project not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Create new documentation for project management  
Add new gallery for documentation of project management   
Token is obtaind from login response  
* ### Endpoint  
  `/api/projects/:projectId/galleries`
* ### Method  
  POST
* ### Headers 
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
    "image": File,
	"description": String,
	"date": String (YYYY-MM-DD)
  ```
* ### Response success  
  ```
  {
    "message": "Create new documentation for construction project successfully",
    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/project-gallery/5352bf46-01ab-4cec-bb45-66ae75d2554f.jpeg"
  }
  ```
* ### Response failed (because request body not available (required))  
  ```
  {
    "statusCode": 400,
    "message": "Please, input all fields include upload an image file",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because project collaborator isn't logged user)  
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Get project galleries 
Get all gallery for documentation from single project 
* ### Endpoint  
  `/api/projects/:projectId/galleries`
* ### Method  
  GET
* ### Response success  
  ```
  {
    "message": "Get galleries for documentation of project management successfully",
    "galleries": [
        {
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/project-gallery/7ebe194d-7eb7-497d-8e20-29694cbd8ae1.jpeg"
        },
        {
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/project-gallery/5352bf46-01ab-4cec-bb45-66ae75d2554f.jpeg"
        }
    ]
  }
  ```
## Get total for each data
Get total for each important data for admin. Such as users, projects, catalogs, orders, and inspirations  
Token is obtained from login response  
* ### Endpoint  
  `/api/admin/dashboard`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "get all total data successfully",
    "total": {
        "user": 4,
        "project": 7,
        "serviceCatalog": 5,
        "order": 2,
        "inspiration": 4
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Get all users
Get all users data for dashboard admin, include total data  
Token is obtained from login response  
* ### Endpoint  
  `/api/admin/dashboard/users`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get all user data successfully",
    "data": [
        {
            "id": 24,
            "name": "john doe",
            "type": "personal",
            "isVerified": 0,
            "numPhone": "089123456789",
            "email": "johndoe@gmail.com"
        },
        {
            "id": 25,
            "name": "jane doe",
            "type": "organization",
            "isVerified": 0,
            "numPhone": "089123456789",
            "email": "janedoe@gmail.com"
        },
        {
            "id": 27,
            "name": "Rocket mail",
            "type": "organization",
            "isVerified": 0,
            "numPhone": "088123456789",
            "email": "rocketmail@gmail.com"
        },
        {
            "id": 28,
            "name": "john morisson",
            "type": "company",
            "isVerified": 0,
            "numPhone": "088987654321",
            "email": "morisson@gmail.com"
        }
    ],
    "total": 4,
    "information": {
        "verified": 0,
        "unVerified": 4
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Get all projects (admin)
Get all projects data for dashboard admin, include total data  
Token is obtained from login response  
* ### Endpoint  
  `/api/admin/dashboard/projects`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get all project data successfully",
    "projects": [
        {
            "id": 29,
            "title": "Pembangunan Jembatan",
            "owner": "Rocket mail",
            "totalContract": 15000000,
            "address": "Sulawesi Selatan",
            "startDate": "2021-12-22T16:00:00.000Z",
            "finishDate": "2022-02-12T16:00:00.000Z",
            "duration": 52
        },
        {
            "id": 30,
            "title": "Pembangunan Wc",
            "owner": "Rocket mail",
            "totalContract": 22000000,
            "address": "Sulawesi Selatan",
            "startDate": "2021-12-22T16:00:00.000Z",
            "finishDate": "2022-02-12T16:00:00.000Z",
            "duration": 52
        },
        {
            "id": 32,
            "title": "Pengembangan proyek homestay",
            "owner": "john doe",
            "totalContract": 500000000,
            "address": "Maluku",
            "startDate": "2022-01-07T16:00:00.000Z",
            "finishDate": "2022-07-07T16:00:00.000Z",
            "duration": 181
        },
        {
            "id": 33,
            "title": "Pembangunan Proyek IKN",
            "owner": "john doe",
            "totalContract": 500000000,
            "address": "Sulawesi Selatan",
            "startDate": "2022-01-07T16:00:00.000Z",
            "finishDate": "2022-07-07T16:00:00.000Z",
            "duration": 181
        },
        {
            "id": 35,
            "title": "Pengembangan proyek sengketa",
            "owner": "john doe",
            "totalContract": 500000000,
            "address": "Maluku",
            "startDate": "2022-01-07T16:00:00.000Z",
            "finishDate": "2022-07-07T16:00:00.000Z",
            "duration": 181
        },
        {
            "id": 36,
            "title": "Pengembangan proyek kolam renang",
            "owner": "john doe",
            "totalContract": 20000000,
            "address": "Yogyakarta",
            "startDate": "2022-03-25T16:00:00.000Z",
            "finishDate": "2022-07-25T16:00:00.000Z",
            "duration": 122
        },
        {
            "id": 37,
            "title": "Pengembangan proyek kolam renang",
            "owner": "john morisson",
            "totalContract": 20000000,
            "address": "Yogyakarta",
            "startDate": "2022-03-25T16:00:00.000Z",
            "finishDate": "2022-07-25T16:00:00.000Z",
            "duration": 122
        }
    ],
    "total": 7
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Get all catalogs (admin)
Get all marketplace catalogs data for dashboard admin, include total data  
Token is obtained from login response  
* ### Endpoint  
  `/api/admin/dashboard/catalogs`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get all marketplace catalog data successfully",
    "catalogs": [
        {
            "id": 2,
            "title": "desain tugu sepeda",
            "creator": "Rocket mail",
            "description": "Perancangan tugu sepeda untuk provinsi DKI Jakarta",
            "cost": 2000000,
            "category": "Traditional",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/84dc9c5b-fe8b-491f-8070-c455ecfb0f63.jpeg"
        },
        {
            "id": 15,
            "title": "Rancangan stadion",
            "creator": "john doe",
            "description": "Desain / rancangan bangunan stadion bernuansa modern dan futuristik",
            "cost": 5000000,
            "category": "Modern",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/6c4b01fb-6ccd-4581-8c52-a35240b582fb.jpeg"
        },
        {
            "id": 16,
            "title": "Desain rancangan jembatan Sumatra - Jawa",
            "creator": "john doe",
            "description": "Jasa desain untuk rancangan konstruksi jembatan Sumatra - Jawa",
            "cost": 5000000,
            "category": "Modern",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg"
        },
        {
            "id": 17,
            "title": "Desain kantor pos",
            "creator": "Rocket mail",
            "description": "Jasa desain kantor pos dengan gaya modern",
            "cost": 5000000,
            "category": "modern",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg"
        },
        {
            "id": 18,
            "title": "Desain GWK full",
            "creator": "Rocket mail",
            "description": "Jasa desain GWK secara keseluruhan",
            "cost": 150000000,
            "category": "Modern",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg"
        }
    ],
    "total": 5
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Get all inspirations (admin)
Get all inspirations data for dashboard admin, include total data  
Token is obtained from login response  
* ### Endpoint  
  `/api/admin/dashboard/inspirations`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get all inspirations successfully",
    "inspirations": [
        {
            "id": 3,
            "title": "Rumah kontainer",
            "creator": "john doe",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/cdc08021-e0a7-4362-bccb-3dfc6f150817.jpeg",
            "description": "Arsitektur dengan gaya minimalis"
        },
        {
            "id": 4,
            "title": "Desain rumah pohon",
            "creator": "Rocket mail",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/6e521187-caff-4e65-8526-ac98e5ed5613.jpeg",
            "description": "Desain rumah pohon dengan gaya minimalis namun nyaman. Dengan konsep menyatu degan alam"
        },
        {
            "id": 5,
            "title": "Desain rumah bali",
            "creator": "Rocket mail",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/61630f10-7105-49ab-b9f7-3c7ddc15b982.jpeg",
            "description": "Desain rumah bali dengan konsep tradisional"
        },
        {
            "id": 6,
            "title": "Joglo",
            "creator": "Rocket mail",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/2085c93d-b6a6-4cf6-9690-73633ceb3c9b.jpeg",
            "description": "Desain rumah bergaya tradisional khas joglo. Menjunjung tinggi nilai persatuan dengan alam."
        }
    ],
    "total": 4
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Create a new product
Create a new product for marketplace (with image upload)  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/product`
* ### Method
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
    "image": File,
	"title": String,
	"description": String,
	"category": String,
	"cost": String
  ```
* ### Response Success
  ```
  {
    "Message": "Insert new product successfully",
    "data": {
        "title": "desain stadion",
        "category": "design",
        "isProduct": true,
        "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/591e035b-a4f9-4538-af69-a9fd212b11b0.jpeg"
    }
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because image not uploaded (required))
  ```
  {
    "statusCode": 400,
    "message": "Please, upload an image",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Create a new service
Create a new service for marketplace (with image upload)  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/service`
* ### Method
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "image": File,
  "title": String,
  "description": String,
  "category": String,
  "cost": String,
  "infoTitle1": String,
  "infoContent1": String,
  "infoDuration1": String,
  "infoCost1": String,
  "infoTitle2": String,
  "infoContent2": String,
  "infoDuration2": String,
  "infoCost2": String,
  "infoTitle3": String,
  "infoContent3": String,
  "infoDuration3": String,
  "infoCost3": String
  ```
* ### Response Success
  ```
  {
    "Message": "Insert new service successfully",
    "data": {
        "title": "Rancangan Rumah tipe 36",
        "category": "Services",
        "isProduct": false,
        "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/db5ab1ce-142d-43db-9013-1ed3e8a92a40.jpeg"
    }
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because image not uploaded (required))
  ```
  {
    "statusCode": 400,
    "message": "Please, upload an image",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Get all marketplace catalogs  
Get all marketplace catalog, contains all product and service  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get all marketplace catalogs successfully",
    "data": {
        "allCatalogs": [
            {
                "id": 2,
                "title": "desain tugu sepeda",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/84dc9c5b-fe8b-491f-8070-c455ecfb0f63.jpeg",
                "cost": 2000000,
                "category": "Traditional",
                "owner": "rocketmail"
            },
            {
                "id": 11,
                "title": "Rancangan kantor pos",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/b2727586-07c2-4842-b034-4618cc3ee828.png",
                "cost": 2500000,
                "category": "Minimalis",
                "owner": "rocketmail"
            },
            {
                "id": 14,
                "title": "Rancangan Rumah tipe 36",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/db5ab1ce-142d-43db-9013-1ed3e8a92a40.jpeg",
                "cost": 3000000,
                "category": "Modern",
                "owner": "rocketmail"
            },
            {
                "id": 15,
                "title": "desain stadion",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/591e035b-a4f9-4538-af69-a9fd212b11b0.jpeg",
                "cost": 5000000,
                "category": "Modern",
                "owner": "john doe"
            },
            {
                "id": 16,
                "title": "Desain rancangan jembatan Sumatra - Jawa",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
                "cost": 5000000,
                "category": "Modern",
                "owner": "john doe"
            }
        ],
        "userCatalogs": [
            {
                "id": 15,
                "title": "desain stadion",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/591e035b-a4f9-4538-af69-a9fd212b11b0.jpeg",
                "cost": 5000000,
                "category": "Modern",
                "owner": "john doe"
            },
            {
                "id": 16,
                "title": "Desain rancangan jembatan Sumatra - Jawa",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
                "cost": 5000000,
                "category": "Modern",
                "owner": "john doe"
            }
        ]
    },
    "metaInfo": {
        "totalCatalogs": 5,
        "totalUserCatalogs": 2
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Search marketplace catalog  
Search from all catalogs by title  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace`
* ### Method
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: application/json
  ```
* ### Body
  ```
  {
    "search": String
  }
  ```
* ### Response Success
  ```
  {
    "filteredResult": [
        {
            "id": 2,
            "title": "desain tugu sepeda",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/84dc9c5b-fe8b-491f-8070-c455ecfb0f63.jpeg",
            "cost": 2000000,
            "category": "Traditional",
            "owner": "rocketmail"
        },
        {
            "id": 15,
            "title": "desain stadion",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/591e035b-a4f9-4538-af69-a9fd212b11b0.jpeg",
            "cost": 5000000,
            "category": "Modern",
            "owner": "john doe"
        },
        {
            "id": 16,
            "title": "Desain rancangan jembatan Sumatra - Jawa",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
            "cost": 5000000,
            "category": "Modern",
            "owner": "john doe"
        }
    ]
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Filter marketplace catalog (category)
Filter marketplace catalogs by category  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace`
* ### Method
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: application/json
  ```
* ### Body
  ```
  {
    "category": String
  }
  ```
* ### Response Success
  ```
  {
    "filteredResult": [
        {
            "id": 14,
            "title": "Rancangan Rumah tipe 36",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/db5ab1ce-142d-43db-9013-1ed3e8a92a40.jpeg",
            "cost": 3000000,
            "category": "Modern",
            "owner": "rocketmail"
        },
        {
            "id": 15,
            "title": "desain stadion",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/591e035b-a4f9-4538-af69-a9fd212b11b0.jpeg",
            "cost": 5000000,
            "category": "Modern",
            "owner": "john doe"
        },
        {
            "id": 16,
            "title": "Desain rancangan jembatan Sumatra - Jawa",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
            "cost": 5000000,
            "category": "Modern",
            "owner": "john doe"
        }
    ]
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Filter marketplace catalog (price)  
Filter marketplace catalogs by range of price (minimum and maximum price)  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace`
* ### Method
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: application/json
  ```
* ### Body
  ```
  {
    "minPrice": Number, 
    "maxPrice": Number
  }
  ```
* ### Response Success
  ```
  {
    "filteredResult": [
        {
            "id": 11,
            "title": "Rancangan kantor pos",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/b2727586-07c2-4842-b034-4618cc3ee828.png",
            "cost": 2500000,
            "category": "Minimalis",
            "owner": "rocketmail"
        },
        {
            "id": 14,
            "title": "Rancangan Rumah tipe 36",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/db5ab1ce-142d-43db-9013-1ed3e8a92a40.jpeg",
            "cost": 3000000,
            "category": "Modern",
            "owner": "rocketmail"
        },
        {
            "id": 15,
            "title": "desain stadion",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/591e035b-a4f9-4538-af69-a9fd212b11b0.jpeg",
            "cost": 5000000,
            "category": "Modern",
            "owner": "john doe"
        },
        {
            "id": 16,
            "title": "Desain rancangan jembatan Sumatra - Jawa",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
            "cost": 5000000,
            "category": "Modern",
            "owner": "john doe"
        }
    ]
  }
  ```
* ### Response fail (because minimum price is larger than maximum price)  
  ```
  {
    "statusCode": 400,
    "message": "Sorry, filter input for minimum price must smaller than maximum price",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Get specified catalog  
Get single or specified marketplace catalog, for more details about catalog include reviews from previous buyer  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/catalogs/:catalogId`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get single catalog successfully",
    "data": {
        "result": {
            "id": 16,
            "title": "Desain rancangan jembatan Sumatra - Jawa",
            "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
            "description": "Jasa desain untuk rancangan konstruksi jembatan Sumatra - Jawa",
            "cost": 5000000,
            "category": "Modern",
            "owner": "john doe"
        },
        "info": [
            {
                "id": 19,
                "title": "standard",
                "content": "desain dengan fitur seperti biasa",
                "duration": 2,
                "cost": 2000000
            },
            {
                "id": 20,
                "title": "advanced",
                "content": "Penambahan fitur revisi desain 1 x",
                "duration": 4,
                "cost": 3500000
            },
            {
                "id": 21,
                "title": "professional",
                "content": "Konsultrasi gratis, penyaluran dengan kontraktor professional",
                "duration": 7,
                "cost": 5000000
            }
        ],
        "reviews": [
            {
                "id": 1,
                "comment": "Ya biasa ajasii",
                "rating": 4,
                "reviewer": "rocketmail"
            }
        ]
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Add to wishlist  
Add existing catalog to wishlist  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/wishlists`
* ### Method  
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: application/json
  ```
* ### Body
  ```
  {
    "catalogId": Number
  }
  ```
* ### Response Success
  ```
  {
    "message": "Insert to wishlist successfully"
  }
  ```
* ### Response fail (because catalog already exist in wishlists)
  ```
  {
    "statusCode": 400,
    "message": "Catalog already added",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
## Get all wishlists  
Get all wishlist catalog's from logged user  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/wishlists`
* ### Method  
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get wishlists successfully",
    "user": "john doe",
    "data": [
        {
            "id": 6,
            "catalog": {
                "id": 16,
                "title": "Desain rancangan jembatan Sumatra - Jawa",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
                "cost": 5000000,
                "category": "Modern"
            }
        },
        {
            "id": 9,
            "catalog": {
                "id": 2,
                "title": "desain tugu sepeda",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/84dc9c5b-fe8b-491f-8070-c455ecfb0f63.jpeg",
                "cost": 2000000,
                "category": "Traditional"
            }
        },
        {
            "id": 10,
            "catalog": {
                "id": 11,
                "title": "Rancangan kantor pos",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/b2727586-07c2-4842-b034-4618cc3ee828.png",
                "cost": 2500000,
                "category": "Minimalis"
            }
        },
        {
            "id": 12,
            "catalog": {
                "id": 14,
                "title": "Rancangan Rumah tipe 36",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/db5ab1ce-142d-43db-9013-1ed3e8a92a40.jpeg",
                "cost": 3000000,
                "category": "Modern"
            }
        }
    ]
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
## Delete from wishlist  
Delete existing wishlist catalog from logged user  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/wishlists/:wishlistId`
* ### Method  
  DELETE
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Catalog removed from wishlists"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Update existing product  
Update existing product in marketplace  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/product/:productId`
* ### Method  
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
    "image": File,
	"title": String,
	"description": String,
	"category": String,
	"cost": String
  ```
* ### Response success
  ```
  {
    "message": "Success update product data",
    "data": {
        "title": "Rancangan stadion",
        "description": "Desain / rancangan bangunan stadion bernuansa modern dan futuristik",
        "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/6c4b01fb-6ccd-4581-8c52-a35240b582fb.jpeg"
    }
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because not owned data)
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Update existing service  
Update existing service in marketplace  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/service/:serviceId`
* ### Method  
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "image": File,
  "title": String,
  "description": String,
  "category": String,
  "cost": String,
  "infoTitle1": String,
  "infoContent1": String,
  "infoDuration1": String,
  "infoCost1": String,
  "infoTitle2": String,
  "infoContent2": String,
  "infoDuration2": String,
  "infoCost2": String,
  "infoTitle3": String,
  "infoContent3": String,
  "infoDuration3": String,
  "infoCost3": String
  ```
* ### Response success
  ```
  {
    "message": "Success update service data",
    "data": {
        "title": "Desain kantor pos",
        "description": "Desain untuk rancangan kantor pos dengan gaya khas anak muda",
        "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/b2727586-07c2-4842-b034-4618cc3ee828.png",
        "info": [
            {
                "title": "standard",
                "content": "desain dengan fitur seperti biasa"
            },
            {
                "title": "advanced",
                "content": "Penambahan fitur revisi desain 1 x"
            },
            {
                "title": "professional",
                "content": "Konsultrasi gratis, penyaluran dengan kontraktor professional"
            }
        ]
    }
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because not owned data)
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Delete existing catalog  
Delete existing catalog in marketplace  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/catalogs/:catalogId`
* ### Method  
  DELETE
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success
  ```
  {
    "message": "Delete existing catalog successfully"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because not owned data)
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Create order  
Create new order, after watch catalog and select variation
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/catalogs/:catalogId/orders`
* ### Method  
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Body  
  ```
  {
    "catalogItemId": Number
  }
  ```
* ### Response success  
  ```
  {
    "message": "Create new order successfully",
    "id": 17,
    "cost": 75000000,
    "orderDate": "2022-06-27T04:32:38.031Z",
    "estimateDoneDate": "2022-07-03T04:32:38.031Z"
  }
  ```
* ### Response fail (because request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please, choose a variation firstly",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Get orders  
Get list of orders with buyer type from logged user  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/orders`
* ### Method  
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Get orders successfully",
    "orders": {
        "all": [
            {
                "id": 4,
                "order": {
                    "title": "Desain rancangan jembatan Sumatra - Jawa",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
                    "cost": 3500000,
                    "status": "Belum bayar",
                    "variation": "advanced",
                    "result": null,
                    "seller": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T03:45:58.000Z",
                    "done": "2022-06-16T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 5,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T04:31:58.000Z",
                    "done": "2022-06-14T16:00:00.000Z",
                    "cancel": "2022-06-13T16:00:00.000Z"
                }
            },
            {
                "id": 11,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Selesai",
                    "variation": "standard",
                    "result": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/slip-transfers/448e4a7e-b883-48cf-bc95-c670a878b712.jpeg",
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T06:52:50.000Z",
                    "done": "2022-06-15T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 14,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Belum bayar",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T07:16:43.000Z",
                    "done": "2022-06-17T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 12,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 3500000,
                    "status": "Pesanan aktif",
                    "variation": "advanced",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T06:53:11.000Z",
                    "done": "2022-06-19T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 13,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 5000000,
                    "status": "Pesanan aktif",
                    "variation": "professional",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T06:53:14.000Z",
                    "done": "2022-06-22T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 9,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Selesai",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-14T04:10:23.000Z",
                    "done": "2022-06-13T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 10,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-14T08:23:34.000Z",
                    "done": "2022-06-16T16:00:00.000Z",
                    "cancel": "2022-06-14T16:00:00.000Z"
                }
            },
            {
                "id": 6,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Pesanan aktif",
                    "variation": "advanced",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T05:11:32.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 8,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Belum bayar",
                    "variation": "advanced",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T05:45:39.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 7,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 150000000,
                    "status": "Perlu konfirmasi",
                    "variation": "professional",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T05:15:04.000Z",
                    "done": "2022-06-21T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "needVerification": [
            {
                "id": 4,
                "order": {
                    "title": "Desain rancangan jembatan Sumatra - Jawa",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
                    "cost": 3500000,
                    "status": "Belum bayar",
                    "variation": "advanced",
                    "result": null,
                    "seller": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T03:45:58.000Z",
                    "done": "2022-06-16T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 14,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Belum bayar",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T07:16:43.000Z",
                    "done": "2022-06-17T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 8,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Belum bayar",
                    "variation": "advanced",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T05:45:39.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "pending": [
            {
                "id": 7,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 150000000,
                    "status": "Perlu konfirmasi",
                    "variation": "professional",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T05:15:04.000Z",
                    "done": "2022-06-21T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "active": [
            {
                "id": 12,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 3500000,
                    "status": "Pesanan aktif",
                    "variation": "advanced",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T06:53:11.000Z",
                    "done": "2022-06-19T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 13,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 5000000,
                    "status": "Pesanan aktif",
                    "variation": "professional",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T06:53:14.000Z",
                    "done": "2022-06-22T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 6,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Pesanan aktif",
                    "variation": "advanced",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T05:11:32.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "done": [
            {
                "id": 11,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Selesai",
                    "variation": "standard",
                    "result": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/slip-transfers/448e4a7e-b883-48cf-bc95-c670a878b712.jpeg",
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-16T06:52:50.000Z",
                    "done": "2022-06-15T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 9,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Selesai",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-14T04:10:23.000Z",
                    "done": "2022-06-13T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "canceled": [
            {
                "id": 5,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-13T04:31:58.000Z",
                    "done": "2022-06-14T16:00:00.000Z",
                    "cancel": "2022-06-13T16:00:00.000Z"
                }
            },
            {
                "id": 10,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "result": null,
                    "seller": "Rocket mail"
                },
                "dates": {
                    "order": "2022-06-14T08:23:34.000Z",
                    "done": "2022-06-16T16:00:00.000Z",
                    "cancel": "2022-06-14T16:00:00.000Z"
                }
            }
        ]
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
## Get specified order  
Get single data of order from logged user, data more specified include order item  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/orders/:orderId`
* ### Method  
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Fetch single order successfully",
    "data": {
        "id": 2,
        "date": "2022-04-25T20:26:03.000Z",
        "cost": 5500000,
        "status": "Perlu konfirmasi",
        "slipPayment": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/slip-transfers/4c7906fa-6b91-4d32-a252-255a98105e06.jpeg",
        "item": [
            {
                "id": 16,
                "title": "Desain rancangan jembatan Sumatra - Jawa",
                "description": "Jasa desain untuk rancangan konstruksi jembatan Sumatra - Jawa",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/d4e93a5d-b379-463d-a822-92fa63cbe940.jpeg",
                "info": {
                    "variation": "advanced",
                    "content": "Penambahan fitur revisi desain 1 x",
                    "duration": 4,
                    "cost": 3500000
                }
            },
            {
                "id": 17,
                "title": "Desain kantor pos",
                "description": "Jasa desain kantor pos dengan gaya modern",
                "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                "info": {
                    "variation": "standard",
                    "content": "desain dengan fitur seperti biasa",
                    "duration": 2,
                    "cost": 2000000
                }
            }
        ]
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
      "statusCode": 401,
      "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Upload slip transfer  
Upload slip transfer for order confirmation  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/orders/:orderId/upload-slip`
* ### Method  
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "image": File
  ```
* ### Response success  
  ```
  {
    "message": "Upload slip transfer successfully",
    "slip": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/slip-transfers/ed7e4379-06a6-4d93-8b54-b4ab1e4d6c9e.jpeg"
  }
  ```
* ### Response fail (because order data already rejected by seller)  
  ```
  {
    "statusCode": 400,
    "message": "Sorry, you cant verification the order which is rejected by seller",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because image not uploaded (required))
  ```
  {
    "statusCode": 400,
    "message": "Please, upload a slip transfer",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because not owned data)
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Get order dashboards  
Get all orders data for admin dashboard, include total data  
Token is obtained from login response  
* ### Endpoint  
  `/api/admin/dashboard/orders`
* ### Method  
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Get all orders successfully",
    "data": [
        {
            "id": 2,
            "date": "2022-04-25T20:26:03.000Z",
            "cost": 5500000,
            "status": "Perlu konfirmasi",
            "cancelDate": null,
            "slipPayment": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/slip-transfers/4c7906fa-6b91-4d32-a252-255a98105e06.jpeg",
            "isApprove": true,
            "buyer": "Rocket mail"
        },
        {
            "id": 3,
            "date": "2022-04-26T00:19:27.000Z",
            "cost": 10000000,
            "status": "Selesai",
            "cancelDate": null,
            "slipPayment": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/slip-transfers/70fcbb01-b11e-41f5-a64c-021e2fa3da54.jpeg",
            "isApprove": true,
            "buyer": "Rocket mail"
        }
    ],
    "total": 2
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Verification order by admin  
Verification order by admin dashboard  
Token is obtained from login response  
* ### Endpoint  
  `/api/admin/dashboard/orders/:orderId/verification`
* ### Method  
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Admin verification for order successfully",
    "order": {
        "id": 2,
        "status": "Pesanan aktif"
    }
  }
  ```
* ### Response fail (because order already confirmed)  
  ```
  {
    "statusCode": 400,
    "message": "Order already confirmed",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because confirm an order not uploaded a slip transfer)  
  ``` 
  {
    "statusCode": 400,
    "message": "Please, confirm an order which is already uploaded a slip transfer",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Get all withdrawals (admin)  
Get all withdrawals data from reuested by seller for admin dashboard, include total data  
Token is obtained from login response 
* ### Endpoint  
  `/api/admin/dashboard/withdrawals`
* ### Method  
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Get all withdrawals data successfully",
    "withdrawals": [
        {
            "id": 3,
            "seller": "Rocket mail",
            "amount": 5000000,
            "status": "Selesai",
            "slipTransfer": null,
            "bank": "Bank Mandiri",
            "numberAccount": "7854652901"
        },
        {
            "id": 4,
            "seller": "Rocket mail",
            "amount": 5000000,
            "status": "Selesai",
            "slipTransfer": null,
            "bank": "Bank Mandiri",
            "numberAccount": "7854652901"
        },
        {
            "id": 5,
            "seller": "Rocket mail",
            "amount": 7500000,
            "status": "Selesai",
            "slipTransfer": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/withdrawal-slip/4ff5568f-643e-4647-99c7-4b7fd4baf377.png",
            "bank": "Bank BNI",
            "numberAccount": "245698765498012"
        },
        {
            "id": 6,
            "seller": "Rocket mail",
            "amount": 7500000,
            "status": "Selesai",
            "slipTransfer": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/withdrawal-slip/e9c64554-393b-4fe3-832d-ee64121b1355.png",
            "bank": "Bank BNI",
            "numberAccount": "245698765498012"
        },
        {
            "id": 7,
            "seller": "Rocket mail",
            "amount": 8000000,
            "status": "Selesai",
            "slipTransfer": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/withdrawal-slip/10580f3c-2d4d-4e97-a870-4ebf6d50986d.png",
            "bank": "Bank BNI",
            "numberAccount": "245698765498012"
        }
    ],
    "total": 5
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Verification withdrawal request  
Verification withdrawal request from seller by admin, with upload image of slip transfer to seller  
Token is obtained from login response 
* ### Endpoint  
  `/api/admin/dashboard/withdrawal/:withdrawalId/verification`
* ### Method  
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`,
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "image": File
  ```
* ### Response success  
  ```
  {
    "message": "Verification withdrawal request by seller successfully",
    "slip": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/withdrawal-slip/4ff5568f-643e-4647-99c7-4b7fd4baf377.png"
  }
  ```
* ### Response fail (because verification withdrawal request which one already done)  
  ```
  {
    "statusCode": 400,
    "message": "Sorry, you cant verification withdrawal request which one already done",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)  
  ```
  {
    "statusCode": 404,
    "message": "Data not found",
    "error": "Not Found"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Get orders data (for seller)  
Get all orders data to seller with logged user type seller  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/seller/orders`
* ### Method  
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Get orders for seller successfully",
    "orders": {
        "all": [
            {
                "id": 2,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 5500000,
                    "status": "Perlu konfirmasi",
                    "variation": "standard",
                    "buyer": "Rocket mail"
                },
                "dates": {
                    "order": "2022-04-25T20:26:03.000Z",
                    "done": null,
                    "cancel": null
                }
            },
            {
                "id": 3,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 10000000,
                    "status": "Selesai",
                    "variation": "professional",
                    "buyer": "Rocket mail"
                },
                "dates": {
                    "order": "2022-04-26T00:19:27.000Z",
                    "done": "2022-05-16T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 5,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T04:31:58.000Z",
                    "done": "2022-06-14T16:00:00.000Z",
                    "cancel": "2022-06-13T16:00:00.000Z"
                }
            },
            {
                "id": 6,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Pesanan aktif",
                    "variation": "advanced",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T05:11:32.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 7,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 150000000,
                    "status": "Perlu konfirmasi",
                    "variation": "professional",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T05:15:04.000Z",
                    "done": "2022-06-21T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 8,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Belum bayar",
                    "variation": "advanced",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T05:45:39.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 9,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Selesai",
                    "variation": "standard",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-14T04:10:23.000Z",
                    "done": "2022-06-13T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 10,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-14T08:23:34.000Z",
                    "done": "2022-06-16T16:00:00.000Z",
                    "cancel": "2022-06-14T16:00:00.000Z"
                }
            }
        ],
        "needVerification": [
            {
                "id": 8,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Belum bayar",
                    "variation": "advanced",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T05:45:39.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "pending": [
            {
                "id": 2,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 5500000,
                    "status": "Perlu konfirmasi",
                    "variation": "standard",
                    "buyer": "Rocket mail"
                },
                "dates": {
                    "order": "2022-04-25T20:26:03.000Z",
                    "done": null,
                    "cancel": null
                }
            },
            {
                "id": 7,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 150000000,
                    "status": "Perlu konfirmasi",
                    "variation": "professional",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T05:15:04.000Z",
                    "done": "2022-06-21T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "active": [
            {
                "id": 6,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 75000000,
                    "status": "Pesanan aktif",
                    "variation": "advanced",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T05:11:32.000Z",
                    "done": "2022-06-18T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "done": [
            {
                "id": 3,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 10000000,
                    "status": "Selesai",
                    "variation": "professional",
                    "buyer": "Rocket mail"
                },
                "dates": {
                    "order": "2022-04-26T00:19:27.000Z",
                    "done": "2022-05-16T16:00:00.000Z",
                    "cancel": null
                }
            },
            {
                "id": 9,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Selesai",
                    "variation": "standard",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-14T04:10:23.000Z",
                    "done": "2022-06-13T16:00:00.000Z",
                    "cancel": null
                }
            }
        ],
        "canceled": [
            {
                "id": 5,
                "order": {
                    "title": "Desain kantor pos",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/23a17ffc-cb2b-427e-9470-7f5201e331c8.jpeg",
                    "cost": 2000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-13T04:31:58.000Z",
                    "done": "2022-06-14T16:00:00.000Z",
                    "cancel": "2022-06-13T16:00:00.000Z"
                }
            },
            {
                "id": 10,
                "order": {
                    "title": "Desain GWK full",
                    "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/marketplace/2d4a6273-c889-44d5-8788-af9782499f0f.jpeg",
                    "cost": 45000000,
                    "status": "Canceled",
                    "variation": "standard",
                    "buyer": "john doe"
                },
                "dates": {
                    "order": "2022-06-14T08:23:34.000Z",
                    "done": "2022-06-16T16:00:00.000Z",
                    "cancel": "2022-06-14T16:00:00.000Z"
                }
            }
        ]
    }
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Done order by buyer  
Done or finish order by buyer  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/orders/:orderId/done`
* ### Method  
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```  
  {
      "message": "Orders successfully done"
  }
  ```
* ### Response fail (because order status not activated)  
  ```
  {
    "statusCode": 400,
    "message": "Please, done an order which is already activated",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because order not approved by seller)
  ```
  {
    "statusCode": 400,
    "message": "Please, done an order which is already approved by seller",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because buyer isn't logged user)  
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Reject order by seller  
Reject order by seller  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/seller/orders/:orderId/reject`
* ### Method  
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Order rejected by seller"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Upload service result by seller (finishing)  
Upload a service result by seller for finishing task of order management  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/seller/orders/:orderId/upload-result`
* ### Method  
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "result": File
  ```
* ### Response success  
  ```
  {
    "message": "Uploading order result by seller successfully",
    "result": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/slip-transfers/448e4a7e-b883-48cf-bc95-c670a878b712.jpeg"
  }
  ```
* ### Response fail (because file not uploaded (required))
  ```
  {
    "statusCode": 400,
    "message": "Please, you must upload a file result of your services",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because order status is inactive)
  ```
  {
    "statusCode": 400,
    "message": "Please, upload an order result which is already activated",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because not owned data)
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Get list banks  
Get list of bank which is already added by seller user, for withdrawal (data source for drop down of select banks)  
Token is obtained from login response 
* ### Endpoint  
  `/api/marketplace/withdrawal/banks`
* ### Method  
  GET
* ### Headers 
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Get banks data for withdrawal successfully",
    "banks": [
        {
            "id": 1,
            "name": "Bank Mandiri",
            "numberAccount": 7854652901
        }
    ]
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Add new bank data  
Add new bank data, for withdrawal (data source for drop down of select banks)  
Token is obtained from login response 
* ### Endpoint  
  `/api/marketplace/withdrawal/banks`
* ### Method  
  POST
* ### Headers 
  ```
  Authorization: `Bearer ${token}`
  Content-type: application/json
  ```
* ### Request Body  
  ```
  {
    "name": String,
    "numberAccount": Number
  }
  ```
* ### Response success  
  ```
  {
    "message": "Add new bank account for withdrawal successfully",
    "bank": {
        "name": "Bank BNI",
        "numberAccount": 245698765498012
    }
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Get list of withdrawal  
Get list of withdraal history from logged seller user, include total balance    
Token is obtained from login response   
* ### Endpoint  
  `/api/marketplace/withdrawals`
* ### Method  
  GET
* ### Headers 
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response success  
  ```
  {
    "message": "Get withdrawals data successfully",
    "totalBalance": 127500000,
    "finishWithdrawals": [
        {
            "id": 9,
            "amount": 8000000,
            "date": "2022-06-27T16:00:00.000Z",
            "status": "Selesai",
            "slipTransfer": null,
            "bank": "Bank Mandiri",
            "numberAccount": "7854652901"
        }
    ],
    "pendingWithdrawals": [
        {
            "id": 10,
            "amount": 3500000,
            "date": "2022-06-27T16:00:00.000Z",
            "status": "Pending",
            "slipTransfer": null,
            "bank": "Bank BNI",
            "numberAccount": "245698765498012"
        }
    ]
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## New withdrawal request  
Create new withdrawal request for seller    
Token is obtained from login response 
* ### Endpoint  
  `/api/marketplace/withdrawals`
* ### Method  
  POST
* ### Headers 
  ```
  Authorization: `Bearer ${token}`
  Content-type: application/json
  ```
* ### Request body  
  ```
  {
    "amount": Number,
    "bankId": String
  }
  ```
* ### Response success  
  ```
  {
    "message": "Request withdrawal successfully",
    "amount": 7500000
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Please input all fields",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because withdrawal request amount is larger than current total balance)
  ```
  {
    "statusCode": 400,
    "message": "Sorry, you can't request withdrawal with amount is more than your total balance",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Create new reviews  
Create a new review for finished order by buyer  
Token is obtained from login response  
* ### Endpoint  
  `/api/marketplace/orders/:orderId/items/:itemId/review`
* ### Method  
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`,
  Content-type: application/json
  ```
* ### Body
  ```
  {
    "rating": Number,
    "comment": String
  }
  ```
* ### Response success  
  ```
  {
    "message": "Successfully insert new reviews",
    "rating": 3.5,
    "comment": "Ya biasa ajasii",
    "reviewer": "rocketmail"
  }
  ```
* ### Response fail (because an order unfinished)
  ```
  {
    "statusCode": 400,
    "message": "Please, give a review and comment to order which is already done",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Create new inspiration  
Create a new portfolio for other user's inpiration to make a new construction project  
Include image upload, image stored in AWS S3 cloud storage  
Token is obtained from login response 
* ### Endpoint  
  `/api/inspirations`
* ### Method
  POST
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "title": String,
  "description": String,
  "image": File,
  ```
* ### Response Success
  ```
  {
    "message": "Create new inspiration successfully",
    "data": {
        "title": "Desain rumah pohon",
        "image": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/6e521187-caff-4e65-8526-ac98e5ed5613.jpeg"
    }
  }
  ```
* ### Response fail (because one of request body not filled (required))
  ```
  {
    "statusCode": 400,
    "message": "Sorry, all input field must required",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because image not uploaded (required))
  ```
  {
    "statusCode": 400,
    "message": "Please, upload an image",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Get all inspirations  
Get all inspiration from all users, with total data    
Include with inspiration from logged user, but splitted in another arrays  
Token is obtained from login response  
* ### Endpoint  
  `/api/inspirations`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success  
  ```
  {
    "message": "Get all inspirations successfully",
    "inspirations": [
        {
            "id": 1,
            "title": "Inspirasi rumah arsitektur bali",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/5a8c18b4-04e9-4733-b678-fdd72ec46cda.jpeg",
            "description": "Desain rumah dengan gaya arsitektur bali, cocok untuk tempat beriklim tropis namun sejuk",
            "creator": "rocketmail"
        },
        {
            "id": 2,
            "title": "Inspirasi rumah bahan kayu",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/4bc84fa4-4f2c-4271-b116-5df40c9b77fa.jpeg",
            "description": "Desain rumah dengan gaya arsitektur rumah panggung, dengan berbahan kayu",
            "creator": "john doe"
        },
        {
            "id": 3,
            "title": "Inspirasi rumah kontainer",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/b0281b48-9825-4add-ad4b-0d161be55a86.jpeg",
            "description": "Desain rumah dengan gaya arsitektur rumah minimalis, dengan berbahan kontainer",
            "creator": "john doe"
        },
        {
            "id": 4,
            "title": "Desain rumah pohon",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/6e521187-caff-4e65-8526-ac98e5ed5613.jpeg",
            "description": "Desain rumah pohon dengan gaya minimalis namun nyaman. Dengan konsep menyatu degan alam",
            "creator": "rocketmail"
        }
    ],
    "userInspirations": [
        {
            "id": 1,
            "title": "Inspirasi rumah arsitektur bali",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/5a8c18b4-04e9-4733-b678-fdd72ec46cda.jpeg",
            "description": "Desain rumah dengan gaya arsitektur bali, cocok untuk tempat beriklim tropis namun sejuk",
            "creator": "rocketmail"
        },
        {
            "id": 4,
            "title": "Desain rumah pohon",
            "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/6e521187-caff-4e65-8526-ac98e5ed5613.jpeg",
            "description": "Desain rumah pohon dengan gaya minimalis namun nyaman. Dengan konsep menyatu degan alam",
            "creator": "rocketmail"
        }
    ],
    "total": {
        "inspirations": 4,
        "userInspirations": 2
    }
  }
  ```
* ### Response fail (because token not available or expired)  
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
## Get detail inspirations  
Get detail inspiration for more detailed information about inspiration    
Token is obtained from login response  
* ### Endpoint  
  `/api/inspirations/:inspirationId`
* ### Method
  GET
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Get single inspiration successfully",
    "data": {
        "id": 3,
        "title": "Inspirasi rumah kontainer",
        "imageUrl": "https://pitect-services.s3.ap-southeast-1.amazonaws.com/pitect-inspirations/b0281b48-9825-4add-ad4b-0d161be55a86.jpeg",
        "description": "Desain rumah dengan gaya arsitektur rumah minimalis, dengan berbahan kontainer",
        "creator": "john doe",
        "facebookId": null,
        "instagramId": null
    }
  }
  ```
* ### Response fail (because token not available or expired)  
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
## Update existing inspiration  
Update existing inspiration, all input include file upload is not required    
Token is obtained from login response 
* ### Endpoint  
  `/api/inspirations/:inspirationId`
* ### Method
  PUT
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  Content-type: multipart/form-data
  ```
* ### Body  
  Because this endpoint contains file upload, make sure you added an attribute `enctype` with value `multipart/form-data` in your form. Then make sure you append each of body field in `formData()`.
  ```
  "title": String,
  "description": String,
  "image": File,
  ```
* ### Response Success
  ```
  {
    "message": "Update inspiration successfully",
    "affectedId": 2
  }
  ```
* ### Response fail (because uploaded file not an image)
  ```
  {
    "statusCode": 400,
    "message": "Invalid Image File Type",
    "error": "Bad Request"
  }
  ```
* ### Response fail (because token not available or expired)  
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because inspiration creator isn't logged user)  
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
* ### Response fail (because uploaded image size is larger than limit)
  ```
  {
    "statusCode": 413,
    "message": "File too large",
    "error": "Payload Too Large"
  }
  ```
## Delete inspiration  
Delete existing inspiration, include stored image in aws s3 cloud storage  
Token is obtained from login response 
* ### Endpoint  
  `/api/inspirations/:inspirationId`
* ### Method
  DELETE
* ### Headers  
  ```
  Authorization: `Bearer ${token}`
  ```
* ### Response Success
  ```
  {
    "message": "Delete existing inspiration data successfully",
  }
  ```
* ### Response fail (because token not available or expired)  
  ```
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```
* ### Response fail (because inspiration creator isn't logged user)  
  ```
  {
      "statusCode": 403,
      "message": "Forbidden to access",
      "error": "Forbidden"
  }
  ```
* ### Response fail (because data not found)
  ```
  {
      "statusCode": 404,
      "message": "Data not found",
      "error": "Not Found"
  }
  ```
