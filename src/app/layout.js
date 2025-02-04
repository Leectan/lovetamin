import "./globals.css";

export const metadata = {
	title: "Relationship",
	description: "Beyond swiping, Discover love redefined",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
				/>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
			</head>
			<body>{children}</body>
		</html>
	);
}
