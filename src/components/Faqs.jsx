import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-faqs.jpg';

const faqs = [
  [
    {
      question: 'How can Zen help me choose the right course for my career?',
      answer:
        'At Zen, our experienced counselors will guide you in selecting the right course that aligns with your career goals and interests. We provide personalized counseling sessions to understand your aspirations and help you make informed decisions.',
    },
    {
      question: 'Do you offer counseling for studying abroad?',
      answer:
        'Yes, Zen provides comprehensive counseling services for students aspiring to study abroad. We offer guidance on universities, application processes, visa requirements, and more.',
    },
    {
      question: 'Can you help me prepare for standardized tests like IELTS, TOEFL, and GMAT?',
      answer:
        'Absolutely! Zen offers specialized test preparation programs for IELTS, TOEFL, GMAT, and other standardized tests. Our expert tutors will assist you in improving your test-taking skills and achieving your desired scores.',
    },
  ],
  [
    {
      question: 'How long does the career counseling process take?',
      answer:
        'The duration of the career counseling process at Zen depends on individual needs and requirements. Our counselors work with you to create a customized plan and provide ongoing support until you achieve your career goals.',
    },
    {
      question: 'What are the benefits of studying IT courses at Zen?',
      answer:
        'Studying IT courses at Zen offers numerous benefits, including hands-on training, industry-relevant curriculum, access to experienced instructors, and placement assistance. We strive to prepare you for a successful career in the IT industry.',
    },
    {
      question: 'Can I change my course or study program after enrollment?',
      answer:
        'Yes, Zen understands that career paths may evolve over time. We provide flexibility for students to change their course or study program, subject to certain conditions. Our counselors will guide you through the process and help you make the transition smoothly.',
    },
  ],
  [
    {
      question: 'What are the eligibility criteria for studying nursing courses at Zen?',
      answer:
        'The eligibility criteria for nursing courses at Zen may vary depending on the specific program and institution. Our counselors will assess your qualifications and guide you on the admission requirements, including academic qualifications, language proficiency, and any additional prerequisites.',
    },
    {
      question: 'Do you offer scholarships or financial aid for students?',
      answer:
        'Zen provides information and guidance on available scholarships and financial aid options. We help students explore opportunities for funding their education and assist in the application process for scholarships, grants, and student loans.',
    },
    {
      question: 'How can I get started with the test preparation program at Zen?',
      answer:
        'To get started with the test preparation program at Zen, simply reach out to our team. We will assess your current level, discuss your goals, and recommend the appropriate test preparation program tailored to your needs. Our expert instructors will guide you throughout the process.',
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

