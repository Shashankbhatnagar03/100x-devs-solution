import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
   try{
    const insertQuery = "INSERT INTO users (username , name , password) VALUES ($1 , $2,$3) RETURNING *";
    const values = [username ,name , password];
    const res = await client.query(insertQuery , values);
    // console.log('Insertion success:' ,res);
    return res.rows[0];
   }
   catch(err){
    console.error('Error during the insertion:', err);
   }
   
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        
        const query = "SELECT * FROM users WHERE id = $1"
        const values = [userId];
        const res = await client.query(query,values);
        // console.log(res);
        return res.rows[0];
}
catch(err)
{
    console.log(err);
    return;
}
}
