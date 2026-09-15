"use client";

import React, { useState, useEffect } from "react";
import { 
  Menu, X, Leaf, Utensils, HeartHandshake, Users, 
  Clock, BellRing, CheckCircle, TrendingUp, ShieldCheck, 
  ArrowRight, CreditCard, Shield, Lock, Package, Calendar,
  MapPin, Navigation, Truck, ShoppingBag, Globe2, Search,
  Twitter, Instagram, Linkedin, Facebook, Mail, Phone,
  Plus, Trash2, LayoutDashboard, FileText, Building2, Zap, CircleDollarSign, BarChart3, Briefcase, AlertTriangle, ShieldAlert, BadgeCheck, CreditCard as CreditCardIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Partner Hub", href: "#partner-dashboard" },
    { name: "Corporate Deals", href: "#corporate-deals" },
    { name: "Order", href: "#order" },
    { name: "Donate", href: "#donate" },
    { name: "Pricing", href: "#pricing" },
    { name: "Security", href: "#security" },
    { name: "Track", href: "#track" },
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
            <span className="font-bold text-2xl text-gray-900 tracking-tight">FoodWise</span>
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
            <button className="bg-[#007A55] hover:bg-[#006344] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

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
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#007A55] hover:bg-emerald-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 bg-emerald-50 border-b border-emerald-100 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#007A55] px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-emerald-200">
            <Globe2 className="w-4 h-4" /> National & International Network
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Rescue Food. <br/> Feed the World.
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            FoodWise connects surplus food from restaurants and farms to communities in need locally and globally. Order discounted surplus meals or donate to make an impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-[#007A55] hover:bg-[#006344] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Explore Food Options <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
              Donate Surplus
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-emerald-200 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
            alt="Volunteers organizing food" 
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const PartnerDashboard = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Extra Large Pizza", qty: "5 Portions", price: "$4.00" },
    { id: 2, name: "Vegetable Curry", qty: "10 Portions", price: "$3.50" },
  ]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQty, setNewItemQty] = useState("");
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName) return;
    const newItem = {
      id: Date.now(),
      name: newItemName,
      qty: newItemQty || "1 Portion",
      price: "Free / Discounted"
    };
    setMenuItems([...menuItems, newItem]);
    setNewItemName("");
    setNewItemQty("");
  };
  
  const handleDelete = (id: number) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };
  
  return (
    <section id="partner-dashboard" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Dashboard Left Content */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Partner Dashboard</h2>
              <p className="text-gray-600">Manage your daily surplus inventory and view real-time statistics.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-sm font-medium text-gray-500 mb-1">Orders Taken</p>
                  <p className="text-3xl font-bold text-gray-900">142</p>
               </div>
               <div className="bg-emerald-600 p-6 rounded-2xl border border-emerald-700 shadow-sm text-white">
                  <p className="text-sm font-medium text-emerald-100 mb-1">Donations Given</p>
                  <p className="text-3xl font-bold text-white">89</p>
               </div>
            </div>
            
            {/* Embedded User Image */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img src="/Gemini_Generated_Image_7evglu7evglu7evg.png" alt="Dashboard Overview UI" className="w-full h-auto object-cover" />
            </div>
          </div>
          
          {/* Menu Management Right Content */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#007A55]" />
                Food Menu Management
             </h3>
             
             {/* Add Item Form */}
             <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3 mb-8 pb-8 border-b border-gray-100">
                <input 
                  type="text" 
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Food Item Name (e.g. Pasta)" 
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#007A55] focus:ring-1 focus:ring-[#007A55]"
                />
                <input 
                  type="text" 
                  value={newItemQty}
                  onChange={(e) => setNewItemQty(e.target.value)}
                  placeholder="Quantity" 
                  className="w-full sm:w-32 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#007A55] focus:ring-1 focus:ring-[#007A55]"
                />
                <button type="submit" className="bg-[#007A55] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#006344] transition-colors flex items-center justify-center gap-2 shadow-sm">
                   <Plus className="w-4 h-4" /> Add
                </button>
             </form>
             
             {/* Current Menu Items */}
             <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Current Active Listings</p>
                <div className="space-y-3">
                   {menuItems.length === 0 ? (
                     <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">No active items. Add food above.</div>
                   ) : (
                     menuItems.map(item => (
                       <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                          <div>
                             <p className="font-bold text-gray-900">{item.name}</p>
                             <p className="text-sm text-gray-500">{item.qty} • {item.price}</p>
                          </div>
                          <button onClick={() => handleDelete(item.id)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                             <Trash2 className="w-5 h-5" />
                          </button>
                       </div>
                     ))
                   )}
                </div>
             </div>
             
             {/* Contact & Organization Details Form */}
             <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                   <Users className="w-5 h-5 text-[#007A55]" />
                   Update Organization Details
                </h3>
                <form onSubmit={(e) => { e.preventDefault(); alert("Details updated successfully!"); }} className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                         <input type="text" defaultValue="FoodWise Partner Chapter" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#007A55] focus:ring-1 focus:ring-[#007A55]" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Operating Scope</label>
                         <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#007A55] focus:ring-1 focus:ring-[#007A55] bg-white">
                            <option>National & International</option>
                            <option>National Only</option>
                            <option>Local Region</option>
                         </select>
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                         <input type="email" defaultValue="hello@foodwise.org" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#007A55] focus:ring-1 focus:ring-[#007A55]" />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                         <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#007A55] focus:ring-1 focus:ring-[#007A55]" />
                      </div>
                   </div>
                   <button type="submit" className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center">
                      Save Changes
                   </button>
                </form>
             </div>
             
          </div>
        </div>
      </div>
    </section>
  );
};

const CorporateDeals = () => (
  <section id="corporate-deals" className="py-24 bg-gray-900 text-white border-b border-gray-800 relative overflow-hidden">
    {/* Subtle Background Image for Corporate Section */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop" alt="Corporate POS System" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-block bg-emerald-900/50 text-emerald-400 font-medium px-4 py-1.5 rounded-full text-sm mb-6 border border-emerald-800">
          Automated B2B Monetization
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Zero-Touch Corporate Partnerships</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Big brands and enterprise franchises plug into our API once. FoodWise automatically routes surplus, handles the sales, and splits the revenue instantly without human intervention.
        </p>
      </div>

      {/* Simulated Big Brand Partners */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 opacity-50 grayscale">
        <div className="flex items-center gap-2 text-2xl font-bold font-serif"><Utensils className="w-8 h-8"/> GlobalBurger</div>
        <div className="flex items-center gap-2 text-2xl font-bold"><Leaf className="w-8 h-8"/> GreenBowl Co.</div>
        <div className="flex items-center gap-2 text-2xl font-bold italic"><Package className="w-8 h-8"/> FreshMart</div>
        <div className="flex items-center gap-2 text-2xl font-bold"><Building2 className="w-8 h-8"/> CityBites Intl.</div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
           <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-emerald-400" />
           </div>
           <h3 className="text-xl font-bold mb-3">API Auto-Listing</h3>
           <p className="text-gray-400 mb-6">POS systems automatically detect end-of-day surplus and generate discounted listings on FoodWise instantly.</p>
           <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500 mb-1">Platform Profit Mode</p>
              <p className="font-bold text-emerald-400">$99/mo SaaS Fee per Location</p>
           </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
           <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
              <CircleDollarSign className="w-7 h-7 text-emerald-400" />
           </div>
           <h3 className="text-xl font-bold mb-3">Smart Revenue Split</h3>
           <p className="text-gray-400 mb-6">When a surplus meal is sold, our smart contracts instantly route the revenue to the brand and our platform fee.</p>
           <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500 mb-1">Platform Profit Mode</p>
              <p className="font-bold text-emerald-400">15% Commission per Sale</p>
           </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-emerald-500/50 transition-colors">
           <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-emerald-400" />
           </div>
           <h3 className="text-xl font-bold mb-3">ESG Data Reporting</h3>
           <p className="text-gray-400 mb-6">Enterprises receive automated, compliant ESG impact reports detailing exact carbon and water savings from their diverted food.</p>
           <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500 mb-1">Platform Profit Mode</p>
              <p className="font-bold text-emerald-400">Enterprise Data Licensing</p>
           </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <button className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 mx-auto shadow-lg shadow-emerald-900/50 hover:shadow-xl hover:-translate-y-0.5">
          <Briefcase className="w-5 h-5" /> Generate Automated Partner API Key
        </button>
      </div>
    </div>
  </section>
);

const OrderFood = () => (
  <section id="order" className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-block bg-emerald-100 text-[#007A55] font-medium px-4 py-1.5 rounded-full text-sm mb-6 border border-emerald-200">
          National & International Delivery Available
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Order Fresh Surplus Food</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get high-quality food delivered right to your door. Enter your location to see available restaurants in your specific area globally.</p>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm flex items-center">
           <div className="pl-4 pr-2 text-gray-400"><MapPin className="w-5 h-5"/></div>
           <input type="text" placeholder="Enter delivery address (e.g., New York, London, Mumbai)..." className="flex-1 py-3 outline-none text-gray-700" />
           <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">Search Area</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Gourmet Pasta Assortment", restaurant: "Luigi's Italiano", price: "$12.00", original: "$24.00", imgUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop" },
          { name: "Fresh Bakery Bundle", restaurant: "Morning Crusts", price: "$5.50", original: "$15.00", imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" },
          { name: "Vegan Salad Bowls", restaurant: "Green Leaf", price: "$8.00", original: "$16.00", imgUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" },
          { name: "Assorted Sushi Platter", restaurant: "Tokyo Bites", price: "$15.00", original: "$35.00", imgUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop" },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <div className={`h-48 bg-gray-200 relative`}>
               <img src={item.imgUrl} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900 shadow-sm">-50%</div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.restaurant}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#007A55]">{item.price}</span>
                  <span className="text-xs text-gray-400 line-through ml-2">{item.original}</span>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 p-2 rounded-full transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DonateFood = () => (
  <section id="donate" className="py-24 bg-emerald-50 border-b border-emerald-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="w-16 h-16 bg-[#007A55] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Donate Free Food Globally</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Whether you are a large restaurant chain or a local community center, our international network allows you to donate surplus food instantly. We handle the logistics so it reaches those in need, anywhere in the world.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop" 
            alt="Donation Logistics" 
            className="rounded-2xl shadow-lg mt-8 object-cover h-64 w-full"
          />
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
           <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">What are you donating?</label>
                 <input type="text" placeholder="e.g., 50 Loaves of Bread" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#007A55] outline-none" />
              </div>
              <button className="w-full bg-[#007A55] hover:bg-[#006344] text-white font-bold py-4 rounded-xl transition-colors shadow-md mt-4">
                 Post Donation Now
              </button>
           </form>
        </div>
      </div>
    </div>
  </section>
);

const LiveTracking = () => (
  <section id="track" className="py-24 bg-gray-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#007A55]/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Every Detail Live</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">Watch your order or donation move from the kitchen to the destination in real-time on our interactive map.</p>
      </div>
      <div className="relative bg-gray-800 p-2 rounded-3xl border border-gray-700 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
          alt="Live Delivery Map Tracking" 
          className="rounded-2xl w-full h-[500px] object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
              <Truck className="w-8 h-8 text-[#007A55]" />
              <div>
                 <p className="font-bold text-lg">En Route to Destination</p>
                 <p className="text-sm text-gray-500">Arriving in 15 mins</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);



const FoodWasteEducation = () => (
  <section id="education" className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-orange-100 text-orange-600 font-medium px-4 py-1.5 rounded-full text-sm mb-6 border border-orange-200">
            The Global Crisis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Food Waste Matters</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Roughly one-third of the food produced in the world for human consumption every year gets lost or wasted. That's about 1.3 billion tons. Meanwhile, millions go hungry. FoodWise bridges this gap.
          </p>
          <div className="space-y-6">
             <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-xl"><AlertTriangle className="w-6 h-6 text-red-500" /></div>
                <div>
                   <h4 className="font-bold text-gray-900 text-lg">Environmental Impact</h4>
                   <p className="text-gray-600">If food waste were a country, it would be the third largest emitting country in the world.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl"><Globe2 className="w-6 h-6 text-blue-500" /></div>
                <div>
                   <h4 className="font-bold text-gray-900 text-lg">Economic Loss</h4>
                   <p className="text-gray-600">Food waste costs the global economy roughly $940 billion every year.</p>
                </div>
             </div>
          </div>
        </div>
        <div className="relative h-full w-full min-h-[400px]">
           <img 
             src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2070&auto=format&fit=crop" 
             alt="Food Waste Impact" 
             className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
           />
        </div>
      </div>
    </div>
  </section>
);

const SubscriptionPayment = () => (
  <section id="pricing" className="py-24 bg-gray-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscription & Payments</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Automate your impact. Subscribe to monthly meal donations or unlock premium features for restaurants.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* User Sub */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow relative">
           <h3 className="text-2xl font-bold text-gray-900 mb-2">Supporter</h3>
           <p className="text-gray-500 mb-6">Feed a family every month.</p>
           <div className="mb-6"><span className="text-4xl font-extrabold text-gray-900">$15</span><span className="text-gray-500">/mo</span></div>
           <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-[#007A55]" /> 10 Meals Donated Monthly</li>
              <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-[#007A55]" /> Monthly Impact Report</li>
              <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-5 h-5 text-[#007A55]" /> Supporter Badge</li>
           </ul>
           <button className="w-full bg-emerald-50 text-[#007A55] font-bold py-3 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-200 flex items-center justify-center gap-2">
             <CreditCardIcon className="w-5 h-5"/> Subscribe via Stripe
           </button>
        </div>

        {/* Premium Partner */}
        <div className="bg-[#007A55] p-8 rounded-3xl border border-[#006344] shadow-xl relative transform md:-translate-y-4 text-white">
           <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">Most Popular</div>
           <h3 className="text-2xl font-bold mb-2">Partner Pro</h3>
           <p className="text-emerald-100 mb-6">For high-volume restaurants.</p>
           <div className="mb-6"><span className="text-4xl font-extrabold">$49</span><span className="text-emerald-200">/mo</span></div>
           <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-300" /> Unlimited Listings</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-300" /> Automated API Sync</li>
              <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-emerald-300" /> Zero Transaction Fees</li>
           </ul>
           <button className="w-full bg-white text-[#007A55] font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-md">
             Start 14-Day Free Trial
           </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-sm hover:shadow-xl transition-shadow text-white">
           <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
           <p className="text-gray-400 mb-6">For global food franchises.</p>
           <div className="mb-6"><span className="text-4xl font-extrabold">Custom</span></div>
           <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-emerald-500" /> Multi-location Management</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-emerald-500" /> ESG Compliance Reporting</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-emerald-500" /> Dedicated Account Manager</li>
           </ul>
           <button className="w-full bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700">
             Contact Sales
           </button>
        </div>
      </div>
    </div>
  </section>
);

const SecurityTrust = () => (
  <section id="security" className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Enterprise-Grade Security & Trust</h2>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             We handle sensitive partner APIs, donor payments, and user locations with the highest level of security. FoodWise ensures your data and transactions are completely protected.
           </p>
           <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                 <Lock className="w-8 h-8 text-[#007A55] mb-3" />
                 <h4 className="font-bold text-gray-900 mb-1">End-to-End Encryption</h4>
                 <p className="text-sm text-gray-500">All data is encrypted in transit and at rest using AES-256 standards.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                 <ShieldAlert className="w-8 h-8 text-[#007A55] mb-3" />
                 <h4 className="font-bold text-gray-900 mb-1">PCI Compliant</h4>
                 <p className="text-sm text-gray-500">Secure subscription and payment processing powered by trusted providers.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                 <BadgeCheck className="w-8 h-8 text-[#007A55] mb-3" />
                 <h4 className="font-bold text-gray-900 mb-1">Verified Partners</h4>
                 <p className="text-sm text-gray-500">Every NGO and restaurant on our platform passes strict verification checks.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                 <Shield className="w-8 h-8 text-[#007A55] mb-3" />
                 <h4 className="font-bold text-gray-900 mb-1">Food Safety Standard</h4>
                 <p className="text-sm text-gray-500">Compliance with local and international food health & safety regulations.</p>
              </div>
           </div>
        </div>
        <div className="relative">
           <div className="absolute inset-0 bg-[#007A55] rounded-3xl rotate-3 scale-105 opacity-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
             alt="Security and Trust" 
             className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
           />
           <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                 <Lock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                 <p className="font-bold text-gray-900">100% Secure</p>
                 <p className="text-sm text-gray-500">Data Protection</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutOrganization = () => (
  <section id="impact" className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative space-y-6">
           <img 
              src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop" 
              alt="Community Impact" 
              className="rounded-3xl shadow-xl w-full h-64 object-cover"
           />
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-extrabold text-[#007A55] mb-2">50+</span>
                <span className="text-gray-600 font-medium text-sm">Countries Served</span>
              </div>
              <div className="bg-orange-50 p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-extrabold text-orange-500 mb-2">2M+</span>
                <span className="text-gray-600 font-medium text-sm">Meals Rescued</span>
              </div>
           </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="inline-block bg-emerald-100 text-[#007A55] font-medium px-4 py-1.5 rounded-full text-sm mb-6 border border-emerald-200">
            Our Organization
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Built on a Mission to End Global Hunger</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            FoodWise started as a local initiative and quickly grew into an international platform bridging the gap between excess and need. Our team of engineers, logistics experts, and community organizers work tirelessly to ensure no edible food goes to waste.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Bio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-[#007A55] p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-white tracking-tight">FoodWise</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connecting surplus food with those who need it most. Operating globally to ensure zero waste and zero hunger.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007A55] hover:text-white transition-colors shadow-sm">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#007A55] hover:text-white transition-colors shadow-sm">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Platform</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#partner-dashboard" className="hover:text-emerald-400 transition-colors">Partner Hub</a></li>
            <li><a href="#order" className="hover:text-emerald-400 transition-colors">Order Food</a></li>
            <li><a href="#donate" className="hover:text-emerald-400 transition-colors">Donate Surplus</a></li>
            <li><a href="#track" className="hover:text-emerald-400 transition-colors">Live Tracking</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 group cursor-pointer">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:text-emerald-400 transition-colors" />
              <span className="group-hover:text-white transition-colors">123 Sustainability Way,<br/>Eco District, NY 10001,<br/>Global HQ</span>
            </li>
            <li className="flex items-center gap-3 group cursor-pointer">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0 group-hover:text-emerald-400 transition-colors" />
              <span className="group-hover:text-white transition-colors">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3 group cursor-pointer">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0 group-hover:text-emerald-400 transition-colors" />
              <span className="group-hover:text-white transition-colors">hello@foodwise.org</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest impact reports.</p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm w-full transition-all"
            />
            <button className="bg-[#007A55] hover:bg-[#006344] text-white font-medium py-3 rounded-xl transition-colors w-full text-sm shadow-md">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} FoodWise (National & International). All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);


const SplashScreen = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#007A55]/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <div className="bg-[#007A55] p-6 rounded-2xl mb-8 shadow-2xl shadow-[#007A55]/30">
          <Leaf className="w-16 h-16 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Food<span className="text-[#007A55]">Wise</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12">
          Rescue Food. Feed the World. 
          <br/>
          <span className="text-sm mt-4 block">National & International Network</span>
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="bg-[#007A55] hover:bg-[#006344] text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-[#007A55]/40 flex items-center gap-3"
        >
          Enter Website <ArrowRight className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default function FoodWiseApp() {
  const [entered, setEntered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "partner-dashboard", "corporate-deals", "order", "donate", "track", "education", "pricing", "security", "impact"];
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

  if (!entered) {
    return <SplashScreen onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#007A55] selection:text-white">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <PartnerDashboard />
        <CorporateDeals />
        <OrderFood />
        <DonateFood />
        <LiveTracking />
        <FoodWasteEducation />
        <SubscriptionPayment />
        <SecurityTrust />
        <AboutOrganization />
      </main>
      <Footer />
    </div>
  );
}
