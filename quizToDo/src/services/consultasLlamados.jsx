async function getconsults() {
    try {
        const response = await fetch('http://localhost:3000/consults', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching consults');
        }

        const consults = await response.json();
        return consults;
    } catch (error) {
        console.error('Error fetching consults:', error);
        throw error;
    }
}



//////////LLAMADO POST//////////

async function postconsults(nombre,consulta) {
    try {
     
        const userData = { 
            nombre,
            consulta
        
        };



        const response = await fetch("http://localhost:3000/consults", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updateconsults(nombre,consulta,id) 
{
    try {
     
        const userData = { 
            nombre, 
            consulta        
        };


        


        const response = await fetch("http://localhost:3000/consults/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}




//////////////LLAMADO DELETE/////////////


async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/consults/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default { deleteUser,getconsults,postconsults,updateconsults };