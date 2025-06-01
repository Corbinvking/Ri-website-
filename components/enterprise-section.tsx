export function EnterpriseSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Enterprise-ready workflow automation</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a2e] rounded-xl p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Security</h3>
            <p className="text-gray-300 mb-6">
              Fully on-prem option, SSO SAML, and LDAP, encrypted secret stores, version control, advanced RBAC
              permissions.
            </p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Performance</h3>
            <p className="text-gray-300 mb-6">
              Audit logs & log streaming to 3rd party, workflow history, custom variables, external storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
