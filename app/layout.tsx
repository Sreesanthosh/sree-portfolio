import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Sri Santhosh Rajan | UI/UX Designer",
  description: "Designing intuitive digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}