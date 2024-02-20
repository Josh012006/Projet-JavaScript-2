function sum (arr)
{
    var sum = 0;

    var count = 0;

    if (!(Array.isArray(arr)) || typeof(arr) === 'string')
    {
        return "Ce qui a été entré n'est pas un tableau.";
    }

    else
    {
        for (let j = 0; j < arr.length; j++)
        {
            if((typeof(arr[j])) !== 'number')
            {
                count++;
            }
        }


        if(count != 0)
        {
            return "Le tableau entré contient des éléments autres que des nombres.";
        }

        else
        {
            for (let i = 0; i < arr.length; i++)
            {
                sum+= arr[i];
            }

            return sum;
        }
        
    }
}

/*
Vous pouvez tester le code en entrant la commande suivante:
console.log(sum([-5, 8, 9, 656, 6958, 63, 112]));
Vous devriez voir 7801
*/

