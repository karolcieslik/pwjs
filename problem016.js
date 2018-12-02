function maybe(a, b, c)
{
	if(a(c))
		return b(c);
	else return c;
}
//test(1, maybe((x) => x === 2, (x) => x + 2, 2) === 4);