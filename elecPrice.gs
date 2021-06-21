function elecPrice(isSummer, input) {
  var factors = (isSummer) ? [1.63, 2.38, 3.52, 4.8, 5.66, 6.41] : [1.63, 2.1, 2.89, 3.94, 4.6, 5.03];

  // degrees between ranges[i-1] and range[i] will use factors[i] for price calculation
  var ranges = [120, 330, 500, 700, 1000];

  var price = 0;
  var rest = input;

  for (i = 0; i < ranges.length, rest >= 0; i++) {
    var range = ranges[i] * 2 - ((i == 0) ? 0 : ranges[i - 1] * 2); // calculate bi-monthly
    var factor = factors[i];
    var degree = (rest <= range) ? rest : range;

    price += degree * factor;
    console.log("range=" + range + ",factor=" + factors[i] + ",rest=" + rest + ",price=" + price);

    rest -= range;
  }

  price += (rest >= 0) ? rest * factors[i] : 0;
  console.log("rest=" + rest + ",factor=" + factors[i] + ",price=" + price);
  return price;
}
