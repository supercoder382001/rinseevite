
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-laundry-50 to-laundry-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-lg text-gray-700 mb-0">
                Last Updated: April 1, 2025
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="prose prose-lg">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-gray-700 mb-4">
                    At Rinsee, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.
                  </p>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We collect several types of information from and about users of our services, including:
                  </p>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Personal identifiers (name, email address, phone number, postal address)
                    </li>
                    <li className="text-gray-700">
                      Payment information (credit card details, billing address)
                    </li>
                    <li className="text-gray-700">
                      Service preferences and history
                    </li>
                    <li className="text-gray-700">
                      Device and usage information when using our website or app
                    </li>
                    <li className="text-gray-700">
                      Communications with our customer service team
                    </li>
                    <li className="text-gray-700">
                      Location data (with your permission) to facilitate pickup and delivery
                    </li>
                    <li className="text-gray-700">
                      Marketing preferences and responses to surveys or promotions
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Provide, maintain, and improve our services
                    </li>
                    <li className="text-gray-700">
                      Process transactions and send related information
                    </li>
                    <li className="text-gray-700">
                      Send service notifications and updates
                    </li>
                    <li className="text-gray-700">
                      Respond to comments, questions, and customer service requests
                    </li>
                    <li className="text-gray-700">
                      Send marketing communications (with your consent)
                    </li>
                    <li className="text-gray-700">
                      Analyze usage patterns to enhance user experience
                    </li>
                    <li className="text-gray-700">
                      Protect against and prevent fraud, unauthorized transactions, and other illegal activities
                    </li>
                    <li className="text-gray-700">
                      Comply with legal obligations and enforce our terms of service
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">
                    We may share your personal information with:
                  </p>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Service providers who perform services on our behalf (delivery partners, cleaning facilities)
                    </li>
                    <li className="text-gray-700">
                      Payment processors to complete transactions
                    </li>
                    <li className="text-gray-700">
                      Professional advisors (lawyers, accountants, insurers)
                    </li>
                    <li className="text-gray-700">
                      Authorities when required by law or to protect our rights
                    </li>
                    <li className="text-gray-700">
                      Business partners with your explicit consent
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We do not sell your personal information to third parties for marketing purposes.
                  </p>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      We implement appropriate technical and organizational security measures to protect your personal information.
                    </li>
                    <li className="text-gray-700">
                      We use industry-standard encryption to protect sensitive data transmission.
                    </li>
                    <li className="text-gray-700">
                      We maintain physical, electronic, and procedural safeguards in compliance with applicable regulations.
                    </li>
                    <li className="text-gray-700">
                      We regularly review and update our security practices to enhance protection.
                    </li>
                    <li className="text-gray-700">
                      No method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
                  <p className="text-gray-700 mb-4">
                    Depending on your location, you may have rights regarding your personal information, including:
                  </p>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Access to your personal information
                    </li>
                    <li className="text-gray-700">
                      Correction of inaccurate or incomplete information
                    </li>
                    <li className="text-gray-700">
                      Deletion of your personal information
                    </li>
                    <li className="text-gray-700">
                      Restriction or objection to processing
                    </li>
                    <li className="text-gray-700">
                      Data portability
                    </li>
                    <li className="text-gray-700">
                      Withdrawal of consent
                    </li>
                    <li className="text-gray-700">
                      Lodging a complaint with a supervisory authority
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      We use cookies and similar tracking technologies to collect and track information about your browsing activities.
                    </li>
                    <li className="text-gray-700">
                      Cookies help us analyze website traffic, customize content, and improve your experience.
                    </li>
                    <li className="text-gray-700">
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </li>
                    <li className="text-gray-700">
                      Some features may not function properly if cookies are disabled.
                    </li>
                    <li className="text-gray-700">
                      We honor Do Not Track signals when technically feasible.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Our services are not intended for children under 16 years of age.
                    </li>
                    <li className="text-gray-700">
                      We do not knowingly collect personal information from children under 16.
                    </li>
                    <li className="text-gray-700">
                      If we learn we have collected information from a child under 16, we will delete that information promptly.
                    </li>
                    <li className="text-gray-700">
                      Parents or guardians who believe we may have collected information from a child should contact us immediately.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      We may update our privacy policy from time to time to reflect changes in our practices or legal requirements.
                    </li>
                    <li className="text-gray-700">
                      Any changes will be posted on this page with an updated revision date.
                    </li>
                    <li className="text-gray-700">
                      Material changes will be communicated to you via email or through the application.
                    </li>
                    <li className="text-gray-700">
                      Your continued use of our services after any changes indicates your acceptance of the updated policy.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this privacy policy, please contact us at:
                  </p>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Email: privacy@rinsee.in
                    </li>
                    <li className="text-gray-700">
                      Phone: +91 7428160047
                    </li>
                    <li className="text-gray-700">
                      Postal Address: 60, Chandu Park, Krishna Nagar, Delhi 110051
                    </li>
                    <li className="text-gray-700">
                      Data Protection Officer: dpo@rinsee.in
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
