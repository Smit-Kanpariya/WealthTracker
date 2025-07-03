# 💰 WealthTracker

A comprehensive Full Stack AI-powered Finance Platform built with modern web technologies. Track your financial goals, analyze spending patterns, and get AI-driven insights to optimize your wealth management journey.

![Screenshot 2025-07-01 at 10 02 33 AM](https://github.com/user-attachments/assets/7b07aedb-d3fa-4a0d-9552-926e384f0297)

## ✨ Features

### 🤖 AI-Powered Insights

- **Smart Financial Analysis**: Get personalized recommendations based on your spending patterns
- **Predictive Budgeting**: AI-driven budget suggestions and expense forecasting
- **Investment Recommendations**: Intelligent investment advice tailored to your financial goals

### 📊 Financial Management

- **Expense Tracking**: Categorize and monitor all your expenses in real-time
- **Budget Planning**: Set and track budgets with visual progress indicators
- **Goal Setting**: Define financial goals and track your progress
- **Transaction History**: Comprehensive transaction logging and search

### 🔒 Security & Performance

- **Rate Limiting**: Built-in protection with ArcJet security
- **Real-time Updates**: Live data synchronization across all devices
- **Secure Authentication**: Robust user authentication and authorization
- **Data Encryption**: End-to-end encryption for all financial data

### 📱 User Experience

- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Dark/Light Mode**: Customizable themes for optimal viewing
- **Interactive Charts**: Beautiful data visualizations and analytics
- **Modern UI**: Clean, intuitive interface built with Shadcn UI components

## 🛠️ Tech Stack

### Frontend

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components

### Backend & Database

- **[Supabase](https://supabase.com/)** - Backend-as-a-Service with PostgreSQL
- **[Prisma](https://www.prisma.io/)** - Type-safe database ORM
- **[Inngest](https://www.inngest.com/)** - Background job processing and workflows

### Security & Monitoring

- **[ArcJet](https://arcjet.com/)** - Rate limiting and security protection
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication solution

## 📁 Project Structure

WealthTracker/
├── app/ # Next.js App Router
│ ├── (auth)/ # Authentication pages
│ ├── (dashboard)/ # Main application pages
│ ├── api/ # API routes
│ └── globals.css # Global styles
├── components/ # Reusable UI components
│ ├── ui/ # Shadcn UI components
│ ├── charts/ # Chart components
│ └── forms/ # Form components
├── lib/ # Utility functions
│ ├── db.ts # Database connection
│ ├── auth.ts # Authentication config
│ └── utils.ts # Helper functions
├── prisma/ # Database schema and migrations
├── public/ # Static assets
└── types/ # TypeScript type definitions

## 🔧 Configuration

### Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **User**: User authentication and profile data
- **Account**: Financial account information
- **Transaction**: Individual financial transactions
- **Budget**: Budget planning and tracking
- **Goal**: Financial goal setting and progress

### API Endpoints

- GET /api/transactions - Fetch user transactions
- POST /api/transactions - Create new transaction
- GET /api/budget - Get budget information
- POST /api/budget - Create/update budget
- GET /api/analytics - Financial analytics data

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Smit Kanpariya**

- GitHub: [@Smit-Kanpariya](https://github.com/Smit-Kanpariya)
- LinkedIn: [@Smit-Kanpariya](https://www.linkedin.com/in/smit-kanpariya/)

## Acknowledgments

- [Shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Vercel](https://vercel.com/) for the deployment platform
- The open-source community for the incredible tools and libraries

## Support

If you like this project, please give it a ⭐ on GitHub!

---

<div align="center">
  <strong>Built with ❤️ by Smit Kanpariya</strong>
</div>
