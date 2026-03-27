# StaySphere---A-booking-Platform
A full-stack hotel and flight ticket booking platform(Airbnb Clone) that lets users search, book, and pay securely using PayPal. Built with a clean UI, seamless workflows, and a robust backend to ensure smooth booking experiences.

I. Overview:- 

StaySphere is an end-to-end booking system where users can:
1.  Book Hotels
2.  Book Flights
3.  Make secure payments through PayPal
4.  View booking success pages
5.  avigate through clean UI pages built using EJS templates
6.  Enjoy a smooth checkout experience

This project integrates Node.js, Express, MongoDB, and PayPal SDK for complete booking and payment automation.

II. Features

1. Hotel Booking
2. Browse hotel listings
3. View details, pricing, and availability
4. Complete bookings with secure payment

III. Flight Booking

1. Search flights
2. Choose airlines & timings
3. Instant booking confirmation
4. PayPal Payment Integration
5. Secure and encrypted payment processing
6. Separate payment flows for hotels & flights

IV. Automatic success/failure redirection

1. User Authentication
2. User login & signup
3. Secure password handling

V. Session-based authentication

1. Frontend (EJS + CSS)
2. Clean and responsive UI
3. Custom styles for listings, payments, and success pages

VI. Database (MongoDB + Mongoose)

1. Stores user accounts
2. Flight listings
3. Hotel listings


VII. Tech Stack

Category	Technologies

1. Frontend:- 	EJS, CSS, JavaScript
2. Backend:- 	Node.js, Express.js
3. Database:- 	MongoDB, Mongoose
4. Payments:- 	PayPal REST SDK
5. Version Control:-	Git & GitHub

VIII. DevOps & Deployment

1. Dockerized with multi-container setup
2. Docker Compose for orchestration
3. Automatic database seeding on startup
4. Hosted on Docker Hub

IX. How to Run

Using Docker (Recommended)

1. Clone the repo
   git clone https://github.com/Aadithya170305/StaySphere---A-booking-Platform

2. Create .env file
   cp .env.example .env
   (Add your PayPal credentials)

3. Run
   docker-compose up

4. Visit http://localhost:3000

Docker Hub

docker pull aadithya1234/staysphere-app:latest

X. Environment Variables

1. PAYPAL_CLIENT_ID=your_paypal_client_id
2. PAYPAL_CLIENT_SECRET=your_paypal_client_secret
3. PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com
4. BASE_URL=http://localhost:3000
5. SECRET=yoursecretkey
6. MONGO_URL=mongodb://mongo-db:27017/realestateDB
7. FLIGHT_DB_URL=mongodb://mongo-db:27017/flightDB
