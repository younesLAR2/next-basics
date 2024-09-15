import NavBarComponent from "@/components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBarComponent />
       <main>
         {children}
       </main> 
      </body>
    </html>
  );
}
