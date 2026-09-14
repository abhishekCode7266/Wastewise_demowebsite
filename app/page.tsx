"use client";

import React, { useState, useEffect } from "react";
import { 
  Menu, X, Leaf, Utensils, HeartHandshake, Users, 
  Clock, BellRing, CheckCircle, TrendingUp, ShieldCheck, 
  ArrowRight, CreditCard, Shield, Lock, Package, Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "The Problem", href: "#problem" },
    { name: "About", href: "#about" },
    { name: "Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Deals", href: "#deals" },
    { name: "Impact", href: "#impact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-[#007A55] p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">WasteWise</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#007A55] ${
                  activeSection === link.href.substring(1) ? "text-[#007A55]" : "text-gray-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#pilot"
              className="bg-[#007A55] hover:bg-[#006344] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get Involved
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#007A55] hover:bg-emerald-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#pilot"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-[#007A55] hover:bg-[#006344] text-white px-5 py-3 rounded-xl text-base font-medium transition-all shadow-sm"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LiveCounter = () => {
  const [meals, setMeals] = useState(1420);
  const [pickups, setPickups] = useState(12);

  useEffect(() => {
    const mealInterval = setInterval(() => {
      setMeals(prev => prev + Math.floor(Math.random() * 3));
    }, 3500);

    const pickupInterval = setInterval(() => {
      // Occasional new pickup
      if (Math.random() > 0.7) {
        setPickups(prev => prev + 1);
        setTimeout(() => setPickups(prev => Math.max(12, prev - 1)), 15000); // simulate pickup completion
      }
    }, 8000);

    return () => {
      clearInterval(mealInterval);
      clearInterval(pickupInterval);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-6 mt-10 p-6 bg-white rounded-2xl shadow-xl shadow-green-900/5 border border-green-50">
      <div className="flex items-center gap-4">
        <div className="bg-emerald-100 p-4 rounded-full text-[#007A55]">
          <Utensils className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Meals Saved</p>
          <p className="text-3xl font-bold text-gray-900">{meals.toLocaleString()}</p>
        </div>
      </div>
      <div className="hidden sm:block w-px bg-gray-200"></div>
      <div className="flex items-center gap-4">
        <div className="bg-amber-100 p-4 rounded-full text-amber-600">
          <Clock className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Active Pickups</p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <p className="text-3xl font-bold text-gray-900">{pickups}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-emerald-50 to-white overflow-hidden relative">
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#007A55] opacity-5 blur-3xl pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-emerald-100 text-[#007A55] font-medium px-4 py-1.5 rounded-full text-sm mb-6 border border-emerald-200"
        >
          Round 1 Submission | Team WasteWise
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8"
        >
          Don&apos;t waste good food. <br />
          <span className="text-[#007A55]">Share it.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Hey everyone! We built <span className="font-semibold text-gray-900">WasteWise</span> so that extra food from restaurants can go straight to local shelters instead of ending up in garbage cans.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <LiveCounter />
        </motion.div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Is So Much Good Food Thrown Away?</h2>
        <p className="text-lg text-gray-600">The current system is broken. We have perfectly good meals going to waste simply because there is no easy way to connect surplus with need.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
            <Utensils className="w-7 h-7 text-gray-700" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Lots Left Over Every Night</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            At the end of the day, restaurants and marriage parties always have extra cooked food left. But since they don&apos;t know who needs it right now or how to arrange a quick pickup, throwing it out becomes the only easy option.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-red-50 rounded-3xl p-8 md:p-10 border border-red-100 hover:shadow-lg transition-shadow relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
            <Clock className="w-7 h-7 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Running Out of Time</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Food goes bad fast. Without a simple way to connect kitchen doors to nearby communities in minutes, local shelters miss out on fresh meals that could easily feed hungry people.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Audience = () => {
  const audiences = [
    {
      icon: <Utensils className="w-8 h-8 text-[#007A55]" />,
      title: "Restaurants & Caterers",
      desc: "Places with extra food who want an easy, stress-free way to give it away instead of wasting it."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#007A55]" />,
      title: "NGOs & Shelters",
      desc: "Community centers that look out for people and need reliable daily food donations."
    },
    {
      icon: <Users className="w-8 h-8 text-[#007A55]" />,
      title: "Local Volunteers",
      desc: "Regular folks nearby who are ready to help carry food from the restaurant to the shelter."
    }
  ];

  return (
    <section className="py-20 bg-emerald-50/50 border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Who Are We Helping?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => (
  <section id="solution" className="py-24 bg-[#007A55] text-white relative overflow-hidden">
    <div className="absolute -left-40 top-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
    <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-black opacity-10 rounded-full blur-3xl -mb-40 -mr-40"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white font-medium px-4 py-1.5 rounded-full text-sm mb-6">
            Our Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            A Simple Food Rescue App
          </h2>
          <p className="text-xl text-green-100 font-medium mb-4">
            Making Donations as Easy as Ordering Online
          </p>
          <p className="text-lg text-green-50 mb-10 opacity-90 leading-relaxed">
            Like Swiggy, But for Donations — We replaced old phone chains with a real-time app so food reaches people before it gets cold.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Fast Listing", desc: "Restaurants post what they have in under a minute (e.g., '30 plates, ready by 10 PM')." },
              { title: "Instant Alert", desc: "Verified shelters and nearby volunteers get an immediate notification on their phones." },
              { title: "One-Tap Claim", desc: "Someone claims it right away, so nobody has to waste time making endless phone calls." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{feature.title}</h4>
                  <p className="text-green-100 mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl rotate-3 mx-auto w-[320px]">
            <div className="bg-gray-50 rounded-[1.5rem] border border-gray-100 h-[600px] relative overflow-hidden flex flex-col">
              <div className="bg-[#007A55] text-white p-6 pb-8 rounded-b-3xl">
                <h3 className="font-bold text-xl">New Donation Available!</h3>
                <p className="opacity-90 text-sm mt-1">Saffron Restaurant • 1.2 km away</p>
              </div>
              <div className="p-6 -mt-4 flex-1">
                <div className="bg-white rounded-2xl shadow-md p-4 mb-4 border border-gray-100">
                  <p className="font-semibold text-gray-900">30x Fresh Veg Meals</p>
                  <p className="text-sm text-gray-500 mt-1">Ready for pickup now</p>
                </div>
                <div className="h-40 bg-gray-100 rounded-2xl mb-4 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#007A55] text-white text-center py-4 rounded-xl font-bold shadow-lg">
                    Claim Food Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: "Step 1",
      title: "Post Surplus",
      desc: "Kitchen staff open the app and type in what food is available and when to pick it up.",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      id: "Step 2",
      title: "Quick Alert",
      desc: "The app automatically pings NGOs and delivery helpers within a 5 km radius.",
      icon: <BellRing className="w-6 h-6" />
    },
    {
      id: "Step 3",
      title: "Claim & Assign",
      desc: "A nearby shelter claims the food batch and assigns a volunteer to pick it up.",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "Step 4",
      title: "Drop Off",
      desc: "Fresh meals arrive safely at the shelter right on time for dinner.",
      icon: <HeartHandshake className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works Step-by-Step</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From kitchen to plate in four simple actions.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-5xl mx-auto">
          <div className="w-full lg:w-1/2 space-y-4">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                  activeStep === idx 
                    ? "border-[#007A55] bg-emerald-50 shadow-md" 
                    : "border-transparent bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    activeStep === idx ? "bg-[#007A55] text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeStep === idx ? "text-[#007A55]" : "text-gray-900"}`}>
                      {step.id}: {step.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-gray-900 rounded-3xl p-8 text-white min-h-[400px] flex flex-col justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#007A55] rounded-full blur-[80px] opacity-40"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="text-[#007A55] font-bold text-2xl mb-2">{steps[activeStep].id}</div>
                  <h3 className="text-4xl font-bold mb-6 text-white">{steps[activeStep].title}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                  
                  {/* Abstract Illustration representation based on step */}
                  <div className="mt-12 flex justify-center opacity-80">
                    {activeStep === 0 && (
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-white/10 rounded-xl"></div>
                        <div className="w-16 h-16 bg-[#007A55]/40 rounded-xl"></div>
                        <div className="w-16 h-16 bg-white/10 rounded-xl"></div>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#007A55]/20 rounded-full animate-ping"></div>
                        <div className="w-12 h-12 bg-[#007A55] rounded-full z-10"></div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-white/20"></div>
                        <div className="h-1 w-16 bg-[#007A55] rounded-full"></div>
                        <div className="w-16 h-16 rounded-full bg-[#007A55]/80 flex items-center justify-center"><CheckCircle className="text-white" /></div>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="flex gap-2 items-end h-24">
                        <div className="w-8 h-12 bg-white/10 rounded-t-lg"></div>
                        <div className="w-8 h-16 bg-white/20 rounded-t-lg"></div>
                        <div className="w-8 h-24 bg-[#007A55] rounded-t-lg"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Goals = () => (
  <section id="impact" className="py-20 bg-emerald-50 border-y border-emerald-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Want to Achieve</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { metric: "10x", label: "Faster", desc: "Than making random phone calls to shelters." },
          { metric: "Zero", label: "Wasted", desc: "Edible meals remaining in our pipeline." },
          { metric: "100%", label: "Tracked", desc: "Clear tracking from the kitchen straight to the plate." }
        ].map((goal, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm text-center border border-gray-100"
          >
            <div className="text-6xl font-extrabold text-[#007A55] mb-4">{goal.metric}</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{goal.label}</h4>
            <p className="text-gray-600 font-medium">{goal.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Restaurants and Shelters Will Use It</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col justify-center">
          <ShieldCheck className="w-12 h-12 text-[#007A55] mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Completely Worry-Free</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Clear digital records keep everything safe and accountable, giving restaurants peace of mind whenever they want to share surplus food.
          </p>
        </div>
        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col justify-center">
          <TrendingUp className="w-12 h-12 text-[#007A55] mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Impact Tracking</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our dashboard automatically counts how many meals were saved, making it super easy for businesses to show their good work.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AboutWaste = () => (
  <section id="about" className="py-20 bg-emerald-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-emerald-800 text-emerald-200 font-medium px-4 py-1.5 rounded-full text-sm mb-6">
            About Food Waste
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">The True Cost of Wasted Meals</h2>
          <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
            Every year, billions of tons of edible food are thrown away globally, contributing to massive greenhouse gas emissions and wasted resources. Meanwhile, millions go hungry. 
          </p>
          <ul className="space-y-4">
            {[
              "1/3 of all food produced globally goes to waste.",
              "Wasted food accounts for 8% of global greenhouse emissions.",
              "Saving just 25% of wasted food could feed all hungry people."
            ].map((fact, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-emerald-50">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square bg-emerald-800 rounded-3xl overflow-hidden relative border-4 border-emerald-700 shadow-2xl">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="w-full h-full object-cover bg-emerald-100 flex items-center justify-center p-8">
               <div className="text-center">
                  <div className="w-24 h-24 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Package className="w-12 h-12 text-emerald-700" />
                  </div>
                  <h3 className="text-emerald-900 font-bold text-2xl">Stop The Waste</h3>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DealsAndSubscription = () => (
  <section id="deals" className="py-24 bg-gray-50 border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-block bg-emerald-100 text-[#007A55] font-medium px-4 py-1.5 rounded-full text-sm mb-6 border border-emerald-200">
          Save Food With Us
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Today&apos;s Waste-less Deals & Subscriptions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Access perfectly good surplus food at a fraction of the cost, or subscribe for regular rescue boxes. 100% secure payments.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Deal 1 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow relative">
          <div className="h-48 bg-orange-100 relative">
             <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md">-30%</div>
             <div className="w-full h-full flex items-center justify-center">
               <Utensils className="w-16 h-16 text-orange-300" />
             </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Leftover Lunch Special</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[#007A55]">$13.00</span>
              <span className="text-gray-400 line-through text-sm">$18.50</span>
            </div>
            <button className="w-full bg-[#007A55] hover:bg-[#006344] text-white font-medium py-3 rounded-xl transition-colors shadow-md">
              Claim Now
            </button>
          </div>
        </div>

        {/* Deal 2 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow relative">
          <div className="h-48 bg-emerald-100 relative">
             <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md">-20%</div>
             <div className="w-full h-full flex items-center justify-center">
               <Leaf className="w-16 h-16 text-emerald-300" />
             </div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Daily Produce Box</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[#007A55]">$15.00</span>
              <span className="text-gray-400 line-through text-sm">$18.75</span>
            </div>
            <button className="w-full bg-[#007A55] hover:bg-[#006344] text-white font-medium py-3 rounded-xl transition-colors shadow-md">
              Claim Now
            </button>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-[#007A55] rounded-3xl overflow-hidden shadow-lg border border-emerald-700 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-10 -mr-10 -mt-10"></div>
          <div className="p-8 flex flex-col h-full relative z-10">
            <div className="bg-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-inner">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-2xl mb-2">Weekly Rescue Pro</h3>
            <p className="text-emerald-100 mb-6 text-sm">Get a guaranteed surplus box every week and maximize your impact.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-extrabold">$49</span>
              <span className="text-emerald-200 font-medium">/mo</span>
            </div>
            <button className="mt-auto w-full bg-white hover:bg-emerald-50 text-[#007A55] font-bold py-3 rounded-xl transition-colors shadow-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Security Banner */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-6 justify-center">
        <div className="flex items-center gap-3 text-gray-700">
          <Shield className="w-6 h-6 text-[#007A55]" />
          <span className="font-medium">100% Secure Checkout</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
        <div className="flex items-center gap-3 text-gray-700">
          <Lock className="w-6 h-6 text-[#007A55]" />
          <span className="font-medium">Bank-Grade Encryption</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
        <div className="flex items-center gap-3 text-gray-700">
          <CreditCard className="w-6 h-6 text-[#007A55]" />
          <span className="font-medium">Multiple Payment Options</span>
        </div>
      </div>
    </div>
  </section>
);

const PilotForm = () => {
  const [role, setRole] = useState("Restaurant");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="pilot" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#007A55] opacity-10"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready for Our First Local Pilot</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let&apos;s stop food waste right in our neighborhoods. We are excited to test our MVP in local dining areas, team up with restaurants, and onboard our very first shelters.
            </p>
            <p className="text-lg font-medium text-[#007A55] bg-[#007A55]/20 inline-block px-4 py-2 rounded-lg">
              Thank you so much! We&apos;d love to hear your questions and thoughts.
            </p>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Involved / Join Pilot</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-[#007A55] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                <p className="text-gray-600">We&apos;ve added you to our pilot list. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am signing up as a:</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Restaurant", "NGO", "Volunteer"].map(r => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`py-2 px-3 text-sm font-medium rounded-lg border transition-colors ${
                          role === r 
                            ? "bg-[#007A55] text-white border-[#007A55]" 
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#007A55]"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name / Organization</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#007A55] focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#007A55] focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
                </div>
                
                <button type="submit" className="w-full bg-[#007A55] hover:bg-[#006344] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                  <span>Join the Pilot</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-8 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Leaf className="w-5 h-5 text-[#007A55]" />
        <span className="font-bold text-gray-900">WasteWise</span>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} WasteWise. Round 1 Submission.</p>
    </div>
  </footer>
);

function MainApp() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "problem", "about", "solution", "how-it-works", "deals", "impact", "pilot"];
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#007A55] selection:text-white">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Problem />
        <AboutWaste />
        <Audience />
        <Solution />
        <HowItWorks />
        <DealsAndSubscription />
        <Goals />
        <Benefits />
        <PilotForm />
      </main>
      <Footer />
    </div>
  );
}

export default function WasteWiseApp() {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#007A55] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007A55] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center max-w-2xl"
        >
          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md mb-8 border border-white/20">
            <Leaf className="w-16 h-16 text-emerald-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            WasteWise
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Don&apos;t waste good food. <span className="text-emerald-400 font-medium">Share it.</span>
          </p>
          
          <button 
            onClick={() => setHasEntered(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#007A55] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007A55] hover:bg-[#006344] hover:shadow-lg hover:shadow-[#007A55]/30 hover:-translate-y-1"
          >
            <span className="text-lg">Enter Presentation</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    );
  }

  return <MainApp />;
}
