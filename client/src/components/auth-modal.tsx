
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, CheckCircle, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export function AuthModal({ trigger }: { trigger?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      toast({
        title: "OTP Sent",
        description: `We've sent a verification code to ${email}`,
      });
    }, 1500);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      if (otp.length < 4) {
        toast({
          variant: "destructive",
          title: "Invalid Code",
          description: "Please enter a valid 6-digit code.",
        });
        return;
      }
      
      setIsOpen(false);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Sign In</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{step === "email" ? "Welcome to StockLens" : "Verify Email"}</DialogTitle>
          <DialogDescription>
            {step === "email" 
              ? "Enter your email to sign in or create an account." 
              : `Enter the code we sent to ${email}`}
          </DialogDescription>
        </DialogHeader>

        {step === "email" ? (
          <form onSubmit={handleSendOtp} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary/50"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Code...
                </>
              ) : (
                <>
                  Continue with Email
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                className="text-center text-2xl tracking-widest bg-secondary/50 font-mono"
                required
              />
              <p className="text-xs text-muted-foreground text-center">
                Didn't receive code? <button type="button" onClick={() => setStep("email")} className="text-primary hover:underline">Resend</button>
              </p>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
               {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  Verify & Sign In
                  <CheckCircle className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
