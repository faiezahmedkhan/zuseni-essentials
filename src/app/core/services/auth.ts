import { Injectable, signal } from '@angular/core';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSignal = signal<User | null>(null);
  
  currentUser = this.userSignal.asReadonly();

  login(email: string, pass: string) {
    // Mock login
    this.userSignal.set({ name: 'Zuseni Customer', email });
  }

  register(name: string, email: string, pass: string) {
    // Mock register
    this.userSignal.set({ name, email });
  }

  logout() {
    this.userSignal.set(null);
  }
}
