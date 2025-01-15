export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">

            <body>
                {/* <header><h1>this is the header</h1></header> */}
                {children}
                <h2>feature products</h2>

                </body>
                
        </html>
    );
}
