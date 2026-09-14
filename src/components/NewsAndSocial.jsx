"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, MessageCircle, Heart, Calendar } from "lucide-react";

const ARTICLES = [
  {
    id: 1,
    date: "July 28, 2026",
    category: "New Horizons",
    title: "Introducing Private Catamaran Charters in Southern Sri Lanka",
    excerpt: "Sail into the sunset in ultimate privacy. Our newly launched catamaran journeys offer bespoke overnight itineraries and snorkeling with marine specialists.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    date: "June 15, 2026",
    category: "Wellness",
    title: "The Rebirth of Ayurveda: Sanctuary Retreats in Ella Highlands",
    excerpt: "Immerse yourself in our selected sanctuary retreats. Tailored holistic wellness programs managed by authentic local Ayurvedic doctors.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80"
  }
];

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552084117-56a987666449?auto=format&fit=crop&w=300&q=80",
    likes: "420",
    comments: "24"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=300&q=80",
    likes: "512",
    comments: "38"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=300&q=80",
    likes: "389",
    comments: "19"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=300&q=80",
    likes: "467",
    comments: "31"
  }
];

export default function NewsAndSocial() {
  return (
    <section id="news-social" className="pt-20 pb-20 bg-ivory-sacred relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Latest News & Journal */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-cinzel text-xs font-bold tracking-widest text-[#A87D46] uppercase block mb-2">
                L’Esprit Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-indigo-dark mb-4">
                Our Latest News & <span className="text-[#A87D46]">Curated Stories</span>
              </h2>
              <div className="h-[1px] w-20 bg-gold-primary mb-6" />
            </div>

            <div className="space-y-6">
              {ARTICLES.map((article) => (
                <motion.article 
                  key={article.id}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gold-border/30 rounded-xl overflow-hidden flex flex-col sm:flex-row gap-6 p-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-full sm:w-48 h-40 shrink-0 rounded-lg overflow-hidden relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center gap-2 text-charcoal/60 text-xs mb-2">
                        <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                        <span>{article.date}</span>
                        <span>•</span>
                        <span className="text-gold-dark uppercase font-semibold tracking-wider font-cinzel">{article.category}</span>
                      </div>
                      <h3 className="font-serif text-lg text-indigo-dark font-bold mb-2 hover:text-gold-dark transition-colors">
                        <a href="#">{article.title}</a>
                      </h3>
                      <p className="font-sans text-xs text-charcoal/80 leading-relaxed line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-indigo-dark hover:text-gold-dark uppercase tracking-wider transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right Column: Instagram Feed & Socials */}
          <div className="lg:col-span-5 space-y-8 bg-paper-parchment/40 border border-gold-border/40 p-6 sm:p-8 rounded-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="font-cinzel text-xs font-bold tracking-widest text-[#A87D46] uppercase block mb-1">
                  Social Hub
                </span>
                <h3 className="font-serif text-2xl text-indigo-dark font-bold">
                  Instagram Stories
                </h3>
              </div>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-cinzel text-xs font-bold text-gold-dark hover:text-[#071526] uppercase tracking-wider transition-all"
              >
                <Instagram className="w-5 h-5 text-gold-dark" />
                <span>@lespritvoyages</span>
              </a>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 gap-4">
              {INSTAGRAM_POSTS.map((post) => (
                <div 
                  key={post.id}
                  className="relative aspect-square rounded-xl overflow-hidden border border-gold-border/20 shadow-sm group cursor-pointer"
                >
                  <img 
                    src={post.image} 
                    alt="Instagram Post"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white z-10">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-gold-primary fill-gold-primary" />
                      <span className="text-xs font-bold font-sans">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-white fill-white" />
                      <span className="text-xs font-bold font-sans">{post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Follow Us CTA */}
            <div className="pt-4 text-center">
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#071526] text-gold-primary border border-gold-primary/30 hover:border-gold-primary font-cinzel text-xs font-bold uppercase tracking-widest rounded-lg inline-flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg shadow-gold"
              >
                <Instagram className="w-4 h-4 text-gold-primary" />
                <span>Follow L’Esprit Journeys</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
