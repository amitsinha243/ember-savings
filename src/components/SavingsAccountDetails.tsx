import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

interface BankAccount {
  bank: string;
  accountNumber: string;
  balance: number;
  type: string;
}

const accounts: BankAccount[] = [
  {
    bank: "HDFC Bank",
    accountNumber: "****6789",
    balance: 85000,
    type: "Savings"
  },
  {
    bank: "SBI",
    accountNumber: "****4321",
    balance: 65000,
    type: "Savings"
  }
];

export const SavingsAccountDetails = () => {
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Savings Accounts</h3>
          <p className="text-sm text-muted-foreground">Total across all banks</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">₹{totalBalance.toLocaleString('en-IN')}</p>
        </div>
      </div>

      <div className="space-y-3">
        {accounts.map((account, index) => (
          <Card 
            key={index}
            className="p-4 hover:shadow-md transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-secondary/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{account.bank}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    A/c: {account.accountNumber}
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    {account.type}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-foreground">
                  ₹{account.balance.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
