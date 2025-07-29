import './globals.css'

export const metadata = {
  title: 'Elite Cuts Barbershop | Premium Grooming Experience',
  description: 'Professional barbershop offering premium cuts, traditional shaves, and modern styling. Book your appointment today for the ultimate grooming experience.',
  keywords: 'barbershop, haircut, shave, grooming, mens styling, traditional barbering',
  openGraph: {
    title: 'Elite Cuts Barbershop | Premium Grooming Experience',
    description: 'Professional barbershop offering premium cuts, traditional shaves, and modern styling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  )
}