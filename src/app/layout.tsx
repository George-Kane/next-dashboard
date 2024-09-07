import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuBar from '@/components/Menu';
import { ApolloWrapper } from './ApolloWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'See the available grants',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ApolloWrapper>
					<MenuBar />
					{children}
				</ApolloWrapper>
			</body>
		</html>
	);
}
