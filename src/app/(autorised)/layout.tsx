'use client'

import {useProfileStore} from "@/utils/store";
import {useState, useEffect} from "react";
import {redirect} from "next/navigation";

export default function AutorisedLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {

  const myProfile = useProfileStore((store) => store.myProfile);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(
      () => {
        setTimeout(
            () => {
              setIsMounted(true)
            },
            1000
        )
      },
      []
  )

  if(!myProfile) {
    return redirect('/login')
  }

  return isMounted ? <>{children}</> : null;
}