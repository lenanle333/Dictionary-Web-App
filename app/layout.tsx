import "./globals.css";
import { Providers } from "@/utility/providers";

export const metadata = {
  title: "Mahjestic | Dictionary",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-dark-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
