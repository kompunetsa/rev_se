# Audio Assets

This directory contains audio files for the Interactive Cat Page. The following sounds are needed:

## Required Sound Files

1. **meow.mp3** - Cat meow sound (for jump, tail wag, head tilt animations)
   - Duration: < 2 seconds
   - Format: MP3 or WAV
   - Source: Royalty-free (e.g., Freesound.org, Pixabay, Zapsplat)

2. **purr.mp3** - Cat purr sound (for spin animation)
   - Duration: < 2 seconds
   - Format: MP3 or WAV
   - Source: Royalty-free

3. **chirp.mp3** - Cat chirp sound (alternative for jump animation)
   - Duration: < 2 seconds
   - Format: MP3 or WAV
   - Source: Royalty-free

4. **blink.mp3** - Subtle blink sound (for blink animation)
   - Duration: < 1 second
   - Format: MP3 or WAV
   - Source: Royalty-free

## Recommended Sources

- **Freesound.org** - Large collection of royalty-free sounds
- **Pixabay** - Free music and sound effects
- **Zapsplat** - Free sound effects library
- **OpenGameArt.org** - Game audio assets

## Audio Specifications

- Sample Rate: 44.1 kHz or 48 kHz
- Bit Depth: 16-bit or 24-bit
- Channels: Mono or Stereo
- Format: MP3 (for web compatibility) or WAV

## Implementation Notes

- Audio files should be optimized for web (compressed MP3 format recommended)
- Consider providing both MP3 and OGG formats for better browser compatibility
- Audio files will be loaded on-demand (lazy loading) to improve initial page load time
- Audio playback respects browser audio preferences and user mute settings
