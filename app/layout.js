export const metadata = {
  title: 'love2watch - YouTube Channel Logo',
  description: 'Download your love2watch YouTube channel logo in multiple formats',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
