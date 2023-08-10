import './Styles/globals.css';
import './Styles/todolist.css';
import { Inter } from 'next/font/google'
// import { AuthProvider } from './FireBase/auth';
import  TodoContextProvider  from './Backend/context';
// import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Todo App',
  description: 'Generated by Jesse 😉',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
      {/* <AuthProvider> */}
      <TodoContextProvider>
      {/* <ThemeProvider attribute='class'> */}
      {children}
      {/* </ThemeProvider> */}
      </TodoContextProvider>
      {/* </AuthProvider> */}
      </body>  
    </html>
  )
}
