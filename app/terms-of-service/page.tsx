import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Go Lucky Productions games and website.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <main id="main-content" className="container legal-page">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-12">
          <Link
            href="/"
            className="text-stone-200 hover:underline transition-colors"
          >
            &larr; Back to Home
          </Link>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="legal-updated">Last updated: October 6, 2026</p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            1. Terms
          </h2>
          <p>
            By accessing the website at{" "}
            <span className="text-white">https://goluckyproduction.com</span> or
            using our games <strong>Borrowed Light</strong> and{" "}
            <strong>Block Fit: Cozy Village</strong>, you are agreeing to be
            bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site or app.
            The materials contained in this website and app are protected by
            applicable copyright and trademark law.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            2. Use License
          </h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Go Lucky Productions&apos;
            website or app for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Go Lucky Productions&apos; website or app;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or &quot;mirror&quot; the
              materials on any other server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Go Lucky Productions at
            any time. Upon terminating your viewing of these materials or upon
            the termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            3. Disclaimer
          </h2>
          <p>
            The materials on Go Lucky Productions&apos; website and app are
            provided on an &quot;as is&quot; basis. Go Lucky Productions makes
            no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
          <p>
            Further, Go Lucky Productions does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            4. Limitations
          </h2>
          <p>
            In no event shall Go Lucky Productions or its suppliers be liable
            for any damages (including, without limitation, damages for loss of
            data or profit, or due to business interruption) arising out of the
            use or inability to use the materials on Go Lucky Productions&apos;
            website or app, even if Go Lucky Productions or a Go Lucky
            Productions authorized representative has been notified orally or in
            writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            5. Accuracy of Materials
          </h2>
          <p>
            The materials appearing on Go Lucky Productions&apos; website and
            app could include technical, typographical, or photographic errors.
            Go Lucky Productions does not warrant that any of the materials on
            its website are accurate, complete or current. Go Lucky Productions
            may make changes to the materials contained on its website at any
            time without notice. However Go Lucky Productions does not make any
            commitment to update the materials.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            6. Links
          </h2>
          <p>
            Go Lucky Productions has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by Go
            Lucky Productions of the site. Use of any such linked website is at
            the user&apos;s own risk.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            7. Modifications
          </h2>
          <p>
            Go Lucky Productions may revise these terms of service for its
            website and app at any time without notice. By using this website or
            app you are agreeing to be bound by the then current version of
            these terms of service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            8. Governing Law
          </h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of the state/country of residence of Go
            Lucky Productions and you irrevocably submit to the exclusive
            jurisdiction of the courts in that State or location.
          </p>
        </section>
      </div>
    </main>
  );
}
