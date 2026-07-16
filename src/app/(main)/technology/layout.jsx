export const metadata = {
    title: "Technology",
    description: "Web Development & Digital Solutions Platform",
};

export default function Technology({ children }) {
    return (
        <html
            lang="en"
            className="h-full antialiased"
            suppressHydrationWarning
        >
            <body className="h-full" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}