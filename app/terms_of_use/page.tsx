import Footer from '@/components/shared/common/Footer';
import React from 'react';

const TermsOfUsePage = () => {
  return (
    <div className="flex flex-col items-center font-notoSans">
      <div className="max-w-3xl w-full px-4 pt-5 pb-12 h-full">
        <div className="flex justify-between pt-4">
          <h1 className="text-2xl font-bold">Terms of Use for Interactive Lessons of Astronomy</h1>
        </div>

        <hr className="my-4" />

        <div>
          <h2 className="font-bold text-xl">1. Acceptance of Terms</h2>

          <p className=" mt-3">
            By using Interactive Lessons of Astronomy, you agree to these terms. If not, please do not use our platform.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">2. User Content and Conduct</h2>

          <p className=" mt-3">
            You own or have rights to the content you post and grant us a license to use it. No posting of illegal, harmful, or infringing content.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">3. Usage Rights</h2>

          <p className=" mt-3">We can terminate your account for violating these Terms.</p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">4. Disclaimers and Limitation of Liability</h2>

          <p className=" mt-3">
            Interactive Lessons of Astronomy is provided as is. We are not liable for any damages from your use of the platform.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">5. Changes and Jurisdiction</h2>

          <p className=" mt-3">
            Terms can change. Continued use means you agree to new terms. Governed by Ukrainian laws. For questions, contact us at 
            <a className="text-link" href="mailto:interactive.astronomy@gmail.com">
              {' '}interactive.astronomy@gmail.com
            </a>
          </p>
        </div>

        <hr className="my-12" />

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfUsePage;
