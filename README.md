
# Take Home Assignment

This project is a simple web application developed as part of the take-home assignment for the junior software engineer position. The application is built using React.js for the frontend and Django for the backend. It is deployed on AWS using S3, EC2, VPC, Subnets, CloudFront and IAM.


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


## Demo

Insert gif or link to demo
IMG1

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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

