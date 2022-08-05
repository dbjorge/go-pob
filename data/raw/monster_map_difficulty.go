package raw

type MonsterMapDifficulty struct {
	MapLevel   int         `json:"MapLevel"`
	Stat1Value int         `json:"Stat1Value"`
	Stat2Value int         `json:"Stat2Value"`
	Stat3Value int         `json:"Stat3Value"`
	Stat4Value int         `json:"Stat4Value"`
	StatsKey1  int         `json:"StatsKey1"`
	StatsKey2  int         `json:"StatsKey2"`
	StatsKey3  interface{} `json:"StatsKey3"`
	StatsKey4  interface{} `json:"StatsKey4"`
	Key        int         `json:"_key"`
}

var MonsterMapDifficulties []*MonsterMapDifficulty
var MonsterMapDifficultiesMap map[int]*MonsterMapDifficulty

func InitializeMonsterMapDifficulties(version string) error {
	if err := InitHelper(version, "MonsterMapDifficulty", &MonsterMapDifficulties); err != nil {
		return err
	}

	MonsterMapDifficultiesMap = make(map[int]*MonsterMapDifficulty)
	for _, i := range MonsterMapDifficulties {
		MonsterMapDifficultiesMap[i.Key] = i
	}

	return nil
}