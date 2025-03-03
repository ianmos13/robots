
export function getProductUrl(robot, categories) {
    const currentCategoryObj = categories.find(
        (category) => category.key === robot.category
    )

    if (!currentCategoryObj) return `/${robot.slug}`
    if (!currentCategoryObj.parent) return `/${currentCategoryObj.slug}/${robot.slug}`

    const parentCategoryObj = categories.find(
        (category) => category.key === currentCategoryObj.parent
    )
    return parentCategoryObj ?
        `/${parentCategoryObj.slug}/${currentCategoryObj.slug}/${robot.slug}` :
        `/${currentCategoryObj.slug}/${robot.slug}`
}