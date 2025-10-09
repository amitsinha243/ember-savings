import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MutualFund {
  name: string;
  scheme: string;
  units: number;
  nav: number;
  currentValue: number;
  invested: number;
  returns: number;
}

const funds: MutualFund[] = [
  {
    name: "HDFC Equity Fund",
    scheme: "Direct Growth",
    units: 245.67,
    nav: 425.50,
    currentValue: 104500,
    invested: 90000,
    returns: 16.11
  },
  {
    name: "SBI Bluechip Fund",
    scheme: "Direct Growth",
    units: 189.23,
    nav: 285.80,
    currentValue: 54080,
    invested: 48000,
    returns: 12.67
  },
  {
    name: "ICICI Debt Fund",
    scheme: "Regular Growth",
    units: 512.45,
    nav: 52.10,
    currentValue: 26420,
    invested: 25000,
    returns: 5.68
  }
];

export const MutualFundDetails = () => {
  const totalValue = funds.reduce((sum, fund) => sum + fund.currentValue, 0);
  const totalInvested = funds.reduce((sum, fund) => sum + fund.invested, 0);
  const overallReturns = ((totalValue - totalInvested) / totalInvested) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Mutual Funds</h3>
          <p className="text-sm text-muted-foreground">{funds.length} active investments</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">₹{totalValue.toLocaleString('en-IN')}</p>
          <p className="text-sm text-accent font-medium flex items-center justify-end gap-1">
            <TrendingUp className="h-3 w-3" />
            {overallReturns.toFixed(2)}% returns
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {funds.map((fund, index) => {
          const isPositive = fund.returns > 0;
          
          return (
            <Card 
              key={index}
              className="p-4 hover:shadow-md transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-secondary/20"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{fund.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{fund.scheme}</p>
                  </div>
                  <Badge variant={isPositive ? "default" : "destructive"} className="flex items-center gap-1">
                    {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {fund.returns.toFixed(2)}%
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground">Current Value</p>
                    <p className="text-lg font-bold text-foreground">₹{fund.currentValue.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Invested</p>
                    <p className="text-lg font-bold text-foreground">₹{fund.invested.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Units</p>
                    <p className="text-sm font-medium text-foreground">{fund.units.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">NAV</p>
                    <p className="text-sm font-medium text-foreground">₹{fund.nav.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
