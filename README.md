# HAMMOCK AT LOW TIDE ― デジタルシングルCD

干潮の浜辺の昼から、銀の瞬く夜の海へ。本編2曲(インスト)+ボーナストラック1曲を収めたデジタルシングルCD『HAMMOCK AT LOW TIDE』(NK-S004)を聴くための PWA。

公開 URL: https://tanabata-soft.github.io/034lw21ypp/

## 使い方

- **短冊ジャケット**: 縦長の短冊型(8cmシングルの様式)。タップ/横スワイプで裏面に反転し、裏面は2曲のジャケットを結合した画像の上にライナーノートと曲目(番号・タイトル・ジャンル・長さ、表示専用)、バージョン表示を載せる。下のボタンは再生のみ。インストール方法への入口は、表ジャケットのボタン下の小リンク。
- **再生画面**: ボーナストラックは歌詞が曲に合わせて流れる(自分でスクロールもでき、手を離して3秒で再生位置に戻る)。本編2曲はインストのため歌詞は出ない。ジャケットをタップすると盤面(円盤)モード。前/次は端でループし、「前」は3秒より進んでいたら曲の先頭に戻る。右端のボタンで全曲リピートと1曲リピートを切り替える。トップに戻ると再生は止まる。バックグラウンド再生(Media Session)と画面スリープ防止に対応。
- ホーム画面に追加するとアプリとして使える。初回起動時に全曲の音源を端末へ一括ダウンロードするので、オフラインでも全曲聴ける。

収録曲: 1. HAMMOCK AT LOW TIDE(2:50、表題曲) / 2. BENEATH THE SILVER GLINT(2:35、カップリング) / 3. SALT AND STARLIGHT(2:43、ボーナストラック)。総再生時間 8:09。

## 構成

デジタルCDアルバム(NK-001)・デジタルシングルCD(NK-S001〜NK-S003)と共通のエンジンを使い、形の違い(短冊型・ブックレットなし・裏面ノート)はデータ(`src/album/album.ts` の `layout: 'single'`)で切り替える。仕様は [docs/SINGLE.md](./docs/SINGLE.md)、制作手順は [docs/PRODUCTION.md](./docs/PRODUCTION.md)。

- `src/album/`: **このシングルのデータ一式(差し替え対象)**
  - `album.ts`: 題名・カタログ番号・形(layout)・裏面ノートの文面・奥付
  - `tracks.ts`: 曲目・解説(正本)
  - `sync.ts`: 歌詞の同期データ(本編2曲はインストのため空配列。ボーナストラックは字幕の歌詞に、文字起こしで照合した時刻を付けた生成物)
  - `media.ts`: 曲ごとの画像・音源の対応
  - `assets/`: 画像と音源(mp4)。`jacket.jpg`(短冊) / `back.jpg` / `bg.jpg`(テーマ色の色面) と `trackNN.jpg` / `trackNN.mp4` の固定スロット
- `src/logic.ts`: 純関数のロジック(時刻整形、曲順の循環、歌詞の現在行、ブックレット構成)
- `src/main.ts`: 画面と再生の制御

## 開発

```bash
npm ci
npm run dev          # 開発サーバー
npm run verify       # lint → test → build → check:dist → check:content
npx playwright install chromium && npm run test:e2e
npm run shots        # 主な画面の一括撮影(shots/all.png)
npm run build:preview # 作業確認用の単一 HTML(dist-preview/preview.html。音源は 96kbps 化して埋め込む)
```

ルールの詳細は [CLAUDE.md](./CLAUDE.md)、作業の状態は [docs/HANDOVER.md](./docs/HANDOVER.md) を参照。

## デバッグモード

ジャケット裏面パネルのバージョン表示(`デジタルシングルCD v1.1.0`)を続けて 5 回タップすると、左下に操作パネル(DEBUG)が出る。画面移動のショートカット用。もう一度 5 回タップするか、パネルの「終了」で消える。

## 素材・ライセンス

収録曲はオーナー提供の MP4(Gemini 生成動画)から制作(本編2曲はインスト、ボーナストラックは架空の言語の歌)。短冊ジャケットは様式調査の型B(1992–95: タイポグラフィ勝負)で、干潮の浜辺の生成画像にタイトル文字を後から合成した。コードは個人利用の範囲で公開している。
