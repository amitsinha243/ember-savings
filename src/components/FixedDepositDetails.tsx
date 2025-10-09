import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Percent } from "lucide-react";

interface FixedDeposit {
  bank: string;
  fdNumber: string;
  principal: number;
  interestRate: number;
  maturityAmount: number;
  startDate: string;
  maturityDate: string;
  tenure: string;
}

const deposits: FixedDeposit[] = [
  {
    bank: "HDFC Bank",
    fdNumber: "FD****1234",
    principal: 100000,
    interestRate: 7.5,
    maturityAmount: 107500,
    startDate: "01 Jan 2024",
    maturityDate: "01 Jan 2025",
    tenure: "12 months"
  },
  {
    bank: "SBI",
    fdNumber: "FD****5678",
    principal: 100000,
    interestRate: 7.25,
    maturityAmount: 114500,
    startDate: "15 Jun 2023",
    maturityDate: "15 Jun 2025",
    tenure: "24 months"
  },
  {
    bank: "ICICI Bank",
    fdNumber: "FD****9012",
    principal: 50000,
    interestRate: 7.0,
    maturityAmount: 53500,
    startDate: "10 Mar 2024",
    maturityDate: "10 Mar 2025",
    tenure: "12 months"
  }
];

export const FixedDepositDetails = () => {
  const totalPrincipal = deposits.reduce((sum, fd) => sum + fd.principal, 0);
  const totalMaturityAmount = deposits.reduce((sum, fd) => sum + fd.maturityAmount, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Fixed Deposits</h3>
          <p className="text-sm text-muted-foreground">{deposits.length} active deposits</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Total Principal</p>
          <p className="text-2xl font-bold text-foreground">₹{totalPrincipal.toLocaleString('en-IN')}</p>
          <p className="text-xs text-accent font-medium">
            Maturity: ₹{totalMaturityAmount.toLocaleString('en-IN')}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {deposits.map((fd, index) => (
          <Card 
            key={index}
            className="p-4 hover:shadow-md transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-secondary/20"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">{fd.bank}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{fd.fdNumber}</p>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Percent className="h-3 w-3" />
                  {fd.interestRate}% p.a.
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground">Principal Amount</p>
                  <p className="text-lg font-bold text-foreground">₹{fd.principal.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Maturity Amount</p>
                  <p className="text-lg font-bold text-accent">₹{fd.maturityAmount.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2 text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{fd.startDate} - {fd.maturityDate}</span>
                </div>
                <Badge variant="outline">{fd.tenure}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
