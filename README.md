
# Take Home Assignment

This project is a simple web application developed as part of the take-home assignment for the junior software engineer position. The application is built using React.js for the frontend and Django for the backend. It is deployed on AWS using S3, EC2, VPC, Subnets, CloudFront and IAM.

## Demo
https://drive.google.com/file/d/161daVAKOoihpB7cVjylH-ynNsxLj2SzT/view?usp=drive_link

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Tech Stack

**Frontend:** React

**Backend:** Django Framework

**Cloud Technology:** Amazon Web Services



## Authors

- [Darshan U M](https://github.com/Darshanum-27)


## Installation

Backend Setup (Django)

Create a virtual environment:
```Bash
python -m venv env
```

Activate the virtual environment:

```Bash
On Windows: env\Scripts\activate
On macOS and Linux: source env/bin/activate
```

Install Django:
```Bash
pip install django
```

Create a new Django project:
```Bash
django-admin startproject backend
cd backend
```

Create a new Django app:
```Bash
python manage.py startapp api
```

Add api to INSTALLED_APPS in backend/settings.py
```Bash
Run migrations:
python manage.py migrate
```

Start the Django development server:
```Bash
python manage.py runserver
```

## Frontend Setup (React.js)

Create a new React app:
```Bash
npx create-react-app frontend
cd frontend
```

Install additional dependencies:
```Bash
npm install axios
```

Start the React development server:
```Bash
npm start
```

## Connecting Frontend and Backend

In your React components, use Axios to make API calls to your Django backend:
javascriptCopyimport axios from 'axios';

```Bash
// Example API call
axios.get('http://localhost:8000/api/endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

In your Django settings.py, add CORS settings to allow requests from the React frontend:
```Bash
pythonCopyINSTALLED_APPS = [
    ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOW_ALL_ORIGINS = True  # For development only
Note: Install django-cors-headers with pip install django-cors-headers
```

## Running the Project

Start the Django server:
```Bash
cd backend
python manage.py runserver
```

In a new terminal, start the React development server:
```Bash
cd frontend
npm start
```


Your Django backend will be running on http://localhost:8000 and your React frontend on http://localhost:3000.
## Screenshots
1) Virtual Private Cloud Screenshot
<img width="1678" alt="VPC" src="https://github.com/user-attachments/assets/5fca1470-1212-4f8f-a2da-a923a53b8600">

2) Subnet Screenshot:
   <img width="1676" alt="subnet" src="https://github.com/user-attachments/assets/846aaac8-0985-434c-bb68-beac2225b46c">
3) S3 Bucket creation Screenshot:
   <img width="1680" alt="s3 Bucket1" src="https://github.com/user-attachments/assets/fbbc220a-da46-458e-8385-eca34c6f7eb5">

S3 Bucket React.js build files upload:
<img width="1680" alt="S3 Bucket2" src="https://github.com/user-attachments/assets/63d4a28d-e8cb-4dfd-bc08-701570969566">

s3 Bucket static Link:
<img width="1669" alt="S3 Bucket3" src="https://github.com/user-attachments/assets/5fd2d765-09ab-4eae-a49c-39dd8151806f">

Ec2 instance running:
 <img width="1680" alt="EC2" src="https://github.com/user-attachments/assets/d0f4272b-136e-4e58-8425-24a8da6fa553">

 Landing Page:
<img width="1680" alt="output1" src="https://github.com/user-attachments/assets/e2ba14a5-6278-4239-95a4-30a9d5606b74">

Defalut Value Enter:
<img width="1680" alt="output2" src="https://github.com/user-attachments/assets/239c09bf-54b6-474d-a928-178f9d21afc3">

Login Successful:
<img width="1680" alt="output3" src="https://github.com/user-attachments/assets/1c49b2d0-2fce-47cd-8d94-9db6c1ed26a3">

Back to Landing page from Login successful page:
<img width="1680" alt="output4" src="https://github.com/user-attachments/assets/4f2491e3-d7ed-430a-9df7-28c777558ce1">

Change Default Password:
<img width="1680" alt="output5" src="https://github.com/user-attachments/assets/0bb89d8e-1ad4-412e-80ea-48f6c3f276b5">

Default Password Changed Successfully
<img width="1680" alt="output6" src="https://github.com/user-attachments/assets/1ad4c0d0-4476-4b29-b51f-d46cb684e3b2">

Login with new Password:
<img width="1670" alt="output7" src="https://github.com/user-attachments/assets/9682d569-4c21-47be-89d1-6049d548949b">

Loggedin Successfully:
<img width="1680" alt="output8" src="https://github.com/user-attachments/assets/f75ffe1d-6f49-4e6e-9f81-71909523229e">

Wrong Password Message:
<img width="1673" alt="output9" src="https://github.com/user-attachments/assets/667ebc04-ed82-4cf4-99ae-ca74ac119e48">

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)]([https://katherineoelsner.com/](https://github.com/Darshanum-27))
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)]([https://www.linkedin.com/](https://www.linkedin.com/in/darshan-um/))







