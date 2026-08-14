import { Container } from "@/components/container";

export default function HomePage() {
  const documentData = {
    status: "VALID DOCUMENT",
    statusColor: "text-emerald-600",
    statusBg: "bg-emerald-50",
    issuer: "GRA DOCUMENT CHECKER",
    documentType: "Tax Clearance Certificate",
    documentId: "TTAM226001154",
    issuedOn: "June 24 2026",
    issuedTo: "LOGISTICS SUPPORT SERVICES LTD",
    tin: "C0001096370",
    purpose: "To apply for award of contracts",
    validUntil: "Jul 23 2026",
    taxOffice: "TAMALE WEST TSC",
  };

  return (
    <>
      <section className="bg-slate-50 py-8 md:py-12">
        <Container>
          <div className="mx-auto max-w-xl space-y-4">
            {/* GRA Header */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <svg
                className="h-11 w-11 flex-shrink-0"
                viewBox="0 0 140 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Yellow Circle */}
                <circle cx="70" cy="70" r="68" fill="#FFCC00" stroke="#333" strokeWidth="1.5" />
                
                {/* Yellow border decoration */}
                <circle cx="70" cy="70" r="63" fill="none" stroke="#333" strokeWidth="0.8" />
                
                {/* Inner Blue Circle */}
                <circle cx="70" cy="70" r="50" fill="#0066CC" />
                
                {/* Sky/Cloud element at top */}
                <path d="M 55 45 Q 45 35 60 30 Q 75 35 65 45" fill="#87CEEB" stroke="#fff" strokeWidth="1" />
                
                {/* UFO/Dome shape */}
                <ellipse cx="70" cy="50" rx="20" ry="15" fill="#87CEEB" stroke="#fff" strokeWidth="1" />
                <ellipse cx="70" cy="50" rx="18" ry="13" fill="#6BB6D6" />
                
                {/* Eagle/Wings - Left */}
                <path d="M 50 55 Q 30 50 25 65 Q 30 70 50 65" fill="#FFD700" stroke="#333" strokeWidth="0.8" />
                
                {/* Eagle/Wings - Right */}
                <path d="M 90 55 Q 110 50 115 65 Q 110 70 90 65" fill="#FFD700" stroke="#333" strokeWidth="0.8" />
                
                {/* Center body of eagle */}
                <circle cx="70" cy="62" r="6" fill="#FFD700" stroke="#333" strokeWidth="0.8" />
                
                {/* Decorative dots */}
                <circle cx="55" cy="75" r="1.5" fill="#fff" />
                <circle cx="70" cy="78" r="1.5" fill="#fff" />
                <circle cx="85" cy="75" r="1.5" fill="#fff" />
                
                {/* Star at bottom */}
                <g fill="#FFD700" stroke="#333" strokeWidth="0.8">
                  <polygon points="70,95 75,108 89,108 78,116 83,129 70,121 57,129 62,116 51,108 65,108" />
                </g>
                
                {/* Text around top - GHANA REVENUE AUTHORITY */}
                <defs>
                  <path id="topCurve" d="M 25,70 A 45,45 0 0,1 115,70" fill="none" />
                </defs>
                <text fontSize="8" fontWeight="bold" fill="#333" fontFamily="Arial, sans-serif" letterSpacing="2">
                  <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
                    GHANA REVENUE AUTHORITY
                  </textPath>
                </text>
              </svg>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">
                  {documentData.issuer}
                </p>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Status Banner */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`text-lg font-bold ${documentData.statusColor}`}>
                    {documentData.status}
                  </span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500 bg-white">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Document Details Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">Status</p>
                <p className="mt-2 font-bold text-slate-900">{documentData.status}</p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">Document type</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.documentType}</p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">Document ID</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.documentId}</p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">Issued On</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.issuedOn}</p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">Issued To</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.issuedTo}</p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">TIN</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.tin}</p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">Purpose</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.purpose}</p>
              </div>

              <div className="pb-4 border-b border-slate-200">
                <p className="text-xs font-medium text-slate-500">Valid Until</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.validUntil}</p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">Tax Office</p>
                <p className="mt-2 font-semibold text-slate-900">{documentData.taxOffice}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
