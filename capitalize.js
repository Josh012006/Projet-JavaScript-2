function capitalize (text)
{
    var temp = '';

    if(typeof(text) != 'string')
    {
        return "L'argument n'est pas valide.";
    }

    else
    {
        temp+= text[0].toUpperCase();
        for(let i = 1; i < text.length; i++)
        {
            if(text[i] == ' ')
            {
                temp+= text[i];
                temp+= (text[i+1]).toUpperCase();
                i+=1;
            }

            else
            {
                temp+= text[i];
            }
        }
    }

    return temp;
}

/*
Vous pouvez tester le code en entrant la commande suivante:
console.log(capitalize("josué saint martin junior"));
Vous devriez voir Josué Saint Martin Junior
*/
