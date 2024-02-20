function premier(num)
{
    if(((typeof(num)) !== 'number') || (num < 0) || ((num % 1) != 0))
    {
        return "Seuls les nombres entiers naturels positifs peuvent être premiers.";
    }

    else if(num === 0 || num === 1)
    {
        return "Le nombre n'est pas premier.";
    }

    else if (num > 10000)
    {
        return "Le nombre est trop grand. Le programme risque de crasher.";
    }

    else
    {
        for(var i = 1; i < num; i++)
        {
            if( (i != 1) && ((num % i) === 0))
            {
                return "Le nombre n'est pas premier.";
            }
            else
            {
                continue;
            }
        }

        return "Le nombre est premier.";
    }
}

/*Vous pouvez tester le code en entrant les commandes suivantes: 
console.log(premier(0)); 
Vous devriez voir Le nombre n'est pas premier.
console.log(premier(1));
Vous devriez voir Le nombre n'est pas premier.
console.log(premier(-8.6655));
Vous devriez voir Le nombre n'est pas premier.
console.log(premier(200));
Vous devriez voir Le nombre n'est pas premier.
console.log(premier(7907));
Vous devriez voir Le nombre est premier.
*/
