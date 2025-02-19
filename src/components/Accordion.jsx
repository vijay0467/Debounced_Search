import React, { useState, useEffect } from "react";
import FAQItem from "./FAQItem";
import faqsData from "../data/faqs.json";

const Accordion = () => {
  const [faqs, setFaqs] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    setFaqs(faqsData);
  }, []);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={faq.id === openId}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
};

export default Accordion;
