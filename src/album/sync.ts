// 歌詞の表示タイミング（自動生成: gen-sync。出典と付け方は docs/PRODUCTION.md）
// 1・2曲目はインストゥルメンタルのため空配列。ボーナストラックは架空の言語の歌で、
// 歌詞本文は素材の字幕（mov_text）が正、開始時刻は文字起こし（medium）のフレーズ境界で付けた。
import type { SyncLine } from '../logic';

export const SYNC: Record<string, SyncLine[]> = {
  "HAMMOCK AT LOW TIDE": [],
  "BENEATH THE SILVER GLINT": [],
  "SALT AND STARLIGHT": [
    [0, "Ah lay ah no ree"],
    [7, "Sha vah lee ah oh"],
    [14, "Nol ah veen ah say"],
    [21, "Dohl chee oh noo rah"],
    [28, "Seh lah vee am oh"],
    [34, "Rih nah vah no lee"],
    [41, "Doh noh may ah see"],
    [47, "Sha lee ah voh rae"],
    [55, "Ahn vah lee oh"],
    [62, "Soh lah no ree"],
    [68, "Vee noh sae oh"],
    [75, "Nal ah vee rae"],
    [85, "Sha vah lee ah oh"],
    [95, "Soh lah no ree"],
    [106, "Ahn vah lee oh"],
    [115, "Soh lah no ree"],
    [122, "Vee noh sae oh"],
    [129, "Nal ah vee rae"],
    [136, "Sha vah lee oh..."],
    [143, "No ree ah..."],
    [150, "Ahn vee..."],
    [157, "Oh..."],
  ],
};
