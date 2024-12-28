'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Head from 'next/head'

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - IncrediboxSprunkiMod | Sprunked Music Games Privacy</title>
        <meta 
          name="description" 
          content="Read IncrediboxSprunkiMod's privacy policy. Learn how we protect your data while you enjoy our collection of Sprunked music creation games and interactive music makers."
        />
        <meta 
          name="keywords" 
          content="IncrediboxSprunkiMod privacy policy, Sprunked games privacy, music games data protection, online game privacy"
        />
      </Head>

      <div className="min-h-screen bg-black">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-gray-300">
              {/* Introduction */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Introduction
                </h2>
                <p className="mb-4">
                  Welcome to IncrediboxSprunkiMod's Privacy Policy. This policy explains how we collect, use, protect, and handle your personal information when you use our Sprunked music creation games and services.
                </p>
                <p>
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>

              {/* Information We Collect */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Email address (when you register or contact us)</li>
                      <li>Username and profile information</li>
                      <li>Game preferences and settings</li>
                      <li>Comments and community interactions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Usage statistics and gameplay data</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide and improve our Sprunked music creation games</li>
                  <li>To personalize your gaming experience</li>
                  <li>To maintain and optimize our services</li>
                  <li>To communicate with you about updates and features</li>
                  <li>To ensure security and prevent fraud</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              {/* Data Protection */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Data Protection
                </h2>
                <p className="mb-4">
                  We implement robust security measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Your Rights
                </h2>
                <p className="mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Right to access your data</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                </ul>
              </section>

              {/* Contact Information */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about our Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-2">
                  <p>Email: privacy@incrediboxsprunkimod.com</p>
                  <p>Website: www.incrediboxsprunkimod.com/contact</p>
                </div>
              </section>

              {/* Updates to Privacy Policy */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Updates to Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes through our website or email.
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
} 