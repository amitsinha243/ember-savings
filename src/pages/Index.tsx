import { useState } from "react";
import { Wallet, TrendingUp, PiggyBank, Landmark } from "lucide-react";
import { AssetCard } from "@/components/AssetCard";
import { SavingsChart } from "@/components/SavingsChart";
import { TopExpenses } from "@/components/TopExpenses";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SavingsAccountDetails } from "@/components/SavingsAccountDetails";
import { MutualFundDetails } from "@/components/MutualFundDetails";
import { FixedDepositDetails } from "@/components/FixedDepositDetails";

type AssetType = 'savings' | 'mutualfunds' | 'fixeddeposits' | null;

const Index = () => {
  const [selectedAsset, setSelectedAsset] = useState<AssetType>(null);
  
  const totalAssets = 585000;
  const fixedDeposits = 250000;
  const mutualFunds = 185000;
  const savings = 150000;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/80">
                <Wallet className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">WealthTracker</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Total Assets</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ₹{totalAssets.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Assets Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Your Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AssetCard
              title="Fixed Deposits"
              amount={fixedDeposits}
              icon={Landmark}
              change={5.2}
              description="3 active deposits"
              onViewDetails={() => setSelectedAsset('fixeddeposits')}
            />
            <AssetCard
              title="Mutual Funds"
              amount={mutualFunds}
              icon={TrendingUp}
              change={12.8}
              description="Equity & debt funds"
              onViewDetails={() => setSelectedAsset('mutualfunds')}
            />
            <AssetCard
              title="Savings Account"
              amount={savings}
              icon={PiggyBank}
              change={8.5}
              description="Primary account"
              onViewDetails={() => setSelectedAsset('savings')}
            />
          </div>
        </section>

        {/* Savings & Expenses */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Financial Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <SavingsChart />
            <TopExpenses />
          </div>
        </section>
      </main>

      {/* Asset Details Dialog */}
      <Dialog open={selectedAsset !== null} onOpenChange={() => setSelectedAsset(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Asset Details</DialogTitle>
          </DialogHeader>
          {selectedAsset === 'savings' && <SavingsAccountDetails />}
          {selectedAsset === 'mutualfunds' && <MutualFundDetails />}
          {selectedAsset === 'fixeddeposits' && <FixedDepositDetails />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
