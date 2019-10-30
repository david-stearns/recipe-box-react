import uuid from "uuidv4";

class Recipe {
  constructor(id) {
    this.title = "";
    this.text = "";
    this.ingredients = [];
    this.id = id;
    this.image = "/images/food.png";
    this.rating = 0;
    this.summary =
      "Some quick example text to build on the card title and make up the bulk of the card's content.";
  }
}

let demoRecipes = [];
let macAndCheese = new Recipe(uuid());
macAndCheese.title = "Mac and Cheese";
macAndCheese.image = "/images/macandcheese.jpeg";
macAndCheese.rating = 4;
macAndCheese.body =
  "1. Cook macaroni according to the package directions. Drain.\n\n2. In a saucepan, melt butter or margarine over medium heat. Stir in enough flour to make a roux. Add milk to roux slowly, stirring constantly. Stir in cheeses, and cook over low heat until cheese is melted and the sauce is a little thick. Put macaroni in large casserole dish, and pour sauce over macaroni. Stir well.\n\n3. Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover. Sprinkle with a little paprika.\n\n4. Bake at 350 degrees F (175 degrees C) for 30 minutes. Serve.";
macAndCheese.ingredients = [
  "8oz uncooked elbow macaroni",
  "2 cups shredded Cheddar cheese",
  "1/2 cup grated Parmesan cheese",
  "3 cups milk",
  "1/4 cup butter",
  "2 1/2 tablespoons all-purpose flour",
  "2 tablespoons butter",
  "1/2 cup bread crumbs",
  "1 pinch paprika"
];

let hummus = new Recipe(uuid());
hummus.title = "Hummus";
hummus.image = "/images/hummus.jpeg";
hummus.rating = 5;
hummus.body =
  "1. Add tahini, cold water, olive oil, cumin, salt, garlic and lemon juice to a food processor.  Puree until smooth.\n\n2. Add in the chickpeas.  Puree for 3-4 minutes, pausing halfway to scrape down the sides of the bowl, until the hummus is smooth.  If it seems too thick, add in another tablespoon or two of water.\n\n3. Taste and season with additional salt, cumin, and/or lemon juice if needed.\n\n4. Serve immediately, garnished with your desired toppings.  Or transfer to a sealed container and refrigerate for up to 3 days.";
hummus.ingredients = [
  "1/3 cup tahini",
  "2–4 tablespoons cold water",
  "2 tablespoons olive oil",
  "1/2 teaspoon ground cumin",
  "3/4 teaspoon fine sea salt",
  "2 medium cloves garlic",
  "juice of 1 lemon",
  "1 (15 ounce) can chickpeas"
];

let applePie = new Recipe(uuid());
applePie.title = "Apple Pie";
applePie.image = "/images/applepie.jpeg";
applePie.rating = 3;
applePie.body =
  "1. In a small bowl, combine the sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.\n\n2. Line a 9-in. pie plate with bottom crust; trim even with edge. Fill with apple mixture; dot with butter. Roll remaining crust to fit top of pie; place over filling. Trim, seal and flute edges. Cut slits in crust.\n\n3. Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil.\n\n4. Bake at 375° for 25 minutes. Remove foil and bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.";
applePie.ingredients = [
  "1/2 cup sugar",
  "1/2 cup packed brown sugar",
  "3 tablespoons all-purpose flour",
  "1 teaspoon ground cinnamon",
  "1/4 teaspoon ground ginger",
  "1/4 teaspoon ground nutmeg",
  "6 to 7 cups thinly sliced peeled tart apples",
  "1 tablespoon lemon juice",
  "Pastry for double-crust pie (9 inches)",
  "1 tablespoon butter",
  "1 large egg white",
  "Additional sugar"
];

let freshPasta = new Recipe(uuid());
freshPasta.title = "Fresh Pasta";
freshPasta.image = "images/freshpasta.jpeg";
freshPasta.rating = 4;
freshPasta.body =
  "Mix eggs, flour, oil, and salt in the bowl of a stand mixer with your hands until a shaggy dough forms. Knead with dough hook until dough is smooth and elastic, about 10 minutes. Cover dough with plastic wrap and let rest at least 30 minutes.\n\nCut and roll as desired.";
freshPasta.ingredients = [
  "3 large eggs, beaten to blend",
  "2 cups all-purpose flour",
  "1 tablespoon olive oil",
  "1 teaspoon kosher salt"
];

let cookies = new Recipe(uuid());
cookies.title = "Chocolate Chip Cookes";
cookies.image = "/images/cookies.jpeg";
cookies.rating = 5;
cookies.body =
  "1. Heat oven to 375°F. In small bowl, mix flour, baking soda and salt; set aside.\n\n2. In large bowl, beat butter, granulated sugar, and brown sugar with electric mixer on medium speed or mix with spoon about 1 minute or until fluffy, scraping side of bowl occasionally.\n\n3.Beat in egg and vanilla until smooth. Stir in flour mixture just until blended (dough will be stiff). Stir in chocolate chips and nuts.\n\n4. Drop dough by rounded tablespoonfuls about 2 inches apart onto ungreased cookie sheets.\n\n5. Bake 8 to 10 minutes or until light brown (centers will be soft). Cool 2 minutes; remove from cookie sheet to cooling rack. Cool completely, about 30 minutes. Store covered in airtight container.";
cookies.ingredients = [
  "2 1/4 cups all-purpose flour",
  "1 teaspoon baking soda",
  "1/2 teaspoon salt",
  "1 cup butter, softened",
  "3/4 cup granulated sugar",
  "3/4 cup packed brown sugar",
  "1 egg",
  "1 teaspoon vanilla",
  "2 cups semisweet chocolate chips",
  "1 cup coarsely chopped nuts, if desired"
];

let demoIngredients = macAndCheese.ingredients;

demoRecipes.push(macAndCheese, hummus, applePie, freshPasta, cookies);

export { demoRecipes, demoIngredients };
