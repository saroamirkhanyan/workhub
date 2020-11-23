## workhub.am

#### Backend of workhub.am

---

## Usage

## Auth

### Register

##### Request

**POST** /user/register

| name     | type   | short description |
| -------- | ------ | ----------------- |
| email    | string | email of user     |
| name     | string | name of user      |
| password | string | password of user  |

##### Response

**auth-token in headers**

| name     | type   | short description     |
| -------- | ------ | --------------------- |
| email    | string | email of user         |
| name     | string | name of user          |
| password | string | password of user      |
| id       | string | unique id of user     |
| date     | string | date of creating user |

#

### Login

##### Request

**POST** /user/login
| name | type | short description |
|----------|--------|-----------------------|
| email | string | email of user |
| password | string | password of user |

##### Response

**auth-token in headers**

| name     | type   | short description     |
| -------- | ------ | --------------------- |
| email    | string | email of user         |
| name     | string | name of user          |
| password | string | password of user      |
| id       | string | unique id of user     |
| date     | string | date of creating user |

# workhub.am
