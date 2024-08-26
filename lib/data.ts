import { LinkValues, ServiceValues } from "./types";

export const links: LinkValues[] = [
  { id: 0, head: "Home", href: "/" },
  { id: 3, head: "About Us", href: "/about-us" },
  { id: 2, head: "Service", href: "/service" },
  { id: 3, head: "Blog", href: "/blog" },
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

const articles = [
  {
    id: 1,
    title:
      "How To Write Your Consulting Firm Mission Statement (Why It’s Important).",
    image:
      "https://cdn.prod.website-files.com/5f55ff47b6d23a11cb496a69/633d4bb18c35be84fb7ab5ef_pexels-thirdman-7994325.jpg",
    link: "#",
    ctaText: "Read More",
  },
  {
    id: 2,
    title:
      "Personal Branding For Consultants: Be Authentic To Get More Clients.",
    image:
      "https://media.istockphoto.com/id/1408262049/photo/female-co-workers-meet-to-discuss-project.jpg?s=612x612&w=0&k=20&c=thl6QqXI4ple0-0eL8asWpaUGPEehbPz2F96YskcR9U=",
    link: "#",
    ctaText: "Read More",
  },
  {
    id: 3,
    title: "What Is An Entrepreneurial Consultant? (Examples Stories).",
    image:
      "https://media.istockphoto.com/id/1453843862/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE=",
    link: "#",
    ctaText: "Read More",
  },
];
