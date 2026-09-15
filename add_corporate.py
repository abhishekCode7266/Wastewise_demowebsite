import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# 1. Update Imports
import_target = "Plus, Trash2, LayoutDashboard, FileText\n} from \"lucide-react\";"
import_replacement = "Plus, Trash2, LayoutDashboard, FileText, Building2, Zap, CircleDollarSign, BarChart3, Briefcase\n} from \"lucide-react\";"
content = content.replace(import_target, import_replacement)

# 2. Update Navbar Links
nav_target = """    { name: "Partner Hub", href: "#partner-dashboard" },
    { name: "Order", href: "#order" },"""
nav_replacement = """    { name: "Partner Hub", href: "#partner-dashboard" },
    { name: "Corporate Deals", href: "#corporate-deals" },
    { name: "Order", href: "#order" },"""
content = content.replace(nav_target, nav_replacement)

# 3. Add Component Code (before OrderFood)
order_idx = content.find('const OrderFood = () => (')
corporate_component = """const CorporateDeals = () => (
  <section id="corporate-deals" className="py-24 bg-gray-900 text-white border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

"""
if order_idx != -1:
    content = content[:order_idx] + corporate_component + content[order_idx:]

# 4. Update handleScroll
scroll_target = 'const sections = ["home", "partner-dashboard", "order", "donate", "track", "impact"];'
scroll_replacement = 'const sections = ["home", "partner-dashboard", "corporate-deals", "order", "donate", "track", "impact"];'
content = content.replace(scroll_target, scroll_replacement)

# 5. Add to main
main_target = """        <PartnerDashboard />
        <OrderFood />"""
main_replacement = """        <PartnerDashboard />
        <CorporateDeals />
        <OrderFood />"""
content = content.replace(main_target, main_replacement)


with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Corporate Deals section injected successfully.")
