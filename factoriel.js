function factoriel (num)
{
    if(((typeof(num)) !== 'number') || (num < 0) || ((num % 1) != 0))
    {
        return "Le nombre entré n'est pas un entier positif. On ne peut pas calculer son factoriel!";
    }

    else
    {
        if(num === 0)
        {
            return 1;
        }

        else if (num === 1)
        {
            return 1;
        }

        else
        {
            return num * factoriel(--num);
        }
    }
}

/*
Vous pouvez tester le code en entrant la commande suivante:
console.log(factoriel(8));
Vous devriez voir 40320
*/