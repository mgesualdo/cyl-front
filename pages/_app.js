import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  const [user] = useAuth()

  return <Component {...pageProps} user={user} />
}
