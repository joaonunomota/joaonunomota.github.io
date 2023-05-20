export const shuffle = <Type>(array: Type[]): Type[] => {
    let index = array.length, otherIndex;
    let shffl = array.slice();

    while (index != 0) {
        otherIndex = Math.floor(Math.random() * index);
        index--;
        [shffl[index], shffl[otherIndex]] = [shffl[otherIndex], shffl[index]];
    }

    return shffl;
}
