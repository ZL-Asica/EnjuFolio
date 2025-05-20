type SocialMediaKey = keyof EnjuFolioSocialLinks

interface SocialMediaDataItem {
  url: string | null | undefined
  Icon: React.ComponentType<{ size: number, className?: string }>
  label: string
}

type SocialData = Record<SocialMediaKey, SocialMediaDataItem>
