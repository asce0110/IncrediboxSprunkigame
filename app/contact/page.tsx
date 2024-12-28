'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // 模拟发送表单
    setTimeout(() => {
      setFormStatus('sent')
      // 3秒后重置状态
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#2EE59D] mb-8">
            Contact Us
          </h1>

          <div className="space-y-8">
            {/* Contact Information */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-6">
                Have questions about our Sprunked music creation games or need support? We're here to help! Contact us through email or use the form below.
              </p>
              
              <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg">
                <Mail className="w-6 h-6 text-[#2EE59D]" />
                <a 
                  href="mailto:privacy@incrediboxsprunkimod.com"
                  className="text-[#2EE59D] hover:underline"
                >
                  privacy@incrediboxsprunkimod.com
                </a>
              </div>
            </section>

            {/* Contact Form */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-[#2EE59D]/20 rounded-lg 
                             text-white focus:outline-none focus:border-[#2EE59D] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-[#2EE59D]/20 rounded-lg 
                             text-white focus:outline-none focus:border-[#2EE59D] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-2 bg-black/30 border border-[#2EE59D]/20 rounded-lg 
                             text-white focus:outline-none focus:border-[#2EE59D] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-black/30 border border-[#2EE59D]/20 rounded-lg 
                             text-white focus:outline-none focus:border-[#2EE59D] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 
                           bg-[#2EE59D] text-black font-medium rounded-lg hover:bg-[#2EE59D]/90 
                           transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && 'Message Sent!'}
                  {formStatus === 'error' && 'Error Sending Message'}
                </button>
              </form>
            </section>

            {/* FAQ Section */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    What is the typical response time?
                  </h3>
                  <p className="text-gray-300">
                    We aim to respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Need immediate help?
                  </h3>
                  <p className="text-gray-300">
                    For urgent matters, please include "URGENT" in your email subject line.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Having technical issues?
                  </h3>
                  <p className="text-gray-300">
                    Please include your device type, browser version, and a detailed description of the issue.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 