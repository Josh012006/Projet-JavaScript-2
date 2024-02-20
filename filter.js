//Entrez en condition une chaine de caractère par exemple(" < 10 ")

function filter (arr, condition)
{
    var temp = [];

    if((typeof(condition)) !== 'string')
    {
        return "Mauvaise condition";
    }

    else if (!(Array.isArray(arr)) || typeof(arr) === 'string')
    {
        return "Ce qui a été entré n'est pas un tableau.";
    }

    else
    {
        for(var i = 0; i < arr.length; i++)
        {
            let remp = '';
            let eva = '';

            var ans = true;

            if(typeof(arr[i]) === 'string')
            {
                remp = `\"${arr[i]}\"`;   
            }

            else
            {
                remp = String(arr[i]);
            }

            eva = `${remp}`+ condition;

            try{
                ans = eval(eva);

                if (ans)
                {
                    temp.push(arr[i]);
                }

                else
                {
                    continue;
                }
                
            }

            catch{
               return "Mauvaise condition. Ce qui est entrer ne peut permettre d'évaluer un booléen."; 
            }
            
        }


        return temp;
    }
}


/*
Vous pouvez tester le code en entrant la commande suivante:
console.log(filter([12, 54, 7, 'df', 66, 2, 8, 9, 7], " > 10"));
Vous devriez voir [ 12, 54, 66 ]
*/
