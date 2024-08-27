import { LinkValues, ServiceValues } from "./types";

export const links: LinkValues[] = [
  { id: 0, head: "Home", href: "/" },
  { id: 3, head: "About Us", href: "/about-us" },
  { id: 2, head: "Service", href: "/service" },
  {
    id: 3,
    head: "Blog",
    href: "/blog/post",
    pages: [
      { id: 0, head: "Post", href: "/blog/post" },
      { id: 1, head: "What We Do", href: "/blog/what-we-do" },
    ],
  },
  { id: 4, head: "Contact", href: "/contact" },
];

export const services: ServiceValues[] = [
  {
    id: 0,
    title: "Audit and Assurance Services",
    description:
      "The audit clients of P&G today include corporates, banks, medium & small enterprises including family-owned businesses.",
    detail:
      "Our Audit and Assurance Services offer comprehensive evaluations to ensure that your financial statements are accurate and compliant with regulatory standards. We cater to a diverse clientele, including large corporations, financial institutions, and small to medium enterprises. Our expert team performs rigorous audits to provide you with reliable insights into your financial health, helping you to meet compliance requirements and make informed decisions. With a focus on precision and transparency, we aim to build trust and uphold the highest standards of financial integrity.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business1.png",
    link: "/service/0",
  },
  {
    id: 1,
    title: "Advisory Services",
    description:
      "P&G provides advisory services relating to capital issues, financing options, management audits and helps draft financing proposals.",
    detail:
      "Our Advisory Services are designed to guide you through complex financial decisions and strategic planning. We specialize in capital raising, providing expert advice on financing options that best suit your business needs. Whether you are seeking to expand, restructure, or optimize your financial strategies, our team offers tailored solutions to help you achieve your goals. From management audits to drafting comprehensive financing proposals, we deliver actionable insights that drive growth and enhance operational efficiency. Trust us to be your partner in navigating financial challenges and seizing opportunities.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business4.png",
    link: "/service/1",
  },
  {
    id: 2,
    title: "Taxation Services",
    description:
      "P&G provides advisory services relating to capital issues, financing options, management audits and helps draft financing proposals.",
    detail:
      "Our Taxation Services offer expert guidance to navigate the complexities of tax regulations and optimize your tax position. We provide strategic advice on various tax matters, including compliance, planning, and risk management. Our services cover a wide range of areas such as corporate tax, VAT/GST, and personal tax planning. By leveraging our in-depth knowledge of tax laws and regulations, we help you minimize liabilities and ensure compliance while identifying opportunities for tax efficiencies. Partner with us to manage your tax obligations effectively and enhance your financial performance.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business3.png",
    link: "/service/2",
  },
  {
    id: 3,
    title: "Tax Planning & Consulting",
    description:
      "P&G provides strategize to your tax plan with our expert consulting services to optimize your financial outcomes.",
    detail:
      "Our Tax Planning & Consulting services are tailored to help you devise effective tax strategies that align with your financial goals. We work closely with you to understand your unique situation and develop customized plans that optimize tax benefits and reduce liabilities. Our expert consultants provide valuable insights on tax-efficient investments, deductions, and credits. By staying up-to-date with the latest tax regulations and trends, we ensure that your tax strategy remains robust and compliant. Let us guide you through the complexities of tax planning and consulting to achieve favorable financial outcomes.",
    icon: "https://consultia-nextjs.vercel.app/assets/img/icons/tax-business2.png",
    link: "/service/3",
  },
];

export const faqs = [
  {
    id: 1,
    value: "item-1",
    question: "What should entrepreneurs never do?",
    answer:
      "I’m a serial entrepreneur and have started/ran/sold approximately 20 businesses over the past 45 years. Some of my businesses made millions, some of them broke even. But - I never lost a dime on a single one.",
  },
  {
    id: 2,
    value: "item-2",
    question: "Why do I need a Chartered Accountant?",
    answer:
      "A Chartered Accountant provides expert advice on financial planning, tax strategies, and compliance with financial regulations, ensuring that your business is financially sound and legally compliant.",
  },
  {
    id: 3,
    value: "item-3",
    question: "What services do Chartered Accountants offer?",
    answer:
      "Chartered Accountants offer a wide range of services including tax planning, auditing, financial reporting, business advisory, and risk management, tailored to meet the unique needs of each client.",
  },
  {
    id: 4,
    value: "item-4",
    question: "How can I reduce my tax liability?",
    answer:
      "Reducing tax liability involves strategic planning, taking advantage of tax deductions, credits, and efficient tax structures. A Chartered Accountant can guide you through legal avenues to minimize your tax burden.",
  },
  {
    id: 5,
    value: "item-5",
    question: "What is the difference between bookkeeping and accounting?",
    answer:
      "Bookkeeping involves the daily recording of financial transactions, while accounting encompasses interpreting, classifying, analyzing, reporting, and summarizing financial data to inform business decisions.",
  },
  {
    id: 6,
    value: "item-6",
    question: "How often should I meet with my Chartered Accountant?",
    answer:
      "It’s recommended to meet with your Chartered Accountant at least quarterly to review financial performance, discuss tax planning strategies, and ensure your business remains on track with its financial goals.",
  },
  {
    id: 7,
    value: "item-7",
    question: "What should I prepare before meeting my Chartered Accountant?",
    answer:
      "Before meeting your Chartered Accountant, gather all relevant financial documents, including income statements, balance sheets, tax returns, and any other records that reflect your business’s financial activities.",
  },
];
