import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# I will find the exact boundary for OrderFood.
# OrderFood starts at `const OrderFood = () => (` and ends before `const DonateFood = () => (`

start_partner = content.find('const PartnerDashboard = () => {')
end_order = content.find('const DonateFood = () => (')

if start_partner != -1 and end_order != -1:
    fixed_code = """const PartnerDashboard = () => {
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
                   <button type="submit" className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-sm">
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
          { name: "Gourmet Pasta Assortment", restaurant: "Luigi's Italiano", price: "$12.00", original: "$24.00", img: "bg-orange-100", icon: <Utensils className="text-orange-500 w-10 h-10"/> },
          { name: "Fresh Bakery Bundle", restaurant: "Morning Crusts", price: "$5.50", original: "$15.00", img: "bg-amber-100", icon: <Package className="text-amber-500 w-10 h-10"/> },
          { name: "Vegan Salad Bowls", restaurant: "Green Leaf", price: "$8.00", original: "$16.00", img: "bg-emerald-100", icon: <Leaf className="text-emerald-500 w-10 h-10"/> },
          { name: "Assorted Sushi Platter", restaurant: "Tokyo Bites", price: "$15.00", original: "$35.00", img: "bg-rose-100", icon: <Utensils className="text-rose-500 w-10 h-10"/> },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-40 ${item.img} flex items-center justify-center relative`}>
               <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900">-50%</div>
               {item.icon}
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

"""
    new_content = content[:start_partner] + fixed_code + content[end_order:]
    with open('app/page.tsx', 'w') as f:
        f.write(new_content)
    print("Fixed cleanly!")
