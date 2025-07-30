# SecureBank - Banking Web Application

A modern, secure banking web application built with Angular 20, featuring a comprehensive dashboard for managing accounts, transactions, cards, and user management.

## 🏦 Use Case

SecureBank is designed for financial institutions and banking organizations that need a modern, user-friendly web interface for their customers. The application provides:

- **Customer Self-Service**: Users can view their account information, transaction history, and manage their cards
- **Administrative Dashboard**: Bank staff can manage user accounts, monitor transactions, and handle customer requests
- **Secure Authentication**: JWT-based authentication with session management
- **Responsive Design**: Modern UI that works across desktop and mobile devices

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication system
- Session management with automatic token handling
- Route guards for protected pages
- HTTP interceptors for automatic token inclusion in requests
- Secure logout functionality

### 📊 Dashboard
- Overview of account balances and financial statistics
- Quick action buttons for common banking tasks
- Recent activity feed
- Real-time account summary

### 💳 Account Management
- Account overview with balance information
- Transaction history with filtering capabilities
- Account details and settings
- Quick transfer and payment options

### 💳 Card Management
- View all credit and debit cards
- Card status monitoring (Active, Blocked, Expired)
- Credit limit tracking
- Card blocking and reporting features
- Request new cards functionality

### 📈 Transaction History
- Comprehensive transaction listing
- Filtering by date, type, and amount
- Transaction status tracking
- Export capabilities for financial records

### 👥 User Management
- User account administration
- User status monitoring (Active, Suspended)
- Account type management
- Bulk operations support
- User activity tracking

### 🎨 Modern UI/UX
- Clean, professional banking interface
- Yellow and green color scheme for trust and growth
- Responsive design for all devices
- Interactive buttons with hover effects
- Centralized styling system for consistency

## 🚀 Technology Stack

- **Frontend Framework**: Angular 20
- **Language**: TypeScript
- **Styling**: SCSS with CSS Variables
- **Routing**: Angular Router with Guards
- **State Management**: RxJS BehaviorSubject
- **HTTP Client**: Angular HttpClient with Interceptors
- **Authentication**: JWT Tokens
- **Build Tool**: Angular CLI

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── navigation/          # Main navigation component
│   ├── services/
│   │   ├── auth.service.ts      # Authentication service
│   │   ├── auth.interceptor.ts  # HTTP interceptor for JWT
│   │   └── login.service.ts     # Login API service
│   ├── guards/
│   │   └── auth.guard.ts        # Route protection guard
│   ├── styles/
│   │   └── banking-theme.scss   # Centralized styling
│   ├── constants/
│   │   └── app-route.ts         # Route constants
│   ├── dashboard/               # Dashboard component
│   ├── login/                   # Login component
│   ├── account/                 # Account management
│   ├── transactions/            # Transaction history
│   ├── cards/                   # Card management
│   ├── users/                   # User management
│   └── app.*                    # Main app files
├── styles.scss                  # Global styles
└── main.ts                      # Application entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rinabaral/basic-banking-web.git
   cd basic-banking-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## 🔧 Configuration

### Environment Setup
The application uses Angular's built-in configuration system. Key configurations are in:
- `src/app/app.config.ts` - Application providers and HTTP interceptors
- `src/app/app.routes.ts` - Route definitions with guards
- `src/app/styles/banking-theme.scss` - Theme variables and styling

### Backend Integration
The application is designed to work with a Spring Boot backend. Update the API endpoints in the services to match your backend configuration.

## 🎯 Key Features Implementation

### Authentication Flow
1. User enters credentials on login page
2. JWT token is received and stored in localStorage
3. Token is automatically included in all subsequent HTTP requests
4. Route guards protect authenticated pages
5. Logout clears token and redirects to login

### Navigation System
- Fixed navigation bar on all authenticated pages
- Active route highlighting
- User information display
- Conditional rendering based on authentication status

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface elements
- Optimized for various screen sizes

## 🔒 Security Features

- **JWT Token Management**: Secure token storage and automatic inclusion in requests
- **Route Protection**: Guards prevent unauthorized access to protected pages
- **Session Management**: Automatic token validation and cleanup
- **HTTP Interceptors**: Automatic token injection for API calls

## 🎨 Design System

The application uses a consistent design system with:
- **Color Palette**: Yellow (#FFD700) and Green (#32CD32) theme
- **Typography**: Clean, readable fonts
- **Components**: Reusable UI components with consistent styling
- **Spacing**: Standardized spacing system
- **Shadows**: Subtle elevation effects

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common issues

## 🔄 Version History

- **v1.0.0**: Initial release with core banking features
- **v1.1.0**: Added navigation system and improved UI
- **v1.2.0**: Enhanced security and authentication features

---

**Note**: This is a frontend application. For a complete banking solution, you'll need to integrate with a backend API that provides the necessary banking services and data.
