export function makeAllCategories(mainCategory) {
    const categoryTab = mainCategory?.object
    const allTab = {
        id: categoryTab?.id,
        key: 'all',
        name: `Все ${categoryTab?.name?.toLowerCase()}`,
        link: categoryTab?.link || `/${categoryTab?.uniqName}` ,
    }
    return [allTab].concat(mainCategory?.children || [])
}