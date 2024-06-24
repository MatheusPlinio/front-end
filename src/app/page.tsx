import { nextAuthOptions } from "@/lib/authOptions"
import axios from "axios"
import { getServerSession } from "next-auth"

export default async function Home() {

  const session = await getServerSession(nextAuthOptions)

  return (
    <div className="flex justify-center items-center">
      
    </div>
  )
}