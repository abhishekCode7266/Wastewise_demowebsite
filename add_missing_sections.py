import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# Make sure imports are there (we need CheckCircle, Shield, CreditCard, Lock, Globe2)
import_target = "Plus, Trash2, LayoutDashboard, FileText, Building2, Zap, CircleDollarSign, BarChart3, Briefcase"
import_replacement = "Plus, Trash2, LayoutDashboard, FileText, Building2, Zap, CircleDollarSign, BarChart3, Briefcase, AlertTriangle, ShieldAlert, BadgeCheck, CreditCard as CreditCardIcon"

if import_target in content:
    content = content.replace(import_target, import_replacement)

# Nav links
nav_target = """    { name: "Donate", href: "#donate" },"""
nav_replacement = """    { name: "Donate", href: "#donate" },
    { name: "Pricing", href: "#pricing" },
    { name: "Security", href: "#security" },"""
content = content.replace(nav_target, nav_replacement)


# Components
new_sections = """

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
"""

# Insert these components right before AboutOrganization
about_idx = content.find('const AboutOrganization = () => (')
if about_idx != -1:
    content = content[:about_idx] + new_sections + '\n' + content[about_idx:]

# Update the main render block
main_target = """        <DonateFood />
        <LiveTracking />
        <AboutOrganization />"""
main_replacement = """        <DonateFood />
        <LiveTracking />
        <FoodWasteEducation />
        <SubscriptionPayment />
        <SecurityTrust />
        <AboutOrganization />"""
content = content.replace(main_target, main_replacement)

# Update scroll handling target array
scroll_target = 'const sections = ["home", "partner-dashboard", "corporate-deals", "order", "donate", "track", "impact"];'
scroll_replacement = 'const sections = ["home", "partner-dashboard", "corporate-deals", "order", "donate", "track", "education", "pricing", "security", "impact"];'
content = content.replace(scroll_target, scroll_replacement)

with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Added Education, Subscriptions, and Security.")
