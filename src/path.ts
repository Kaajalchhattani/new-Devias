export const paths = {
  home: "/",
  auth: {
    signIn: "/auth/signIn",
    signUp: "/auth/sign-up",
    resetPassword: "/auth/reset-password",
  },
  dashboard: {
    overview: "/dashboard",
    account: "/dashboard/account",
    customers: "/dashboard/customers",
    integrations: "/dashboard/integrations",
    settings: "/dashboard/settings",
  },
  errors: { notFound: "/errors/not-found" },
} as const;
