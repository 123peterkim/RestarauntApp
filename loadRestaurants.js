/**
 * Created by taylorcase on 5/7/14.
 */

db.restaurants.remove({});
db.restaurants.insert({ 'name': 'zPizza', 'phone': '17238439',

    'items':
       [ 'California Salad',
    'Chicken Ceasar Salad',
    'Greek Salad',
    'Arugula Salad',
    'Pear and Gorgonzola Salad',
    'ZBQ Salad',
    'Hot Meatball Sub',
    'Turkey Breast Sandwich',
    'Pollo Latino Sandwich',
    'Z-Tuna Sandwich',
    'Supersub',
    'Yuppie Chicken Sandwich',
    'Penne with Meatballs',
    'Chicken Penne Pesto',
    'Veggie Calzone',
    'Meat Calzone',
    'Cheese Pizza',
    'Sausage & Mushrooms',
    'Pepperoni',
    'Ham and Pineapple',
    'Chicken Sausage & Arugula Rustica',
    'Mediterranean Rustica',
    'Pear and Gorgonzola Rustica' ]
});
db.restaurants.find().pretty();