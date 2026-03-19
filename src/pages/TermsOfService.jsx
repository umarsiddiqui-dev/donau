import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white">
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-dark-900 mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-gray-400 font-medium mb-12">Last updated: February 9, 2026</p>

        <div className="legal-content">
          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">1. Acceptance of Terms</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">By accessing or using the Donau platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">2. Description of Service</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">Donau provides an AI-powered platform that connects brands with verified manufacturers. We facilitate the creation of product briefs, the submission of proposals, and communication between parties.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">3. User Accounts</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">4. Platform Conduct</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">Users agree to use the platform in a professional and lawful manner. You may not:</p>
          <ul className="mb-6 space-y-3">
            <li className="text-[0.95rem] text-slate-500 flex items-start gap-3 before:content-['•'] before:text-blue-500 before:font-bold">Provide false or misleading information in briefs or proposals</li>
            <li className="text-[0.95rem] text-slate-500 flex items-start gap-3 before:content-['•'] before:text-blue-500 before:font-bold">Interfere with the operation of the platform</li>
            <li className="text-[0.95rem] text-slate-500 flex items-start gap-3 before:content-['•'] before:text-blue-500 before:font-bold">Circumvent the platform to engage in transactions with matched parties</li>
            <li className="text-[0.95rem] text-slate-500 flex items-start gap-3 before:content-['•'] before:text-blue-500 before:font-bold">Harass other users</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">5. Fees and Payments</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">Donau may charge fees for certain features or services. All fees are clearly disclosed prior to use. You are responsible for any taxes associated with your use of the platform.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">6. Intellectual Property</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">The platform and its original content, features, and functionality are owned by Donau and are protected by international copyright, trademark, and other intellectual property laws.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">7. Limitation of Liability</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">Donau is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform or any interactions between brands and manufacturers.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">8. Termination</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">We reserve the right to terminate or suspend your account and access to the platform at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users or us.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">9. Governing Law</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">These Terms of Service shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-extrabold text-dark-900 mt-10 mb-5">10. Contact Us</h2>
          <p className="text-[0.95rem] leading-[1.7] text-slate-500 mb-5">If you have questions about these Terms of Service, please contact us at <a href="mailto:legal@donau.app" className="text-blue-500 font-semibold underline underline-offset-4">legal@donau.app</a>.</p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
