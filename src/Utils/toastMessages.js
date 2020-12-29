
export const getToastMessage = (type) => {

    const completeMessages = [
        "Good job! Have a cookie. 🍪" ,
        "An honest days work...",
        "🔥 Wohoo, someone is on fire! 🔥 ",
        "Good stuff, keep going! 👍",  
        "Not all gold which glitters... this one is though.💰 ",
        "Wooooh, shiiiny...!🦄✨",
        "Getting stuff done like a boss!",
        "Toss a coin to the Witcher, oooh valleey of plentyy...💰🎵", 
        "Look, a lucky penny! (It`s from a year you were born...)🪙",
        "Keep Smashing it!",
        "Productivity level over 9000!🔥 ",
        "Look at al the productivity!",
        "Lannisters always pay their debts."
          
    ]
    
    const addTodoMessages = [
        "Eat the frog! If you have multiple, start with the fattest. 🐸",  
        "Sounds like a plan!",
        "Todo Added. Now go do it.",
        "Todo or not to do? Try doing.",
        "Target acquired!",
        "Goal set. Now go, make it happen!",
        "Go get them!",
        "Good plan. Let`s do it!"
    ]
    
    const addRewardMessages = [
        "Sounds cool. Now go do some work.",
        "Carrot on the stick deployed. Go!",
        "Looking forward to that!",
        "This should keep you motivated",
        "That sounds like fun!",
        "One more to look forward to."
    ]

    const rewardMessages = [
        "Go, get yourself something nice... ",
        "Cookie deserved!🍪",
        "Due tomorrow? Do tomorrow! Now go have some fun!",
        "YOU ARE ON A BREAK!",
        "Have a break. ☕",
        "Time to chill 🍵",
        "Work hard, play hard!",
        "Well done today, Enjoy!"     
    ]
    
    let index;
    
    switch (type) {
        case "reward":
            index = Math.floor(Math.random()* rewardMessages.length)
            return rewardMessages[index];
        case "complete":
            index = Math.floor(Math.random()* completeMessages.length)
            return completeMessages[index];
        case "newTodo":
            index = Math.floor(Math.random()* addTodoMessages.length)
            return addTodoMessages[index];
        case "newReward":
            index = Math.floor(Math.random()* addRewardMessages.length)
            return addRewardMessages[index];
        default:
            return
    }
}
