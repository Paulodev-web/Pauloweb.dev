import { Appointment } from '../types';

interface AdminCredentials {
  username: string;
  password: string;
}

class StorageService {
  private readonly ADMIN_CREDENTIALS_KEY = 'admin_credentials';
  private readonly ADMIN_LOGGED_IN_KEY = 'admin_logged_in';

  setAdminCredentials(credentials: AdminCredentials): void {
    localStorage.setItem(this.ADMIN_CREDENTIALS_KEY, JSON.stringify(credentials));
  }

  getAdminCredentials(): AdminCredentials | null {
    const credentials = localStorage.getItem(this.ADMIN_CREDENTIALS_KEY);
    return credentials ? JSON.parse(credentials) : null;
  }

  setAdminLoggedIn(value: boolean): void {
    localStorage.setItem(this.ADMIN_LOGGED_IN_KEY, JSON.stringify(value));
  }

  isAdminLoggedIn(): boolean {
    const loggedIn = localStorage.getItem(this.ADMIN_LOGGED_IN_KEY);
    return loggedIn ? JSON.parse(loggedIn) : false;
  }

  verifyAdminCredentials(username: string, password: string): boolean {
    const credentials = this.getAdminCredentials();
    return credentials?.username === username && credentials?.password === password;
  }

  logout(): void {
    this.setAdminLoggedIn(false);
  }
}

export const storageService = new StorageService(); 