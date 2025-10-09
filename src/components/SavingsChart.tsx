import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: 'Jan', savings: 15000, percentage: 20 },
  { month: 'Feb', savings: 18000, percentage: 24 },
  { month: 'Mar', savings: 16500, percentage: 22 },
  { month: 'Apr', savings: 22000, percentage: 29 },
  { month: 'May', savings: 25000, percentage: 33 },
  { month: 'Jun', savings: 28000, percentage: 37 },
];

export const SavingsChart = () => {
  return (
    <Card className="col-span-full lg:col-span-2 border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Monthly Savings Trend</CardTitle>
        <p className="text-sm text-muted-foreground">Track your savings percentage over time</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `₹${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              formatter={(value: number, name: string) => {
                if (name === 'savings') return [`₹${value.toLocaleString('en-IN')}`, 'Savings'];
                return [`${value}%`, 'Percentage'];
              }}
            />
            <Line 
              type="monotone" 
              dataKey="savings" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="percentage" 
              stroke="hsl(var(--accent))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--accent))', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
