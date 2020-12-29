const saveItems = (array, listName) => {
    localStorage.setItem(listName, JSON.stringify(array))
    // console.log('saved', array)
}

const loadItems = (listName) => {
    const data =  JSON.parse(localStorage.getItem(listName))

    return data ? data : undefined
}

export { saveItems, loadItems }