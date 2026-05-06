export interface VoiceConfig {
  voiceId: string;
  voiceName: string;
  stability: number;
  similarityBoost: number;
  style: number;
  speakerBoost: boolean;
}

export interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackSpeed: number;
  audioUrl: string | null;
  isLoading: boolean;
  voiceId: string | null;
  autoAdvance: boolean;
}
