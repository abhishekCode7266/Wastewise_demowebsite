import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

splash_screen_component = """
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
"""

# Insert component before FoodWiseApp
app_idx = content.find('export default function FoodWiseApp() {')
content = content[:app_idx] + splash_screen_component + '\n' + content[app_idx:]

# Add state to FoodWiseApp
state_idx = content.find('const [activeSection, setActiveSection] = useState("home");')
new_state = 'const [entered, setEntered] = useState(false);\n  const [activeSection, setActiveSection] = useState("home");'
content = content.replace('const [activeSection, setActiveSection] = useState("home");', new_state)

# Return early if not entered
return_idx = content.find('return (\n    <div className="min-h-screen')
new_return = """if (!entered) {
    return <SplashScreen onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="min-h-screen"""
content = content.replace('return (\n    <div className="min-h-screen', new_return)

with open('app/page.tsx', 'w') as f:
    f.write(content)

print("Splash screen added back.")
