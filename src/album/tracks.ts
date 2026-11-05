// 曲目と解説（このシングルのデータ）。src は歌詞データ（src/album/sync.ts）のキー。
// 並びが曲順。1曲目が表題曲、2曲目がカップリング（docs/SINGLE.md）。
// NK-S004 は全曲インストゥルメンタルのため sync.ts には歌詞を持たない。
import type { TrackMeta } from '../logic';

export const TRACKS: TrackMeta[] = [
  { src: 'HAMMOCK AT LOW TIDE', title: 'HAMMOCK AT LOW TIDE', genre: 'Seaside Bossa', time: '2:50', note: '干潮の浜辺、ハンモックでまどろむ午後のグルーヴ。' },
  { src: 'BENEATH THE SILVER GLINT', title: 'BENEATH THE SILVER GLINT', genre: 'Night Ambient', time: '2:35', note: '銀の星座が瞬く夜の海。静かに沈んでいくアンビエント。' },
];
