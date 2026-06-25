// Database Source
const gameDatabase = {
    nature: {
        pairs: [
            { normal: "Lion", alt: "Tiger" }, { normal: "Elephant", alt: "Rhino" },
            { normal: "Penguin", alt: "Puffin" }, { normal: "Dolphin", alt: "Whale" },
            { normal: "Cheetah", alt: "Leopard" }, { normal: "Wolf", alt: "Coyote" },
            { normal: "Grizzly Bear", alt: "Black Bear" }, { normal: "Fox", alt: "Jackal" },
            { normal: "Alligator", alt: "Crocodile" }, { normal: "Frog", alt: "Toad" },
            { normal: "Gorilla", alt: "Chimpanzee" }, { normal: "Zebra", alt: "Donkey" },
            { normal: "Deer", alt: "Elk" }, { normal: "Rabbit", alt: "Hare" },
            { normal: "Seal", alt: "Sea Lion" }, { normal: "Owl", alt: "Eagle" },
            { normal: "Falcon", alt: "Hawk" }, { normal: "Raven", alt: "Crow" },
            { normal: "Swan", alt: "Goose" }, { normal: "Shark", alt: "Baracuda" },
            { normal: "Octopus", alt: "Squid" }, { normal: "Crab", alt: "Lobster" },
            { normal: "Camel", alt: "Llama" }, { normal: "Horse", alt: "Pony" },
            { normal: "Sheep", alt: "Goat" }, { normal: "Cow", alt: "Bull" },
            { normal: "Pig", alt: "Boar" }, { normal: "Chicken", alt: "Turkey" },
            { normal: "Mouse", alt: "Rat" }, { normal: "Squirrel", alt: "Chipmunk" },
            { normal: "Beaver", alt: "Otter" }, { normal: "Kangaroo", alt: "Wallaby" },
            { normal: "Panda", alt: "Red Panda" }, { normal: "Ostrich", alt: "Emu" },
            { normal: "Meerkat", alt: "Mongoose" }, { normal: "Oak Tree", alt: "Maple Tree" },
            { normal: "Pine Tree", alt: "Cedar Tree" }, { normal: "Palm Tree", alt: "Coconut Tree" },
            { normal: "Cactus", alt: "Succulent" }, { normal: "Rose", alt: "Tulip" },
            { normal: "Sunflower", alt: "Daisy" }, { normal: "Orchid", alt: "Lily" },
            { normal: "Fern", alt: "Moss" }, { normal: "Grass", alt: "Clover" },
            { normal: "Seaweed", alt: "Coral" }, { normal: "Mushroom", alt: "Toadstool" },
            { normal: "Apple Tree", alt: "Pear Tree" }, { normal: "Bonsai", alt: "Bamboo" },
            { normal: "Ivy", alt: "Vine" }, { normal: "Poison Ivy", alt: "Nettle" },
            { normal: "Rain", alt: "Drizzle" }, { normal: "Snow", alt: "Sleet" },
            { normal: "Hail", alt: "Ice Pellets" }, { normal: "Thunder", alt: "Lightning" },
            { normal: "Tornado", alt: "Hurricane" }, { normal: "Fog", alt: "Mist" },
            { normal: "Storm", alt: "Gale" }, { normal: "Cloud", alt: "Overcast" },
            { normal: "Frost", alt: "Dew" }, { normal: "Breeze", alt: "Gust" },
            { normal: "Mountain", alt: "Volcano" }, { normal: "Hill", alt: "Mound" },
            { normal: "Valley", alt: "Canyon" }, { normal: "Cave", alt: "Cavern" },
            { normal: "Cliff", alt: "Crag" }, { normal: "Desert", alt: "Oasis" },
            { normal: "Island", alt: "Reef" }, { normal: "River", alt: "Stream" },
            { normal: "Lake", alt: "Pond" }, { normal: "Ocean", alt: "Sea" },
            { normal: "Waterfall", alt: "Rapids" }, { normal: "Swamp", alt: "Bog" },
            { normal: "Glacier", alt: "Iceberg" }, { normal: "Beach", alt: "Dunes" },
            { normal: "Geyser", alt: "Hot Spring" }, { normal: "Gold", alt: "Pyrite" },
            { normal: "Diamond", alt: "Quartz" }, { normal: "Ruby", alt: "Sapphire" },
            { normal: "Emerald", alt: "Jade" }, { normal: "Marble", alt: "Granite" },
            { normal: "Coal", alt: "Charcoal" }, { normal: "Sand", alt: "Gravel" },
            { normal: "Clay", alt: "Mud" }, { normal: "Flint", alt: "Obsidian" },
            { normal: "Meteor", alt: "Asteroid" }, { normal: "Sun", alt: "Moon" },
            { normal: "Planet", alt: "Star" }, { normal: "Eclipse", alt: "Comet" },
            { normal: "Sunrise", alt: "Sunset" }, { normal: "Aurora", alt: "Rainbow" },
            { normal: "Boulder", alt: "Rock" }, { normal: "Earthquake", alt: "Tremor" },
            { normal: "Wildfire", alt: "Brushfire" }, { normal: "Avalanche", alt: "Landslide" },
            { normal: "Tsunami", alt: "Tidal Wave" }, { normal: "Drought", alt: "Heatwave" },
            { normal: "Forest", alt: "Woodlands" }, { normal: "Jungle", alt: "Rainforest" },
            { normal: "Savannah", alt: "Plain" }, { normal: "Tundra", alt: "Steppe" }
        ]
    },
    food: {
        pairs: [
            { normal: "Pizza", alt: "Flatbread" }, { normal: "Burger", alt: "Sandwich" },
            { normal: "Sushi", alt: "Kimbap" }, { normal: "Pancake", alt: "Waffle" },
            { normal: "Taco", alt: "Burrito" }, { normal: "Quesadilla", alt: "Enchilada" },
            { normal: "Spaghetti", alt: "Fettuccine" }, { normal: "Macaroni", alt: "Penne" },
            { normal: "Ramen", alt: "Udon" }, { normal: "Soba", alt: "Pho" },
            { normal: "Dumpling", alt: "Wonton" }, { normal: "Gyoza", alt: "Shumai" },
            { normal: "Steak", alt: "Ribs" }, { normal: "Hot Dog", alt: "Bratwurst" },
            { normal: "Fried Chicken", alt: "Chicken Tenders" }, { normal: "Kebab", alt: "Skewer" },
            { normal: "French Fries", alt: "Onion Rings" }, { normal: "Potato Chips", alt: "Pretzels" },
            { normal: "Popcorn", alt: "Puffs" }, { normal: "Nachos", alt: "Chips and Salsa" },
            { normal: "Croissant", alt: "Baguette" }, { normal: "Bagel", alt: "English Muffin" },
            { normal: "Donut", alt: "Fritter" }, { normal: "Muffin", alt: "Cupcake" },
            { normal: "Brownie", alt: "Fudge" }, { normal: "Chocolate Chip Cookie", alt: "Oreo" },
            { normal: "Apple Pie", alt: "Cherry Pie" }, { normal: "Cheesecake", alt: "Tiramisu" },
            { normal: "Ice Cream", alt: "Gelato" }, { normal: "Frozen Yogurt", alt: "Sorbet" },
            { normal: "Milkshake", alt: "Smoothie" }, { normal: "Hot Chocolate", alt: "Mocha" },
            { normal: "Espresso", alt: "Americano" }, { normal: "Latte", alt: "Cappuccino" },
            { normal: "Green Tea", alt: "Matcha" }, { normal: "Black Tea", alt: "Earl Grey" },
            { normal: "Orange Juice", alt: "Apple Juice" }, { normal: "Lemonade", alt: "Limeade" },
            { normal: "Coca-Cola", alt: "Pepsi" }, { normal: "Sprite", alt: "7Up" },
            { normal: "Beer", alt: "Ale" }, { normal: "Red Wine", alt: "White Wine" },
            { normal: "Champagne", alt: "Prosecco" }, { normal: "Whiskey", alt: "Bourbon" },
            { normal: "Vodka", alt: "Gin" }, { normal: "Cheddar", alt: "Gouda" },
            { normal: "Mozzarella", alt: "Burrata" }, { normal: "Parmesan", alt: "Asiago" },
            { normal: "Swiss Cheese", alt: "Provolone" }, { normal: "Brie", alt: "Camembert" },
            { normal: "Butter", alt: "Margarine" }, { normal: "Yogurt", alt: "Greek Yogurt" },
            { normal: "Oatmeal", alt: "Porridge" }, { normal: "Cornflakes", alt: "Granola" },
            { normal: "Scrambled Eggs", alt: "Omelette" }, { normal: "Fried Egg", alt: "Poached Egg" },
            { normal: "Bacon", alt: "Sausage" }, { normal: "Ham", alt: "Prosciutto" },
            { normal: "Salmon", alt: "Tuna" }, { normal: "Lobster", alt: "Crab" },
            { normal: "Shrimp", alt: "Scallops" }, { normal: "Clams", alt: "Mussels" },
            { normal: "Rice", alt: "Quinoa" }, { normal: "Couscous", alt: "Bulgur" },
            { normal: "Naan", alt: "Pita" }, { normal: "Tortilla", alt: "Roti" },
            { normal: "Salad", alt: "Coleslaw" }, { normal: "Caesar Salad", alt: "Greek Salad" },
            { normal: "Tomato Soup", alt: "Pumpkin Soup" }, { normal: "Chicken Soup", alt: "Beef Stew" },
            { normal: "Chili", alt: "Curry" }, { normal: "Ketchup", alt: "BBQ Sauce" },
            { normal: "Mayonnaise", alt: "Aioli" }, { normal: "Mustard", alt: "Honey Mustard" },
            { normal: "Soy Sauce", alt: "Teriyaki" }, { normal: "Guacamole", alt: "Hummus" },
            { normal: "Peanut Butter", alt: "Almond Butter" }, { normal: "Nutella", alt: "Jam" },
            { normal: "Honey", alt: "Maple Syrup" }, { normal: "Apple", alt: "Pear" },
            { normal: "Banana", alt: "Plantain" }, { normal: "Orange", alt: "Tangerine" },
            { normal: "Lemon", alt: "Lime" }, { normal: "Strawberry", alt: "Raspberry" },
            { normal: "Blueberry", alt: "Blackberry" }, { normal: "Watermelon", alt: "Cantaloupe" },
            { normal: "Peach", alt: "Nectarine" }, { normal: "Mango", alt: "Papaya" },
            { normal: "Pineapple", alt: "Jackfruit" }, { normal: "Grapes", alt: "Raisins" },
            { normal: "Tomato", alt: "Bell Pepper" }, { normal: "Potato", alt: "Sweet Potato" },
            { normal: "Carrot", alt: "Parsnip" }, { normal: "Broccoli", alt: "Cauliflower" },
            { normal: "Spinach", alt: "Kale" }, { normal: "Lettuce", alt: "Cabbage" },
            { normal: "Onion", alt: "Garlic" }, { normal: "Mushroom", alt: "Truffle" },
            { normal: "Corn", alt: "Peas" }, { normal: "Walnut", alt: "Pecan" }
        ]
    },
    places: {
        pairs: [
            { normal: "Paris", alt: "Rome" }, { normal: "Tokyo", alt: "Seoul" },
            { normal: "Beach", alt: "Lake" }, { normal: "Mountain", alt: "Hill" },
            { normal: "New York", alt: "Chicago" }, { normal: "Los Angeles", alt: "San Francisco" },
            { normal: "London", alt: "Edinburgh" }, { normal: "Dublin", alt: "Belfast" },
            { normal: "Berlin", alt: "Munich" }, { normal: "Madrid", alt: "Barcelona" },
            { normal: "Sydney", alt: "Melbourne" }, { normal: "Toronto", alt: "Vancouver" },
            { normal: "Cairo", alt: "Giza" }, { normal: "Dubai", alt: "Abu Dhabi" },
            { normal: "Mumbai", alt: "Delhi" }, { normal: "Beijing", alt: "Shanghai" },
            { normal: "Hong Kong", alt: "Singapore" }, { normal: "Bangkok", alt: "Phuket" },
            { normal: "Rio de Janeiro", alt: "Sao Paulo" }, { normal: "Buenos Aires", alt: "Santiago" },
            { normal: "Desert", alt: "Dunes" }, { normal: "Forest", alt: "Jungle" },
            { normal: "Swamp", alt: "Marsh" }, { normal: "River", alt: "Stream" },
            { normal: "Ocean", alt: "Sea" }, { normal: "Island", alt: "Peninsula" },
            { normal: "Waterfall", alt: "Geyser" }, { normal: "Cave", alt: "Tunnel" },
            { normal: "Canyon", alt: "Valley" }, { normal: "Volcano", alt: "Crater" },
            { normal: "Library", alt: "Bookstore" }, { normal: "Museum", alt: "Art Gallery" },
            { normal: "Cinema", alt: "Theater" }, { normal: "Stadium", alt: "Arena" },
            { normal: "Gym", alt: "Fitness Center" }, { normal: "Park", alt: "Playground" },
            { normal: "Zoo", alt: "Aquarium" }, { normal: "Airport", alt: "Train Station" },
            { normal: "Harbor", alt: "Marina" }, { normal: "Hotel", alt: "Motel" },
            { normal: "Resort", alt: "Cabin" }, { normal: "Restaurant", alt: "Cafe" },
            { normal: "Bar", alt: "Pub" }, { normal: "Mall", alt: "Market" },
            { normal: "Supermarket", alt: "Grocery Store" }, { normal: "Bakery", alt: "Pastry Shop" },
            { normal: "Hospital", alt: "Clinic" }, { normal: "Pharmacy", alt: "Drugstore" },
            { normal: "School", alt: "College" }, { normal: "University", alt: "Campus" },
            { normal: "Office", alt: "Cubicle" }, { normal: "Factory", alt: "Warehouse" },
            { normal: "Bank", alt: "Credit Union" }, { normal: "Post Office", alt: "Courier" },
            { normal: "Church", alt: "Cathedral" }, { normal: "Castle", alt: "Palace" },
            { normal: "Fortress", alt: "Citadel" }, { normal: "Skyscraper", alt: "Tower" },
            { normal: "Bridge", alt: "Overpass" }, { normal: "Highway", alt: "Freeway" },
            { normal: "Street", alt: "Avenue" }, { normal: "Alley", alt: "Lane" },
            { normal: "Subway", alt: "Metro" }, { normal: "Gas Station", alt: "Charging Station" },
            { normal: "Parking Lot", alt: "Garage" }, { normal: "Farm", alt: "Ranch" },
            { normal: "Vineyard", alt: "Orchard" }, { normal: "Greenhouse", alt: "Nursery" },
            { normal: "Cemetery", alt: "Graveyard" }, { normal: "Amusement Park", alt: "Water Park" },
            { normal: "Casino", alt: "Arcade" }, { normal: "Nightclub", alt: "Lounge" },
            { normal: "Concert Hall", alt: "Opera House" }, { normal: "City Hall", alt: "Courthouse" },
            { normal: "Police Station", alt: "Fire Station" }, { normal: "Embassy", alt: "Consulate" },
            { normal: "Laboratory", alt: "Observatory" }, { normal: "Planetarium", alt: "Museum" },
            { normal: "Dock", alt: "Pier" }, { normal: "Campground", alt: "Campsite" },
            { normal: "Glacier", alt: "Iceberg" }, { normal: "Savannah", alt: "Prairie" },
            { normal: "Tundra", alt: "Steppe" }, { normal: "Plaza", alt: "Square" },
            { normal: "Boulevard", alt: "Promenade" }, { normal: "Bungalow", alt: "Cottage" },
            { normal: "Mansion", alt: "Villa" }, { normal: "Apartment", alt: "Condo" },
            { normal: "Penthouse", alt: "Loft" }, { normal: "Basement", alt: "Attic" },
            { normal: "Kitchen", alt: "Pantry" }, { normal: "Bathroom", alt: "Restroom" },
            { normal: "Bedroom", alt: "Guest Room" }, { normal: "Balcony", alt: "Patio" },
            { normal: "Garage", alt: "Shed" }, { normal: "Closet", alt: "Wardrobe" },
            { normal: "Venice", alt: "Amsterdam" }, { normal: "Las Vegas", alt: "Macau" },
            { normal: "Hollywood", alt: "Beverly Hills" }, { normal: "Hawaii", alt: "Bahamas" }
        ]
    },
    hobbies: {
        pairs: [
            { normal: "Drawing", alt: "Painting" }, { normal: "Sketching", alt: "Doodling" },
            { normal: "Photography", alt: "Videography" }, { normal: "Reading", alt: "Audiobooks" },
            { normal: "Writing", alt: "Journaling" }, { normal: "Knitting", alt: "Crocheting" },
            { normal: "Sewing", alt: "Embroidery" }, { normal: "Cooking", alt: "Baking" },
            { normal: "Gardening", alt: "Landscaping" }, { normal: "Woodworking", alt: "Carpentry" },
            { normal: "Pottery", alt: "Sculpting" }, { normal: "Origami", alt: "Papercraft" },
            { normal: "Camping", alt: "Hiking" }, { normal: "Fishing", alt: "Hunting" },
            { normal: "Bird Watching", alt: "Stargazing" }, { normal: "Chess", alt: "Checkers" },
            { normal: "Puzzles", alt: "Sudoku" }, { normal: "Crosswords", alt: "Word Search" },
            { normal: "Video Games", alt: "Board Games" }, { normal: "Card Tricks", alt: "Magic Tricks" },
            { normal: "Yoga", alt: "Pilates" }, { normal: "Meditation", alt: "Breathing Exercises" },
            { normal: "Dancing", alt: "Ballet" }, { normal: "Singing", alt: "Karaoke" },
            { normal: "Acting", alt: "Improv" }, { normal: "Playing Guitar", alt: "Playing Ukulele" },
            { normal: "Playing Piano", alt: "Playing Keyboard" }, { normal: "Stand-up Comedy", alt: "Storytelling" },
            { normal: "Calligraphy", alt: "Lettering" }, { normal: "Scrapbooking", alt: "Collage" },
            { normal: "Stamp Collecting", alt: "Coin Collecting" }, { normal: "Comic Collecting", alt: "Card Collecting" },
            { normal: "Brewing Beer", alt: "Winemaking" }, { normal: "Barbecue", alt: "Smoking Meat" },
            { normal: "Metal Detecting", alt: "Geocaching" }, { normal: "Rock Climbing", alt: "Bouldering" },
            { normal: "Skateboarding", alt: "Rollerblading" }, { normal: "Surfing", alt: "Paddleboarding" },
            { normal: "Snorkeling", alt: "Scuba Diving" }, { normal: "Kayaking", alt: "Canoeing" },
            { normal: "Sailing", alt: "Boating" }, { normal: "Model Trains", alt: "Model Airplanes" },
            { normal: "LEGO Building", alt: "Puzzles" }, { normal: "Thrifting", alt: "Antique Shopping" },
            { normal: "Blogging", alt: "Podcasting" }, { normal: "Vlogging", alt: "Livestreaming" },
            { normal: "Jewelry Making", alt: "Beading" }, { normal: "Candle Making", alt: "Soap Making" },
            { normal: "Leatherworking", alt: "Weaving" }, { normal: "Taxidermy", alt: "Bone Collecting" }
        ]
    },
    sports: {
        pairs: [
            { normal: "Soccer", alt: "Football" }, { normal: "Basketball", alt: "Netball" },
            { normal: "Baseball", alt: "Softball" }, { normal: "Cricket", alt: "Rounders" },
            { normal: "Rugby", alt: "American Football" }, { normal: "Tennis", alt: "Badminton" },
            { normal: "Table Tennis", alt: "Ping Pong" }, { normal: "Squash", alt: "Racquetball" },
            { normal: "Volleyball", alt: "Beach Volleyball" }, { normal: "Handball", alt: "Dodgeball" },
            { normal: "Ice Hockey", alt: "Field Hockey" }, { normal: "Lacrosse", alt: "Hurling" },
            { normal: "Golf", alt: "Mini Golf" }, { normal: "Bowling", alt: "Bocce" },
            { normal: "Billiards", alt: "Pool" }, { normal: "Darts", alt: "Archery" },
            { normal: "Shooting", alt: "Hunting" }, { normal: "Boxing", alt: "Kickboxing" },
            { normal: "Karate", alt: "Taekwondo" }, { normal: "Judo", alt: "Brazilian Jiu-Jitsu" },
            { normal: "Wrestling", alt: "Sumo" }, { normal: "Fencing", alt: "Kendo" },
            { normal: "Swimming", alt: "Diving" }, { normal: "Water Polo", alt: "Synchronized Swimming" },
            { normal: "Gymnastics", alt: "Trampolining" }, { normal: "Figure Skating", alt: "Speed Skating" },
            { normal: "Skiing", alt: "Snowboarding" }, { normal: "Sledding", alt: "Bobsleigh" },
            { normal: "Surfing", alt: "Windsurfing" }, { normal: "Sailing", alt: "Rowing" },
            { normal: "Track and Field", alt: "Cross Country" }, { normal: "Sprinting", alt: "Marathon" },
            { normal: "High Jump", alt: "Long Jump" }, { normal: "Hurles", alt: "Steeplechase" },
            { normal: "Cycling", alt: "Mountain Biking" }, { normal: "BMX", alt: "Motocross" },
            { normal: "Triathlon", alt: "Ironman" }, { normal: "Weightlifting", alt: "Powerlifting" },
            { normal: "Bodybuilding", alt: "CrossFit" }, { normal: "Cheerleading", alt: "Dance Sport" },
            { normal: "Skateboarding", alt: "Snowboarding" }, { normal: "Parkour", alt: "Free Running" },
            { normal: "Formula 1", alt: "Rally Racing" }, { normal: "NASCAR", alt: "IndyCar" },
            { normal: "Horse Racing", alt: "Polo" }, { normal: "Pickleball", alt: "Paddle Tennis" },
            { normal: "Frisbee", alt: "Disc Golf" }, { normal: "Curling", alt: "Shuffleboard" },
            { normal: "Croquet", alt: "Cricket" }, { normal: "Skating", alt: "Roller Derby" }
        ]
    }
};

// Global Execution State
let playerRegistry = [];
let gameState = {
    players: [],
    impostorIndexes: [],
    secretWord: "",
    altWord: "",
    isAltMode: false,
    currentTurn: 0
};

function init() {
    const container = document.getElementById('topic-container');
    container.innerHTML = "";
    for (const key in gameDatabase) {
        container.innerHTML += `
            <div class="checkbox-item">
                <input type="checkbox" name="topics" value="${key}" checked>
                <label>${key.charAt(0).toUpperCase() + key.slice(1)}</label>
            </div>
        `;
    }
    renderPlayerList();
}

// Player Management Operations
function renderPlayerList() {
    const listContainer = document.getElementById('player-list-registry');
    listContainer.innerHTML = "";
    
    playerRegistry.forEach((player, index) => {
        listContainer.innerHTML += `
            <li class="player-item">
                <span class="player-name-text">${player}</span>
                <div class="player-controls">
                    <button type="button" class="btn-ctrl" onclick="movePlayer(${index}, -1)">▲</button>
                    <button type="button" class="btn-ctrl" onclick="movePlayer(${index}, 1)">▼</button>
                    <button type="button" class="btn-ctrl btn-delete" onclick="removePlayer(${index})">X</button>
                </div>
            </li>
        `;
    });
    
    // Dynamically cap max value attribute based on total active names
    document.getElementById('impostor-count').max = playerRegistry.length;
}

function addPlayerFromUI() {
    const inputElement = document.getElementById('new-player-name');
    const name = inputElement.value.trim();
    if (name.length > 0) {
        playerRegistry.push(name);
        inputElement.value = "";
        renderPlayerList();
    }
}

function removePlayer(index) {
    playerRegistry.splice(index, 1);
    renderPlayerList();
    
    // Automatically reduce count if selected capacity exceeds the new layout maximum
    const countInput = document.getElementById('impostor-count');
    if (parseInt(countInput.value) > playerRegistry.length) {
        countInput.value = playerRegistry.length;
    }
}

function movePlayer(index, direction) {
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < playerRegistry.length) {
        const element = playerRegistry.splice(index, 1)[0];
        playerRegistry.splice(targetIndex, 0, element);
        renderPlayerList();
    }
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    const selectedTopics = Array.from(document.querySelectorAll('input[name="topics"]:checked')).map(cb => cb.value);
    if (selectedTopics.length === 0) return alert("Select at least one topic.");
    if (playerRegistry.length === 0) return alert("Player list cannot be empty.");

    let impostorCount = parseInt(document.getElementById('impostor-count').value);
    if (isNaN(impostorCount) || impostorCount < 0) return alert("Invalid impostor count allocation.");
    
    // Hard clamp generation block parameters matching manual override restrictions
    if (impostorCount > playerRegistry.length) {
        impostorCount = playerRegistry.length;
    }

    const isAltMode = document.getElementById('alt-mode').checked;
    const randomTopicKey = selectedTopics[Math.floor(Math.random() * selectedTopics.length)];
    const topicData = gameDatabase[randomTopicKey];
    const randomPair = topicData.pairs[Math.floor(Math.random() * topicData.pairs.length)];

    const invertWords = Math.random() < 0.5;
    const secretWord = invertWords ? randomPair.alt : randomPair.normal;
    const altWord = invertWords ? randomPair.normal : randomPair.alt;

    const impostorIndexes = [];
    const trackingPool = [...Array(playerRegistry.length).keys()];
    
    while (impostorIndexes.length < impostorCount && trackingPool.length > 0) {
        const poolIndex = Math.floor(Math.random() * trackingPool.length);
        impostorIndexes.push(trackingPool.splice(poolIndex, 1)[0]);
    }

    gameState = { players: [...playerRegistry], impostorIndexes, secretWord, altWord, isAltMode, currentTurn: 0 };
    setupPassScreen();
    switchScreen('screen-pass');
}

function setupPassScreen() {
    document.getElementById('btn-reveal-hold').style.display = 'block';
    document.getElementById('secret-area').style.display = 'none';
    document.getElementById('current-player-name').innerText = gameState.players[gameState.currentTurn];
}

function toggleSecretVisibility() {
    document.getElementById('btn-reveal-hold').style.display = 'none';
    document.getElementById('secret-area').style.display = 'block';

    const isImpostor = gameState.impostorIndexes.includes(gameState.currentTurn);
    const wordDisplay = document.getElementById('secret-word');

    if (gameState.isAltMode) {
        // Uniform green text coloration prevents identity leak during pass phase
        if (isImpostor) {
            wordDisplay.innerText = gameState.altWord;
            wordDisplay.style.color = "#34c759"; 
        } else {
            wordDisplay.innerText = gameState.secretWord;
            wordDisplay.style.color = "#34c759";
        }
    } else {
        // Default mode maintains distinct red warning for intentional impostor assignment
        if (isImpostor) {
            wordDisplay.innerText = "IMPOSTOR";
            wordDisplay.style.color = "var(--accent-color)";
        } else {
            wordDisplay.innerText = gameState.secretWord;
            wordDisplay.style.color = "#34c759";
        }
    }
}

function nextPlayer() {
    gameState.currentTurn++;
    if (gameState.currentTurn < gameState.players.length) {
        setupPassScreen();
    } else {
        switchScreen('screen-gameplay');
    }
}

function showResults() {
    const tbody = document.getElementById('results-table-body');
    tbody.innerHTML = "";
    
    document.getElementById('word-reveal-summary').innerText = `Innocent Word: ${gameState.secretWord}`;
    document.getElementById('alt-word-reveal-summary').innerText = gameState.isAltMode ? `Impostor Word: ${gameState.altWord}` : "";

    gameState.players.forEach((player, index) => {
        const isImpostor = gameState.impostorIndexes.includes(index);
        const rowClass = isImpostor ? 'class="impostor-row"' : '';
        const roleText = isImpostor ? 'Impostor' : 'Innocent';
        const personalWord = isImpostor ? (gameState.isAltMode ? gameState.altWord : "Impostor") : gameState.secretWord;

        tbody.innerHTML += `
            <tr ${rowClass}>
                <td>${player}</td>
                <td>${roleText}</td>
                <td>${personalWord}</td>
            </tr>
        `;
    });

    switchScreen('screen-results');
}

function resetGame() {
    switchScreen('screen-setup');
}

init();