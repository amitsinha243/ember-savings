import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskAccountNumber(accountNumber: string): string {
  if (!accountNumber || accountNumber.length < 2) return accountNumber;
  const lastTwo = accountNumber.slice(-2);
  const masked = '*'.repeat(Math.max(0, accountNumber.length - 2));
  return masked + lastTwo;
}

interface AccountLike {
  id: string;
  balance: number;
  createdAt?: string;
}

interface TransactionLike {
  savingsAccountId?: string;
  amount: number;
  date: string;
}

export function getAccountBalanceAsOf(
  account: AccountLike,
  expenses: TransactionLike[],
  incomes: TransactionLike[],
  targetMonth: number, // 0-indexed: 0 = Jan, 11 = Dec
  targetYear: number
): number {
  const now = new Date();
  
  // Cutoff date is the end of targetMonth/targetYear
  const cutoffDate = new Date(targetYear, targetMonth + 1, 0, 23, 59, 59, 999);
  
  // If target month is current month, return current balance
  if (now.getMonth() === targetMonth && now.getFullYear() === targetYear) {
    return account.balance;
  }
  
  // Sum up all income for this account received after cutoffDate
  const postIncomes = incomes
    .filter(i => i.savingsAccountId === account.id && new Date(i.date) > cutoffDate)
    .reduce((sum, i) => sum + i.amount, 0);

  // Sum up all expenses for this account paid after cutoffDate
  const postExpenses = expenses
    .filter(e => e.savingsAccountId === account.id && new Date(e.date) > cutoffDate)
    .reduce((sum, e) => sum + e.amount, 0);

  return account.balance - postIncomes + postExpenses;
}

export function getAccountBalanceHistory(
  account: AccountLike,
  expenses: TransactionLike[],
  incomes: TransactionLike[],
  count: number = 6
) {
  const history = [];
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  for (let i = 1; i <= count; i++) {
    let targetMonth = currentMonth - i;
    let targetYear = currentYear;
    if (targetMonth < 0) {
      targetMonth += 12;
      targetYear -= 1;
    }
    
    // Check if account existed at that time
    if (account.createdAt) {
      const createdDate = new Date(account.createdAt);
      const cutoffDate = new Date(targetYear, targetMonth + 1, 0, 23, 59, 59, 999);
      if (createdDate > cutoffDate) {
        continue;
      }
    }

    const balance = getAccountBalanceAsOf(account, expenses, incomes, targetMonth, targetYear);
    
    const monthName = new Date(targetYear, targetMonth, 1).toLocaleString('default', { month: 'long' });
    const lastDay = new Date(targetYear, targetMonth + 1, 0).getDate();
    
    history.push({
      monthName,
      year: targetYear,
      balance,
      dateLabel: `${monthName} ${lastDay}, ${targetYear}`
    });
  }

  return history;
}

