'use client';

import { Button } from '@/components/ui/button';
import { Files } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Footer from '@/components/shared/common/Footer';

const PolicyPage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <div className="flex flex-col items-center font-notoSans">
      <div className="max-w-3xl w-full px-4 pt-5 pb-12 ">
        <div className="flex justify-between pt-4">
          <h1 className="text-2xl font-bold">Terms of Use</h1>

          <Button variant="ghost" className="text-sm font-medium" onClick={handleClick}>
            <Files width={16} className="mr-1" />
            <span className="text-link font-bold">{isCopied ? 'Copied' : 'Copy link'}</span>
          </Button>
        </div>

        <hr className="my-4" />

        <p className="my-3">
          <i>
            Privacy Policy for Interactive Astronomy Lessons <br /> Effective Date: 1.01.2024
            <br />
            <Link className="flex mt-1 text-link" href={'/policy'}>
              Read the new terms.
            </Link>
          </i>
        </p>

        <p className="mt-12">
          <span className="font-medium">Welcome to Interactive Astronomy Lessons,</span> a platform
          dedicated to providing specialized astronomy lessons. Your privacy is of paramount
          importance to us. This Privacy Policy outlines the types of information we may collect
          from you or that you may provide when you use our Interactive Astronomy Lessons and our
          practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>

        <div className="mt-12">
          <h2 className="font-bold text-xl">1. Information We Collect and How We Use It</h2>

          <ul className="list-disc mt-3 flex flex-col gap-3 pl-5">
            <li>
              <span className="font-medium">Information You Provide to Us:</span> Personal
              Identification Information: Including but not limited to your name, email address,
              OnlyFans profile link, and any other information you choose to provide in your
              profile. Content: Photographs, videos, comments, likes, and other content you post on
              our platform.
            </li>

            <li>
              <span className=" font-medium">Automatically Collected Information:</span> Usage
              Details and IP Addresses: Information about your interaction with our Interactive
              Astronomy Lessons, including IP addresses, browser type, language, access times, pages
              viewed, and the routes by which you access our Interactive Astronomy Lessons. Device
              Information: We may collect information about the device you use to access our
              Interactive Astronomy Lessons, including the hardware model, operating system and
              version, unique device identifiers, and mobile network information.
            </li>

            <li>
              <span className=" font-medium">How We Use Your Information:</span> To provide,
              maintain, improve, and promote our Interactive Astronomy Lessons services. To
              personalize your experience and to allow us to deliver the type of content and product
              offerings in which you are most interested. To communicate with you about products,
              services, offers, promotions, rewards, and events offered by Interactive Astronomy
              Lessons and others, and provide news and information we think will be of interest to
              you.
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">2. Sharing Your Information</h2>

          <p className="mt-3">
            We do not sell, trade, or otherwise transfer to outside parties your Personally
            Identifiable Information unless we provide users with advance notice. This does not
            include website hosting partners and other parties who assist us in operating our
            Interactive Astronomy Lessons, conducting our business, or serving our users, so long as
            those parties agree to keep this information confidential.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">4. Data Security</h2>

          <p className="mt-3">
            We implement a variety of security measures to maintain the safety of your personal
            information when you enter, submit, or access your personal information.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">5. Changes to Our Privacy Policy</h2>

          <p className="mt-3">
            It is our policy to post any changes we make to our privacy policy on this page. If we
            make material changes to how we treat our users' personal information, we will notify
            you through a notice on the Interactive Astronomy Lessons home page.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">6. Contact Information</h2>

          <p className="mt-3">
            To ask questions or comment about this privacy policy and our privacy practices, contact
            us at:{' '}
            <a className="text-link" href="mailto:interactive.astronomy@gmail.com">
            interactive.astronomy@gmail.com
            </a>
          </p>
        </div>

        <hr className="my-12" />

        <Footer />
      </div>
    </div>
  );
};

export default PolicyPage;
