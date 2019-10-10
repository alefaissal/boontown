function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: `INSERT INTO users(fullname, email, password)
               VALUES ($1, $2, $3)`,
        values: [fullname, email, password],
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: `SELECT (fullname, password) 
              FROM users 
              WHERE users.email = $1`,
        values: [email],
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    //done
    async getUserById(id) {
      const findUserQuery = {
        text: `SELECT * FROM users u 
                WHERE u.id = $1`, 
        values: [id],
      };
      try{
        const user = await postgres.query(findUserQuery);
          if (!user) throw "User was not found.";
          return user.rows[0];
      }catch (e) {
        throw "User was not found.";
      }
    },
    //done
    async getItems(idToOmit) {
      
      const itemsBYOmitedUser = {
        text: `SELECT * FROM items
        WHERE items.itemowner IS NOT NULL 
        AND items.itemowner != $1`,
        values: idToOmit ? [idToOmit] : [],
      };

      try{
        const items = await postgres.query(itemsBYOmitedUser);
        return items.rows;
      }catch (e){
        
        throw "Items not found";
      }
    },
    //done
    async getItemsForUser(id) {
      const itemsPerUser = {
        text: `SELECT * FROM items
        WHERE items.itemowner = $1;`,
        values: [id],
      };
      try{
        const items = await postgres.query(itemsPerUser);
        return items.rows;
      } catch (e){
        throw "Items not found";
      }
      
    },
    //done
    async getBorrowedItemsForUser(id) {
      const ItemsBorrowedByUser = {
        text: `SELECT * FROM users
        INNER JOIN items
        ON items.borrower = users.id
        WHERE users.id = $1`,
        values: [id],
      };
      try{
        const items = await postgres.query(ItemsBorrowedByUser);
        return items.rows[0];
      } catch (e){
        throw "Items not found";
      }
      
    },
    //done
    async getTags() {
      const Alltags = `SELECT * FROM tags`;

      try{
        const tags = await postgres.query(Alltags);
       return tags.rows; 
      } catch (e){
        throw "Tags not found";
      }
    },
    //done
    async getUsers() {
      const AllUsers = `SELECT * FROM users`;
      try{
        const users = await postgres.query(AllUsers);
        return users.rows;
      }catch(e){
        throw "No users found";
      }
      
    },
    //done
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * FROM tags
        JOIN itemtags
        ON itemtags.tagid = tags.id
        JOIN items
        ON itemtags.itemid = items.id
        WHERE items.id = $1
         `, 
        values: [id],
      };
      try{
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      }catch(e){
        throw "No tags for this item";
      }
      
    },
    //done
    async getUserForItem(id) {
      const usersQuery = {
        text: `SELECT * FROM users
        INNER JOIN items
        ON items.itemowner = users.id
        WHERE users.id = $1
         `, 
        values: [id],
      };
      try{
        const users = await postgres.query(usersQuery);
        // console.log(users.rows);
        return users.rows[0];
      }catch(e){
        throw "No tags for this item";
      }
      
    },
    async saveNewItem({ item, user }) {

      /**
       *  @TODO: Adding a New Item
       *
       *  Adding a new Item requires 2 separate INSERT statements.
       *
       *  All of the INSERT statements must:
       *  1) Proceed in a specific order.
       *  2) Succeed for the new Item to be considered added
       *  3) If any of the INSERT queries fail, any successful INSERT
       *     queries should be 'rolled back' to avoid 'orphan' data in the database.
       *
       *  To achieve #3 we'll use something called a Postgres Transaction!
       *  The code for the transaction has been provided for you, along with
       *  helpful comments to help you get started.
       *
       *  Read the method and the comments carefully before you begin.
       */

      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         * - Read about transactions here: https://node-postgres.com/features/transactions
         */
        postgres.connect((err, client, done) => {
          
          try {
            // Begin postgres transaction
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;

              // Generate new Item query
              // @TODO
              // -------------------------------
              const itemQuery = {
                text:`INSERT INTO items(title, description, itemowner) 
                      VALUES ($1, $2, $3) RETURNING id`,
                values:[title, description, user]
              };


              // Insert new Item
              // @TODO
              // -------------------------------
 
              const newItem = await postgres.query(itemQuery);
              const itemid = newItem.rows[0].id;
              console.log(itemid);
              
              // return newItem;
              
              // Generate tag relationships query (use the'tagsQueryString' helper function provided)
              // @TODO
              // -------------------------------
              
              const tagsForNewItem = tagsQueryString(item.tags, itemid, '');
                console.log(tagsForNewItem);
                // console.log(item.tags);
                // console.log(item.id);


              // Insert tags
              // @TODO
              // -------------------------------


              // const itemTagsQuery = {
              //   text:`INSERT INTO itemtags(itemid, tagid) VALUES ($1, $2);`,
              //   values:[item.id, item.tags.id]
              // };
 
              // const newItemTags = await postgres.query(itemTagsQuery);










              // Commit the entire transaction!
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                // Uncomment this resolve statement when you're ready!
                resolve(newItem.rows[0])
                // -------------------------------
              });
            });
          } catch (e) {
            // Something went wrong
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    },
  };
};
