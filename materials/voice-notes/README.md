# Voice explanations

One spoken walkthrough per chapter (about 3 to 4 minutes each). The first slide of every chapter plays it.

```
ch01-explained.mp3 … ch07-explained.mp3
```

The words are in `assets/js/narration.js`, which is also the "Read along" transcript on the site.

## Regenerate after editing the text

The audio is made with [edge-tts](https://pypi.org/project/edge-tts/) (Microsoft neural voice `en-GB-SoniaNeural`).

```bash
pip install edge-tts
node -e "global.window={}; require('./assets/js/narration.js'); require('fs').writeFileSync('narration.json', JSON.stringify(window.VINDHI_NARRATION))"
python tools/make_audio.py narration.json materials/voice-notes
```

Then update the `seconds` values in `window.VINDHI_AUDIO` at the bottom of `assets/js/content.js` if a length changed.
