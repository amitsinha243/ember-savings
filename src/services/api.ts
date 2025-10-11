import { API_BASE_URL, getAuthHeaders } from '@/config/api';

// Auth API
export const authAPI = {
  signup: async (email: string, password: string, name: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });
    if (!response.ok) throw new Error('Signup failed');
    return response.json();
  },

  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  }
};

// Savings Account API
export const savingsAccountAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/savings-accounts`, {
      headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch savings accounts');
    return response.json();
  },

  create: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/savings-accounts`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create savings account');
    return response.json();
  }
};

// Mutual Fund API
export const mutualFundAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/mutual-funds`, {
      headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch mutual funds');
    return response.json();
  },

  create: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/mutual-funds`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create mutual fund');
    return response.json();
  }
};

// Fixed Deposit API
export const fixedDepositAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/fixed-deposits`, {
      headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch fixed deposits');
    return response.json();
  },

  create: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/fixed-deposits`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create fixed deposit');
    return response.json();
  }
};

// Expense API
export const expenseAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/expenses`, {
      headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Failed to fetch expenses');
    return response.json();
  },

  create: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/expenses`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create expense');
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Failed to delete expense');
  }
};
