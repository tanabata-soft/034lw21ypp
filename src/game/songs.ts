// リズムゲームの収録曲リスト（作品データ。ここは作品ごとに書き換える場所で、
// エンジン側の部品ではない。CD 側の作品データが src/album/ にあるのと同じ考え方）。
//
// 1曲ごとに決めるもの:
// - id: 曲 ID（半角英数の短い名前。譜面・歌詞データのキーになる。公開後に変えない）
// - audioUrl / jacketUrl: 音源とジャケット。音源は制作入口で用意した唯一の
//   正規音源 MP3 192kbps（src/game/assets/track0N.mp3。CD 側プレイヤーも
//   同じ音源を src/album/assets/audio/track0N.mp3 として参照し、ビルドでは
//   内容が同一のため dist 上は1ファイルにまとまる）、ジャケットは
//   CD 側の曲ジャケットのコピー。作り方はデジタルCDエンジン
//   （mmishina-art/digitalcd-engine）docs/PRODUCTION.md の
//   「リズムゲーム（任意モジュール）」参照
// - frameInset: ジャケット絵の四辺に焼き込まれた紙枠の幅（実画像ピクセル）。
//   演奏画面の背景では、この枠を除いた内側の絵だけを敷く。
//   枠が無い絵は 0
// - slidePosition: メニューのカルーセルでジャケットを寄せる位置（CSS の
//   object-position）。絵の中の曲タイトルができるだけ収まる側へ寄せる。
//   未指定なら中央
// - accent: 曲のテーマ色（#rrggbb）。メニューの枠・光・ボタンなどのアクセント色
//   として、選曲に合わせて切り替わる（オーナー決定 2026-11-20 のパターン3）。
//   ジャケットから scripts/jacket-accent.py で抜き出すのが基本（視認性のために
//   明度・彩度を持ち上げる処理込み）
// - bonus: ボーナストラックなら true（CD 側 tracks.ts の bonus と一致させる）。
//   スライドの先頭に金色の BONUS チップが出る
// - album: 収録アルバム名（表示用） / genre: ジャンル（表示用）
//
// frameInset の実測（2026-11-25、暖色テスト＋無彩色テストの両方で四辺を実測し
// サムネイル目視と併せて判定）:
// - track01（hammock）: 両テストとも帯なし。全面イラストで枠なし → 0
// - track02（glint）: 720×720。無彩色の白枠が四辺とも 36px（割合 1.0 が続き
//   37px 目で 0.1 へ急落。ポスター風の白い縁取りが焼き込まれた絵）。
//   最大値 36＋余白で 38
// - track03（starlight）: 両テストとも帯なし。全面イラストで枠なし → 0
//
// 譜面（data/charts.json）と歌詞（data/lyrics.json）は生成物なので、ここには
// 書かない。生成手順はデジタルCDエンジンの docs/PRODUCTION.md 参照。
// このモジュールはデジタルCDエンジン v1.18.0 のリズムゲーム（任意モジュール）を
// 取り込んだもの（2026-11-25）。
import track01Audio from './assets/track01.mp3';
import track01Jacket from './assets/track01.jpg';
import track02Audio from './assets/track02.mp3';
import track02Jacket from './assets/track02.jpg';
import track03Audio from './assets/track03.mp3';
import track03Jacket from './assets/track03.jpg';

export interface GameSongDef {
  id: string;
  audioUrl: string;
  jacketUrl: string;
  frameInset: number;
  slidePosition?: string;
  accent: string;
  bonus?: boolean;
  album: string;
  genre: string;
}

export const SONG_DEFS: GameSongDef[] = [
  {
    id: 'hammock',
    audioUrl: track01Audio,
    jacketUrl: track01Jacket,
    frameInset: 0,
    accent: '#a0d651',
    album: 'NK-S004 HAMMOCK AT LOW TIDE',
    genre: 'Seaside Bossa',
  },
  {
    id: 'glint',
    audioUrl: track02Audio,
    jacketUrl: track02Jacket,
    frameInset: 38,
    accent: '#5180d6',
    album: 'NK-S004 HAMMOCK AT LOW TIDE',
    genre: 'Night Ambient',
  },
  {
    id: 'starlight',
    audioUrl: track03Audio,
    jacketUrl: track03Jacket,
    frameInset: 0,
    accent: '#5186d6',
    bonus: true,
    album: 'NK-S004 HAMMOCK AT LOW TIDE',
    genre: 'Healing Vocal',
  },
];
