import { useState } from "react";
import {
  Package,
  Boxes,
  ShoppingCart,
  ShoppingBag,
  Receipt,
  BookOpen,
  ChartNoAxesCombined,
  SlidersHorizontal,
  LayoutDashboard,
  Server,
  Database,
  ArrowRight,
  ArrowDown,
  GitBranch,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface Module {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  workflow: string[];
}

const modules: Module[] = [
  {
    id: "items",
    title: "Items",
    icon: Package,
    description: "Product and service records used across business operations.",
    workflow: ["Item Management", "REST API", "Item Business Rules", "MySQL"],
  },
  {
    id: "inventory",
    title: "Inventory",
    icon: Boxes,
    description:
      "Inventory records, stock-related operations, and their connection to business transactions.",
    workflow: ["Inventory Interface", "REST API", "Inventory Logic", "MySQL"],
  },
  {
    id: "sales",
    title: "Sales",
    icon: ShoppingCart,
    description:
      "Sales-related workflows and their associated business and financial records.",
    workflow: ["Sales Interface", "REST API", "Sales Business Rules", "MySQL"],
  },
  {
    id: "purchases",
    title: "Purchases",
    icon: ShoppingBag,
    description:
      "Vendor management, purchasing workflows, and bill processing.",
    workflow: ["Purchasing Interface", "REST API", "Purchasing Logic", "MySQL"],
  },
  {
    id: "payments",
    title: "Bills & Payments",
    icon: Receipt,
    description:
      "Bill management, payment allocation, and payment-status workflows.",
    workflow: ["Payment Forms", "REST API", "Payment Rules", "MySQL"],
  },
  {
    id: "accounts",
    title: "Accounts",
    icon: BookOpen,
    description:
      "Chart of Accounts and accounting relationships based on double-entry bookkeeping.",
    workflow: ["Accounts Interface", "REST API", "Accounting Rules", "MySQL"],
  },
  {
    id: "reports",
    title: "Reports",
    icon: ChartNoAxesCombined,
    description:
      "Financial and operational reporting capabilities within the accounting platform.",
    workflow: ["Reports Interface", "REST API", "Reporting Logic", "MySQL"],
  },
  {
    id: "customization",
    title: "Customization",
    icon: SlidersHorizontal,
    description:
      "Configurable fields, templates, and application settings for different business needs.",
    workflow: [
      "Settings Interface",
      "REST API",
      "Configuration Rules",
      "MySQL",
    ],
  },
];

function FlowConnector({ label }: { label: string }) {
  return (
    <div
      className="
        flex flex-col items-center
        justify-center gap-2 py-2
        lg:py-0
      "
      aria-label={label}
    >
      <span className="text-center text-[10px] font-medium uppercase tracking-wider text-muted">
        {label}
      </span>

      {/* Mobile connector */}
      <ArrowDown size={22} className="text-accent lg:hidden" aria-hidden />

      {/* Desktop connector */}
      <div className="hidden items-center lg:flex">
        <div className="h-px w-5 bg-accent/60" />
        <ArrowRight size={18} className="text-accent" aria-hidden />
      </div>
    </div>
  );
}

export function ArchitectureDiagram() {
  const [activeId, setActiveId] = useState<string>("items");

  const activeModule = modules.find((m) => m.id === activeId) ?? modules[0];

  const ActiveIcon = activeModule.icon;

  return (
    <figure
      className="
        relative overflow-hidden rounded-2xl
        border border-line bg-surface
        p-5 sm:p-8
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none absolute -right-24
          -top-24 h-72 w-72 rounded-full
          bg-accent/5 blur-3xl
        "
        aria-hidden
      />

      {/* Header */}
      <figcaption className="relative mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-accent/30
              bg-accent/10 px-3 py-1
              text-xs font-medium text-accent
            "
          >
            <Workflow size={14} />
            SYSTEM ARCHITECTURE
          </span>

          <span className="text-xs text-muted">In Development</span>
        </div>

        <h3 className="font-display text-2xl font-bold sm:text-3xl">
          How the Accounting System Works
        </h3>

        <p className="mt-3 max-w-3xl leading-relaxed text-muted">
          An overview of the application architecture, connecting business
          management modules with frontend interfaces, backend services,
          accounting rules, and relational data.
        </p>
      </figcaption>

      {/* Architecture layout */}
      <div
        className="
          relative grid items-stretch gap-2
          lg:grid-cols-[minmax(0,1.5fr)_44px_minmax(0,1fr)_44px_minmax(0,0.95fr)]
        "
      >
        {/* CLIENT / FRONTEND */}
        <div className="min-w-0 rounded-xl border border-line bg-bg p-4 sm:p-5">
          <div className="mb-5 flex items-start gap-3">
            <div
              className="
                rounded-lg border border-accent/20
                bg-accent/10 p-2.5 text-accent
              "
            >
              <LayoutDashboard size={22} />
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold">
                Client Application
              </h4>
              <p className="text-xs text-muted">React.js + TypeScript</p>
            </div>
          </div>

          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Business Modules
            </span>

            <span className="text-xs text-muted">Select a module</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {modules.map((module) => {
              const Icon = module.icon;
              const isActive = activeId === module.id;

              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setActiveId(module.id)}
                  aria-pressed={isActive}
                  className={`
                    group flex min-w-0 flex-col
                    items-start gap-3 rounded-lg
                    border p-3 text-left
                    transition-all duration-300
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-accent
                    ${
                      isActive
                        ? "border-accent bg-accent/10 text-ink shadow-sm"
                        : "border-line bg-surface text-muted hover:border-accent/60 hover:text-ink"
                    }
                  `}
                >
                  <Icon
                    size={20}
                    className={
                      isActive
                        ? "text-accent"
                        : "transition-colors group-hover:text-accent"
                    }
                    aria-hidden
                  />

                  <span className="break-words text-sm font-medium">
                    {module.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="
              mt-5 flex items-center gap-2
              border-t border-line pt-4
              text-xs text-muted
            "
          >
            <GitBranch size={15} className="text-accent" aria-hidden />
            Component-based frontend
          </div>
        </div>

        {/* Frontend -> Backend */}
        <FlowConnector label="HTTP / JSON" />

        {/* BACKEND */}
        <div className="flex min-w-0 flex-col rounded-xl border border-line bg-bg p-4 sm:p-5">
          <div className="mb-5 flex items-start gap-3">
            <div className="rounded-lg border border-accent/20 bg-accent/10 p-2.5 text-accent">
              <Server size={22} />
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold">
                Backend Services
              </h4>
              <p className="text-xs text-muted">Node.js + Express</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-line bg-surface p-3">
              <div className="mb-2 flex items-center gap-2">
                <Workflow size={16} className="text-accent" />
                <span className="text-sm font-semibold">REST API</span>
              </div>

              <p className="text-xs leading-relaxed text-muted">
                Handles communication between the frontend and backend.
              </p>
            </div>

            <div className="rounded-lg border border-line bg-surface p-3">
              <div className="mb-2 flex items-center gap-2">
                <GitBranch size={16} className="text-accent" />
                <span className="text-sm font-semibold">Business Logic</span>
              </div>

              <p className="text-xs leading-relaxed text-muted">
                Processes accounting and business workflow rules.
              </p>
            </div>

            <div className="rounded-lg border border-line bg-surface p-3">
              <div className="mb-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent" />
                <span className="text-sm font-semibold">Validation</span>
              </div>

              <p className="text-xs leading-relaxed text-muted">
                Checks incoming data and applies business constraints.
              </p>
            </div>
          </div>

          <div className="mt-auto border-t border-line pt-4">
            <span className="text-xs text-muted">
              Application business layer
            </span>
          </div>
        </div>

        {/* Backend -> Database */}
        <FlowConnector label="SQL" />

        {/* DATABASE */}
        <div className="flex min-w-0 flex-col rounded-xl border border-line bg-bg p-4 sm:p-5">
          <div className="mb-5 flex items-start gap-3">
            <div className="rounded-lg border border-accent/20 bg-accent/10 p-2.5 text-accent">
              <Database size={22} />
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold">Database</h4>
              <p className="text-xs text-muted">MySQL</p>
            </div>
          </div>

          <p className="mb-4 text-xs leading-relaxed text-muted">
            Relational data storage for business records and accounting
            relationships.
          </p>

          <div className="space-y-2">
            {["Items", "Vendors", "Bills", "Payments", "Chart of Accounts"].map(
              (table) => (
                <div
                  key={table}
                  className="
                  flex items-center gap-2
                  rounded-lg border border-line
                  bg-surface px-3 py-3
                  transition-colors
                  hover:border-accent/40
                "
                >
                  <Database
                    size={14}
                    className="shrink-0 text-accent"
                    aria-hidden
                  />

                  <span className="text-xs font-medium">{table}</span>
                </div>
              ),
            )}
          </div>

          <div className="mt-auto border-t border-line pt-4">
            <span className="text-xs text-muted">Relational data model</span>
          </div>
        </div>
      </div>

      {/* Dynamic details */}
      <div
        className="
          relative mt-6 rounded-xl
          border border-accent/20
          bg-accent/5 p-4 sm:p-6
        "
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex flex-wrap items-start gap-4">
          <div className="rounded-xl bg-accent/10 p-3 text-accent">
            <ActiveIcon size={24} aria-hidden />
          </div>

          <div className="min-w-0 flex-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Selected Module
            </span>

            <h4 className="mt-1 font-display text-xl font-bold">
              {activeModule.title}
            </h4>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              {activeModule.description}
            </p>
          </div>
        </div>

        {/* Dynamic workflow */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Conceptual Data Flow
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {activeModule.workflow.map((step, index) => (
              <div
                key={`${activeModule.id}-${step}`}
                className="flex items-center gap-2"
              >
                {index > 0 && (
                  <ArrowRight size={14} className="text-accent" aria-hidden />
                )}

                <span
                  className="
                    rounded-md border border-line
                    bg-bg px-3 py-2
                    text-xs font-medium
                  "
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        Interactive architecture overview. Select a module to explore its
        intended data flow. Some features remain in development.
      </p>
    </figure>
  );
}
