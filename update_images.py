import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# 1. Hero Section
hero_target = """const Hero = () => (
  <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 bg-emerald-50 border-b border-emerald-100">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#007A55] px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-emerald-200">
          <Globe2 className="w-4 h-4" /> National & International Network
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Rescue Food. <br className="hidden md:block"/> Feed the World.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          FoodWise connects surplus food from restaurants and farms to communities in need locally and globally. Order discounted surplus meals or donate to make an impact.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#007A55] hover:bg-[#006344] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
            Explore Food Options <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
            Donate Surplus
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);"""

hero_replacement = """const Hero = () => (
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
);"""
content = content.replace(hero_target, hero_replacement)

# 2. Order Food Section (Real Food Images)
order_target = """        {[
          { name: "Gourmet Pasta Assortment", restaurant: "Luigi's Italiano", price: "$12.00", original: "$24.00", img: "bg-orange-100", icon: <Utensils className="text-orange-500 w-10 h-10"/> },
          { name: "Fresh Bakery Bundle", restaurant: "Morning Crusts", price: "$5.50", original: "$15.00", img: "bg-amber-100", icon: <Package className="text-amber-500 w-10 h-10"/> },
          { name: "Vegan Salad Bowls", restaurant: "Green Leaf", price: "$8.00", original: "$16.00", img: "bg-emerald-100", icon: <Leaf className="text-emerald-500 w-10 h-10"/> },
          { name: "Assorted Sushi Platter", restaurant: "Tokyo Bites", price: "$15.00", original: "$35.00", img: "bg-rose-100", icon: <Utensils className="text-rose-500 w-10 h-10"/> },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-40 ${item.img} flex items-center justify-center relative`}>
               <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900">-50%</div>
               {item.icon}
            </div>"""

order_replacement = """        {[
          { name: "Gourmet Pasta Assortment", restaurant: "Luigi's Italiano", price: "$12.00", original: "$24.00", imgUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop" },
          { name: "Fresh Bakery Bundle", restaurant: "Morning Crusts", price: "$5.50", original: "$15.00", imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" },
          { name: "Vegan Salad Bowls", restaurant: "Green Leaf", price: "$8.00", original: "$16.00", imgUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" },
          { name: "Assorted Sushi Platter", restaurant: "Tokyo Bites", price: "$15.00", original: "$35.00", imgUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop" },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <div className={`h-48 bg-gray-200 relative`}>
               <img src={item.imgUrl} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900 shadow-sm">-50%</div>
            </div>"""
content = content.replace(order_target, order_replacement)

# 3. Donate Section
donate_target = """const DonateFood = () => (
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
        </div>"""

donate_replacement = """const DonateFood = () => (
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
        </div>"""
content = content.replace(donate_target, donate_replacement)

# 4. Live Tracking Map
track_target = """const LiveTracking = () => (
  <section id="track" className="py-24 bg-gray-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Every Detail Live</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">Watch your order or donation move from the kitchen to the destination in real-time on our interactive map.</p>
      </div>
    </div>
  </section>
);"""

track_replacement = """const LiveTracking = () => (
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
);"""
content = content.replace(track_target, track_replacement)

# 5. Corporate Deals Image
corp_target = """const CorporateDeals = () => (
  <section id="corporate-deals" className="py-24 bg-gray-900 text-white border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">"""

corp_replacement = """const CorporateDeals = () => (
  <section id="corporate-deals" className="py-24 bg-gray-900 text-white border-b border-gray-800 relative overflow-hidden">
    {/* Subtle Background Image for Corporate Section */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop" alt="Corporate POS System" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">"""
content = content.replace(corp_target, corp_replacement)

# 6. About Section Image
about_target = """        <div className="order-2 lg:order-1 relative">
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-6 rounded-3xl flex flex-col items-center justify-center text-center mt-8">
                <span className="text-4xl font-extrabold text-[#007A55] mb-2">50+</span>
                <span className="text-gray-600 font-medium text-sm">Countries Served</span>
              </div>
              <div className="bg-orange-50 p-6 rounded-3xl flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-extrabold text-orange-500 mb-2">2M+</span>
                <span className="text-gray-600 font-medium text-sm">Meals Rescued</span>
              </div>
           </div>
        </div>"""

about_replacement = """        <div className="order-2 lg:order-1 relative space-y-6">
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
        </div>"""
content = content.replace(about_target, about_replacement)

with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Images integrated successfully.")
