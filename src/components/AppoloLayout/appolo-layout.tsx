'use client'

import {ReactNode} from "react";
import {ApolloProvider} from "@apollo/client";
import {client} from "@/utils/api";

export default function AppoloLayout({children}: {children: ReactNode}) {
  return(
      <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}