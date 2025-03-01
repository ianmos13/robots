export function buildTree(data) {
    const map = {};
    data.forEach(item => {
        item.uniqName = toCamelCaseLatin(item.name);
        
       
        item.link = linkMap[item.key] || `/catalog?category=${item.key}&?type=${item.uniqName}`;
        map[item.key] = { ...item, children: [] };
    });

    const tree = {};
    data.forEach(item => {
        if (item.parent === null) {
            const rootKey = item.uniqName;
            tree[rootKey] = {
                object: map[item.key],
                children: []
            };
        } else {
            const parent = map[item.parent];
            if (parent) {
          
                parent.children.push({
                    ...map[item.key],
                    link: linkMap[item.key] || `/catalog?category=${item.key}&type=${parent.uniqName}`
                });
            }
        }
    });
    for (const key in tree) {
        const rootItemKey = tree[key].object.key;
        if (map[rootItemKey]) {
            tree[key].children = map[rootItemKey].children;
        }
    }
    return tree;
}

export function buildSimpleTree(data) {
    return data.map(item => {
        return {
            ...item,
            uniqName: toCamelCaseLatin(item.name),
            link: linkMap[item.key] || `/catalog?category=${item.key}&?type=${toCamelCaseLatin(item.name)}`
        };
    });
}

function toCamelCaseLatin(str) {
    const translitMap = {
        А: "A", Б: "B", В: "V", Г: "G", Д: "D", Е: "E", Ё: "E", Ж: "Zh", З: "Z",
        И: "I", Й: "Y", К: "K", Л: "L", М: "M", Н: "N", О: "O", П: "P", Р: "R",
        С: "S", Т: "T", У: "U", Ф: "F", Х: "H", Ц: "Ts", Ч: "Ch", Ш: "Sh", Щ: "Sch",
        Ъ: "", Ы: "Y", Ь: "", Э: "E", Ю: "Yu", Я: "Ya",
        а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z",
        и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
        с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
        ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
    };

    let transliterated = str
        .split("")
        .map(char => translitMap[char] || char)
        .join("");

    return transliterated
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
        .replace(/^./, str => str.toLowerCase());
}


const linkMap = {
    // Ветка "Промышленные роботы" (корневой элемент с key "1")
    "1": "/promyshlennye-roboty/",
    "10": "/promyshlennye-roboty/roboty-dlya-obsluzhivaniya-stankov/",
    "20": "/promyshlennye-roboty/koboty/",
    "14": "/promyshlennye-roboty/scara/",
    "13": "/promyshlennye-roboty/roboty-manipulyatory/",
    "12": "/promyshlennye-roboty/roboty-dlya-paletirovaniya/",
    "9": "/promyshlennye-roboty/frezernye-roboty/",
    "8": "/promyshlennye-roboty/polirovochnye-roboty/",
    "7": "/promyshlennye-roboty/svarochnye-roboty/",
    

    // "15": "/pozicionery/",
    // "16": "/pozicionery/gorelki-dlya-svarochnyh-rabot/",
    // "19": "/pozicionery/gorelki-dlya-svarochnyh-rabot/Apolo",
    // "18": "/pozicionery/gorelki-dlya-svarochnyh-rabot/Loyee",
    // "17": "/pozicionery/gorelki-dlya-svarochnyh-rabot/ARCTEC",
    
 
    "2": "/pozicionery/",
    "6": "/pozicionery/povorotnye/",
    "5": "/pozicionery/tryohosevye/",
    "4": "/pozicionery/dvuhosevye/",
    "3": "/pozicionery/odnoosevye/"
  };
  