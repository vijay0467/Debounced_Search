import React from "react";

const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="faq-item">
      <button className={`faq-question ${isOpen ? "open" : ""}`} onClick={() => toggleFAQ(faq.id)}>
        {faq.question}
        <span className="toggle-symbol">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="faq-answer">{faq.answer}</p>}
    </div>
  );
};

export default FAQItem;
