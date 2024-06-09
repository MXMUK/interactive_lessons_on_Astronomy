export interface OfModel {
  id: number
  username: string
  of_campaign_url: string
  description: string
  title: string
  created_at: string
  updated_at: string
}

export interface Reel {
  id: string
  ofmodel_id: number
  description: string
  title: string
  created_at: string
  dash_manifest_url: string
  status: string
  upload_url: any
  cloudflare_video_id: string
  updated_at: string
  hls_manifest_url: string
  ofmodel: OfModel
}
