function count (text)
{
    var count = 0;

    if(typeof(text) != 'string')
    {
        return "L'argument n'est pas valide.";
    }
    else
    {
        for(let i = 0; ; i++)
        {
            if(typeof(text[i]) === 'undefined')
            {
                break;
            }

            else
            {
                count++;
            }

        }
    }

    return count;
    

}

/*
Vous pouvez tester le code en entrant la commande suivante:
console.log(count("Bonjour"));
Vous devriez voir 7;
*/

