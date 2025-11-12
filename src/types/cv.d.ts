type CVSource
  = | {
    kind: 'gdrive'
    fileId: string
    previewUrl: string
    viewUrl: string
  }
  | {
    kind: 'file' // local or any linked PDF, directly put in iframe
    href: string
  }
  | null
