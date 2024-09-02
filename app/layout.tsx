import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Nav from "@/components/layouts/nav";
import { cn } from "@/lib/utils";
import Footer from "@/components/layouts/footer";

export const metadata: Metadata = {
  title: "Check Cost",
  description:
    "Tại Check Cost, chúng tôi mang đến cho bạn một trải nghiệm thư giãn độc đáo với âm nhạc lo-fi dễ chịu, giúp bạn tập trung, thư giãn và tạo ra không gian làm việc lý tưởng. Chúng tôi không chỉ cung cấp những bản nhạc lo-fi chất lượng cao mà còn trang bị một loạt các công cụ hỗ trợ hữu ích để nâng cao trải nghiệm của bạn.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Lương Khoa",
    "Carolo Lương Khoa",
    "Lofi app",
    "Check Cost",
    "Code by Lương Khoa",
  ],
  authors: [{ name: "Carolo Lương Khoa" }],
  creator: "Carolo Lương Khoa",
  publisher: "Carolo Lương Khoa",
  openGraph: {
    title: "Check Cost",
    description:
      "Tại Check Cost, chúng tôi mang đến cho bạn một trải nghiệm thư giãn độc đáo với âm nhạc lo-fi dễ chịu, giúp bạn tập trung, thư giãn và tạo ra không gian làm việc lý tưởng. Chúng tôi không chỉ cung cấp những bản nhạc lo-fi chất lượng cao mà còn trang bị một loạt các công cụ hỗ trợ hữu ích để nâng cao trải nghiệm của bạn.",
    url: "https://check-rewind.vercel.app/",
    siteName: "Check Cost",
    images: [
      {
        url: "https://i.ibb.co/tx5DH4X/original-68aa470bf0643d2d9a71962db7128373.jpg", // Must be an absolute URL
      },
    ],
    locale: "vi",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "2xl:mx-auto max-w-screen-2xl flex flex-col min-h-screen",
          GeistSans.className
        )}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
