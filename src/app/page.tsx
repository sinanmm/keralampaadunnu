"use client";

import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Music, 
  ChevronDown, 
  Star,
  CheckCircle,
  ExternalLink,
  Phone
} from "lucide-react";
import Image from "next/image";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfvvl1GpGe9omUHtExOI5KjtBEY6UNXRjRJUiOtJ9aRIvT3Sg/viewform?usp=sharing&ouid=108968356076335041685";
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfvvl1GpGe9omUHtExOI5KjtBEY6UNXRjRJUiOtJ9aRIvT3Sg/viewform?embedded=true";

export default function Home() {
  const scrollToDetails = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="min-h-screen bg-kerala-ivory text-kerala-brown overflow-hidden">
      


      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-section-keralam.png"
            alt="Kerala Music Patriotism Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Lighter Overlay to let the beautiful image shine, with a gradient fade at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-kerala-ivory/95"></div>
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
          className="z-10 max-w-5xl mx-auto flex flex-col items-center relative"
        >
          {/* Centered Logo */}
          <motion.div 
            animate={{ y: [0, -12, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mb-2 w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[36rem] md:h-[36rem] lg:w-[48rem] lg:h-[48rem] relative drop-shadow-2xl pointer-events-auto filter hover:scale-105 transition-transform cursor-pointer"
          >
            <Image 
              src="/paat.PNG" 
              alt="Kerala Paadunnu Logo" 
              fill 
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Main Title with Gradient and deep shadow */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-kerala-green to-[#0f3b22] mb-6 leading-tight font-malayalam drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)] filter w-full break-words">
            കേരളം പാടുന്നു ദേശത്തിനായ്
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#5c3a21] mb-6 font-malayalam drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] w-full break-words">
            10000 ഗായകരുടെ ദേശഭക്തിഗാനം
          </h2>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 bg-white/70 backdrop-blur-md px-6 py-3 md:py-2.5 rounded-3xl md:rounded-full border border-kerala-green/40 text-kerala-green font-bold text-base md:text-xl font-malayalam mb-12 shadow-sm drop-shadow-[0_1px_1px_rgba(255,255,255,1)] text-center w-full sm:w-auto">
            <Users size={22} className="text-[#0f3b22] flex-shrink-0" />
            <span>സംഘാടകർ : തിരുവനന്തപുരം പാട്ടിന്റെ കൂട്ടുകാർ</span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-12 w-full">
            <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-lg px-6 md:px-8 py-3 md:py-4 rounded-full border border-kerala-gold/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-kerala-brown transform hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <Calendar className="text-kerala-gold flex-shrink-0" size={24} />
              <span className="font-bold text-lg md:text-xl font-inter">2026 ആഗസ്റ്റ് 15</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-lg px-6 md:px-8 py-3 md:py-4 rounded-full border border-kerala-gold/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-kerala-brown transform hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <MapPin className="text-kerala-gold flex-shrink-0" size={24} />
              <span className="font-bold text-lg md:text-xl font-inter">കോഴിക്കോട്</span>
            </div>
          </div>

          <p className="text-lg md:text-3xl font-medium text-kerala-brown mb-14 max-w-3xl font-malayalam italic leading-relaxed drop-shadow-sm bg-white/50 px-6 md:px-8 py-4 md:py-6 rounded-3xl backdrop-blur-md border border-white/60 shadow-xl w-full">
            “സ്വാതന്ത്ര്യദിനത്തിൽ കേരളത്തിന്റെ സംഗീത ശബ്ദം ദേശത്തിനായി ഒന്നിക്കുന്നു.”
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-kerala-green to-[#0f3b22] text-white font-bold py-5 px-10 rounded-full shadow-[0_10px_40px_-10px_rgba(27,77,62,0.8)] hover:shadow-[0_15px_50px_-10px_rgba(27,77,62,1)] hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3 text-xl border border-[#0f3b22]"
            >
              Apply Now
              <ExternalLink size={24} />
            </a>
            <button 
              onClick={scrollToDetails}
              className="bg-white/90 hover:bg-white text-kerala-green font-bold py-5 px-10 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3 text-xl backdrop-blur-md border border-kerala-gold/40"
            >
              View Details
              <ChevronDown size={24} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Video Showcase Section */}
      <section id="video-showcase" className="relative py-24 overflow-hidden bg-kerala-ivory/60">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-kerala-gold/10 to-transparent pointer-events-none"></div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="relative max-w-5xl mx-auto px-4 text-center z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-kerala-gold/60 bg-white/80 backdrop-blur-sm px-6 py-2.5 text-sm font-bold text-kerala-brown shadow-sm mb-6 uppercase tracking-wider font-inter">
            <span className="text-xl">🎶</span> Official Program Video
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-kerala-green font-malayalam mb-5 drop-shadow-sm">
            പരിപാടിയുടെ ദൃശ്യാവിഷ്കാരം
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-kerala-brown/90 font-malayalam mb-12 leading-relaxed">
            കേരളത്തിന്റെ സംഗീതവും സംസ്കാരവും ദേശസ്നേഹവും ഒന്നിക്കുന്ന ഒരു പ്രത്യേക അനുഭവം.
          </p>

          <div className="rounded-[2.5rem] border border-kerala-gold/50 bg-gradient-to-br from-kerala-green via-kerala-green-light to-[#0f3b22] p-4 md:p-6 shadow-2xl transition-all duration-500 hover:shadow-kerala-gold/30 hover:scale-[1.01]">
            <div className="rounded-[2rem] overflow-hidden border border-kerala-gold/40 bg-black shadow-inner relative group">
              <video
                src="/kerala.mp4"
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 pointer-events-none rounded-[2rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
            </div>
          </div>

          <p className="mt-10 max-w-3xl mx-auto text-kerala-brown/80 font-medium text-base md:text-lg font-malayalam italic bg-white/50 py-3 px-6 rounded-xl inline-block border border-white/60 shadow-sm backdrop-blur-sm">
            സ്വാതന്ത്ര്യദിനത്തോടനുബന്ധിച്ച് 10000 ഗായകർ ഒന്നിക്കുന്ന ഈ സംഗീത യാത്രയിലേക്ക് നിങ്ങളെയും സ്വാഗതം ചെയ്യുന്നു.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-kerala-gold rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-green mb-8">
              പരിപാടിയെ കുറിച്ച്
            </h2>
            <p className="text-xl leading-relaxed text-kerala-brown/90 max-w-3xl mx-auto font-malayalam">
              കേരളത്തിന്റെ സംഗീത പാരമ്പര്യവും ദേശസ്നേഹവും ഒന്നിക്കുന്ന മഹത്തായ സംഗീത പരിപാടിയാണ് "കേരളം പാടുന്നു ദേശത്തിനായ്". 2026 ആഗസ്റ്റ് 15ന് സ്വാതന്ത്ര്യദിനത്തോടനുബന്ധിച്ച് കോഴിക്കോട് നടക്കുന്ന ഈ പരിപാടിയിൽ 10000 ഗായകർ ദേശഭക്തിഗാനാലാപനത്തിൽ പങ്കെടുക്കുന്നു.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Cards */}
      <section className="py-20 px-4 bg-kerala-green/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <Calendar className="text-kerala-gold" size={32} />, title: "തിയ്യതി", value: "2026 ആഗസ്റ്റ് 15" },
              { icon: <Star className="text-kerala-gold" size={32} />, title: "അവസരം", value: "സ്വാതന്ത്ര്യദിനം" },
              { icon: <MapPin className="text-kerala-gold" size={32} />, title: "സ്ഥലം", value: "കോഴിക്കോട്" },
              { icon: <Users className="text-kerala-gold" size={32} />, title: "പങ്കെടുക്കുന്നവർ", value: "10000 ഗായകർ" },
              { icon: <Music className="text-kerala-gold" size={32} />, title: "വിഭാഗം", value: "ദേശഭക്തിഗാനാലാപനം" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm border border-kerala-green/10 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-kerala-gold/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-kerala-brown/60 uppercase tracking-wider mb-2 font-inter">{item.title}</h3>
                <p className="text-xl font-bold text-kerala-green font-malayalam">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-kerala-gold rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-green">
              പ്രധാന പ്രത്യേകതകൾ
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              "10000 singers participating together",
              "Patriotic music event",
              "Kerala cultural theme",
              "Open volunteer participation",
              "Independence Day special program"
            ].map((text, index) => (
              <motion.div key={index} variants={fadeIn} className="flex items-center gap-4 bg-kerala-ivory p-6 rounded-xl border border-kerala-gold/20">
                <CheckCircle className="text-kerala-green flex-shrink-0" size={24} />
                <span className="text-lg font-medium text-kerala-brown font-inter">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consent Section */}
      <section className="py-20 px-4 bg-kerala-green text-white relative overflow-hidden">
        {/* Subtle decorative background for consent area */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-kerala-gold rounded-full -mr-32 -mt-32"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 border-[40px] border-kerala-gold rounded-full -ml-32 -mb-32"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-gold mb-10">
              സമ്മതപത്രം
            </h2>
            
            <div className="kerala-border bg-white/5 backdrop-blur-sm p-8 md:p-12 mb-8">
              <p className="text-xl md:text-2xl leading-relaxed font-medium font-malayalam">
                “2026 ആഗസ്റ്റ് 15ന് സ്വാതന്ത്ര്യദിനത്തിൽ കോഴിക്കോട് നടക്കുന്ന 10000 ഗായകർ പങ്കെടുക്കുന്ന ദേശഭക്തി ഗാനാലാപനത്തിൽ ആരുടെയും നിർബന്ധമില്ലാതെ സ്വമേധയാ ഞാൻ പങ്കെടുക്കുന്നതാണ്.”
              </p>
            </div>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-malayalam">
              താൽപ്പര്യമുള്ളവർ താഴെ നൽകിയിരിക്കുന്ന Apply Now ബട്ടൺ ഉപയോഗിച്ച് അപേക്ഷ സമർപ്പിക്കുക.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-20 px-4 bg-kerala-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-green mb-8">
              ഇപ്പോൾ തന്നെ അപേക്ഷിക്കൂ
            </h2>
            
            <a 
              href={GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-kerala-gold hover:bg-kerala-gold-light text-kerala-brown hover:text-kerala-green font-bold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all text-xl md:text-2xl mb-12 border-2 border-kerala-gold"
            >
              Apply Now
              <ExternalLink size={24} />
            </a>

            <div className="w-full h-[600px] md:h-[800px] bg-white rounded-2xl shadow-lg overflow-hidden border border-kerala-gold/30">
              <iframe 
                src={GOOGLE_FORM_EMBED_URL} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                title="Google Form Application"
                className="w-full h-full"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kerala-ivory/50 to-white pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-kerala-green mb-10 font-malayalam">
              കൂടുതൽ വിവരങ്ങൾക്ക് ബന്ധപ്പെടുക
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="tel:+919446767455" 
                className="flex items-center gap-4 bg-white px-8 py-5 rounded-full border border-kerala-gold/40 hover:border-kerala-green transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 group w-full sm:w-auto justify-center"
              >
                <div className="bg-kerala-green/10 p-3 rounded-full group-hover:bg-kerala-green transition-colors">
                  <Phone className="text-kerala-green group-hover:text-white" size={24} />
                </div>
                <span className="text-xl md:text-2xl font-bold text-kerala-brown font-inter tracking-wide">+91 94467 67455</span>
              </a>

              <a 
                href="tel:+919495303176" 
                className="flex items-center gap-4 bg-white px-8 py-5 rounded-full border border-kerala-gold/40 hover:border-kerala-green transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 group w-full sm:w-auto justify-center"
              >
                <div className="bg-kerala-green/10 p-3 rounded-full group-hover:bg-kerala-green transition-colors">
                  <Phone className="text-kerala-green group-hover:text-white" size={24} />
                </div>
                <span className="text-xl md:text-2xl font-bold text-kerala-brown font-inter tracking-wide">+91 94953 03176</span>
              </a>
            </div>
            <p className="mt-10 text-kerala-brown/70 font-medium font-malayalam text-lg">
              (സംശയങ്ങൾക്കും കൂടുതൽ വിവരങ്ങൾക്കും വിളിക്കുകയോ വാട്സാപ്പ് ചെയ്യുകയോ ചെയ്യാം)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kerala-brown text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          
          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 relative drop-shadow-2xl mb-6">
            <Image 
              src="/paat.PNG" 
              alt="Kerala Paadunnu Logo" 
              fill 
              className="object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-kerala-gold mb-3 font-malayalam tracking-wide">
            കേരളം പാടുന്നു ദേശത്തിനായ്
          </h2>
          <p className="text-white/60 mb-8 font-inter">© 2026 All Rights Reserved</p>
          <div className="flex items-center justify-center gap-4 text-sm text-kerala-gold/80 font-inter uppercase tracking-[0.2em] font-semibold">
            <span>Music</span>
            <span className="w-1.5 h-1.5 rounded-full bg-kerala-green-light"></span>
            <span>Culture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-kerala-green-light"></span>
            <span>Patriotism</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
