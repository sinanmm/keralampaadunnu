import type { Metadata } from "next";
import { Noto_Sans_Malayalam, Inter, Anek_Malayalam } from "next/font/google";
import "./globals.css";

const anekMalayalam = Anek_Malayalam({ 
  subsets: ["malayalam", "latin"],
  variable: "--font-anek",
  weight: ["300", "400", "500", "600", "700", "800"]
});

const notoSansMalayalam = Noto_Sans_Malayalam({ 
  subsets: ["malayalam", "latin"],
  variable: "--font-malayalam",
  weight: ["300", "400", "500", "600", "700"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "കേരളം പാടുന്നു ദേശത്തിനായ്",
  description: "സ്വാതന്ത്ര്യദിനത്തിൽ കേരളത്തിന്റെ സംഗീത ശബ്ദം ദേശത്തിനായി ഒന്നിക്കുന്നു.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml" className="scroll-smooth">
      <body
        className={`${notoSansMalayalam.variable} ${inter.variable} ${anekMalayalam.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
