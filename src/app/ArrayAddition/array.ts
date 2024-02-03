import { ROUTER_CONFIGURATION } from "@angular/router";

let myNums = [1, 2, 3, 4, 5];

let sum = 0;
export function ArrayAddition()
{
    for (let i = 0; i < myNums.length; i++ ) {
        sum += myNums[i];
}
return sum;
}
