function nickname(nickName, fullName){
    nameArray = [];
    let matches;
    for (char of nickName) {
        const pattern = new RegExp(`[${fullName}]`)
        matches = !!char.match(pattern)
    }
    return matches;

    // let expression = RegExp(nickName, 'gi')
    // if ((nickName < fullName.length) && fullName.match(expression)){
    //     return true;
    // }
    //    return false;
    
}
module.exports = nickname;