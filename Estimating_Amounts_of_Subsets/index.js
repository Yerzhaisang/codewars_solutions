function estSubsets(arr) {
    let sett = new Set(arr);
    var n = sett.size;
    // your code here
    return 2**n-1; // n = amount of subsets that don not have repeated elements
}
