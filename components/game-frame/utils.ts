export interface GameEmbedConfig {
  gameId: string;
  backgroundColor?: string;
  textColor?: string;
  linkColor?: string;
  borderColor?: string;
}

export function buildEmbedUrl(config: GameEmbedConfig): string {
  const {
    gameId,
    backgroundColor = '000000',
    textColor = '2EE59D',
    linkColor = '2EE59D',
    borderColor = '2EE59D'
  } = config

  return `https://itch.io/embed/${gameId}?bg_color=${backgroundColor}&fg_color=${textColor}&link_color=${linkColor}&border_color=${borderColor}`
}