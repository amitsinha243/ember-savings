import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useExpenses } from "@/hooks/useExpenses";

export const TopExpenses = () => {
  const { expenses: allExpenses } = useExpenses();

  // Get current month's expenses
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthExpenses = allExpenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  });

  // Calculate totals by category
  const categoryTotals = monthExpenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  // Get top 5 expenses
  const totalAmount = Object.values(categoryTotals).reduce((sum, amount) => sum + amount, 0);
  const topExpenses = Object.entries(categoryTotals)
    .map(([category, amount]) => ({
      category,
      amount,
      percentage: totalAmount > 0 ? Math.round((amount / totalAmount) * 100) : 0,
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Top 5 Expenses</CardTitle>
        <p className="text-sm text-muted-foreground">Current month breakdown</p>
      </CardHeader>
      <CardContent>
        {topExpenses.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No expenses recorded for this month
          </p>
        ) : (
          <div className="space-y-4">
            {topExpenses.map((expense, index) => (
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
        )}
      </CardContent>
    </Card>
  );
};
