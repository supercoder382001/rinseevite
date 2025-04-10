
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const TermsPage = () => {
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
              <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
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
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      By using Rinsee services, you agree to be bound by these Terms and Conditions.
                    </li>
                    <li className="text-gray-700">
                      If you do not agree to these terms, please do not use our services.
                    </li>
                    <li className="text-gray-700">
                      These terms may be updated periodically, and your continued use constitutes acceptance of any changes.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Rinsee provides laundry, dry cleaning, and related textile care services on an on-demand and subscription basis.
                    </li>
                    <li className="text-gray-700">
                      Our services include pickup and delivery of items to specified locations at scheduled times.
                    </li>
                    <li className="text-gray-700">
                      We offer various service levels and packages to meet different customer needs.
                    </li>
                    <li className="text-gray-700">
                      Special care services for delicate fabrics and specialty items are available at additional costs.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">3. User Registration</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      To use our services, you must register for an account with accurate personal information.
                    </li>
                    <li className="text-gray-700">
                      You are responsible for maintaining the confidentiality of your account credentials.
                    </li>
                    <li className="text-gray-700">
                      You agree to update your information as necessary to maintain its accuracy.
                    </li>
                    <li className="text-gray-700">
                      You must be at least 18 years old to register for and use our services.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">4. Service Scheduling and Cancellation</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      You may schedule services through our website or mobile application.
                    </li>
                    <li className="text-gray-700">
                      Cancellations must be made at least 24 hours before the scheduled pickup time to avoid cancellation fees.
                    </li>
                    <li className="text-gray-700">
                      Last-minute cancellations or missed pickups may result in a fee of up to 50% of the estimated service cost.
                    </li>
                    <li className="text-gray-700">
                      Subscription customers receive priority scheduling and flexible rescheduling options.
                    </li>
                    <li className="text-gray-700">
                      Company is not responsible for any article which is left beyond 30 days. After this period, if any discount was given on this order at the time of pickup shall be removed and a storage fees shall be charged @12% per month on the total invoice amount. Article not claimed within three months shall be handled appropriately by Company and be sold to recover the billed charges.
                    </li>
                    <li className="text-gray-700">
                      Company reserves the right to refuse cleaning any garment.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">5. Pricing and Payment</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Pricing for services is as listed on our website or application at the time of scheduling.
                    </li>
                    <li className="text-gray-700">
                      We reserve the right to change prices at any time with appropriate notice.
                    </li>
                    <li className="text-gray-700">
                      Payment is required at the time of scheduling for one-time services or according to subscription terms.
                    </li>
                    <li className="text-gray-700">
                      All payments are processed securely through our authorized payment processors.
                    </li>
                    <li className="text-gray-700">
                      Refunds are processed according to our refund policy detailed in section 6.
                    </li>
                    <li className="text-gray-700">
                      Company does not provide printed bills, and invoices will be sent by e-mail only on registered email id.
                    </li>
                    <li className="text-gray-700">
                    8.	Any cashback provided to customer will be given to customer as services and no money will be given back to customer in any case. This cashback amount will be added to customer's Rinsee account.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">6. Service Quality and Guarantees</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      We strive to provide high-quality service for all items entrusted to our care.
                    </li>
                    <li className="text-gray-700">
                      If you are not satisfied with our service, please notify us within 48 hours of delivery.
                    </li>
                    <li className="text-gray-700">
                      We will assess the issue and may offer re-cleaning, credit for future services, or refund at our discretion.
                    </li>
                    <li className="text-gray-700">
                      Certain stains or damages may not be removable due to the nature of the fabric or the extent of the issue.
                    </li>
                    <li className="text-gray-700">
                      All garments/linen/fabrics are handled with greatest care but owing to the conditions of the articles or non apparent/non-visible defects in its material there is a POSSIBILITY OF DISCOLOURING OR SHRINKAGE. Such garments are accepted for cleaning at OWNER'S RISK and company will not accept any responsibility for it.
                    </li>
                    <li className="text-gray-700">
                      Company will use reasonable efforts to try to ensure that washing, drying and folding services are maintained at a high level of quality.
                    </li>
                    <li className="text-gray-700">
                      Company accepts no liability for items whose loose colour, specially when colour of one part of the garment gets on the other part.
                    </li>
                    <li className="text-gray-700">
                      Removal of stain is a part of the process but, complete removal of stains can not be guaranteed and will be processed at customer's risk.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">7. Damage or Loss Policy</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      We take utmost care with your items during the cleaning process.
                    </li>
                    <li className="text-gray-700">
                      If an item is damaged or lost during our service process, our liability is limited to up to 10 times the service fee for that item, not to exceed ₹ 500 per item.
                    </li>
                    <li className="text-gray-700">
                      We are not responsible for normal wear and tear, pre-existing damage, or damage that occurs due to the condition of the item before service.
                    </li>
                    <li className="text-gray-700">
                      Claims must be filed within 7 days of delivery with photographic evidence where applicable.
                    </li>
                    <li className="text-gray-700">
                      Company is not responsible for loss of or damage to any personal or non-cleanable items left in the article such as money, jewellery, or anything else.
                    </li>
                    <li className="text-gray-700">
                      In case of any loss or damage Company can reimburse up to a maximum of three (3) times of its processing (laundry / dry-clean) cost (decision remains with Company if any reimbursement has to be done) only if Customer is able to produce the bills. Compensation shall be provided in form of services and no cash will be given to customer.
                    </li>
                    <li className="text-gray-700">
                      Customers are requested to count the articles at the time of delivery and inform the delivery man in case of missing articles. Company will not be responsible for any such claims after the articles delivery has been accepted and signed by the customer.
                    </li>
                    <li className="text-gray-700">
                      Company gives a warranty of 7 days from the date of delivery for the articles, for any quality related issues with washing or dry-cleaning of articles (only if the article has not been used by the customer after service). Any quality related claim after the stipulated time shall not be entertained.
                    </li>
                    <li className="text-gray-700">
                      Company shall not be held responsible for any ornaments/ jewellery fittings on the garment.
                    </li>
                    <li className="text-gray-700">
                      Any loss/damage/delay due to FORCE MAJEURE conditions, Company is not liable for any compensation or reduction in charges.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">8. Subscription Terms</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Subscription plans are billed monthly and automatically renew until canceled.
                    </li>
                    <li className="text-gray-700">
                      You may cancel or pause your subscription at any time with at least 7 days' notice before your next billing date.
                    </li>
                    <li className="text-gray-700">
                      Unused service allowances do not roll over to the next month.
                    </li>
                    <li className="text-gray-700">
                      Changes to subscription plans take effect on the next billing cycle.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">9. Privacy Policy</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Our collection and use of your personal information is governed by our Privacy Policy.
                    </li>
                    <li className="text-gray-700">
                      Our Privacy Policy is incorporated into these Terms by reference.
                    </li>
                    <li className="text-gray-700">
                      We respect your privacy and implement appropriate measures to protect your personal information.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      We reserve the right to modify these Terms at any time as our services evolve.
                    </li>
                    <li className="text-gray-700">
                      Changes will be effective upon posting to our website or application.
                    </li>
                    <li className="text-gray-700">
                      Your continued use of our services after changes constitutes acceptance of the modified Terms.
                    </li>
                    <li className="text-gray-700">
                      Material changes to these Terms will be communicated via email or in-app notifications.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      These Terms are governed by the laws of the state where our primary business operations are located (Delhi, India).
                    </li>
                    <li className="text-gray-700">
                      Any legal disputes will be resolved without regard to conflict of law provisions.
                    </li>
                    <li className="text-gray-700">
                      Any disputes arising from these Terms shall be resolved through arbitration where permitted by law.
                    </li>
                  </ul>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Entity Name: Trickerr Finoo Pvt. Ltd.
                    </li>
                    <li className="text-gray-700">
                      Email: legal@rinsee.in
                    </li>
                    <li className="text-gray-700">
                      Phone: +91 7428160047
                    </li>
                    <li className="text-gray-700">
                      Postal Address: 60, Chandu Park, Krishna Nagar, Delhi 110051
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">13. Cancellation/Refund</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Any extra amount paid by customer for retail order can be refunded by the company if customer ask.
                    </li>
                    <li className="text-gray-700">
                      Balance available in "Prepaid" plans are non-refundable and can not be transferred to any other customer.
                    </li>
                    <li className="text-gray-700">
                      User can cancel at any time before actual pick-up. No cancellation charges will be levied
                    </li>
                    <li className="text-gray-700">
                      In case company deny to process any article because of any reason, the order amount for that article will be refunded to retail customer or will be added to prepaid balance for prepaid plan customer.
                    </li>
                    <li className="text-gray-700">
                      If customer wants to cancel the order because of any reason, then the request for cancellation has to be placed within 2 hr of pickup of articles.
                    </li>
                    <li className="text-gray-700">
                      Once order is punched and processed, order can't be cancelled.
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">14. Coupons & Discounts</h2>
                  <ul className="space-y-3 list-disc pl-6">
                    <li className="text-gray-700">
                      Coupon can only be applied by customer using Rinsee mobile app on available platform.
                    </li>
                    <li className="text-gray-700">
                      Once order placed and invoice is generated coupon can't be applied.
                    </li>
                    <li className="text-gray-700">
                      No two or more discounts / coupons / offers can be clubbed together.
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

export default TermsPage;
