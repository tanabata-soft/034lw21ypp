"""作品の曲設定（NK-S004）。

単位D（生成器一本化）: 生成器本体の正はテンプレート repo
（mmishina-art/digitalcd-engine）の scripts/chartgen/ パッケージ1か所。
作品側はこの SONGS メタデータと歌詞入力（src/game/data/lyrics.json）だけを
持ち、scripts/generate-charts.py（入口ブートストラップ）がテンプレートの
chartgen を参照して生成する。曲を足すときはここに1曲分を足す。
各キーの意味はテンプレート scripts/chartgen/config.py のコメント参照。
"""

SONGS = {
    # NK-S004『HAMMOCK AT LOW TIDE』の収録曲。音源は src/game/assets/track0N.mp3
    # （制作入口で用意した唯一の正規音源 MP3 192kbps。CD 側プレイヤーも同じ音源を共有する）。
    # 1・2曲目はインストゥルメンタル（歌詞なし）。FEVER（サビ）区間は音響解析
    # （小節ごとの RMS エネルギーの plateau）から決めた:
    # hammock は高原部 53〜108s と 133〜160s、glint は盛り上がり 38〜63s／
    # 90〜114s／126〜139s。3曲目 starlight は歌詞（src/album/sync.ts）の
    # 反復ブロック（85s 以降、全行が再演される後半）をサビとし、その先頭行の
    # 開始〜末尾行の歌唱終わりまで（NK-S003 での決め方）。
    "hammock": {
        "title": "HAMMOCK AT LOW TIDE",
        "audio": "src/game/assets/track01.mp3",
        "fever": [[53, 108], [133, 160]],
        "chart_v5": True,
        "flick": True,
        # インストゥルメンタル（歌詞スロットなし）はバラード判定の対象外
        # （CHART-DESIGN v6-5: 歌主導を測れないため OFF が安全側）。
        # 実測分類どおり明示的に OFF を記録する
        "ballad": False,
    },
    "glint": {
        "title": "BENEATH THE SILVER GLINT",
        "audio": "src/game/assets/track02.mp3",
        "fever": [[38, 63], [90, 114], [126, 139]],
        "chart_v5": True,
        "flick": True,
        # hammock と同じくインストゥルメンタルのため明示的に OFF
        "ballad": False,
    },
    "starlight": {
        "title": "SALT AND STARLIGHT",
        "audio": "src/game/assets/track03.mp3",
        # サビは歌詞の反復ブロック: 85「Sha vah lee ah oh」〜129「Nal ah vee rae」
        # の歌唱終わり（136 以降はアウトロのフェード）
        "fever": [[85, 136]],
        "chart_v5": True,
        "flick": True,
        # サビは歌に合わせて主レイヤーを vocal にする（NK-S003 のオーナー指示）
        "chorus_layer": "vocal",
        "chorus_bonus": 0.5,
        # v6-5 バラード: 実測分類で OFF（2026-11-25 の初回生成で確認）。
        # 検出器スコア 2（auto-off）: BPM 143.7／歌詞区間の持続平均 0.54／
        # 小節エネルギー P90/P50 = 1.583（緩急あり）。歌主導ではあるが
        # テンポ・緩急・持続のいずれもバラード基準に届かず、v6-4 被覆後も
        # 空白は全難易度 unfilledGaps 0・上限超過なしで深刻でないため、
        # 検出器の判定どおり OFF を明示的に記録する
        "ballad": False,
    },
}
