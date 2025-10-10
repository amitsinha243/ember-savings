import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description?: string;
}

export const useExpenses = () => {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(`expenses_${user.email}`);
      if (stored) {
        setExpenses(JSON.parse(stored));
      }
    }
  }, [user]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    if (!user) return;
    
    const newExpense: Expense = {
      ...expense,
      id: Date.now().toString(),
    };
    
    const updated = [...expenses, newExpense];
    setExpenses(updated);
    localStorage.setItem(`expenses_${user.email}`, JSON.stringify(updated));
  };

  const deleteExpense = (id: string) => {
    if (!user) return;
    
    const updated = expenses.filter(exp => exp.id !== id);
    setExpenses(updated);
    localStorage.setItem(`expenses_${user.email}`, JSON.stringify(updated));
  };

  return { expenses, addExpense, deleteExpense };
};
