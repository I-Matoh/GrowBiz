# GrowBiz
Spending Tracker For SMEs
Grow with us!

# GrowBiz: Spending Tracker for SMEs

*Grow with us!*

## Overview

GrowBiz is a user-friendly spending tracker designed specifically for Small and Medium Enterprises (SMEs). It helps business owners and managers monitor expenses, categorize spending, generate reports, and gain insights to optimize financial health. Built with simplicity and scalability in mind, GrowBiz empowers SMEs to make data-driven decisions without the complexity of enterprise-level software.

Whether you're a startup tracking daily operational costs or an established SME managing vendor payments and employee reimbursements, GrowBiz provides intuitive tools to streamline your financial tracking.

## Key Features

- **Expense Tracking**: Easily log expenses with details like date, amount, category, and notes.
- **Categorization**: Pre-defined categories (e.g., Office Supplies, Marketing, Utilities) with options for custom ones.
- **Reporting**: Generate customizable reports (daily, weekly, monthly) with charts and summaries.
- **Budgeting**: Set budgets per category and receive alerts for overspending.
- **Multi-User Access**: Role-based permissions for team members (e.g., admin, viewer).
- **Integration**: Connect with bank APIs, accounting software (e.g., QuickBooks, Xero), and export to CSV/PDF.
- **Mobile-Friendly**: Responsive web app with optional mobile app for on-the-go tracking.
- **Security**: Data encryption, secure authentication, and compliance with GDPR/equivalent standards.
- **Analytics**: Visual dashboards with trends, forecasts, and expense breakdowns.
- **Customization**: Themes, currency support (multi-currency for international SMEs), and localization.

## Tech Stack

- **Frontend**: React.js with Material-UI for a modern, responsive interface.
- **Backend**: Node.js with Express.js for API services.
- **Database**: MongoDB for flexible, scalable data storage (or PostgreSQL for relational needs).
- **Authentication**: JWT-based with OAuth support.
- **Deployment**: Docker for containerization, deployable on AWS, Heroku, or self-hosted servers.
- **Other Tools**: Chart.js for visualizations, Nodemailer for alerts.

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (or your preferred database)
- Git

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/growbiz.git
   cd growbiz
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```
   MONGODB_URI=mongodb://localhost:27017/growbiz
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. For production:
   ```
   npm run build
   npm start
   ```

### Docker Installation
1. Build the Docker image:
   ```
   docker build -t growbiz .
   ```

2. Run the container:
   ```
   docker run -p 3000:3000 -e MONGODB_URI=your_mongo_uri growbiz
   ```

## Usage

1. **Sign Up/Login**: Access the app at `http://localhost:3000`. Create an account or log in.
2. **Add Expenses**: Navigate to the "Expenses" tab, click "Add New", and fill in the details.
3. **View Dashboard**: See real-time analytics on the home page.
4. **Generate Reports**: Go to "Reports", select filters, and export as needed.
5. **Set Budgets**: In "Settings > Budgets", define limits and enable notifications.

### API Endpoints (for Developers)
- `POST /api/auth/register`: Register a new user.
- `POST /api/expenses`: Add a new expense (requires auth).
- `GET /api/reports/monthly`: Fetch monthly report (requires auth).

Full API documentation available in `/docs/api.md`.

## Configuration

- **Database**: Edit `.env` for connection strings.
- **Email Alerts**: Integrate with SMTP in `.env` (e.g., `SMTP_HOST=smtp.gmail.com`).
- **Custom Categories**: Modify `src/config/categories.js`.
- **Currency**: Set default in `src/config/app.js` (supports USD, EUR, KES, etc.).

## Contributing

We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`.
3. Commit changes: `git commit -m 'Add YourFeature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) and include tests for new features.

## Testing

Run unit and integration tests:
```
npm test
```

Uses Jest and Supertest.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Project Maintainer**: 
- **Issues**: Report bugs or suggest features on [GitHub Issues](https://github.com/yourusername/growbiz/issues).
- **Community**: Join our Discord or follow us on X (@GrowBizApp).

*Grow with us! Let's build better financial tools for SMEs together.*
