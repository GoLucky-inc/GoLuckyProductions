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
                <p className="mb-4 text-sm text-gray-500">Last updated: November 22, 2025</p>

                <section className="space-y-6">
                    <p>
                        GoLucky Production built the <strong>Snake Spell</strong> app as an Ad-Supported app. This SERVICE is provided by
                        GoLucky Production at no cost and is intended for use as is.
                    </p>
                    <p>
                        This page is used to inform visitors regarding our policies with the collection, use, and
                        disclosure of Personal Information if anyone decided to use our Service.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information Collection and Use</h2>
                    <p>
                        We do not directly collect or store any personally identifiable information (PII) such as your name, address, or phone number on our servers.
                    </p>
                    <p>
                        However, the app uses third-party services that may collect information used to identify your device for the purpose of serving advertisements and analyzing app performance. This includes the use of Advertising IDs (such as Google’s Advertising ID or Apple’s IDFA).
                    </p>
                    <p>
                        The app does use third-party services that may collect information used to identify you. Link to the privacy policy of third-party service providers used by the app:
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

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Log Data</h2>
                    <p>
                        We want to inform you that whenever you use our Service, in a case of an error in the app
                        we collect data and information (through third-party products) on your phone called Log Data.
                        This Log Data may include information such as your device Internet Protocol (“IP”) address,
                        device name, operating system version, the configuration of the app when utilizing our Service,
                        the time and date of your use of the Service, and other statistics.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Advertising and Data Collection</h2>
                    <p>
                        We use Google AdMob to display advertisements in our app. We have configured our app to serve Non-Personalized Ads to all users, regardless of age.
                    </p>
                    <p>
                        Non-personalized ads are ads that are not based on a user’s past behavior. They are targeted using contextual information, including coarse (such as city-level, but not precise) geo-targeting based on current location, and content on the current app or website.
                    </p>
                    <p>
                        Because we utilize Non-Personalized settings:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>We do not collect or use your device's Advertising ID (IDFA or GAID) for behavioral tracking.</li>
                        <li>AdMob may still use cookies or mobile identifiers for frequency capping (ensuring you don't see the same ad too often), aggregated ad reporting, and to combat fraud and abuse.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">General Data Protection Regulation (GDPR) & User Rights</h2>
                    <p>
                        If you are located in the European Economic Area (EEA) or the UK, you have certain rights regarding your personal data. Since GoLucky Production does not store your personal data, we cannot delete it directly. However, you can exercise your rights regarding interest-based advertising by managing your device settings as described in the "Advertising and Cookies" section above or by managing your consent preferences via the in-app consent pop-up (if applicable).
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Security</h2>
                    <p>
                        We value your trust in using our Service. While we do not collect sensitive personal information, we strive to ensure that our third-party partners use commercially acceptable means of protecting any data processed. Remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Children’s Privacy</h2>
                    <p>
                        Our Service is intended for a general audience of all ages. We prioritize the privacy of our users, especially children.
                    </p>
                    <p>
                        To ensure compliance with the Children's Online Privacy Protection Act (COPPA) and GDPR-K, we have disabled personalized advertising for all users. We do not knowingly collect personally identifiable information or track behavioral data from children or adults.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. Thus, you are advised to review this page
                        periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
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
