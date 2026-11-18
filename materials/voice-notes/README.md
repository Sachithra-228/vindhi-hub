# Voice notes

Put the audio files that explain each chapter in this folder, for example:

```
ch01-intro.m4a
ch02-descriptive.mp3
```

Then add one line to the matching chapter in `assets/js/content.js`:

```js
voice: [{ file: 'materials/voice-notes/ch01-intro.m4a', title: 'Chapter 1 walkthrough' }],
```

You can list more than one file per chapter. mp3, m4a, ogg, wav and webm all play in modern browsers.

Recordings made with the Record button on the site are saved on that device only. Use their Download button to get the file, drop it in this folder and list it as above to share it with everyone.
