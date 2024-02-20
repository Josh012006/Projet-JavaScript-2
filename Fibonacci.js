function fibonacci(num)
{
    var temp = [0, 1];

    if (((typeof(num)) !== 'number') || (num < 2) || ((num % 1) != 0))
    {
        return "Le nombre doit être un entier supérieur ou égal à 2.";
    }
    else
    {
        if(num === 2)
        {
            return temp;
        }
        else
        {
            for(var i = 2; i < num ; i++)
            {
                temp.push(temp[i-1] + temp[i-2]);
            }

            return temp;
        }

    }

    
}

/*Vous pouvez vérifier le code en entrant la commande suivante
console.log(fibonacci(8));
Vous devriez voir 
[
  0, 1, 1,  2,
  3, 5, 8, 13
]*/



