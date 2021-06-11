const initalState = {
    title: '',
    description: '',
    images:{full: "/img/default_image.jpg"},
    directions: [
        {
          "instructions": "Combine milk with vinegar in a medium bowl and set aside for 5 minutes to \"sour\".",
          "optional": false
        },
        {
          "instructions": "Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into \"soured\" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.",
          "optional": false
        },
        {
          "instructions": "Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.",
          "optional": false
        }
      ],
      ingredients: [
        {
          "uuid": "aa1ff525-4190-4a66-8d12-3f383a752b55",
          "amount": 1.5,
          "measurement": "cups",
          "name": "milk"
        },
        {
          "uuid": "d4fbd3ee-add4-4e86-b8bb-898a97d5be78",
          "amount": 4,
          "measurement": "tablespoons",
          "name": "white vinegar"
        },
        {
          "uuid": "811a6f12-428e-4110-abcd-508e4080bc5c",
          "amount": 2,
          "measurement": "cups",
          "name": "all-purpose flour"
        },
        {
          "uuid": "28ed1238-648b-4559-a83c-5a2fb5f4ad25",
          "amount": 4,
          "measurement": "tablespoons",
          "name": "white sugar"
        },
      ],     
    servings: 0,
    prepTime: 0,
    cookTime: 0,
}

module.exports = {
    initalState,
}