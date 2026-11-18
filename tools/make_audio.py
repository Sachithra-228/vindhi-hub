import asyncio, json, os, sys
import edge_tts

src, out_dir = sys.argv[1], sys.argv[2]
VOICE = 'en-GB-SoniaNeural'
RATE = '-4%'
data = json.load(open(src, encoding='utf-8'))
os.makedirs(out_dir, exist_ok=True)


async def one(n, paras):
    text = '\n\n'.join(paras)
    path = os.path.join(out_dir, f'ch{int(n):02d}-explained.mp3')
    comm = edge_tts.Communicate(text, VOICE, rate=RATE)
    await comm.save(path)
    print(n, len(text.split()), 'words ->', path, os.path.getsize(path) // 1024, 'KB', flush=True)


async def main():
    for n, paras in data.items():
        await one(n, paras)

asyncio.run(main())
