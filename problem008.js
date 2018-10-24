// Karol Cieślik PGK2

function magicSequence(a) {
  function recur(a) {
    if (a == 0)
      return 0;
    else if (a == 1)
      return -1;
    else if (a == 2)
      return -2;
    else if (a == 3)
      return -2;
    else
      return magicSequence(a - 1) * (a - 3);
  }
  return recur(a);
}
