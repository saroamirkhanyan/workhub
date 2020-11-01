## workhub.am

#### Backend of workhub.am
_________
## Usage
### Auth
#### Register
POST /user/register
\
body: {
  email,
  name,
  password
}
response = user

#### Login
POST /user/login
\
body: {
  email,
  password
}
\
response = token
