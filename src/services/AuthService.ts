import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { email, password });
  }

  static async registration(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    // day: number,
    // month: string,
    // year: number
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", {
      email,
      firstName,
      lastName,
      password,
      // day,
      // month,
      // year,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
