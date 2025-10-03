'use client'

import React from 'react';
 
import BoostTrafficSection from './BoostTrafficSection';
import FAQAccordionnew from './FAQAccordionnew';
import SEOLandingSectionJaipur from './SEOLandingSectionJaipur';
 
import WorkingProcessJaipur from './WorkingProcessJaipur';

function SocialMediaCompnayJaipur() {
  const faqItemsJaipur = [
    {
      question: "Do you provide digital marketing services specifically in Jaipur?",
      answer: "Yes, we specialize in providing SEO, social media marketing, PPC advertising, and website design services for businesses in Jaipur. Our local expertise helps your business rank higher in Jaipur-specific searches and attract more local customers."
    },
    {
      question: "How can SEO help my business in Jaipur?",
      answer: "SEO improves your website’s visibility on search engines when people in Jaipur search for your services. This drives more targeted traffic to your site, increasing calls, visits, and sales from local customers."
    },
    {
      question: "Can you manage social media for my Jaipur business?",
      answer: "Absolutely. We create and manage social media campaigns tailored to Jaipur’s audience, increasing your brand awareness, customer engagement, and trust among local followers."
    },
    {
      question: "Do you offer PPC advertising for Jaipur businesses?",
      answer: "Yes, we run highly targeted PPC ads on Google and social media to reach potential customers in Jaipur. Our strategies ensure you get the maximum ROI by showing ads only to people looking for your services in your area."
    },
    {
      question: "How long will it take to see digital marketing results for my Jaipur business?",
      answer: "SEO results typically take 3–6 months, while PPC ads and social media campaigns can start generating leads within days. We provide a clear timeline and regular reports to track your progress."
    },
    {
      question: "Why should I choose your agency for digital marketing in Jaipur?",
      answer: "We understand the local market dynamics of Jaipur and create customized digital marketing strategies that help you stand out among competitors, attract more local customers, and grow your revenue."
    },
    {
      question: "Do you build websites for Jaipur businesses?",
      answer: "Yes, we design fast, SEO-friendly, and mobile-responsive websites that represent your brand professionally and help you convert visitors into customers in Jaipur."
    },
    {
      question: "Can I track the performance of my digital marketing campaigns?",
      answer: "Definitely. We provide monthly performance reports with detailed insights into website traffic, keyword rankings, social media growth, and ad performance so you can make informed decisions."
    },
    {
      question: "Is it affordable for small businesses in Jaipur?",
      answer: "We offer flexible packages suitable for startups and small businesses in Jaipur to help you grow online without straining your budget."
    },
    {
      question: "How do I get started with your digital marketing services in Jaipur?",
      answer: "You can contact us via phone, WhatsApp, or our website form. We will discuss your goals, analyze your current online presence, and propose a strategy tailored to your business in Jaipur."
    }
  ];
  
  return (
    <div className="mx-auto">
    
      <SEOLandingSectionJaipur />
      <BoostTrafficSection />
     
      <WorkingProcessJaipur />
      <FAQAccordionnew content={faqItemsJaipur} title="Jaipur Digital Marketing" subtitle="FAQs" />
    </div>
  );
}

export default SocialMediaCompnayJaipur;