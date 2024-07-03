export interface Register {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface AuthCheckResponse {
  authenticated: boolean;
}
