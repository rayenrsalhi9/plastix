import { Button } from "@/components/ui/button";
import homeBg from '../../assets/home/plastic_4.png';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, UserRoundPlus, Store, Target, Armchair, Coffee, Recycle, Handshake, Gift, Coins, Trash2, Milk, Search, Check } from 'lucide-react'

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="relative flex flex-col md:flex-row min-h-screen bg-background">
        {/* Small image for mobile only */}
        <div 
          className={`w-full max-w-xs mx-auto mt-8 mb-6 md:hidden transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div 
            className="w-full aspect-square rounded-xl overflow-hidden shadow-lg"
            style={{ 
              backgroundImage: `url(${homeBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          </div>
        </div>
        
        {/* Background image container - positioned on the right for larger screens */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full bg-cover bg-center hidden md:block transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${homeBg})`}}
        >
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content container */}
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4 py-6 md:py-12 z-10">
          <div className="max-w-lg mx-auto md:mx-0 md:ml-auto md:mr-12 lg:ml-20">
            <div className={`space-y-6 transition-all duration-700 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Tagline */}
              <div className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-black rounded-full">
                Recycle • Reward • Renew
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl leading-normal font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Turn Your <span className="text-green-600 underline-offset-4 underline decoration-6 decoration-green-200 relative inline-block">
                  Plastic Waste
                  {/* Floating waste icons */}
                  <Recycle className="absolute -top-1 -right-3 h-6 w-6 text-green-600 animate-coin-float-1 hidden md:block" />
                  <Trash2 className="absolute top-1.5 -left-2 h-4 w-4 text-green-600 animate-coin-float-2 hidden md:block" />
                  <Milk className="absolute -top-2 left-1/2 h-5 w-5 text-green-600 animate-coin-float-1 hidden md:block" />
                </span> Into <span className="text-yellow-500 underline underline-offset-4 decoration-6 decoration-yellow-200 relative inline-block">
                  Rewards
                  {/* Floating coins - reduced to 2 and positioned closer */}
                  <Coins className="absolute -top-1 -right-3 h-6 w-6 text-yellow-400 animate-coin-float-1 hidden md:block" />
                  <Coins className="absolute top-1.5 -left-2 h-4 w-4 text-yellow-500 animate-coin-float-2 hidden md:block" />
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-muted-foreground md:text-lg">
                Connect with plastic seekers, reduce waste, and earn points redeemable at your favorite stores. Make a difference while getting rewarded.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to='login'>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1 cursor-pointer w-full">
                    <LogIn />
                    Log In
                  </Button>
                </Link>
                <Link to='signup'>
                  <Button size="lg" variant="outline" className="border-green-700 text-green-600 hover:bg-green-50 flex items-center gap-1 cursor-pointer w-full">
                    <UserRoundPlus />
                    Create Account
                  </Button>
                </Link>
              </div>
              
              {/* Partners Section */}
              <div className="mt-12">
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Trusted by eco-conscious partners</p>
                <div className="flex flex-wrap gap-6 items-center opacity-70">
                  <span className="flex items-center gap-1"> 
                    <Store className="h-6 w-6" />
                    WallMart
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="h-6 w-6" />
                    Target
                  </span>
                  <span className="flex items-center gap-1">
                    <Armchair className="h-6 w-6" />
                    IKEA
                  </span>
                  <span className="flex items-center gap-1">
                    <Coffee className="h-6 w-6" />
                    Starbucks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - An Interactive Guide to Our Platform with Colorful Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How This App Works</h2>
            <p className="text-muted-foreground">Choose your role and follow these simple steps.</p>
          </div>

          {/* For Providers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-green-600">For Plastic Providers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 bg-[#fafafa] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Collect & Post</h3>
                <p className="text-muted-foreground">Gather your plastic waste and post details on our platform.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#fafaf] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Connect & Deliver</h3>
                <p className="text-muted-foreground">Match with seekers nearby and arrange for plastic pickup or delivery.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#fafafa] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Earn & Redeem</h3>
                <p className="text-muted-foreground">Get points for your contributions and redeem them at partner stores.</p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full max-w-5xl mx-auto mb-16">
            <div className="h-px bg-gray-200"></div>
          </div>

          {/* For Seekers */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-600">For Plastic Seekers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 bg-[#fafafa] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Browse & Find</h3>
                <p className="text-muted-foreground">Search through available plastic waste listings in your area.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#fafafa] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Connect & Collect</h3>
                <p className="text-muted-foreground">Contact providers and arrange collection of plastic materials.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#fafafa] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Recycle & Report</h3>
                <p className="text-muted-foreground">Process the collected plastic and confirm successful recycling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}