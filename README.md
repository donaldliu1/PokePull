# PokePull

## Overview
I love Pokemon pack openings and gacha systems, what better way to learn coding through a personal passion project? This project's main purpose was for me to learn about databases using MongoDB, API calls, Express, Axios and Mongoose.

## How Does It Work?
The general concept is a button that calls a function to get a random card from the Pokemon TCG API. Here's the probability distribution:
- (50% Chance) `< 0.5` = 1 Star
- (30% Chance) `< 0.8` = 2 Stars
- (15% Chance) `< 0.95` = 3 Stars
- (4% Chance) `< 0.99` = 4 Stars
- (1% Chance) `else` = 5 Stars

Using the star system, it will randomly roll for a card with the same rarity. This card is then displayed to the user and stored in MongoDB.
The displayed card will display the rarity, name and value.
The player can then view their collection and upgrade to a higher rarity using several cards of the same rarity. 

## Features
- Pull cards
- Store cards
- View collections
- See the value of cards
- Upgrade cards

## Installation
1. Clone the repository
    ```sh
    git clone <repository_url>
    ```
2. Navigate to the project directory
    ```sh
    cd PokePull
    ```
3. Install the necessary dependencies
    ```sh
    npm i
    ```

## Usage
- Users can interact with the button on the screen saying "Pull" to get a new card or "View Inventory" to see their collection.

## Technologies Used
- axios
- express
- mongodb
- mongoose

# Planning
Now that we've discussed how to get it up and running, lets get into how I got to this in the first place, I will go over:
- Design
- MVPs

## Design
Starting off I wanted it to resemble the pokedex from the show, I really enjoyed the concept of the original series when Ash would hold up his pokedex and it would scan the pokemon and give information. 
There was 2 basic unpolished designs, orb format and gradient format:

### Orb format
![orb format basic design](/design/orb.png)

### Gradient format
![orb format basic design](/design/gradient.png)
