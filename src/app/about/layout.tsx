



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h1 className="text-center">About Header</h1>
    {children}
    </>
  );
}