import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./ui/layout/AppShell";
import { ErrorPage } from "./ui/pages/ErrorPage";
import { HomePage } from "./ui/pages/HomePage";
import { SearchPage } from "./ui/pages/SearchPage";
import { ProfilesPage } from "./ui/pages/ProfilesPage";
import { ProfileDetailsPage } from "./ui/pages/ProfileDetailsPage";
import { PackagesPage } from "./ui/pages/PackagesPage";
import { FaqPage } from "./ui/pages/FaqPage";
import { AboutPage } from "./ui/pages/AboutPage";
import { ContactPage } from "./ui/pages/ContactPage";
import { LoginPage } from "./ui/pages/auth/LoginPage";
import { RegisterPage } from "./ui/pages/auth/RegisterPage";
import { ForgotPasswordPage } from "./ui/pages/auth/ForgotPasswordPage";
import { ResetPasswordPage } from "./ui/pages/auth/ResetPasswordPage";
import { VerifyPage } from "./ui/pages/auth/VerifyPage";
import { DashboardPage } from "./ui/pages/app/DashboardPage";
import { SettingsPage } from "./ui/pages/app/SettingsPage";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { PublicOnlyRoute } from "./auth/PublicOnlyRoute";

export const routes = createBrowserRouter([
  {
    element: <AppShell />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/profiles", element: <ProfilesPage /> },
      { path: "/profiles/:id", element: <ProfileDetailsPage /> },
      { path: "/packages", element: <PackagesPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },

      {
        path: "/login",
        element: (
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        )
      },
      {
        path: "/register",
        element: (
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        )
      },
      {
        path: "/forgot-password",
        element: (
          <PublicOnlyRoute>
            <ForgotPasswordPage />
          </PublicOnlyRoute>
        )
      },
      {
        path: "/reset-password",
        element: (
          <PublicOnlyRoute>
            <ResetPasswordPage />
          </PublicOnlyRoute>
        )
      },
      {
        path: "/verify",
        element: (
          <PublicOnlyRoute>
            <VerifyPage />
          </PublicOnlyRoute>
        )
      },

      {
        path: "/app",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/app/settings",
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        )
      }
    ]
  }
]);
