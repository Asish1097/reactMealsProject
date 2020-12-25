class Meal{
    constructor
        (
        id,
        categoryIds,
        title,
        afforadability,
        complexity,
        image,
        duration,
        ingredients,
        steps,
        isGultenFree,
        isVegan,
        isVegetraian,
        isLactoseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.afforadability = afforadability;
        this.complexity = complexity;
        this.image = image;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGultenFree = isGultenFree;
        this.isVegan = isVegan;
        this.isVegetraian = isVegetraian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;