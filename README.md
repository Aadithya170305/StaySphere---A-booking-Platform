# StaySphere - A Booking Platform

A full-stack hotel and flight ticket booking platform (Airbnb Clone) that lets users search, book, and pay securely using PayPal. Built with a clean UI, seamless workflows, and a robust backend to ensure smooth booking experiences.

---

## I. Overview

StaySphere is an end-to-end booking system where users can:
1. Book Hotels
2. Book Flights
3. Make secure payments through PayPal
4. View booking success pages
5. Navigate through clean UI pages built using EJS templates
6. Enjoy a smooth checkout experience

This project integrates Node.js, Express, MongoDB, and PayPal SDK for complete booking and payment automation.

---

## II. Features

### Hotel Booking
- Browse hotel listings
- View details, pricing, and availability
- Complete bookings with secure payment

### Flight Booking
- Search flights by departure and destination
- Choose airlines & timings
- Instant booking confirmation

### PayPal Payment Integration
- Secure and encrypted payment processing
- Separate payment flows for hotels & flights
- Automatic success/failure redirection

### User Authentication
- User login & signup
- Secure password handling
- Session-based authentication

### Frontend (EJS + CSS)
- Clean and responsive UI
- Custom styles for listings, payments, and success pages

### Database (MongoDB (Mongoose))
- Stores user accounts
- Flight listings
- Hotel listings

---

## III. Tech Stack

Frontend :- S, CSS, JavaScript 
Backend :- Node.js, Express.js 
Database :- MongoDB, Mongoose 
Payments :- PayPal REST SDK 
Version Control :- Git & GitHub 
DevOps :- Docker, Kubernetes, GitHub Actions 

---

## IV. DevOps & Deployment

- Dockerized with multi-container setup
- Docker Compose for local orchestration
- Kubernetes (K8s) for container orchestration with init containers
- CI/CD Pipeline with GitHub Actions → auto builds and pushes to Docker Hub on every push
- Automatic database seeding on startup
- Hosted on Docker Hub

---

## V. How to Run

### Option 1 — Using Docker Compose 
```bash
# 1. Clone the repo
git clone https://github.com/Aadithya170305/StaySphere---A-booking-Platform

# 2. Create .env file
cp .env.example .env
# Add your PayPal credentials

# 3. Run
docker-compose up

# 4. Visit
http://localhost:3000
```

### Option 2 — Using Kubernetes (Minikube)
```bash
# 1. Start Minikube
minikube start --driver=docker

# 2. Apply all K8s configs
kubectl apply -f k8s/secret.yml
kubectl apply -f k8s/mongo-deployment.yml
kubectl apply -f k8s/mongo-service.yml
kubectl apply -f k8s/app-deployment.yml
kubectl apply -f k8s/app-service.yml

# 3. Forward port
kubectl port-forward service/staysphere-service 3000:3000

# 4. Visit
http://localhost:3000
```

### Option 3 — Pull from Docker Hub
```bash
docker pull aadithya1234/staysphere-app:latest
```

---

## VI. CI/CD Pipeline

Every push to `main` branch automatically:
1. Installs dependencies and checks the app
2. Builds Docker image
3. Pushes to Docker Hub

Pipeline: `GitHub → GitHub Actions → Docker Hub`

---

## VII. Environment Variables

Create a `.env` file with the following:

```env
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com
BASE_URL=http://localhost:3000
SECRET=yoursecretkey
MONGO_URL=mongodb://mongo-db:27017/realestateDB
FLIGHT_DB_URL=mongodb://mongo-db:27017/flightDB
```

---

## VIII. Project Structure

```
StaySphere/
├── .github/workflows/    # CI/CD pipeline
├── init/                 # Database seed data
├── k8s/                  # Kubernetes config files
├── models/               # Mongoose schemas
├── public/               # Static assets (CSS, images)
├── routes/               # Express routes
├── services/             # PayPal service
├── views/                # EJS templates
├── app.js                # Main server file
├── seed.js               # Database seeder
├── Dockerfile
├── docker-compose.yml
└── .env.example
```
