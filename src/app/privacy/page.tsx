import Image from "next/image";
// import Link from "next/link";

export default function Privacy() {
	return (
		<main className="flex min-h-screen flex-col items-center w-full p-5 lg:p-24">
			<div className="w-full flex flex-row items-center gap-3 justify-start">
				<div className="lg:w-[60px] lg:h-[60px] w-14 h-14 min-w-14">
					<Image
						src={"/logo.png"}
						alt="Korea Auto app logo"
						width={512}
						height={512}
						style={{borderRadius: "10px", width: "100%", height: "100%"}}
					/>
				</div>
				<p className="w-full text-2xl text-nowrap">Korea Auto</p>
			</div>
			<h1 className="text-2xl text-bold text-center my-10">Privacy policy</h1>
			<div className="max-w-4xl flex flex-col gap-4">
				<p>
					This Privacy Policy (hereinafter referred to as the Privacy Policy)
					applies to all information posted in the mobile application available
					on the Google Play store (hereinafter - Mobile App).
				</p>
				<p>
					The use of the Mobile App by the User indicates their unconditional
					consent to the terms of this Policy and the processing of their
					personal data as outlined in the Policy. If the User does not agree
					with these terms, they must stop using the Mobile App.
				</p>
				<h3 className="text-center">1. GENERAL PROVISIONS</h3>
				<p>
					1.1. The personal data of the User within the scope of this Policy
					includes the following:
				</p>
				<p>
					1.1.1. Any personal information provided by the User about themselves
					while using the Mobile App, including personal data of the User.
				</p>
				<p>
					1.1.2. Data automatically transmitted to the Mobile App through the
					software installed on the User&apos;s device, including IP address,
					cookie data, browser information (or other programs), equipment and
					software characteristics used by the User, date and time of access to
					services, requested page addresses, and other similar information.
				</p>
				<p>
					1.2. This Privacy Policy only applies to the "Korea Auto" mobile
					application. The Mobile App does not control and is not responsible
					for any third-party websites that the User may visit via links within
					the Mobile App.
				</p>
				<h3 className="text-center">2. USERS&apos; PERSONAL DATA</h3>
				<p>
					2.1. The Mobile App collects and stores only the personal data
					necessary to provide services or fulfill agreements with the User
					unless a longer period is required by law.
				</p>
				<p>
					2.2. The Mobile App processes the User&apos;s personal data for the
					following purposes:
				</p>
				<p>
					2.2.1. To establish communication with the User, including sending
					notifications, providing services, and responding to User inquiries
					and requests.
				</p>
				<p>
					2.2.2. To verify the accuracy and completeness of the personal data
					provided by the User.
				</p>
				<p>
					2.2.3. To provide technical support to the User in case of issues
					related to the use of the Mobile App.
				</p>
				<h3 className="text-center">
					3. CONDITIONS FOR PROCESSING AND TRANSFERRING USERS&apos; PERSONAL
					DATA TO THIRD PARTIES
				</h3>
				<p>
					3.1. The confidentiality of the User’s personal data is maintained,
					except in cases where the User voluntarily provides information for
					public access. When using certain services, the User agrees to have
					some of their personal data disclosed publicly.
				</p>
				<p>
					3.2. The administration of the Mobile App has the right to transfer
					the User&apos;s personal data to third parties in the following cases:
				</p>
				<p>3.2.1. The User consents to such actions.</p>
				<p>
					3.2.2. The transfer is necessary for the User to use a specific
					service or to fulfill a contract or agreement with the User.
				</p>
				<p>
					3.2.3. The transfer is required by law in accordance with the
					legislation of the Republic of Korea.
				</p>
				<p>
					3.3. The processing of personal data is carried out by any legal
					means, including through automation or without the use of automation
					tools in personal data systems.
				</p>
				<p>
					3.4. The administration of the Mobile App takes necessary
					organizational and technical measures to protect the User&apos;s
					personal data from unauthorized actions such as destruction,
					modification, blocking, copying, distribution, and other illegal
					actions by third parties.
				</p>
				<h3 className="text-center">4. OBLIGATIONS OF THE PARTIES</h3>
				<p>4.1. Obligations of the User:</p>
				<p>
					4.1.1. To provide personal data necessary for the use of the Mobile
					App.
				</p>
				<p>
					4.1.2. To update and complete the provided personal data if any
					changes occur.
				</p>
				<p>
					4.2. Obligations of the Mobile App administration: To use the
					collected information only for the purposes specified in this Privacy
					Policy.
				</p>
				<p>
					4.2.2. To ensure the confidentiality of personal data, not to disclose
					it without the User’s written consent, and not to sell, exchange, or
					publish the personal data except as provided by this Privacy Policy.
				</p>
				<p>
					4.2.3. To take measures to protect the confidentiality of the
					User&apos;s personal data in accordance with the procedures used to
					protect this type of information in the regular course of business.
				</p>
				<p>
					4.2.4. To check personal data accuracy and legality upon the
					User&apos;s request or when requested by authorized bodies.
				</p>
				<h3 className="text-center">5. LIABILITY OF THE PARTIES</h3>
				<p>
					5.1. The administration of the Mobile App is responsible for damages
					caused by the misuse of personal data in accordance with the
					legislation of the Republic of Korea.
				</p>
				<p>
					5.2. The administration of the Mobile App is not responsible for the
					loss or disclosure of personal data if such personal data:
				</p>
				<p>5.2.1. Became public before its loss or disclosure.</p>
				<p>
					5.2.2. Was received from a third party before it was received by the
					Mobile App administration.
				</p>
				<p>5.2.3. Was disclosed with the User&apos;s consent.</p>
				<h3 className="text-center">6. DISPUTE RESOLUTION</h3>
				<p>
					6.1. Before filing a lawsuit regarding disputes arising between the
					User and the administration of the Mobile App, it is mandatory to
					submit a claim (a written proposal for voluntary resolution of the
					dispute).
				</p>
				<p>
					6.2. The recipient of the claim must inform the claimant in writing of
					the results of the claim review within 30 (thirty) calendar days from
					the date of receipt of the claim.
				</p>
				<p>
					6.3. If an agreement is not reached, the dispute will be referred to
					the court in accordance with the current legislation of the Republic
					of Korea.
				</p>
				<p>
					6.4. The legislation of the Republic of Korea applies to this Privacy
					Policy and the relationship between the User and the administration of
					the Mobile App.
				</p>
				<h3 className="text-center">7. ADDITIONAL TERMS</h3>
				<p>
					7.1. The administration of the Mobile App has the right to make
					changes to this Privacy Policy without the User&apos;s consent.
				</p>
				<p>
					7.2. The new Privacy Policy comes into effect from the moment it is
					posted on the Site, unless otherwise provided by the new version of
					the Privacy Policy.
				</p>
				<p>
					7.3. All suggestions or questions regarding this Privacy Policy should
					be sent to{" "}
					<a href="mailto:abdulkhaev96@gmail.com">
						&nbsp;abdulkhaev96@gmail.com&nbsp;
					</a>
					.
				</p>
				<p>
					7.4. The current Privacy Policy is available at{" "}
					<a href="https://xalqlar-dostligi.uz/privacy">
						&nbsp;xalqlar-dostligi.uz/privacy&nbsp;
					</a>
					.
				</p>
				<p>This document was last updated on September 11, 2024.</p>
			</div>
		</main>
	);
}
