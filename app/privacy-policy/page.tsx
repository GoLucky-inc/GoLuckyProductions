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
                <p className="mb-4 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="space-y-6">
                    <p>
                        GoLucky Production built the <strong>Snake Spell</strong> app as an Ad Supported app. This SERVICE is provided by
                        GoLucky Production at no cost and is intended for use as is.
                    </p>
                    <p>
                        This page is used to inform visitors regarding our policies with the collection, use, and
                        disclosure of Personal Information if anyone decided to use our Service.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information Collection and Use</h2>
                    <p>
                        For a better experience, while using our Service, we may require you to provide us with certain
                        personally identifiable information. The information that we request will be retained on your
                        device and is not collected by us in any way.
                    </p>
                    <p>
                        The app does use third-party services that may collect information used to identify you.
                    </p>
                    <p>
                        Link to privacy policy of third-party service providers used by the app:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-purple-300">
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

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Cookies</h2>
                    <p>
                        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.
                        These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                    </p>
                    <p>
                        This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries
                        that use “cookies” to collect information and improve their services. You have the option to either accept or refuse
                        these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies,
                        you may not be able to use some portions of this Service.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Security</h2>
                    <p>
                        We value your trust in providing us your Personal Information, thus we are striving to use commercially
                        acceptable means of protecting it. But remember that no method of transmission over the internet,
                        or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Children’s Privacy</h2>
                    <p>
                        These Services do not address anyone under the age of 13. We do not knowingly collect personally
                        identifiable information from children under 13. In the case we discover that a child under 13 has provided
                        us with personal information, we immediately delete this from our servers. If you are a parent or guardian
                        and you are aware that your child has provided us with personal information, please contact us so that
                        we will be able to do necessary actions.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. Thus, you are advised to review this page
                        periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@goluckyproduction.com.
                    </p>
                </section>
            </div>
        </main>
    );
}
