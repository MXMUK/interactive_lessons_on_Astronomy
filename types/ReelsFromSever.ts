import { Reel } from "./Reel"

export interface ReelsFromServer {
  currentReel: Reel
  nextReel?: Reel
  prevReel?: Reel
  hiddenReel?: Reel
}
