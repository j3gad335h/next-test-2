import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const FaqSection = dynamic(() => import('../page-section/FAQ/FaqSection'));
export default function FAQ() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const canonicalUrl = (
        BaseUrl + `${locale}/faq`
    );
    const router = useRouter();
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/faq",});
      }, [router]);
    useTwitterPixel('o7ukz');

    const ldJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Who is  Raqamyah?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Headquartered in Riyadh, Saudi Arabia and regulated by Saudi Central Bank under the Regulatory Sandbox Framework. Raqamyah is a Saudi Closed Joint Stock Company focused on the Financial Technology (FinTech) space. Raqamyah uses technology to bring financing solutions to Saudi Small and Medium Business Enterprises (SMEs), facilitating connections between financers and SMEs through its Peer-to-Peer Financing platform.",
                },
            },
            {
                "@type": "Question",
                name: "What is peer-to-peer financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Peer-to-Peer Financing is one form of crowdfunding. Crowdfunding is a way of raising finance by requesting number of people each for a small amount of money. In simple terms, peer-to-peer financing refers to financers providing finance to businesses without the use of a conventional intermediary such as a bank. ",
                },
            },
            {
                "@type": "Question",
                name: "Is the finance facilitated on Raqamyah is Shari’a compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes.Raqamyah has worked with prominent Islamic legal advisors and Islamic finance industry experts to develop a Murabaha structure that complies with the principl es of Shari’a.",
                },
            },
            {
                "@type": "Question",
                name: "Is Raqamyah regulated? Under which law does it operate?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Raqamyah is registered as a Closed Joint Stock company in Saudi Arabia with commercial registration number (1010449309).Raqamyah is authorised and regulated by Saudi Central Bank under Regulatory Sandbox Environment.",
                },
            },
            {
                "@type": "Question",
                name: " What is Raqamyah Complaint Procedures?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "In the event that you feel dissatisfied with any aspect of our services, you can contact us through our customer service team’s . contactus@raqamyah.com. he majority of complaints will be dealt through Raqamyah’s team, however, if the issue remains unresolved, the complaint will be escalated to Raqamyah’s Management. The management will review the complaint with a view to understand whether Raqamyah acted fairly and within its contractual obligations. A final written response will then be provided. If you still do not feel your complaint has been resolved fairly, you may then refer the issue to the Saudi Central Bank with their contact below: Saudi Central Bank Consumer Protection Department Al-Ma'ather Street, and P.O. Box 2992, Riyadh 11169, Saudi Arabia. Phone: 800-125-6666 http: //www.sama.gov.sa/en-us/consumerprotection/pages/complaint.aspx",
                },
            },
            {
                "@type": "Question",
                name: "What Measures are in place to ensure security around my data and the integrity of your platform?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Raqamyah Platform is running on DETASAD Elastic Cloud Services (SAHABA ECS).By hosting the platform on DETASAD Elastic Cloud Services, Raqamyah has leveraged security features such as identity and access management, and network security. Also, DETASAD has more than 35 years of experience in Saudi Arabia hosting some of the largest corporate and governmental data centres in Saudi Ar a bia. DETASAD uses this experience to implement and continuously improve security, operational management, and threat-mitigation practices that are essential to the strong protection of services and data.",
                },
            },
            {
                "@type": "Question",
                name: "What contingency arrangement do we have in place in case if Rqamyah ceases to trade?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a SAMA regulated entity, Raqamyah has a contingency plan in case Raqamyah cease operation for any reason. As part of this plan all available financers’ balances in Omnibus bank accounts will be returned to financers’ nominated bank accounts and a statement of outstanding payments and repayment schedule will be sent to financers within 10 business days. In order to ensure orderly business exit with minimal impact to platform participants, the platform will continue its operation for additional three months (extendable by additional three months if needed). During this period the following steps will take place: Pursue selling outstanding financed amounts to a financial institution (bank, finance company, funds, etc.) and refund financers’ outstanding amounts. If selling outstanding financed amounts proves to be difficult then the platform will seek early repayment of the outstanding financed amounts. If the financee (debtor) could not repay or get the outstanding refinanced, the platform would extend its helping hand in finding alternative financer. Otherwise, the Platform will appoint on behalf of financers a collection agency to orderly unwind the financed amounts and repay the financers.More importantly, all outstanding financed amounts will continue to be valid, legally binding and enforceable and installments will continue to be collected as they fall due. All payments will continue to be paid to the appointed collection agent, and we will be able to make regular disbursements until financed amount contracts are paid off.Raqamyah will communicate with all Platform’s participants the situation and action taken to preserve their rights, and to financees (debtors) the new arrangement for repayment of principal and profit.",
                },
            },
            {
                "@type": "Question",
                name: "Where is financers'money held and how is it protected?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Financers’ funds on Raqamyah are placed in a fully-segregated omnibus bank account at Saudi British Bank (SABB).",
                },
            },
            {
                "@type": "Question",
                name: "How can I withdraw my funds?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "All repayments and profits accrued will be credited to your Raqamyah Account on the platform. You can then choose the “Withdraw Funds” option on the “Dashboard” and follow the steps. You will then receive the funds in your registered bank account in Raqamyah within 3 working days.",
                },
            },
            {
                "@type": "Question",
                name: "How do I become a Qualified Individual Financer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "To be classified as a Qualified Individual Financer you need to fulfill at least one of the following criteria: Your net assets are not less than 3 million Saudi Riyals; You work or have worked for at least three years in the financial sector; You hold a professional certificate that is related to credit or financial analysis and accredited by a local or internationally recognised entity; or You hold the General Securities Qualification Certificate that is recognised by the Capital Market Authority (CMA), and have an annual income that is not less than 600,000 Saudi Riyals in the two most recent years.",
                },
            },
            {
                "@type": "Question",
                name: "Are there limits over the amounts I can finance and the amount of new funds I can add in a 12-month period?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As an Individual Financer, your maximum exposure to finance request on Raqamyah is SAR 50,000 and shall not exceed 25% of the finance amount requested. Our platform automatically places this restriction on your requests. The maximum funds you can add in any 12 months period is SAR 200,000.These limits are made in purpose, which is to limit your exposure to any business / platform. If you would like to exceed these limits, you must be classified as a Qualified Individual Financer. ",
                },
            },
            {
                "@type": "Question",
                name: "How can I register as a Financer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply, click on the “Register” option shown on our website and fill in the required information. Once completed, your details will be verified and you will receive a n e-mail or a SMS within 3 working days notifying you that your account on Raqamyah has been activated. In some cases, additional documents may be required.To become a financer, you will be asked a number of questions to ensure that you understand the risks of investing on an alternative asset platform such as Raqamyah. To be eligible to become a financer, you must complete the registration process and pass Raqamyah’s internal Know Your Client (KYC) and Anti-Money Laundering/ Counter-Terrorism Financing (AML/CTF) procedures.",
                },
            },
            {
                "@type": "Question",
                name: "What is the minimum amount required to open an account on Raqamyah?And What is the minimum/maximum offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can join Raqamyah by setting up an account with as little as SAR 1,000. The minimum bid to finance a single business is SAR 1,000. Your maximum exposure to one finance request as an Individual Financer is SAR 50,000 and shall not exceed 25% of the finance amount requested",
                },
            },
            {
                "@type": "Question",
                name: "Is my Financing insured against specific business assets?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Financing on Raqamyah is intended to support business expansion plans such as working capital and growth financing, therefore, usually not secured against specific assets. To reduce the risk of default, all businesses must provide the necessary guarantees in line with Saudi law enforcement practices. This includes (i) promissory note; and (ii) personal guarantee.",
                },
            },
            {
                "@type": "Question",
                name: "How do you assess businesses Which are listed on the platform?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Each business undergoes a rigorous risk assessment that will be undertaken by our experienced credit team and further supported by on-site verification. Only verified and pre-qualified businesses will be listed on Raqamyah Platform. Each finance request is given its own rating based on a multiple number of data points which contribute toward an overall risk band. When using Raqamyah‘s risk model, we look at both quantitative and qualitative measurements, including revenue growth, profitability, strength of management team, sector competitiveness, etc. The metrics which are provided on the platform are a summary of the multiple data points we review during our risk assessment process. Learn More",
                },
            },
            {
                "@type": "Question",
                name: "How can I exit a finance request early?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Currently, Raqamyah is not offering a secondary market option, so when a financer’s funds get allocated for a certain finance request, they need to wait until the financed amount is fully paid by the financee (debtor). Most of Raqamyah financing do not exceed 24 months tenure, so financers should not expect their funds to be tied-up for more than this period, unless in case of default or early settlement.",
                },
            },
            {
                "@type": "Question",
                name: "What are the risks and what happens in the case of default?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "At Raqamyah, we only allow established creditworthy businesses in our platform, and our experienced credit assessment team undertakes rigorous credit checks on all businesses that apply for listing on the platform. In addition, obtaining all necessary legal documents is part of our risk assessment process. Although we undertake detailed credit checks and we only allow verified and prequalified businesses to apply for finance on our platform, no financed amount can ever be entirely risk free, even creditworthy businesses may default. A fundamental principle of Raqamyah is that we always encourage our financers to diversify their finances across multiple businesses or enterprises to lower their risk of capital loss.  Learn More Since this is an unsecured finance, in case a business defaults, the risk is borne by the financer. Raqamyah will do everything in its power to collect the dues and will commence legal action if necessary. All finance requests are backed by (i) promissory notes; (ii) personal and/or corporate guarantees. If Raqamyah is unable to collect outstanding amounts from the business, then financers will need to wait until such time that money is recovered from the business through legal process (if deemed commercially viable).",
                },
            },
            {
                "@type": "Question",
                name: "Why do you require my bank account information,ID,Iqama/Passport and residential proof in the registration process?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "According to the Saudi Arabian Monetary Authority (SAMA) rules and regulations, all regulated financial services firms need to maintain valid identity documents and information for their customers. As part of this, we have to understand: who you are, your source of funds and your previous dealings. We will be in touch with you from time to time to inform you regarding any required document. We need your bank details so that if you requested to withdraw funds, we know which bank account to transfer the money to.",
                },
            },
            {
                "@type": "Question",
                name: "Can I be a financer based outside Saudi Arabia?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "During Sandbox period, only Saudi citizens, Saudi registered entities, and non-Saudi residents who are holding a valid Iqama can finance through the platform.",
                },
            },
            {
                "@type": "Question",
                name: "What is Term Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Term Finance are finances characterized by long-term repayment plans – typically extending between 12-24 months and can be used to buy new equipment, open new store, hire more employees, etc. On Term Finance the principal and profit are paid periodically, on a monthly basis, during the life of finance request.",
                },
            },
            {
                "@type": "Question",
                name: "What is the duration of the Term Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Term Finance duration can range between 12 months and 36 months.",
                },
            },
            {
                "@type": "Question",
                name: "How does the financing work?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "There are two ways to finance on Raqamyah: Automatic Financing: This type of financing uses a tool called Automatic Financing to automatically select the financee (debtor) that financers are willing to finance based on pre-selected criteria. Financers can select their own custom mix based on the following: Maximum amount for each finance request;Sector(s) that you want to finance; Risk grades that you want to finance; Manual Financing: by self-selection of financee (debtor) using the Raqamyah search tool to identify financee (debtor) that financers may be interested in and bidding for funding those financee (debtor's) in online bidding via the Raqamyah Site. This process is called Manual Financing. Financers can browse available finance requests and compare finance requests details such as score, finance request purpose, finance request type, duration, profit rate, and financee (debtor) information.The funding process for every finance request is open for up to 30 business days (extendable by another 30 business days), and the funding period will close once it is fully committed. Orders are made on a first come first serve basis.",
                },
            },
            {
                "@type": "Question",
                name: "How does the Automatic Financing Work?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Automatic Financing is a tool that automatically creates diversified finance request portfolio and makes automatic finance offers based on the allocation per risk band, amount per financed request. To view and set these parameters click on the “Automatic Financing” tab on your dashboard. By using Automatic Financing, you can ensure that available funds are automatically financed within your predetermined risk parameters. This option may help to: (i) diversify your portfolio; and (ii) place funds as efficiently as possible.",
                },
            },
            {
                "@type": "Question",
                name: "On what basis is the profit rate chosen for Term Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Profit rates for every finance request are set by Raqamyah Platform based on the score and term of each finance request. Annual Rate of Return (ARR) is calculated on a reducing capital balance basis. You can find out more about our risk and credit assessment Learn More",
                },
            },
            {
                "@type": "Question",
                name: "How is term finance repaid? How is profit rate calculated?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Accepted offers are repaid via monthly installments and each amount is paid directly into your Raqamyah account. The profit rate is fixed at the time you make your offer.The business then repays the finance request. The monthly installment comprises of capital, profit and platform fees of 2% per annum on reducing balance basis. The profit is calculated on a reducing capital balance basis. For example, if you financed SAR 10,000 over 24 months at a 10% profit rate then your repayment schedule would be as set out below. Over the 24 months term you would receive a profit of SAR 810.To maximize your return on money financed on the platform, you may consider to refinance the monthly installments into a new offer. This is why you may consider that you set your Automatic Financing to assist you to achieve stronger returns.Month	Opening Balance	Monthly Principal Repaid	Monthly Profit	Raqamyah Management Fees	15% VAT on Fees	Monthly Repayment",
                },
            },
            {
                "@type": "Question",
                name: "What fees do we charge financers for Term Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Raqamyah charges a management fee of 2% per annum only on outstanding finance request balances which are deducted from the monthly repayments. For further details, please refer to the example explained in How is Term Finance repaid? How is profit rate calculated? Also please note that for withdrawing funds from your Raqamyah account, the bank may charge a transfer fee which will be deducted from the amount we transfer to your bank account.",
                },
            },
            {
                "@type": "Question",
                name: "What is Invoice Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Receivables are defined as amounts owed to a business – essentially outstanding invoices – and are considered to be as current assets. In an invoice financing, a business requests a finance for the amount of its outstanding invoices for cash.",
                },
            },
            {
                "@type": "Question",
                name: "Who is the Financee (Debtor), “customer” and Financer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You are the “financer” and you enter a finance contract between “yourself” (and potentially with other financers) and the “financee (debtor)” who has supplied the goods or services to the “customer”.",
                },
            },
            {
                "@type": "Question",
                name: "What term usually the invoice finance for?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Invoice finance term can range between 60-270 days. At Raqamyah discretion, a financee (debtor) may request to extend the period up to 30 days, so payment may be extended up to additional 30 days. It should be noted that if there is an extension, a new Murabaha Agreement separate from the current contract, will be created on a new commodity to cover the extended period until payment is made.",
                },
            },
            {
                "@type": "Question",
                name: "How do we select a financee(Debtor)for the invoice Financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We undertake a detailed review of the financee (debtor) and only allow them to request finance against large established “customers” that have a strong payment track record with that financee (debtor).",
                },
            },
            {
                "@type": "Question",
                name: "How does Raqamyah receive the money from the financee(debtor)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The financee (debtor) can opt to either: Make a direct payment, where the “customer” pays Raqamyah directly; or, Make an indirect payment, where the “customer” pays the financee (debtor), and then the financee (debtor) pays Raqamyah the principal, fees, and charges.",
                },
            },
            {
                "@type": "Question",
                name: "What fees do we charge financers for invoice finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "An administrative fee of 0.167% per month is payable, on the invoice financed, at maturity.",
                },
            },
            {
                "@type": "Question",
                name: "When do I receive my funding back?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You will receive your funds including the profit earned in your Raqamyah account when the “customer” or the financee (debtor) pays us. Profits are calculated to date, so if a financee (debtor) pays early, the forecast profit will be lower.",
                },
            },
            {
                "@type": "Question",
                name: "What if a “customer”/financee (debtor)is late in paying?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The financee (debtor) can request finance for the expected payment terms rather than the actual ones stated on the invoice. Therefore, payment should match the requested finance. However, a financee (debtor) also has a 30-day Grace Period above and beyond the requested payment term.",
                },
            },
            {
                "@type": "Question",
                name: "What if the “customer” does not pay or the financee(Debtor)defaults?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Finance Contract is between you and the financee (debtor) (not the “customer”). Therefore, the financee (debtor) is liable to repay the funds. If a financee (debtor) defaults, then Raqamyah will decide the optimal action to collect the dues.",
                },
            },
            {
                "@type": "Question",
                name: "Are the invoices assigned and do you have recourse over the “customer”?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, the invoices are not assigned to Raqamyah or you as a financer. Neither you nor Raqamyah have the right of recourse over the “Customer” as we do not have contractual agreement with them.",
                },
            },
            {
                "@type": "Question",
                name: "What security do you hold against the financee(Debtor)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Although this is unsecured financing, we hold a promissory note and personal guarantee from each financee (debtor) for their full agreed credit limit and personal and corporate guarantees.",
                },
            },
            {
                "@type": "Question",
                name: "What profit rate can I expect?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The profit rate is defined by the risk rating of the financee (debtor), and the period of the funding. The profit rate will be between 0.75% and 1.50% for 30 days.",
                },
            },
            {
                "@type": "Question",
                name: "What is Inventory Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Inventory Financing is a short-term finance that allows businesses to have the quantity and quality of inventory that they need on hand, and exactly when they need it. Inventory financing is a revolving line of credit or short-term finance made to a business so it can purchase products and goods for sale.",
                },
            },
            {
                "@type": "Question",
                name: "Who is the Financee (Debtor), Financer,and “Supplier”?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The financer is the one who enters into a Financing Contract (and potentially with other financers). The financee (debtor) is the one who bought goods from a “Supplier or several suppliers”.",
                },
            },
            {
                "@type": "Question",
                name: "What term usually the inventory finance for?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Inventory finance term can range between 60 and 270 days. At Raqamyah’s discretion, a financee (debtor) may request an extension period up to 30 days and payment may take 30 days longer. It should be noted that if there is an extension, a new Murabaha Agreement separate from the current contract, will be created on a new commodity to cover the extended period until payment is made.",
                },
            },
            {
                "@type": "Question",
                name: "How do you select a financee(Debtor)Who is included on the platform?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We undertake a thorough review of the financee (debtor) and only allow them to request finance against large established “Suppliers” that have a strong track record with that financee (debtor).",
                },
            },
            {
                "@type": "Question",
                name: "How does Raqamyah receive the money from the financee(debtor)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Financee (Debtor) can opt to either:(i) have direct payment, when he or she sells his or her inventory for cash; or,(ii) when he or she sells his or her inventory on credit, he or she will bring the invoice for discounting subject to vetting of the “Customer”.",
                },
            },
            {
                "@type": "Question",
                name: "What fees do we charge financers for Inventory finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "An administrative fee of 0.167% per month is payable, on the inventory financed, at maturity.",
                },
            },
            {
                "@type": "Question",
                name: "When do I receive my funding back?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You will receive your funds including the profit earned in your Raqamyah account when the proceeds from sales are received. Profits are calculated to the date, so if a financee (debtor) pays early, the forecast profit will be lower.",
                },
            },
            {
                "@type": "Question",
                name: "What if a financee (debtor)is late in paying?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Financee (Debtor) can request a finance for the expected payment terms rather than the actual ones stated on the invoice. Therefore, payment should match the expected selling time. However, a financee (debtor) also has a 30-day Grace Period above and beyond the requested payment term.",
                },
            },
            {
                "@type": "Question",
                name: "What if the “Supplier” does not deliver the goods or the financee(debtor)defaults?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The finance contract is between you and the financee (debtor) (not the “Supplier”), therefore, the financee (debtor) is liable to repay the funds. If a financee (debtor) defaults, then Raqamyah will decide the optimal route for collecting dues.",
                },
            },
            {
                "@type": "Question",
                name: "Do you have recourse over the “Supplier”?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, neither you as a financer nor Raqamyah have the right of recourse over the supplier as we do not have privity of contract with the suppliers.",
                },
            },
            {
                "@type": "Question",
                name: "What guarantees do you get from Financee (Debtor)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Although this is unsecured financing, we hold a promissory note and personal guarantee from each financee (debtor) for their full agreed credit limit and personal and corporate guarantees.",
                },
            },
            {
                "@type": "Question",
                name: "What profit rate can i expect?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The profit rate is defined by the risk rating of the financee (debtor), and the tenure of the funding. The profit rate will be between 0.75% and 1.50% for 30 days.",
                },
            },
            {
                "@type": "Question",
                name: "What is the period of the POS Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "POS Finance period can go up to 24 months.",
                },
            },
            {
                "@type": "Question",
                name: "How is POS finance repaid? How is profit rate calculated?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "POS finance is repaid monthly on the basis of merchant’s POS sales during that month.The monthly repayment comprises principal, profit, and Platform fees of 2% per annum on reducing balance basis. For example, if you avail a POS Finance of SAR 10,000 to be repaid over 21 months at a 14% profit rate, then your repayment schedule is as below. Over the 21 months term, you would pay a profit of SAR 1092 (net of fees) i.e. 10.72% for the period of 21 months. Repayment	Monthly Profit	Raqamyah Fees	15% VAT on Fees	Monthly RepaymentThis table is for illustration only and may change depending on merchant POS sales",
                },
            },
            {
                "@type": "Question",
                name: "What fees do Raqamyah change financers for POS Finance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Raqamyah charges management fee of 2% per annum only on outstanding finance which are deducted from the monthly repayments. For further details, please refer to the example in ‘How is POS finance repaid?’ ‘How is profit rate calculated?",
                },
            },
            {
                "@type": "Question",
                name: "What are the minimum and maximum amounts that you can fund?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Currently, we are able to offer financing up to SAR 7.5 million on terms of 12-24 months.",
                },
            },
            {
                "@type": "Question",
                name: "How do i make repayments?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "All repayments on Raqamyah are made through bank transfers on a monthly basis. No cash repayments are allowed.",
                },
            },
            {
                "@type": "Question",
                name: "What are your eligibility criteria as a financee(debtor)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You must be an established Saudi-based business meeting at least the following criteria: Audited financials for a minimum of two years,Profitable With sufficient repayment capacity, All business applications go through a detailed credit assessment.",
                },
            },
            {
                "@type": "Question",
                name: "Can i pay back early?Are there any penalties for early repayment ?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, profit is calculated to the day so paying off your finance early decreases your cost. This will be voluntarily done by the company upon its own discretion.",
                },
            },
            {
                "@type": "Question",
                name: "How will be assessed?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "All businesses applying for finance request on Raqamyah need to provide the necessary financial and business documentation in order that a full risk assessment can be completed.",
                },
            },
            {
                "@type": "Question",
                name: "Can i have multiple Business Finance requests on Raqamyah platform?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, businesses can have more than one active finance requests at any point in time. Please note that any new application will be subject to a full credit assessment. Furthermore, the business must have made a number of successful repayments on their existing facilities.",
                },
            },
            {
                "@type": "Question",
                name: "What is the cost of financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost is defined by the risk score you are given and the period of the funding you are seeking.",
                },
            },
            {
                "@type": "Question",
                name: "What fees do we charge?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Arrangement fee ranges from 2-5% depending on the rating, period and amount.Monthly Management fee equal to 0.167% of the outstanding amount, invoiced monthly. It covers the costs associated with processing and it is directly added to the financee (debtor) monthly payments.One-off documentation fee of SAR 2,000.",
                },
            },
            {
                "@type": "Question",
                name: "Does my business need to be based in Saudi Arabia?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Currently, Raqamyah only accepts applications from businesses that are based in Saudi Arabia.",
                },
            },
            {
                "@type": "Question",
                name: "Can I get financed against all of my “customer”?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We will review your “Customers”, debtor listing and agree which “Customers” will be applicable for invoice financing. The “Customers” must be large businesses and have a strong payment track record with you and others.",
                },
            },
            {
                "@type": "Question",
                name: "What is the cost of financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost is defined by the risk rating you are given and the period of the funding you are seeking. The actual cost will be between 0.75% and 1.50% for 30 days payable to the financers.",
                },
            },
            {
                "@type": "Question",
                name: "What fees do we charge?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Arrangement fee ranges from 2-5% depending on the rating, period, and amount.One-off fee of 1% per each invoice written.One-off documentation fee of SAR 2,000.",
                },
            },
            {
                "@type": "Question",
                name: "What is the term of the financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Financers set the term they wish to forward funds for which will be between 60 and 270 days.",
                },
            },
            {
                "@type": "Question",
                name: "How long will it take me to receive funds?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Assuming your physical invoices and supporting documents match the agreed details, you should receive funds within 3 working days.",
                },
            },
            {
                "@type": "Question",
                name: "How do I repay you the financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "There are two methods:Direct Method:Under this method, you provide your “Customers” Raqamyah bank details, and they pay Raqamyah the full invoice value.Indirect Method:Under this method, your “Customer” repays you the invoice value and then you settle the Raqamyah financing and related costs directly.",
                },
            },
            {
                "@type": "Question",
                name: "Can I pay off financing early?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, profit is calculated to the day so paying off your finance early decreases your cost. This will be voluntarily done by the company upon its own discretion.",
                },
            },
            {
                "@type": "Question",
                name: "What if my “Customer” is late in paying this invoice?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "When you request for financing, you will insert your expected payment date as opposed to the actual terms. If your “Customer” pays you later than you expected then Raqamyah allows at its discretion, a 30-day extension period. After that, the financing must be repaid, or you will be in default.",
                },
            },
            {
                "@type": "Question",
                name: "Can I part settle individual invoices",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Individual invoices cannot be partly repaid.",
                },
            },
            {
                "@type": "Question",
                name: "Do we ask for the assignment of invoice?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whenever possible we seek assignment of invoice to improve credit terms.",
                },
            },
            {
                "@type": "Question",
                name: "Can I get financed against all my Suppliers?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We will review your “Supplier” and creditor listing and agree which “Supplier” will be applicable for inventory financing. The “Supplier” must be large businesses and have a strong track record.",
                },
            },
            {
                "@type": "Question",
                name: "What is the cost of financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost is defined by the risk rating you are given and the period of the funding you are seeking. The actual cost will be between 0.75% and 1.50% per 30 days payable to the financers.",
                },
            },
            {
                "@type": "Question",
                name: "What fees do we charge?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Arrangement fee ranges from 2-5% depending on the rating, period and amount.One-off fee of 1% per each accepted Purchase Order financed. One-off documentation fee of SAR 2, 000.",
                },
            },
            {
                "@type": "Question",
                name: "What is the term of financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Financees (Debtors) set the term they wish to forward funds for which will be between 60 and 270 days.",
                },
            },
            {
                "@type": "Question",
                name: "How long will it take me to receive funds?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Assuming your physical invoices and supporting documents match the agreed details, you should receive your funds within 3 working days.",
                },
            },
            {
                "@type": "Question",
                name: "How do I repay you the financing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Financee (Debtor) can opt to either:have a direct payment, when he or she sells his or her inventory for cash; or when he or she sells his or her inventory on credit, he or she will bring the invoice for invoice financing subject to vetting the “Customer”.",
                },
            },
            {
                "@type": "Question",
                name: "Can I pay off financing early?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, profit is calculated to the day so paying off your finance early decreases your cost. This will be voluntarily done by the company upon its own discretion.",
                },
            },
            {
                "@type": "Question",
                name: "What if my “Supplier” delayed delivering the goods?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "When you request for financing, you will insert your expected payment date as opposed to the actual terms. If your “Supplier” pays you later than you expected then Raqamyah allows at its discretion, a 30-day extension period. After that, the financing must be repaid, or you will be in default.",
                },
            },
            {
                "@type": "Question",
                name: "How is Raqamyah certified as Shari'a compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The world recognised and respected, Shariyah Review Bureau (SRB), together with their team of esteemed Shari’a scholars, have reviewed and certified Raqamyah in terms of operational processes, documentation, business activity and relationship management. The certification makes Raqamyah compliant with Shari’a principles.",
                },
            },
            {
                "@type": "Question",
                name: "What is the Shariyah Review Bureau(SRB)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Shariyah Review Bureau (SRB) has been providing professional Shari’a advisory and Shari’a audit services for more than 10 years to public and private businesses, including commercial and corporate debt, sukuks and Islamic equity markets, initial public offerings screening and investment banking practice, energy firms and information providers.Licensed by the Central Bank of Bahrain, SRB serves in Saudi Arabia; alone it holds a 21 percent market share of the cooperative Insurance Firms Listed on the stock exchange market, and 13 percent share of all Saudi Investment Companies licensed by the Capital Market Authority (CMA). Its service offerings span a broad set of complementary disciplines that include product certification, consultation, Shari’a audit and equity screening. SRB has a scholarly presence in more than 12 countries, including the US, Europe, Africa, GCC and Asia, making it a unique Shari’a consultancy personnel that can meet the true international business requirements of its clients. For more information on SRB please visit  https: //www.shariyah.com ",
                },
            },
            {
                "@type": "Question",
                name: "How is Raqamyah certified as Shari'a compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Raqamyah processes all “Shari’a Processing” finance requests through DDCAP Group™ (DDCAP) Commodity Murabaha platform. “Murabaha” is a commodity-backed transaction that allows financers to buy and sell commodities at a profit on a deferred payment basis.Murabaha is simply a contract of sale in which a commodity is sold on profit where the seller is obliged to tell the buyer its cost price and the profit he or she is making. In a Murabaha transaction, the first party purchases a commodity today which is then sold at the current market value plus the agreed profit to the second party at an agreed upon deferred payment plan. The second party can then monetise the commodity by selling it today, at today’s value, and receive cash. For more information, please visit the group’s website: https: //www.ddcap.com/who-we-are",
                },
            },
        ],
    };

    return (
        <div className={classes.mainSection}>
            <Head>
                <title>FAQ | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
                <link rel="canonical" href={canonicalUrl} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
            </Head>
            <section >
                <FaqSection />
            </section>
        </div>
    )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}
const useStyles = makeStyles((theme) => ({
    mainSection: {
        backgroundColor: "#EFEFF0",
        marginTop: '110px',
        height: '100% !important',
        overflow: 'hidden',
        padding:'75px 0px 50px 0px',
        [theme.breakpoints.down('md')]: {
          backgroundColor: "#EFEFF0",
          marginTop: '110px',
          height: '100% !important',
          overflow: 'hidden',
        },
        [theme.breakpoints.down('sm')]: {
          backgroundColor: "#EFEFF0",
          marginTop: '110px',
          height: '100% !important',
          overflow: 'hidden',
        }
      },
}));