import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-gray-300 p-8 md:p-12 font-sans">
            <div className="max-w-3xl mx-auto">
                <nav className="mb-12">
                    <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
                        &larr; Back to Home
                    </Link>
                </nav>

                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="mb-4 text-sm text-gray-500">Last updated: June 21, 2026</p>

                <section className="space-y-6">
                    <p>
                        This Privacy Policy applies to all games and apps published by GoLucky Production
                        (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), including <strong>Snake Spell</strong> and{" "}
                        <strong>Block Fit: Cozy Village</strong>. These services are provided at no cost and intended for use as is.
                    </p>
                    <p>
                        What data an app handles depends on that specific app and its features. Some of our apps display
                        advertising; others display none and collect no data at all. The sections below explain both cases
                        and note which applies.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information We Do Not Collect</h2>
                    <p>
                        We do not directly collect or store any personally identifiable information (PII) such as your name,
                        address, or phone number on our servers. We do not require an account to play.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Stored on Your Device</h2>
                    <p>
                        Your game progress and preferences (such as completed levels, scores, lives, and sound or motion
                        settings) are saved locally on your device. This stays on your device, is not transmitted to us, and
                        is removed when you uninstall the app.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Apps That Display Ads</h2>
                    <p>
                        Some of our apps are ad-supported and use Google AdMob (part of Google Play Services) to show
                        advertisements. In those apps, third-party services may collect information used to identify your
                        device for specific operational purposes, such as serving ads, limiting how often an ad is shown
                        (frequency capping), and preventing fraud. This may include device identifiers, IP address, and
                        coarse (such as city-level, but not precise) location, but these are not used for behavioral tracking.
                    </p>
                    <p>
                        We use Non-Personalized Ads for all users, regardless of age. Non-personalized ads are not based on a
                        user&apos;s past behavior; they are targeted using contextual information, including coarse geo-targeting
                        and content in the current app. Because of this:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>We do not collect or use your device&apos;s Advertising ID (IDFA or GAID) for behavioral tracking.</li>
                        <li>AdMob may still use cookies or mobile identifiers for frequency capping, aggregated ad reporting, and to combat fraud and abuse.</li>
                    </ul>
                    <p>
                        Links to the privacy policies of the third-party services used by our ad-supported apps:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-purple-300">
                        <li>
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Google Play Services
                            </a>
                        </li>
                        <li>
                            <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                AdMob
                            </a>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Apps Without Ads</h2>
                    <p>
                        Some of our apps &mdash; including <strong>Block Fit: Cozy Village</strong> in its current version &mdash; contain
                        no advertising, no analytics, and no third-party tracking SDKs. These apps collect no data; everything
                        stays on your device. If we add advertising to such an app in the future, we will update the
                        app&apos;s Google Play &quot;Data safety&quot; information accordingly, and the &quot;Apps That Display Ads&quot; section
                        above will apply.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Log Data</h2>
                    <p>
                        In apps that use third-party services (such as ads), we want to inform you that in the case of an error
                        in the app, those services may collect data and information on your phone called Log Data. This Log Data
                        may include information such as your device Internet Protocol (&quot;IP&quot;) address, device name, operating
                        system version, the configuration of the app when utilizing our Service, the time and date of your use,
                        and other statistics.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">General Data Protection Regulation (GDPR) &amp; User Rights</h2>
                    <p>
                        If you are located in the European Economic Area (EEA) or the UK, you have certain rights regarding your
                        personal data. Since GoLucky Production does not store your personal data, we cannot delete it directly.
                        However, you can exercise your rights regarding data processing by managing your device settings as
                        described in the &quot;Apps That Display Ads&quot; section above.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Security</h2>
                    <p>
                        We value your trust in using our Service. While we do not collect sensitive personal information, we
                        strive to ensure that our third-party partners use commercially acceptable means of protecting any data
                        processed. Remember that no method of transmission over the internet, or method of electronic storage is
                        100% secure and reliable, and we cannot guarantee its absolute security.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Children&apos;s Privacy</h2>
                    <p>
                        Our games are intended for a general audience of all ages. We prioritize the privacy of our users,
                        especially children.
                    </p>
                    <p>
                        To ensure compliance with the Children&apos;s Online Privacy Protection Act (COPPA) and GDPR-K, where ads are
                        shown we keep personalized advertising disabled for all users. We do not knowingly collect personally
                        identifiable information or track behavioral data from children or adults.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time as our apps evolve. Thus, you are advised to review
                        this page periodically for any changes. We will notify you of any changes by posting the new Privacy
                        Policy on this page.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:support@goluckyproduction.com" className="text-purple-400 hover:text-purple-300">support@goluckyproduction.com</a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
