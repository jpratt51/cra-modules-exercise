function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    const choice = items[idx];
    return choice;
}

function remove(items, item) {
    let itemArr = items;
    let idx = itemArr.indexOf(item);
    if (idx !== -1) {
        itemArr.splice(idx, 1);
        return item;
    } else {
        return undefined;
    }
}

export { choice, remove };
