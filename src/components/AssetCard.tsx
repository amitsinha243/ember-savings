import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AssetCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  change?: number;
  description?: string;
}

export const AssetCard = ({ title, amount, icon: Icon, change, description }: AssetCardProps) => {
  const isPositive = change && change > 0;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-border/50 bg-gradient-to-br from-card to-card/80">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">₹{amount.toLocaleString('en-IN')}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {change !== undefined && (
          <p className={`text-xs mt-2 font-medium ${isPositive ? 'text-accent' : 'text-destructive'}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};
