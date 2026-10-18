import type { Project } from "../types";
import accountingImage from "../public/images/dashbord.png";

export const projects: Project[] = [
  {
    slug: "business-management-system",

    title: "Business Management & Accounting System",
    imageUrl: accountingImage,

    summary:
      "An in-development full-stack accounting application built around double-entry bookkeeping principles. Designed to manage business transactions, inventory, vendors, bills, payments, and financial accounts through a modern React interface and a Node.js backend.",

    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
    ],

    features: [
      "Double-entry accounting workflows and account relationships",
      "Item, inventory, and vendor management",
      "Bill creation and lifecycle management",
      "Payment management and allocation across multiple bills",
      "Chart of Accounts and custom financial accounts",
      "Complex React forms and business-rule validation",
      "REST API integration and relational data management",
    ],

    // Add your actual public repository URL when ready.
    github: null,

    // Keep null until you deploy a working demonstration.
    demo: null,

    featured: true,
    placeholder: false,

    caseStudy: {
      problem:
        "Business accounting involves interconnected financial records, purchasing workflows, payments, and account balances. Managing these operations consistently requires accurate transaction handling, clear relationships between records, and interfaces that make complex financial operations easier to perform.",

      solution:
        "Developing a modular accounting application inspired by the workflows of platforms such as Zoho Books and QuickBooks. The system brings together items, vendors, bills, payments, and a Chart of Accounts, with business rules designed around double-entry bookkeeping principles and a modern, component-based user interface.",

      responsibilities: [
        "Developed React and TypeScript interfaces for accounting and business management workflows.",
        "Built reusable form components and interfaces for managing items, vendors, bills, and payments.",
        "Implemented form handling, validation, and conditional behavior for complex business operations.",
        "Worked on payment allocation logic that distributes entered payment amounts across outstanding bills.",
        "Developed and integrated Node.js/Express REST endpoints with MySQL-backed business data.",
        "Worked on financial account relationships and transaction handling based on double-entry accounting principles.",
      ],

      architecture: [
        {
          layer: "Frontend",
          detail:
            "React.js and TypeScript application with reusable components, complex forms, and interactive accounting workflows.",
        },
        {
          layer: "Backend API",
          detail:
            "Node.js and Express.js REST API handling application requests, business rules, and database operations.",
        },
        {
          layer: "Database",
          detail:
            "MySQL relational database storing business records, account relationships, bills, and payment data.",
        },
        {
          layer: "Accounting Logic",
          detail:
            "Double-entry accounting rules connecting financial accounts and business transactions.",
        },
      ],

      challenges: [
        {
          challenge:
            "Allocating a single payment across multiple outstanding bills.",
          solution:
            "Designed allocation logic that distributes the payment amount across bill balances without exceeding the amount available to apply.",
        },
        {
          challenge:
            "Managing interconnected accounting records and bill payment states.",
          solution:
            "Structured bill and payment workflows around explicit statuses and related records to support consistent financial processing.",
        },
        {
          challenge:
            "Building maintainable interfaces for complex financial workflows.",
          solution:
            "Used reusable React components, typed data structures, and form validation to organize complex user interactions.",
        },
      ],
    },
  },
];
