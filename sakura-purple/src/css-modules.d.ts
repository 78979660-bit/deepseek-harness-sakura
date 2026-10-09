declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

/** Skin images embedded as base64 data URIs by the package build. */
declare module '*.webp' {
  const uri: string
  export default uri
}

declare module '*.png' { const uri: string; export default uri }
