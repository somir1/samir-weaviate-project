"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/apolloClient";

export default function ClientProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
