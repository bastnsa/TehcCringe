"use client"

import { createContext, useContext } from "react"
import { ArticleType } from "../lib/articles"

export interface ArticleContextValue {
  article: ArticleType
}

export const ArticleContext = createContext<ArticleContextValue | null>(null)

export function ArticleProvider({
  children,
  article,
}: {
  children: React.ReactNode
  article: ArticleType
}) {
  return (
    <ArticleContext.Provider value={{ article }}>
      {children}
    </ArticleContext.Provider>
  )
}

export function useArticle() {
  const article = useContext(ArticleContext)

  if (article === null) {
    throw new Error("useArticle must be used within an ArticleProvider")
  }

  return article
}
