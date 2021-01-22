//killometer to meter

function killometerToMeter(killometer) {

    if (killometer < 0) {
        return "Invalid Input";
    }
    else {
        var meter = killometer * 1000;
        return meter;
    }
}


//budget calculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Invalid Input";
    }
    else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}


//hotel cost

function hotelCost(days) {
    if (days < 0) {
        return "Invalid Input";
    }
    else if (days <= 10) {
        var totalCost = days * 100;
        return totalCost;
    }
    else if (days <= 20) {
        var remaindays = days - 10;
        var firstCost = 10 * 100;
        var secondCost = remaindays * 80;
        var totalCost = firstCost + secondCost;
        return totalCost;
    }
    else {
        var remaindays = days - 20;
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var thirdCost = remaindays * 50;
        totalCost = firstCost + secondCost + thirdCost;
        return totalCost;
    }
}

//mega friend

function megaFriend(arr) {
    var lgth = 0;
    var longest;
    if (arr == "") {
        return "Invalid Input";
    }

    else
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length > lgth) {
                var lgth = arr[i].length;
                longest = arr[i];
            }
        }
    return longest;
}
