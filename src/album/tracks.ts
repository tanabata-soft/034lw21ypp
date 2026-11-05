// 曲目と解説（このシングルのデータ）。src は歌詞データ（src/album/sync.ts）のキー。
// 並びが曲順。1曲目が表題曲、2曲目がカップリング（docs/SINGLE.md）。
// 1・2曲目はインストゥルメンタル（sync.ts は空配列）。3曲目はボーナストラック（オーナー決定の例外、docs/SINGLE.md）で、架空の言語の歌に歌詞データを持つ。
import type { TrackMeta } from '../logic';

export const TRACKS: TrackMeta[] = [
  { src: 'HAMMOCK AT LOW TIDE', title: 'HAMMOCK AT LOW TIDE', genre: 'Seaside Bossa', time: '2:50', note: '干潮の浜辺、ハンモックでまどろむ午後のグルーヴ。' },
  { src: 'BENEATH THE SILVER GLINT', title: 'BENEATH THE SILVER GLINT', genre: 'Night Ambient', time: '2:35', note: '銀の星座が瞬く夜の海。静かに沈んでいくアンビエント。' },
  { src: 'SALT AND STARLIGHT', title: 'SALT AND STARLIGHT', genre: 'Healing Vocal', time: '2:43', note: '塩と星明かり。架空の言語を歌う声が、夜の海に消えていく。', bonus: true },
];
