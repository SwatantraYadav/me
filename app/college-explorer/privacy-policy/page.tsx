import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Explorer Privacy Policy",
  description: "Privacy Policy for the College Explorer mobile application.",
};

export default function CollegeExplorerPrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:px-10">
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <h1>College Explorer Privacy Policy</h1>
        <p className="text-foreground/60">
          <strong>Effective date:</strong> November 18, 2026
        </p>

        <p>
          College Explorer helps users research U.S. colleges, compare
          education and financial information, save favorite schools, view
          maps and websites, and participate in app discussions.
        </p>

        <h2>Developer</h2>
        <p>
          College Explorer is published by GAVS. For privacy questions or
          account and data deletion requests, contact the developer through
          the contact method shown on the Google Play listing for College
          Explorer.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Account information:</strong> If you sign in with Google,
            Firebase Authentication receives and provides us with your name,
            email address, profile image (if available), and authentication
            identifier. We use this information to authenticate you and
            support features that require an account, such as posting
            comments.
          </li>
          <li>
            <strong>User content:</strong> If you submit a post or comment, the
            content, display name, and related account identifier may be stored
            in Firebase Cloud Firestore and shown to other app users.
          </li>
          <li>
            <strong>Favorites and preferences:</strong> Favorite colleges and
            related search information are stored locally on your device using
            the app&apos;s local database. We do not use this local data to
            identify you.
          </li>
          <li>
            <strong>College search requests:</strong> Search filters and
            college identifiers are sent to the U.S. Department of Education
            College Scorecard API so the app can retrieve college, program,
            cost, admissions, and earnings information.
          </li>
          <li>
            <strong>Device and technical information:</strong> Firebase and
            other service providers may automatically process basic technical
            information needed to operate, secure, and troubleshoot their
            services. College Explorer does not intentionally collect precise
            device location, contacts, photos, microphone recordings, or
            camera data.
          </li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>Provide authentication and account features.</li>
          <li>Display college, financial-aid, ranking, and news information.</li>
          <li>Save favorites and app preferences on your device.</li>
          <li>Provide discussion and comment features.</li>
          <li>Operate, secure, maintain, and improve the app.</li>
          <li>Respond to privacy or support requests.</li>
        </ul>

        <h2>Sharing and service providers</h2>
        <p>We share or make data available only as needed to provide the app:</p>
        <ul>
          <li>Google Firebase Authentication and Cloud Firestore provide sign-in and cloud content storage.</li>
          <li>Google Maps services provide map display and mapping functionality.</li>
          <li>The U.S. Department of Education College Scorecard API provides public college data.</li>
          <li>Web pages opened from the app are governed by the privacy policies of the services hosting those pages.</li>
        </ul>
        <p>
          We do not sell personal information, and College Explorer does not
          use personal information for targeted advertising.
        </p>

        <h2>Data retention and deletion</h2>
        <p>
          Local favorites and search information remain on your device until
          you remove them or uninstall the app. Cloud account information and
          user-submitted posts and comments are retained while needed to
          provide the service. You may request deletion of your account
          information and associated user content through the developer
          contact method listed on Google Play. We will verify the request and
          delete or anonymize information that we are not required to retain
          for legal, security, or fraud-prevention reasons.
        </p>

        <h2>Security</h2>
        <p>
          We rely on Firebase and other service providers that use reasonable
          administrative, technical, and organizational safeguards. No method
          of transmission or storage is completely secure, so absolute
          security cannot be guaranteed.
        </p>

        <h2>Children</h2>
        <p>
          College Explorer is not directed to children under 13, and we do
          not knowingly collect personal information from children under 13.
          If you believe a child has provided personal information, contact the
          developer so it can be reviewed and deleted.
        </p>

        <h2>Third-party links</h2>
        <p>
          The app may open college websites, news sources, and other
          third-party pages. Those services have their own privacy policies
          and terms. We are not responsible for their practices.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy when the app or its data practices change.
          The effective date above will be updated when material changes are
          made.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions or deletion requests, use the developer
          contact method shown on the College Explorer Google Play listing.
          Replace this contact method with a direct support or privacy email
          before publishing if one is available.
        </p>
      </article>
    </main>
  );
}
