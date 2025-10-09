import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const expenses = [
  { category: 'Rent', amount: 25000, percentage: 42 },
  { category: 'Groceries', amount: 8500, percentage: 14 },
  { category: 'Transportation', amount: 6000, percentage: 10 },
  { category: 'Utilities', amount: 4500, percentage: 8 },
  { category: 'Entertainment', amount: 3500, percentage: 6 },
];

export const TopExpenses = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Top 5 Expenses</CardTitle>
        <p className="text-sm text-muted-foreground">Current month breakdown</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div key={expense.category} className="flex items-center justify-between group">
              <div className="flex items-center gap-3 flex-1">
                <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </Badge>
                <div className="flex-1">
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {expense.category}
                  </p>
                  <div className="mt-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                      style={{ width: `${expense.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="font-semibold text-foreground">₹{expense.amount.toLocaleString('en-IN')}</p>
                <p className="text-xs text-muted-foreground">{expense.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
