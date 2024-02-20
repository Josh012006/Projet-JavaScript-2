function reverse (text)
{
    var temp = '';
    var n = text.length;

    if(typeof(text) != 'string')
    {
        return "L'argument n'est pas valide.";
    }

    else
    {
        for(let i = (n-1); i >= 0; i--)
        {
            temp += text[i];
        }

        
    }

    return temp;
}

/*
Vous pouvez tester le code en entrant la commande suivante:
console.log(reverse("arrive"));
Vous devriez obtenir evirra.
*/

