import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import Logo from "../components/ui/Logo"
import Menu from "../components/ui/Menu"
import useAuth from "../hooks/useAuth"
import "../styles/globals.css"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const isLoginPage = router.asPath.includes("login")

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main
        style={{
          position: "relative",
          height: "100vh",
          margin: "0.5rem auto 0 auto",
          width: "95%",
          maxWidth: "40rem",
          padding: "5rem 1rem",
        }}
      >
        {!isLoginPage && <Logo setShowMenu={setShowMenu} showMenu={showMenu} />}
        {showMenu && !isLoginPage && <Menu setShowMenu={setShowMenu} />}
        <Component {...pageProps} user={user} />
      </main>
    </QueryClientProvider>
  )
}
