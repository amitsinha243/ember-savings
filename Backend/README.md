# WealthTracker Backend

Spring Boot backend API with MongoDB for WealthTracker application.

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- MongoDB 4.4+

## Setup Instructions

### 1. Install MongoDB

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0
```

**Ubuntu/Debian:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

**Windows:**
Download and install from https://www.mongodb.com/try/download/community

### 2. Configure Application

Edit `src/main/resources/application.properties`:

```properties
# Change MongoDB URI if needed
spring.data.mongodb.uri=mongodb://localhost:27017/wealthtracker

# Change JWT secret (MUST change in production!)
jwt.secret=your-unique-secret-key-minimum-256-bits-change-this

# Add your frontend URL
cors.allowed-origins=http://localhost:5173
```

### 3. Build and Run

```bash
# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The API will start on `http://localhost:8080`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Assets (Requires JWT Token)
- `GET /api/savings-accounts` - Get all savings accounts
- `POST /api/savings-accounts` - Create savings account
- `GET /api/mutual-funds` - Get all mutual funds
- `POST /api/mutual-funds` - Create mutual fund
- `GET /api/fixed-deposits` - Get all fixed deposits
- `POST /api/fixed-deposits` - Create fixed deposit

### Expenses (Requires JWT Token)
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create expense
- `DELETE /api/expenses/{id}` - Delete expense

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Deployment Options

### Option 1: Railway
1. Create account at https://railway.app
2. Create new project → Deploy from GitHub
3. Add MongoDB plugin
4. Set environment variables from application.properties

### Option 2: Heroku
1. Create account at https://heroku.com
2. Install Heroku CLI
3. Add MongoDB addon: `heroku addons:create mongolab`
4. Deploy: `git push heroku main`

### Option 3: AWS
1. Deploy to AWS Elastic Beanstalk
2. Use AWS DocumentDB for MongoDB
3. Configure security groups and load balancer

## Security Notes

- **IMPORTANT**: Change `jwt.secret` in production!
- Passwords are encrypted using BCrypt
- JWT tokens expire after 24 hours (configurable)
- CORS is configured for specified origins only
