"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Clock, Loader2, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
    const [state, handleSubmit] = useForm("mpweqqqz");

    if (state.succeeded) {
        return (
            <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
                <Navbar />
                <div className="pt-32 pb-24 relative overflow-hidden min-h-screen flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="glass p-10 max-w-2xl mx-auto border border-brand-primary/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                            <CheckCircle className="w-20 h-20 text-brand-primary mx-auto mb-6 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading uppercase text-white">Message Transmitted!</h2>
                            <p className="text-gray-400 text-lg font-mono mb-8">
                                // ACKNOWLEDGEMENT RECEIVED <br />
                                We have received your signal. Our engineering team will decode your requirements and establish a secure link shortly.
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-8 py-3 rounded-none skew-x-[-10deg] border border-brand-primary/50 hover:bg-brand-primary/10 transition-colors text-brand-primary font-bold uppercase tracking-wider"
                            >
                                <span className="skew-x-[10deg]">Initialize New Transmission</span>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        {/* Contact Info */}
                        <div className="lg:w-5/12 space-y-10">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading uppercase leading-tight">
                                    Let’s Build <br /> <span className="text-gradient">Something Extraordinary.</span>
                                </h1>
                                <p className="text-gray-400 text-lg font-mono border-l-2 border-brand-primary/50 pl-6">
                                    // INITIATE COMMUNICATION <br />
                                    Ready to automate your workflows or unlock your data? Schedule a free 30-minute strategy session. No sales pitch, just an engineering assessment.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-none skew-x-[-5deg] bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-deep-950 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                        <Mail size={20} className="skew-x-[5deg]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 font-heading uppercase text-white">Email Us</h3>
                                        <p className="text-gray-400 font-mono text-sm">hello@deep-dimensions.com</p>
                                        <p className="text-xs text-gray-500 mt-1">We respect your inbox. Zero spam.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-none skew-x-[-5deg] bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-deep-950 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                        <Clock size={20} className="skew-x-[5deg]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 font-heading uppercase text-white">Operating Hours</h3>
                                        <p className="text-gray-400 font-mono text-sm">Mon-Fri, 10:00 AM - 7:00 PM IST</p>
                                        <p className="text-xs text-gray-500 mt-1">Overlap availability for US/EU/APAC.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-none skew-x-[-5deg] bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-deep-950 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                        <MapPin size={20} className="skew-x-[5deg]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 font-heading uppercase text-white">Headquarters</h3>
                                        <p className="text-gray-400 font-mono text-sm">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-7/12 w-full">
                            <form onSubmit={handleSubmit} className="glass p-6 md:p-8 rounded-none skew-x-[-1deg] space-y-5 relative overflow-hidden border border-brand-primary/20 shadow-[0_0_30px_rgba(0,240,255,0.05)] max-w-2xl mx-auto lg:ml-auto">
                                <div className="skew-x-[1deg]">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Name *</label>
                                            <input
                                                required
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="How should we address you?"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Work Email *</label>
                                            <input
                                                required
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="So we can send the invite"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Phone Number</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Company</label>
                                            <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                placeholder="To help us research beforehand"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                            <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-brand-primary font-mono uppercase">Project Type *</label>
                                        <select
                                            required
                                            id="projectType"
                                            name="projectType"
                                            className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white appearance-none font-sans text-sm"
                                        >
                                            <option value="" className="bg-deep-950 text-gray-500">Select a project type...</option>
                                            <option value="AI Agents & Automation" className="bg-deep-950">AI Agents & Automation</option>
                                            <option value="Data Consulting & Warehousing" className="bg-deep-950">Data Consulting & Warehousing</option>
                                            <option value="Web Development" className="bg-deep-950">Web Development</option>
                                            <option value="Cybersecurity" className="bg-deep-950">Cybersecurity</option>
                                            <option value="Other" className="bg-deep-950">Other</option>
                                        </select>
                                        <ValidationError prefix="Project Type" field="projectType" errors={state.errors} className="text-red-500 text-xs" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-brand-primary font-mono uppercase">What’s the Challenge?</label>
                                        <textarea
                                            id="challenge"
                                            name="challenge"
                                            rows={3}
                                            placeholder="Briefly tell us what you want to solve or build..."
                                            className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                        ></textarea>
                                        <ValidationError prefix="Challenge" field="challenge" errors={state.errors} className="text-red-500 text-xs" />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full py-3 rounded-none skew-x-[-2deg] bg-brand-primary text-deep-950 font-bold hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                                    >
                                        <span className="skew-x-[2deg] flex items-center gap-2 uppercase tracking-wider text-sm">
                                            {state.submitting ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={18} /> Transmitting...
                                                </>
                                            ) : (
                                                "Book My Strategy Call"
                                            )}
                                        </span>
                                    </button>
                                    <p className="text-center text-[10px] text-gray-500 font-mono mt-2">
                                        // SECURE TRANSMISSION: 256-BIT ENCRYPTED
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
